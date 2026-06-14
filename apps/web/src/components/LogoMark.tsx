type LogoMarkProps = {
  className?: string;
};

export default function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 4H50L60 14V50L50 60H14L4 50V14L14 4Z"
        fill="url(#agentvault-bg)"
      />
      <path
        d="M14 4H50L60 14V50L50 60H14L4 50V14L14 4Z"
        stroke="url(#agentvault-frame)"
        strokeWidth="2.5"
      />
      <path
        d="M50 4L60 14H50V4Z"
        fill="#F45BA8"
        fillOpacity="0.92"
      />
      <path
        d="M18 46L29.5 17H34.5L46 46H39L35.8 37.6H28.1L24.8 46H18Z"
        fill="#35DDF2"
      />
      <path
        d="M29.9 32.5H34L31.95 26.9L29.9 32.5Z"
        fill="#02030A"
      />
      <path
        d="M27.3 35.5H36.7V39.2H27.3V35.5Z"
        fill="#E8B85D"
      />
      <path
        d="M18 46L29.5 17H34.5L46 46"
        stroke="rgba(248,243,255,0.18)"
        strokeWidth="1.2"
      />
      <defs>
        <linearGradient id="agentvault-bg" x1="10" y1="8" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F1630" />
          <stop offset="0.55" stopColor="#0B0E1D" />
          <stop offset="1" stopColor="#06070F" />
        </linearGradient>
        <linearGradient id="agentvault-frame" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#35DDF2" />
          <stop offset="0.58" stopColor="#A477FF" />
          <stop offset="1" stopColor="#E8B85D" />
        </linearGradient>
      </defs>
    </svg>
  );
}
