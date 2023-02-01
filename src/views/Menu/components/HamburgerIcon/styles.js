import styled from "@emotion/styled";

export const NavIcon = styled.div`
  z-index: 99999;
  width: 60px;
  height: 45px;
  transform: rotate(0deg) scale(0.6);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  @media (max-width: 720px) {
    transform: rotate(0deg) scale(0.5);
  }

  & span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: ${({theme})=>theme.black};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  & span:nth-child(1) {
    top: 0px;
    transform-origin: left center;
  }
  & span:nth-child(2) {
    top: 18px;
    transform-origin: left center;
  }
  & span:nth-child(3) {
    top: 36px;
    transform-origin: left center;
  }
  &.open span:nth-child(1) {
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
  }
  &.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;
  }
`;
