import React, { useState } from 'react'

function ItemCount() {

  const [counter, setCounter] = useState(0)

  const sumar= () =>{
    setCounter(counter + 1)
  }

  const restar = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  const resetear = () =>{
    setCounter(0)
  }

  return (
    <>
      <h4>Contador: {counter}</h4>
      <div>
        <button onClick={sumar}>➕</button>
        <button onClick={restar}>➖</button>
        <button onClick={resetear}>⏪</button>
      </div>
    </>
  )
}

export default ItemCount