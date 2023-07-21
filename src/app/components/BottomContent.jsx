import Image from "next/image";
import comparativo from "@/app/images/comparativo_img_CTA.png";

const BottomContent = () => {
  return (
    <div className="bg-sky-500/[.08] w-full flex items-center justify-center gap-4">
      <div className="grid grid-cols-2 place-items-center">
        <Image src={comparativo} alt="comparativo" className="w-96 h-auto" />
        <div>oi</div>
      </div>
    </div>
  );
};

export default BottomContent;
