const Facebook = ({ fill = "#fff", ...props }) => (
  <svg width={47} height={48} {...props}>
    <g>
      <g fill="transparent" stroke={fill}>
        <ellipse cx={23.5} cy={24} rx={23.5} ry={24} stroke="none" />
        <ellipse cx={23.5} cy={24} rx={23} ry={23.5} fill="none" />
      </g>
      <path
        d="M24.834 32.922v-8.52h2.859l.428-3.321h-3.287v-2.12c0-.961.267-1.616 1.646-1.616h1.758v-2.97a23.519 23.519 0 0 0-2.562-.131 4 4 0 0 0-4.271 4.389v2.449h-2.867v3.32h2.867v8.52Z"
        fill={fill}
      />
    </g>
  </svg>
);

export default Facebook;
