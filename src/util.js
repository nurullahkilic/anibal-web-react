import { useState, useEffect } from "react";
const useScrollEvent = () => {
  const [isPass, setIsPass] = useState(false);

  const calculateWindowSize = () =>
    setIsPass(window.pageYOffset > window.innerHeight / 2);

  useEffect(() => {
    window.addEventListener("scroll", calculateWindowSize);
    return () => window.removeEventListener("scroll", calculateWindowSize);
  });

  return { isPass };
};

export { useScrollEvent };
