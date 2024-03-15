import { useEffect, useRef, useState } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();
  const [isFull, setIsFull] = useState(false);

  const runCallback = (isFull) => {
    if (typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      setIsFull(true);
    }
  };
  const triggerExitFull = () => {
    if (isFull) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullscreen) {
        element.current.mozCancelFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFull(false);
    }
  };

  useEffect(() => {
    runCallback(isFull);
  }, [isFull, runCallback]);

  return { element, triggerFull, triggerExitFull, isFull };
};
