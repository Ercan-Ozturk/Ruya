
import './App.css'
import { SocialIcon } from 'react-social-icons'

function App() {


  return (
    <>
    
        <div className='flex flex-col min-h-screen bg-[url(/bg.jpg)]  bg-auto bg-center'>
          <div className="m-auto flex flex-col items-center">
            <div className='flex flex-col items-center justify-center m-4'>
              <img
                className="rounded-full shadow-2xl size-40 lg:size-60"
                src="/ruya.jpg"
                alt="Rüya Serin"
              />
            <h2 className='text-4xl tracking-tight text-heading text-white text-center  font-[Barriecito]'>Rüya Serin</h2>
            <p className="text-md text-center text-white font-[Schoolbell] ">Dijital İçerik Üretici & Bağımsız Sanatçı</p>
            </div>

            <div className='font-[Barriecito] flex flex-col gap-2 ' >
              <a href='https://www.youtube.com/@ruyaseriin' target='_blank' rel='noopener noreferrer'>
                <button className="cursor-pointer flex flex-row-2 items-center bg-[#FFF5D4] hover:bg-gray-400 text-[#4F4747] text-3xl md:text-4xl py-2 px-4 w-85 rounded-2xl shadow-xl ">
                  <SocialIcon url="https://www.youtube.com/@ruyaseriin" className='grow-0'/>     
                  <span className='grow'>YouTube</span>
                  <SocialIcon url="https://www.youtube.com/@ruyaseriin" className='grow-0 opacity-0'/>
                </button>
              </a>
              <a href='https://www.instagram.com/ruyaseriin/' target='_blank' rel='noopener noreferrer' >
                <button className="cursor-pointer flex flex-row-2 items-center bg-[#FFF5D4] hover:bg-gray-400 text-[#4F4747] text-3xl md:text-4xl py-2 px-4 w-85  rounded-2xl shadow-xl ">
                  <SocialIcon url="https://www.instagram.com/ruyaseriin/" className='grow-0 '/>
                  <span className='grow'> 
                    Instagram
                  </span>
                  <SocialIcon url="https://www.instagram.com/ruyaseriin/" className='grow-0  opacity-0'/>
                </button>
              </a>
              <a href='https://www.tiktok.com/@ruyaseriin'  target='_blank' rel='noopener noreferrer'>
                <button className="cursor-pointer flex flex-row-2 items-center bg-[#FFF5D4] hover:bg-gray-400 text-[#4F4747] text-3xl md:text-4xl py-2 px-4 w-85 rounded-2xl shadow-xl">
                  
                  <SocialIcon url="https://www.tiktok.com/@ruyaseriin" className='grow-0'/>
                  <span className='grow'>TikTok</span>
                  <SocialIcon url="https://www.tiktok.com/@ruyaseriin" className='grow-0  opacity-0'/>

                </button>
              </a>
              <a href='https://www.x.com/ruyaseriin' target='_blank' rel='noopener noreferrer'>
                <button className="cursor-pointer flex flex-row-2 items-center bg-[#FFF5D4] hover:bg-gray-400 text-[#4F4747] text-3xl md:text-4xl py-2 px-4 w-85 rounded-2xl shadow-xl">
                  <SocialIcon url="https://www.x.com/ruyaseriin" className='grow-0' />
                  <span className='grow'>Twitter(X)</span>
                  <SocialIcon url="https://www.x.com/ruyaseriin" className="opacity-0" />
                </button>
              </a>
              <a href='https://link.dolap.com/lvqqpv' target='_blank' rel='noopener noreferrer'>
                <button className="cursor-pointer bg-[#97770D] hover:bg-gray-400 text-[#FFF5D4] text-2xl md:text-3xl py-2 px-4 w-85 rounded-2xl shadow-xl">
                  <span className='grow'>Dolap Mağazam</span>
                </button>
              </a>
              <a href='https://www.shopier.com/serinsanat' target='_blank' rel='noopener noreferrer'>
                <button className="cursor-pointer bg-[#97770D] hover:bg-gray-400 text-[#FFF5D4] text-2xl md:text-3xl py-2 px-4 w-85 rounded-2xl shadow-xl">
                  <span className='grow'>Shopier Mağazam</span>
                </button>
              </a>
              
              
              
            </div>
            <p className="text-xl text-center text-white font-[Schoolbell] pt-2">İletişim: ruyaserin.art@gmail.com</p>
          </div>

        </div>

    </>
  )
}

export default App
