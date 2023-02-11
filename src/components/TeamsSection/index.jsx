import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BaseLayout from "../../shared/BaseLayout";
import { PrevButton, NextButton } from "./components/Button";
import {
  Container,
  SwiperWrapper,
  Card,
  CardImage,
  PersonelInfos,
  Name,
  Position,
  ButtonsWrapper,
} from "./styles";

import { TeamsData, SwiperOptions } from "./config";

const TeamsSection = () => {
  return (
    <BaseLayout
      title="TE AM"
      sideText="Tasarım gücünden beslenen Anibal ailesi"
      backgroundColor="#1D3141"
    >
      <Container>
        <SwiperWrapper>
          <Swiper {...SwiperOptions}>
            <ButtonsWrapper>
              <PrevButton />
              <NextButton />
            </ButtonsWrapper>
            {TeamsData &&
              TeamsData.map((item, key) => {
                return (
                  <SwiperSlide key={key}>
                    <Card>
                      <CardImage src={item?.image} />
                      <PersonelInfos>
                        <Name>{item?.name}</Name>
                        <Position>{item?.position}</Position>
                      </PersonelInfos>
                    </Card>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </SwiperWrapper>
      </Container>
    </BaseLayout>
  );
};

export default TeamsSection;
