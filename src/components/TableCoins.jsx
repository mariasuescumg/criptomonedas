import React from "react"; // Se importa el componente global React
import "../styles/TableCoins.css"; // Se importan los estilos 
import CoinRow from "./CoinRow"; // Se importa el componente CoinRow el cual a continuacion se utilizara

// Se decalara un componente de funcion el cual renderiza una tabla y recibe como propiedad un array , el cual se recorre para poder renderizar las filas de la tabla
function TableCoins({ coins }) {
  console.log(coins);
  return (
    <table className="table_coins">
      {/*se renderiza el header de la tabla */}
      <thead>
        <tr>
          <td>#</td>
          <td>Moneda</td>
          <td>Precio</td>
          <td>24h</td>
          <td>Vol. total</td>
          <td>Cap. mercado</td>
          <td>Ultimos 7 dias</td>
        </tr>
      </thead>
      <tbody>
        {/* se itera la propiedad coin y con cada una de estas se renderizara el componente CoinRow para generar una fila en la tabla  */}
        {coins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}

// se exporta el componente
export default TableCoins;