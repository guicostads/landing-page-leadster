import Image from "next/image";
import comparativo from "@/app/images/comparativo_img_CTA.png";

const BottomContent = () => {
  return (
    <div className="bg-sky-500/[.08] w-full flex items-center justify-center">
      <div className="grid grid-cols-2 place-items-center px-4 pt-3 w-10/12	">
        <div>
          <Image
            src={comparativo}
            alt="comparativo"
            className="w-fit max-h-96 pl-20 mr-2"
          />
        </div>
        <div className="max-w-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
          eligendi sunt aut, accusamus omnis distinctio libero reprehenderit qui
          soluta fuga sit fugiat in sint vitae necessitatibus temporibus
          voluptas aperiam dolore?
        </div>
      </div>
    </div>
  );
};

export default BottomContent;
