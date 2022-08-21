import { StaticImageData } from "next/image";
import styles from "./banner.module.scss";

type Props = {
  imgPath: StaticImageData;
  children?: React.ReactNode;
};
const Banner = ({ imgPath, children }: Props) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${imgPath.src})` }}
    >
      {children}
    </div>
  );
};

export default Banner;
