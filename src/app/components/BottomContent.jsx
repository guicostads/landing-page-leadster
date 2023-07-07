import Image from "next/image";
import comparativo from "@/app/images/comparativo_img_CTA.png";

const BottomContent = () => {
  return (
    <div className="w-full bg-sky-500/[.08]  flex items-center justify-center  py-2 px-8">
      <Image src={comparativo} alt="comparativo" className="max-w-md w-1/2" />
      <div className="flex flex-col">
        <p>Pronto para triplicar a geração de Leads?</p>
      </div>
    </div>
  );
};

export default BottomContent;
