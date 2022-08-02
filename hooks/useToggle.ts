import { useCallback, useState } from "react";

const useToggle = (initialState: boolean = true): [boolean, () => void] => {
  const [value, setToggle] = useState(initialState);

  const toggle = useCallback(() => {
    setToggle((value) => !value);
  }, []);

  return [value, toggle];
};

export default useToggle;
