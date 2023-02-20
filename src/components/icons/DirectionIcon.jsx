const DirectionIcon = ({ color = "#fff", size = 66, ...props }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33 .664C15.188.664.75 15.102.75 32.914c0 17.811 14.438 32.25 32.25 32.25 17.812 0 32.25-14.439 32.25-32.25C65.25 15.102 50.812.664 33 .664ZM5.25 32.914c0-15.327 12.424-27.75 27.75-27.75s27.75 12.423 27.75 27.75c0 15.326-12.424 27.75-27.75 27.75S5.25 48.24 5.25 32.914Zm17.25-2.25a2.25 2.25 0 1 0 0 4.5h15.568l-5.159 5.159a2.25 2.25 0 1 0 3.182 3.182l9-9a2.25 2.25 0 0 0 0-3.182l-9-9a2.25 2.25 0 1 0-3.182 3.182l5.159 5.159H22.5Z"
      fill={color}
    />
  </svg>
);

export default DirectionIcon;
