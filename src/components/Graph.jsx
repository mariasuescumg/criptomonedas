import "../styles/Graph.css"// se importan los estilos del componente
import {useEffect, useState, useRef} from 'react'// se importan los hook de react useEffect, useState, useRef
import { Line } from "react-chartjs-2";//  se importa el componente line de la libreria react-chartjs-2 instala 

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import moment from "moment/moment";// se importan los componentes necesarios de chartjs

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)
//se exporta y se declara el componente tipo funcion Graph el cual se utilizara para mostrar grafica con la ayuda de la libreria chartjs la cual recibe los parametros a mostrar en la grafica.
export default function Graph({type = 1, coin = "bitcoin", currency = "usd", days = 30,color = "rgb(232, 123, 232)"}){
    const chartStyle = {
        border: {
            display: false
        },
        grid:{
            display: false,  
        },
        ticks: {
            display: false
        }
    }
    // se declara la variable url con el link de la api concatenando 3 variables en el string
    let url = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`
    let data , options
    const [prices, setPrices] = useState()// se declara el state prices  con un valor vacio para luego asignarle un valor 
    const [dates, setDates] = useState()// se declara el state dates
    const [gradient, setGradient] = useState()// se declara el state gradient
    async function getData(){// se declara la funcion asincrona getData
        try{
            const response = await fetch(url) // se hae el request basado en la url declarada anteriormente 
            const json = await response.json() // se obtiene la data del request
            setPrices(json.prices.map(item => Math.round(item[1]))) // se ejecuta la funcion setPrices pasando como argumentos valores enteros del atributo prices filtrandolos con .map
            setDates(json.prices.map(item => moment.unix(item[0]).format("MM-DD"))) // se ejecuta la funcion setDates pasando como argumento  las fechas de los precios con el formado MM-DD
        }catch(e){
            console.log("error:",e) // en caso de error se mostrara en consola
        }
    }
    const chartRef = useRef(null); //  se usa el hook useRef para identificar el elemento chart
    
    useEffect(_ => { // se utiliza el useEfec sin states para que solo suceda una vez
        getData() // se ejecuta la funcion getData declarada y explicada anteriormente
        const canvas = chartRef.current.firstChild // se identifica el canva con el hok ref
        let BGgradient = canvas.getContext("2d").createLinearGradient(0, 0, 0, canvas.height);
        BGgradient.addColorStop(0, 'rgb(232, 123, 232,1)');   
        BGgradient.addColorStop(1, 'rgb(232, 123, 232,0)')
        setGradient(BGgradient)
    },[])
    
    
     //  dependiendo del numero recibido en la prop ytpe se define con diferentes configuaciones el chart
    switch(type){
        case 0:

            options = {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: false,
                  }
                },
                scales: {
                    x:{
                        grid:{
                            display: false
                        }
                    },
                    y:{
                        grid:{
                            display: false
                        },
                        ticks: {
                            callback: function(value, index, ticks) {
                                return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ${currency.toUpperCase()}`;
                            }
                        }
                    }
                }
              }
            data = {
                labels: dates,
                datasets: [
                  {
                    data: prices,
                    borderColor: color,
                    backgroundColor: gradient,
                    tension: .4,
                    pointRadius: 0,
                    fill: true
                  }
                ]
              }
              break
        case 1:
            options = {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: false,
                  }
                },
                scales: {
                    x: chartStyle,
                    y: chartStyle
                }
              }
            data = {
                labels: dates,
                datasets: [
                  {
                    data: prices,
                    borderColor: color,
                    tension: .4,
                    pointRadius: 0,
                  }
                ]
              }
            break
    }

    // se retorna el html con el chart tipo Line ocn sus diferentes datos y opciones
    return (
        <div ref={chartRef} className="graph">
            <Line data={data} options={options}/>
        </div> 
    )
}