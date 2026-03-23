import "./App.css";
import "./SocialButton";
import SocialButton from "./SocialButton";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[url(/bg.jpg)]  bg-auto bg-center">
        <div className="mx-auto flex flex-col items-center align-top md:m-auto">
          <div className="flex flex-col items-center justify-center my-2">
            <img
              className="rounded-full shadow-2xl size-40 md:size-60"
              src="/ruya.jpg"
              alt="Rüya Serin"
            />
            <h2 className="text-4xl tracking-tight text-heading text-white text-center  font-[Barriecito]">
              Rüya Serin
            </h2>
            <p className="text-md text-center text-white font-[Schoolbell] ">
              Dijital İçerik Üretici & Bağımsız Sanatçı
            </p>
          </div>

          <div className="font-[Barriecito] flex flex-col gap-2 ">
            <SocialButton
              url="https://www.youtube.com/@ruyaseriin"
              title="YouTube"
            />
            <SocialButton
              url="https://www.instagram.com/ruyaseriin/"
              title="Instagram"
            />
            <SocialButton
              url="https://www.tiktok.com/@ruyaseriin"
              title="TikTok"
            />
            <SocialButton
              url="https://www.x.com/ruyaseriin"
              title="Twitter(X)"
            />
            <a
              href="https://link.dolap.com/lvqqpv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer bg-[#97770D] hover:bg-gray-400 text-[#FFF5D4] text-2xl md:text-3xl py-2 px-4 w-85 rounded-2xl shadow-xl">
                <span className="grow">Dolap Mağazam</span>
              </button>
            </a>
            <a
              href="https://www.shopier.com/serinsanat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer bg-[#97770D] hover:bg-gray-400 text-[#FFF5D4] text-2xl md:text-3xl py-2 px-4 w-85 rounded-2xl shadow-xl">
                <span className="grow">Shopier Mağazam</span>
              </button>
            </a>
          </div>
          <p className="text-xl text-center text-white font-[Schoolbell] pt-2">
            İletişim: ruyaserin.art@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
