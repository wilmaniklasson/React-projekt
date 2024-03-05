import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <h1> Hello world </h1>
      <p className='exciting'> Min första riktiga React-app. </p>
      <p className='Ptagg'> Det kommer snabbt bli mer intressant. </p>
    </main>
    <section>
      <div className='card'>
        <div className='img'></div>
        <h2 className='ProductName'>Rasberry</h2>
      </div>
    </section>

    </>
  )
}

export default App
