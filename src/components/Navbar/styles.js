import styled from "@emotion/styled";

export const Content = styled.div`
  width: auto;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3.85rem 3.125rem;
  box-sizing:content-box;
`;

export const NavbarLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const LogoLink = styled.div`
  height: 2rem;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Logo = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const NavbarRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ItemsContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.8rem;
  margin-right: 3rem;
  @media (max-width: 720px) {
   display: none;
  }
`;

export const NavbarLink = styled.h4`
  padding: 0 .4rem;
  height: 100%;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.0075em;
  color:${({theme})=>theme.black};
  mix-blend-mode: difference;
`;
