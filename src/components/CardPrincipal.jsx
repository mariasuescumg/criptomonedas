import { FaPlay } from "react-icons/fa";// Se importa el icono play de la libreria Font Awesome.
import '../styles/CardPrincipal.css'// Se importa los estilos del archivo CardPrincipal.css
import { deleteDec, colorDec } from './App' // Se importan las funciones deleteDec y colorDec declaradas en el archivo del componente App.
import Graph from "./Graph";// se impota el componente Graph para hacer graficas.

// se declata el componente Card Principal que es la tarjeta que se ve despues de header este recibe diferentes parametros los cuales viene del objeto de la respuesta del request de la API
function CardPrincipal({ json: { id,
    symbol,
    current_price,
    image,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    price_change_percentage_30d_in_currency,
    price_change_percentage_1y_in_currency
}, cur = "usd" }) {

   // Retornamos un html con con la estructura de la CardPrincipal
    return (
        <>  
        {/* En este div se muestra la imagen de la criptomoneda, el simbolo, el valor y el porcentajes */ }
            <article className="cripto-first">
                <div className="cripto-title">
                    <img src={image} alt="Icono de cripto" />
                    <h2>{symbol} - {current_price} {cur}</h2>
                    <h2><FaPlay className={`icon-arrow ${colorDec(price_change_percentage_30d_in_currency)}`}/>{deleteDec(price_change_percentage_30d_in_currency,2)}%</h2>
                </div>
                 {/* se trajo el componente Graph para renderizar la grafica en donde se le pasa propiedad coin con id de la moneda y la compara con el valor de la divisa en currency con cur */ }
                <div className="graphic">
                    <Graph type={0} coin={id} currency={cur}/>
                </div>
                 {/*muestra el porcentaje de capitalizacion en diferentes rangos de tiempo, esta informacion se trae de API de criptomonedas*/ }
                <div className="capitalization">
                    <h2>Capitalización</h2>
                    <table className="capitalization-table">
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>1m</th>
                                <th>1y</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* con la funcion colorDec importada desde el archivo App recibe como paramentro el porcentaje de la moneda y retorna una clase que muestra cuando el resultado es positivo  color verde y cuando es negativo en color rojo*/ }
                                 <td className={colorDec(price_change_percentage_1h_in_currency)}>{deleteDec(price_change_percentage_1h_in_currency, 2)}%</td>
                                <td className={colorDec(price_change_percentage_24h_in_currency)}>{deleteDec(price_change_percentage_24h_in_currency, 2)}%</td>
                                <td className={colorDec(price_change_percentage_7d_in_currency)}>{deleteDec(price_change_percentage_7d_in_currency, 2)}%</td>
                                <td className={colorDec(price_change_percentage_30d_in_currency)}>{deleteDec(price_change_percentage_30d_in_currency, 2)}%</td>
                                <td className={colorDec(price_change_percentage_1y_in_currency)}>{deleteDec(price_change_percentage_1y_in_currency, 2)}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </>
    );
}

export default CardPrincipal;
{/*se le coloca al finalizar cada componente export default y el nombre del componente para de esta forma poder importala en otros componentes */ }