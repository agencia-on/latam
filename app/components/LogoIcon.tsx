export default function LogoIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background rounded square */}
      <rect width="36" height="36" rx="8" fill="#1a1f1e" />

      {/* Airplane body */}
      <path
        d="M8 20L14 18L20 26L22 25L18 17L24 15C25.5 14.5 26.5 13 26 11.5C25.5 10 24 9.5 22.5 10L8 17L8 20Z"
        fill="#4da6ff"
      />
      {/* Tail fin */}
      <path
        d="M9 20L11 22L14 21L12 18Z"
        fill="#0057b8"
      />
      {/* Wing detail */}
      <path
        d="M16 17.5L22 10L24 11L19 18.5Z"
        fill="#0057b8"
      />
    </svg>
  );
}
