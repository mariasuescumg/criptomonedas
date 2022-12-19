import React from "react";// se importa la funcion de react declarandolo como componente
import "../styles/CoinRow.css";// se impota  los estilos del componente CoinRow
import Graph from './Graph';// se importa el componente Graph
import {deleteDec, colorDec, numberF} from './App';//se importan del componente App la siguientes funciones deleteDec, colorDec, numberF

{/** se declara y se exporta la funcion CoinRow con las propiedades coin e index  */}

export default function CoinRow({ coin, index }) {
  console.log(index);
  //se muestra en consola el parametro index que lleva el indice de la casilla por fila
  return (
    <tr>
      {/** retorna el bloque de html donde se muestra la tablecoin  indicandole cada uno los elementos que van dentro de la tabla como imagen, precio, porcentaje24h valor total, capital en el mercado y la curva grafica de los ultimos 7d*/}
      <td>{index}</td>
      <td>
        <div className="coin_image_container">
            <img src={coin.image} title={coin.name} alt={coin.name} />
        </div>
      </td>
      <td>{numberF.format(coin.current_price)}US$</td>
      <td className={colorDec(coin.market_cap_change_percentage_24h)}>{deleteDec(coin.market_cap_change_percentage_24h, 2)}%</td>
      <td>{numberF.format(coin.total_volume)}US$</td>
      <td>{numberF.format(coin.market_cap)}US$</td>
      <td><Graph coin={coin.id} days={7} color={colorDec(coin.market_cap_change_percentage_24h)}/></td>
    </tr>
  );
}