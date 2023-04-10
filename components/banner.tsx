import { StaticImageData } from "next/image";
import styles from "./banner.module.scss";
import Image from "next/image";

type Props = {
  imgPath: StaticImageData;
  children?: React.ReactNode;
};

const Banner = ({ imgPath, children }: Props) => {
  return (
    <div className={styles.banner}>
      <Image
        className={styles.bannerImage}
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
