import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState({
    X: 0,
    y: 0,
  });

  const handleScroll = () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
};
