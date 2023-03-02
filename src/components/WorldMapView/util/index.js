import { useState, useEffect, useRef } from "react";

const useFullInView = () => {
  const [isFullInView, setIsFullInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    let offsetBottom;
    let isTopFullInView;
    let isBottomFullInView;
    const handleScroll = (e) => {
      isTopFullInView = window.scrollY > ref.current.offsetTop;
      offsetBottom = ref.current.offsetHeight + ref.current.offsetTop;
      isBottomFullInView = offsetBottom > window.scrollY + window.innerHeight;
      setIsFullInView(isTopFullInView && isBottomFullInView);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { ref, isFullInView };
};

export default useFullInView;
