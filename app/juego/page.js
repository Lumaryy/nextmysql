"use client"
import React from 'react'


function async listaJuego(){
  const result = await fetch('http://localhost:3000/juego');
  const data = await result.json()
  console.log(data)
}

function page = () => {


  return (
    <div>
      <h1>
      pagina de listar productos
      </h1>
      <button onClick={listaJuegos}>Listar</button>
    </div>
  )
}
export default page

