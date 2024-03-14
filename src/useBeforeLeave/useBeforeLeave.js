import { useEffect } from "react";

export const useBeforeLeave = (onLeave, onEnter) => {
  useEffect(() => {
    if (typeof onLeave !== "function" || typeof onEnter !== "function") {
      return;
    }
    const onLeaveHandle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        onLeave();
      }
    };

    document.addEventListener("mouseleave", onLeaveHandle);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      document.removeEventListener("mouseleave", onLeaveHandle);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [onLeave, onEnter]);
};
