import { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
  imgPath: StaticImageData;
  children?: React.ReactNode;
};

const Banner = ({ imgPath, children }: Props) => {
  return (
    <div className="w-full h-48 md:h-96 object-contain relative">
      <Image
        className="object-cover"
        src={`${imgPath.src}`}
        alt=""
        fill
        priority
      ></Image>
      {children}
    </div>
  );
};

export default Banner;
