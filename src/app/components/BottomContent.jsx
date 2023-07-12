import Image from "next/image";
import comparativo from "@/app/images/comparativo_img_CTA.png";

const BottomContent = () => {
  return (
    <div className="bg-sky-500/[.08] grid place-items-center grid-cols-2 py-5 max-md:pl-8 max-md:px-5 max-md:gap-3 max-md:text-sm">
      <div>
        <Image src={comparativo} alt="comparativo" className="w-fit max-h-96" />
      </div>
      <div className="max-w-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi
        sunt aut, accusamus omnis distinctio libero reprehenderit qui soluta
        fuga sit fugiat in sint vitae necessitatibus temporibus voluptas aperiam
        dolore?
      </div>
    </div>
  );
};

export default BottomContent;
