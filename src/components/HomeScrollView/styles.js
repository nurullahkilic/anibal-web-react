import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 6rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 6rem;
  @media (max-width: 760px) {
    gap: 6rem;
  }
`;

export const ImageContent = styled.img`
  display: ${({ inView }) => (inView ? "flex" : "none")};
  position: fixed;
  top: 50%;
  right: 100px;
  z-index: 15;
  transform: translateY(-50%);
  width: 40vw;
  height: 50vh;
  overflow: hidden;
  object-fit: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 200ms all;
  border-radius: 1rem;
  overflow: hidden;
  @media (max-width: 1000px) {
    visibility: hidden;
  }
`;
