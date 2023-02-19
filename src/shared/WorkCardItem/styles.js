import styled from "@emotion/styled";
import { Link } from "react-router-dom";

let modeVar;

export const WorkItem = styled.div`
  ${({ mode }) => (modeVar = mode)}

  min-height: 55rem;
  height: fit-content;
  width: 48%;
  margin-bottom: 1rem;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 760px) {
    width: 100%;
    min-height: 100%;
    height: fit-content;
  }
`;

export const LinkSection = styled(Link)`
  width: 100%;
  height: 100%;
  flex: 1;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WorkImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  transition: 200ms transform;

  &:hover {
    transform: scale(1.03) translateY(-5px);
  }
`;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 0.8rem;

  & span {
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.022em;
    color: ${({ theme }) => theme.lightTurquoise};
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 900;
  font-size: 3.3rem;
  line-height: 90%;
  letter-spacing: -0.0075em;
  color: ${({ theme }) => (modeVar == "dark" ? "white" : theme.black)};
  

  margin-bottom: 0.8rem;
  transition: 100ms color;

  &:hover {
    color: ${({ theme }) => theme.lightTurquoise};
  }
`;

export const Desc = styled.h5`
  margin: 0;
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 130%;
  letter-spacing: 0.022em;
  color: ${({ theme }) => (modeVar == "dark" ? "white" : theme.black)};
`;
