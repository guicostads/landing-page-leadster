import Image from "next/image";
import comparativo from "@/app/images/comparativo_img_CTA.png";

const BottomContent = () => {
  return (
    <div className="bg-sky-500/[.08] w-full flex items-center justify-center gap-4">
      <div className="flex justify-center gap-3 items-center max-md:px-4">
        <div className='w-3/4'>
          <Image src={comparativo} alt="comparativo" />
        </div>
        <div className="w-1/2">oi</div>
      </div>
    </div>
  );
};

export default BottomContent;
