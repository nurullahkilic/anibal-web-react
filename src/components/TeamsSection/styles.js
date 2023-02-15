import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
`;

export const SwiperWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  .swiper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.4rem;
    padding: 0 5rem;
  }
  .swiper-slide {
    width: fit-content;
    height: 100%;
  }
`;

export const Card = styled.div`
  background: linear-gradient(
    22.89deg,
    #213e55 10.4%,
    #008287 55.27%,
    #52b69c 94.17%
  );
  border-radius: 1rem;
  width: 21rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2rem;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 78%;
  padding: 0.8rem;
  object-fit: contain;
`;

export const PersonelInfos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
`;

export const Name = styled.h5`
  margin: 0;
  font-weight: 900;
  font-size: 1.2rem;
  line-height: 150%;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const Position = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 100%;
  margin-left: 24px;
  color: #ffffff;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: -25px;
    top: 50%;
    transform: translateY(-50%);
    width: 21px;
    height: 1px;
    background-color: #ffffff;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  width: 100%;
  height: fit-content;
  @media (max-width: 720px) {
    gap: 0.1rem;
    padding: 0;
    justify-content: center;
  }
`;

export const DirectionButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  transform: rotate(${({ rotate }) => (rotate ? rotate + "deg" : 0)});
  transform-origin: center;
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;
