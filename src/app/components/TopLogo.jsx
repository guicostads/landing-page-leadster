import Image from "next/image";
import Logo from "@/app/images/logo.png";

export const TopLogo = () => {
  return (
    <div className="py-4 w-auto h-auto">
      <Image src={Logo} width={150} height={300} alt="leadster logo" />
    </div>
  );
};
