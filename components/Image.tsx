import NextImage, { ImageLoader, ImageProps } from "next/image";

import getConfig from "next/config";

const { basePath } = getConfig();

const customLoader: ImageLoader = ({ src }) => {
  return `${basePath}${src}`;
};

export default function Image(props: ImageProps) {
  return <NextImage {...props} loader={customLoader} />;
}
