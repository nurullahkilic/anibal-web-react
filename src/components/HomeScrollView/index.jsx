import { useEffect, useState } from "react";
import { Container,Wrapper, ImageContent } from "./styles";
import { useInView } from "react-intersection-observer";
import { motion, useAnimationControls } from "framer-motion";

import HomeScrollViewItem from "./components";
import { HomeScrollData, ImagesAnimationConfig } from "./config";

const HomeScrollView = () => {
  const [active, setActive] = useState({ isInView: false, activeIndex: -1 });
  const { ref, inView } = useInView({
    threshold: [0.35,0.7],
  });

  const controls = useAnimationControls();

  const animation = async (itemId) => {
    await controls.start("hidden");
    setSelectedId(itemId);
    setTimeout(() => {
      controls.start("visible");
    }, 200);
  };


  useEffect(() => {
    // console.log(active);
    if(inView)
      controls.start("visible");
    else 
      controls.start("hidden");
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
        inView={inView}
      />
    </Container>
  );
};

export default HomeScrollView;
