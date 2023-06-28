import Image from "next/image";
import TopImage from "@/app/images/logo.png";

export const TopLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center	p-5">
      <Image src={TopImage} width={150} height={300} alt="leadster logo" />
    </div>
  );
};
