import { useEffect, useState } from "react";
import { Container, Wrapper, ImageContent } from "./styles";
import { useInView } from "react-intersection-observer";
import { motion, useAnimationControls } from "framer-motion";

import HomeScrollViewItem from "./components";
import { HomeScrollData, ImagesAnimationConfig } from "./config";

const HomeScrollView = () => {
  const [active, setActive] = useState({ isInView: false, activeIndex: -1 });
  const [isClose, setIsClose] = useState(true);

  const { ref, inView } = useInView({
    threshold: [0.35, 0.7],
  });

  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setTimeout(() => setIsClose(false), 220);
    } else {
      controls.start("hidden");
      setTimeout(() => setIsClose(true), 220);
    }
  }, [inView]);

  return (
    <Container>
      <Wrapper ref={ref}>
        {HomeScrollData &&
          HomeScrollData.map((item, key) => {
            return (
              <HomeScrollViewItem
                key={key}
                _id={item?.id}
                state={active}
                setState={setActive}
                titleId={item?.number}
                title={item?.title}
                desc={item?.description}
                image={item?.image}
              />
            );
          })}
      </Wrapper>
      <ImageContent
        src={HomeScrollData[active?.activeIndex - 1]?.image}
        as={motion.img}
        variants={ImagesAnimationConfig}
        initial="hidden"
        animate={controls}
        isClose={isClose}
      />
    </Container>
  );
};

export default HomeScrollView;
