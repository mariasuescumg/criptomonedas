import { useEffect, useState } from "react";// se importan los Hook  useEffect y useState para ser utilizados en el componente 
import InputConvert from "./InputConvert"; // se importa el componente InputConvert
import { FaExchangeAlt } from "react-icons/fa"; // Se importa el Icono de divisa de la libreria Font Awesome
import "../styles/Convert.css"; // Se importan los estilos de este componente.

{/** se declara y se exporta la funcion Convert */}
export default function Convert() {
  const [coin, setCoin] = useState([])// se declara el state coin se crea automaticamente el set para cambiar el valor al state en este caso se le pone como valor un array vacio
  const [selCoin1, setSelCoin1] = useState("btc")// se declara el state selcoin1 con valor inicial btc la cual va a ser la critomoneda con la que se inicializa la pagina de manera automatica
  const [selCoin2, setSelCoin2] = useState("eth")// se declara el state selcoin2 con valor inicial "eth" como valor de comparacion del segundo state criptomoneda
  const [mainTxt, setMainTxt] = useState(0)// se declara el state mainTxt con valor inicial 0
  const [res, setRes] = useState(0)// se declara el state res con valor inicial 0

  // Función asíncrona para obtener los datos de la API
  const getData = async () => {
    // Hacer petición a la API
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1") 
    const json = await res.json()// res.json trae la data de la API consultada 
    setCoin(json);// se cambia el valor del  state coin al traido por la api

  };
  {/** se define los hook useEffect sin parametros para que solo suceda una vez  */}
  
  useEffect(() => {
    // se ejecuta la funcion getData declarada anteriormente que trae los datos de la API
    getData()
  }, []);
 // se utiliza el useEffect, donde se reconocen donde cambian los state mainTxt,selCoin1,selCoin2 este bloque se ejecuta cuando dichos state cambien
  useEffect(_ => {
    let a,b
    coin.forEach(({symbol, current_price}) =>{
      if(symbol == selCoin1){
        a = (mainTxt * current_price) / 1
      }else if(symbol == selCoin2){
        b = current_price
      }
    })
     a ? setRes(a / b) : setRes(0)
  },[mainTxt,selCoin1,selCoin2])

  // retorna el template html donde se definen las propiedades con su respectivo valor para la seleccion de la criptomoneda que se quiera comparar.
  return (
    <div className="contenedor">
      <h2>Comparación de Monedas</h2>

      <div className="input-convert">
        <InputConvert coin={coin} fun={setSelCoin1} other={selCoin2} text={setMainTxt} type={0} />

        <FaExchangeAlt className="icono" />

        <InputConvert coin={coin} sel="eth" fun={setSelCoin2} other={selCoin1} result={res}/>
      </div>
    </div>
  );
}