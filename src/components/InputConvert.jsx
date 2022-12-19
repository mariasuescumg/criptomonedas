import React, {useState, useRef} from "react"; // Se importa React
import "../styles/Convert.css"; // se importan los estilos
import {deleteDec} from './App' // se importa la funcion deleteDec desde el archivo App.jsx


// se crea y se exporta el componente InpunConvert el cual se define con algunas propiedades
export default function InputConvert({ coin,  sel = "btc", fun, other,text, type = 1, result = 0}) {
  const selRef = useRef(null) //  se reconoce el elemento select con el hook Ref
  const [selVal, setSelVal] = useState(sel) // se declara el statue selVal con el valor de la prop sel

  return (
    <>
      <div className="input">
        {(type === 0) ? <input type="number" placeholder="0" onChange={e => {text(parseFloat(e.target.value))}}/>
        : <input type="number" placeholder="0" value={deleteDec(result, 4)} readOnly={true}/>}
        
        <div className="select">
          <img src="" alt="" />

          {/*se renderiza el selector  */}
          <select value={selVal} ref={selRef} onChange={() => {
              setSelVal(selRef.current.value)
              fun(selRef.current.value)
            }}>
              {/*se recorre el array coin para renderizar una opcion a escojer por cada moneda  */}
            {coin.map((co) => {
              if(co.symbol === selVal){
                selRef.current.previousSibling.src = co.image
                return <option value={co.symbol} key={co.id}>{co.symbol}</option>
              }else if(co.symbol != other){
                return <option value={co.symbol} key={co.id}>{co.name}</option>
              }
              
            })}
          </select>
        </div>
      </div>
    </>
  );
}