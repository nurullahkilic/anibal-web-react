import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useActiveSection = ({ itemId, active, setActive }) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) return setActive({ activeIndex: itemId });
  }, [inView]);

  return { ref, active, setActive, inView };
};

export default useActiveSection;
