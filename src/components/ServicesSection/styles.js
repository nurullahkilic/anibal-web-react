import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    100% 392.69% at 0% 100%,
    #1d3141 0%,
    #008287 28.67%,
    #52b69c 68.5%
  );
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const SelectionContent = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 2.5rem;
  
`;

export const Title = styled.h5`
  margin: 0;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 110%;
  letter-spacing: 1px;
  color: #ffffff;
`;

export const TabContent = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 1.8rem;
`;

export const TabItem = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 3.4rem;
  line-height: 110%;
  letter-spacing: -0.02em;
  color: ${({isSelected})=> isSelected ? "white": "rgba(0, 0, 0, 0.2)"};
  cursor: pointer;
  transition: 200ms color;
`;

export const SeeAllButton = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 110%;
  letter-spacing: 0.0075em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 1.125rem 2rem;
  border-radius: 9999px;
  border: 1px solid #ffffff;
  transition: 300ms all;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.turquoise};
  }
`;

export const ImagesContent = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  @media (max-width: 720px) {
    width: 80vw;
  }
`;

export const SelectionImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const SelectionText = styled.h5`
margin: 0;
text-align: left;
font-weight: 400;
font-size: 1.125rem;
line-height: 170%;
color: #FFFFFF;
`;
