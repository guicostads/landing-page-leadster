import Image from "next/image";
import Logo from "@/app/images/logo.png";



const Footer = () => {
  return (
    <footer className="flex flex-col justify-center pt-4 w-full">
      <Image src={Logo} alt="logo" />
      <p className="text-gray-500 text-sm">
        Transformando visitantes em clientes.
      </p>
      <div className="grid grid-cols-4 max-md:grid-cols-1 max-md:px-5 place-items-center max-md:place-items-stretch py-3 px-20 mt-2">
        <div className="text-left">
          <h2 className="mb-7 text-gray-700 font-medium">Links Principais</h2>
          <ul className="text-gray-400 flex flex-col gap-2">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Ferramenta</li>
            <li className="cursor-pointer">Preços</li>
            <li className="cursor-pointer">Contato</li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="mb-7 text-gray-700 font-medium">Cases</h2>
          <ul className="text-gray-400 flex flex-col gap-2">
            <li className="cursor-pointer">Geração de leads B2B</li>
            <li className="cursor-pointer">Geração de leads</li>
            <li className="cursor-pointer">Geração de leads</li>
            <li className="cursor-pointer">Cases de sucesso</li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="mb-7 text-gray-700 font-medium">Materiais</h2>
          <ul className="text-gray-400 flex flex-col gap-2">
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Parceria com agências</li>
            <li className="cursor-pointer">Guia definitivo do marketing</li>
            <li className="cursor-pointer">Materiais gratuitos</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-7 text-gray-700 font-medium">Siga a leadster</h2>
         <div className="flex gap-3">
          
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
