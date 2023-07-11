import Image from "next/image";
import comparativo from "@/app/images/comparativo_img_CTA.png";

const BottomContent = () => {
  return (
    <div className="bg-sky-500/[.08] grid place-items-center grid-cols-2 p-5 max-md:pl-8">
      <div>
        <Image src={comparativo} alt="comparativo" className="w-fit max-h-96" />
      </div>
      <div>oi</div>
    </div>
  );
};

export default BottomContent;
