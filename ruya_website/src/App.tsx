import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <div className='flex flex-col min-h-screen bg-[url(src/assets/bg.JPG)] bg-auto bg-center '>
          <div className="m-auto">
            <img
              className="h-75 w-75  rounded-full object-center shadow-2xl"
              src="src\assets\ruya.JPG"
              alt="Rüya Serin"
            />
            <h2 className='text-4xl font-bold tracking-tight text-heading text-gray-50 text-center'>Rüya Serin</h2>
            <div className='font-[Barlow] flex flex-col items-center flex-wrap gap-4 items-center my-8' >
              <a href='https://www.youtube.com/@ruyaseriin'>
                <button className="bg-[#FFF5D4] hover:bg-gray-400 text-[#4F4747] text-4xl  py-4 px-8 rounded-2xl items-center shadow-xl w-75">
                  <span>YouTube</span>
                </button>
              </a>
              <a href='https://www.instagram.com/ruyaseriin/'>
                <button className="bg-[#FFF5D4] hover:bg-gray-400 text-[#4F4747] text-4xl  py-4 px-8 rounded-2xl items-center shadow-xl w-75">
                  <span>
                    Instagram
                  </span>
                </button>
              </a>
              <a href='https://www.tiktok.com/@ruyaseriin'>
                <button className="bg-[#FFF5D4] hover:bg-gray-400 text-[#4F4747] text-4xl  py-4 px-8 rounded-2xl items-center shadow-xl w-75">
                  <span>TikTok</span>
                </button>
              </a>
              <a>
                <button className="bg-[#FFF5D4] hover:bg-gray-400 text-[#4F4747] text-4xl  py-4 px-8 rounded-2xl items-center shadow-xl w-75">
                  <span>Twitter</span>
                </button>
              </a>
              <a href=''>
                <button className="bg-[#97770D] hover:bg-gray-400 text-[#FFF5D4] text-3xl  py-4 px-8 rounded-2xl items-center shadow-xl w-75">
                  <span>Dolap</span>
                </button>
              </a>
              <a href=''>
                <button className="bg-[#97770D] hover:bg-gray-400 text-[#FFF5D4] text-3xl py-4 px-8 rounded-2xl items-center shadow-xl w-75">
                  <span>Shopier</span>
                </button>
              </a>
              
              
              
            </div>
          </div>

        </div>

    </>
  )
}

export default App
