import React from 'react'
import './Corpo.css'
import Story from './Story'

function Corpo() {

  return (
    <div className='container-corpo'>


      <div className='corpo-esquerda'>
        {/**espaço vago */}
      </div>


      <div className='corpo-meio'>
        <Story />
      </div>


      <div className='corpo-direita'>
        {/**espaço vago */}
      </div>
      
    </div>
  )
}

export default Corpo