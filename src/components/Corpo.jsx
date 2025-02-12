import React from 'react'
import './Corpo.css'
import Story from './Story'
import Ladoesq from './Ladoesq'
import Ladodir from './Ladodir'

function Corpo() {

  return (
    <div className='container-corpo'>


      <div className='corpo-esquerda'>
        {/**espaço vago */}
        <Ladoesq /> 
      </div>


      <div className='corpo-meio'>
        <Story />
      </div>


      <div className='corpo-direita'>
        {/**espaço vago */}
        <Ladodir /> 
      </div>
      
    </div>
  )
}

export default Corpo