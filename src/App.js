import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <div className='card-group'>
            <Card title="Muhammet" document="Hello my name is Muhammet..." cardDate={new Date()}/>
            <Card title="Ahmet" document="Hello my name is Ahmet..." cardDate={new Date()}/>
            <Card title="Seher" document="Hello my name is Seher..." cardDate={new Date()}/>
      </div>
    </div>
  )
}

export default App
