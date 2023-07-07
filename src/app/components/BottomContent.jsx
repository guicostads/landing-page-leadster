import Image from "next/image";
import comparativo from "@/app/images/comparativo_img_CTA.png";

const BottomContent = () => {
  return (
    <div className="w-full bg-sky-500/[.08] flex items-center justify-center gap-20 py-2 px-8">
      <Image src={comparativo} alt="comparativo" className="w-fit h-96" />
      <div className="max-w-md flex flex-col justify-center items-center">
        <p>Pronto para triplicar a geração de Leads?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae expedita ad vero assumenda soluta sequi facere ut. A ab nostrum sequi quam aperiam at magni perspiciatis velit ut, aliquam aut.</p>
      </div>
    </div>
  );
};

export default BottomContent;
