import { useState, useEffect } from "react";

export const useDimension = () => {
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleOnChangeDimension = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleOnChangeDimension);

    return () => {
      window.removeEventListener("resize", handleOnChangeDimension);
    };
  }, []);

  return { height, width };
};
