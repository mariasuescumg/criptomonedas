import "../styles/Card.css";// se importan los estilos de Card.css
import Graph from "./Graph";// se importa el componente Graph
import {colorDec} from './App'; // se importa la funcion colorDec del componente App

// se crea y se exporta la funcion card con las siguientes propiedades para renderizarlas en la tarjeta  con su img, id, cur, porcentaje y curva de la grafica por criptomoneda 
export default function Card({coinId, cur, porcentaje, price, img}){
    return (
        <div className="card">
            <img src={img} alt=""/>
            <div className="con-main">
                <div className="con-title">
                {/** se aplica la funcion colorDec en el porcentaje de la cripto para identificar si el % que se trae se refleja de forma positivo o negativo */}
                    <h2 className={`price ${colorDec(porcentaje)}`}>{price}</h2>
                    <h4 className={`porcentajes ${colorDec(porcentaje)}`}>{porcentaje}%</h4>
                    {/** se aplica el componente graph para traer la grafica con la curva correspondien a la criptomoneda en corelacion con la divisa*/}
                </div>
                <Graph coin={coinId} currency={cur} color={colorDec(porcentaje)}/>
            </div>
        </div>
    )
}