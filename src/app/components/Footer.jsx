import Image from "next/image";
import Logo from "@/app/images/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col text-center pt-4 w-full">
      <Image src={Logo} alt="logo" className="m-auto" />
      <p className="text-gray-500 text-sm">
        Transformando visitantes em clientes.
      </p>
      <div className="grid grid-cols-4 place-items-center  py-3 px-20 mt-2">
        <div className="text-left">
          <h2 className="mb-8 text-gray-700 font-medium">Links Principais</h2>
          <ul className="text-gray-600">
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="mb-8 text-gray-700 font-medium">Cases</h2>
          <ul className="text-gray-600">
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="mb-8 text-gray-700 font-medium">Materiais</h2>
          <ul className="text-gray-600">
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-8 text-gray-700 font-medium">Siga a leadster</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
