import AssetHeader from "@/app/images/asset-header.png";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-full bg-sky-500/[.08] p-5 h-80 flex flex-col items-center justify-center">
      <div className="w-50 bg-transparent border-solid border-2 p-0.5 border-blue-500 rounded-full rounded-bl-none text-blue-500 mb-3 uppercase text-xs whitespace-nowrap px-3">
        Webinars exclusivos
      </div>
      <span className="text-gray-800 text-4xl">Menos conversinha,</span>
      <div className="flex border-b border-solid border-b-gray-300/[.55] flex align-center justify-center">
        <span className="text-blue-500 text-7xl font-semibold mb-1.5">
          Mais conversão
        </span>
        <div className="-ml-7 -mt-1">
          <Image src={AssetHeader} alt="asset" />
        </div>
      </div>
      <p className="p-1 mt-1">
        Conheça as estratégias que{" "}
        <span className="text-blue-950/120">mudaram o jogo</span> e como
        aplicá-las ao seu negócio.
      </p>
    </div>
  );
};
