const Linkedin = ({ fill = "#fff", ...props }) => (
  <svg height={48} width={47} {...props}>
    <g fill="transparent" stroke={fill}>
      <ellipse cx={23.5} cy={24} rx={23.5} ry={24} stroke="none" />
      <ellipse cx={23.5} cy={24} fill="none" rx={23} ry={23.5} />
    </g>
    <path
      d="M33.665 24.357v7.152h-4.146v-6.673c0-1.676-.6-2.82-2.1-2.82a2.268 2.268 0 0 0-2.127 1.517 2.833 2.833 0 0 0-.138 1.011v6.965h-4.15s.056-11.3 0-12.473h4.147v1.768l-.027.04h.027v-.04a4.118 4.118 0 0 1 3.738-2.061c2.73.004 4.776 1.783 4.776 5.614zm-17-11.333a2.161 2.161 0 1 0-.055 4.311h.028a2.162 2.162 0 1 0 .027-4.311zm-2.1 18.485h4.146V19.036h-4.146z"
      fill={fill}
    />
  </svg>
);

export default Linkedin;
