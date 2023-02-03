import { useSwiper } from "swiper/react";
import { DirectionIcon } from "../../icons";
import { DirectionButton } from "../styles";
import { theme } from "../../../config/theme";
import { useEffect, useState } from "react";

const PrevButton = () => {
  const swiper = useSwiper();
  return (
    <DirectionButton
      onClick={() => swiper.slidePrev()}
      rotate={180}
      opacity={swiper.activeIndex === 0 ? 0.3 : 1}
    >
      <DirectionIcon color={theme.lightTurquoise} />
    </DirectionButton>
  );
};

const NextButton = () => {
  const swiper = useSwiper();
  const [disable, setDisable] = useState(false);

  useEffect(()=>{
    if (swiper.isEnd) setDisable(true);
    else setDisable(false);
  },[swiper.isEnd])

  return (
    <DirectionButton
      onClick={() => swiper.slideNext()}
      opacity={disable ? 0.3 : 1}
    >
      <DirectionIcon color={theme.lightTurquoise} />
    </DirectionButton>
  );
};

export { PrevButton, NextButton };
