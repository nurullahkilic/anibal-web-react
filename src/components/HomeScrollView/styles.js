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
  @media (max-width: 720px) {
    gap: 6rem;
  }
`;

export const ImageContent = styled.img`
  position: fixed;
  top: 50%;
  right: 100px;
  z-index: 15;
  transform: translateY(-50%);
  width: 40vw;
  height: 50vh;
  overflow: hidden;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 200ms all;
  border-radius: 1rem;
  overflow: hidden;
  @media (max-width: 1500px) {
    visibility: hidden;
  }
`;
