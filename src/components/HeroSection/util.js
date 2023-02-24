import { useState, useEffect } from "react";

export const useAnimated = ({ minWidth: minWidth }) => {
  const [isAnimated, setIsAnimated] = useState(
    window.innerWidth > minWidth ? true : false
  );

  function calculateWindowSize() {
    setIsAnimated(window.innerWidth > minWidth ? true : false);
  }

  useEffect(() => {
    window.addEventListener("resize", calculateWindowSize);
    return () => {
      window.removeEventListener("resize", calculateWindowSize);
    };
  });

  return isAnimated;
};
