import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <div className='flex flex-col h-full w-full items-center  content-center' id="social">
          <h2>Rüya Serin</h2>
          <p>Sosyal Medya</p>
          <div className='flex flex-col items-center flex-wrap gap-4 items-center'>
            <button className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
            <button className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
            <button className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
            <button className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
            <button className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>

    </>
  )
}

export default App
