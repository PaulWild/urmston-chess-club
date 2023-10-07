import styles from "./container.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="max-w-7xl p-4 mx-auto">{children}</div>;
};
