export const Header = () => {
  return (
    <div className="w-full bg-sky-500/[.08] p-5 h-80 flex flex-col items-center justify-center">
      <div className="w-50 bg-transparent border-solid border-2 p-0.5 border-blue-500 rounded-full rounded-bl-none text-blue-500 mb-3 uppercase text-xs whitespace-nowrap px-3">
        Webinars exclusivos
      </div>
      <span className="text-gray-800 text-4xl">Menos conversinha,</span>
      <div className="border-b border-solid border-b-gray-300/[.55] text-blue-500 text-7xl font-semibold">
        Mais conversão
      </div>
      <p className="p-1">Conheça as estratégias que <span>mudaram o jogo</span> e como aplicá-las ao seu negócio.</p>
    </div>
  );
};
