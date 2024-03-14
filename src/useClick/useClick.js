import { useEffect, useRef } from "react";

export const useClick = (onClickHandler) => {
  const ref = useRef();
  useEffect(() => {
    if (typeof onClickHandler !== "function") {
      return;
    }
    const element = ref.current;
    if (element) {
      element.addEventListener("click", onClickHandler);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", onClickHandler);
      }
    };
  }, [onClickHandler]);
  return typeof onClickHandler !== "function" ? undefined : ref;
};
