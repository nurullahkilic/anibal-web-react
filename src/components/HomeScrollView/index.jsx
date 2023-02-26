import { useEffect, useState } from "react";
import { Container, Wrapper, ImageContent, ImageWrapper } from "./styles";
import { useInView } from "react-intersection-observer";

import HomeScrollViewItem from "./components/HomeScrollViewItem";
import { HomeScrollData } from "./config";

const HomeScrollView = () => {
  const [active, setActive] = useState({ isInView: false, activeIndex: 0 });
  const [isClose, setIsClose] = useState(true);

  const { ref, inView } = useInView({
    threshold: [0.35, 0.7],
  });

  useEffect(() => {
    if (inView) {
      setIsClose(false);
    } else {
      setIsClose(true);
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
      <ImageWrapper
        key={active?.activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        isClose={isClose}
      >
        <ImageContent src={HomeScrollData[active?.activeIndex - 1]?.image} />
      </ImageWrapper>
    </Container>
  );
};

export default HomeScrollView;
