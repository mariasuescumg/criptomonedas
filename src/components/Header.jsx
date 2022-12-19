import React from 'react'; // se importa el componente global REACT
import '../styles/Header.css'; // se importan los estilos

// se declara el componente de funcion header el cual recibe como propiedades las divisas, un callback y la divisa seleccionada por default
export default function Header({currencys, fun, cur}){
  
  return (
    <header className='app-header'>
      <p>Crypto Stadistics</p>
      <div className='select-button'>
        {/* se muestra un select de html que al cambiar ejecutara la funcion de callback que se la pasa com propiedad  */}
      <select value={cur} name="coinSelect" id="coinSelect" onChange={_ => {fun(document.getElementById("coinSelect").value)}}>
        {/* se recorre el array de divisas para desplegar las diferentes opciones del select */}
        {currencys.map((item, index) => <option value={item} key={index} >{item}</option>)}  
      </select>
      </div>
    </header>
  )
}