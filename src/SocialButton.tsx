import { SocialIcon } from "react-social-icons";

export default function SocialButton({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="cursor-pointer flex flex-row-2 items-center bg-[#FFF5D4] hover:bg-gray-400 text-[#4F4747] text-3xl md:text-4xl py-2 px-4 w-85 rounded-2xl shadow-xl">
          <SocialIcon url={url} className="grow-0" />
          <span className="grow">{title}</span>
          <SocialIcon url={url} className="grow-0  opacity-0" />
        </button>
      </a>
    </>
  );
}
