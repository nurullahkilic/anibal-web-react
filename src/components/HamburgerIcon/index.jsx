import { NavIcon } from "./styles";

const HamburgerIcon = ({isClose, ...props}) => {
  return (
    <NavIcon className={!isClose && 'open'} {...props}>
      <span></span>
      <span></span>
      <span></span>
    </NavIcon>
  );
};

export default HamburgerIcon;
