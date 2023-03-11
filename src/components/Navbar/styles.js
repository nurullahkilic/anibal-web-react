import styled from "@emotion/styled";

export const Content = styled.div`
  mix-blend-mode: difference;
  filter: invert(100%);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: auto;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3.85rem 2.85rem 0 2.85rem;
  box-sizing: content-box;

  & > .logo {
    visibility: ${({ isClose }) => (isClose ? "visible" : "hidden")};
    opacity: ${({ isClose }) => (isClose ? 1 : 0)};
  }
  & > .logo > .active {
    visibility: hidden;
    opacity: 0;
  }
  @media (max-width: 760px) {
    padding: 3.85rem 2rem 0 2rem;
  }
`;

export const NavbarLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: 300ms all;
  visibility: visible;
`;

export const LogoLink = styled.div`
  height: 2rem;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: 300ms all;
`;

export const IconStyle = styled.div`
  height: 2rem;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Logo = styled.img`
  z-index: 990;
  height: 100%;
  object-fit: cover;
  transform: scale(2.1) translateX(0.7rem);
`;

export const NavbarRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const ItemsContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-right: 1rem;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const NavbarLink = styled.h4`
  padding: 0 0.4rem;
  height: 100%;
  text-decoration: none;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.01em;
  color: black;
  transition: 200ms color;
  &:hover {
    color: ${({ theme }) => theme.turquoise};
  }
`;
