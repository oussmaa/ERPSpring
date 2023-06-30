/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { OpenClose } from "../contexts/contexts";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return [windowSize.width, windowSize.height]
  }



export function useConsumerOpenClose() {
  const opCls = useContext(OpenClose)

  return opCls
}



export function useOutsideAlerter(ref, func) {
  useEffect(() => {
    document.addEventListener('click', func, true);
        return () => {
            document.removeEventListener('click', func, true);
        }
  }, [ref]);
}