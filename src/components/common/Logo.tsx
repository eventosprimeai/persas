export function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Emblema Persian's"
    >
      <defs>
        <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8C6D1F" />
          <stop offset="50%" stopColor="#E7D08A" />
          <stop offset="100%" stopColor="#C9A227" />
        </linearGradient>
      </defs>

      <circle cx="32" cy="35" r="23" fill="#0A0A0B" stroke="url(#logoGoldGrad)" strokeWidth="1.4" />
      <circle cx="32" cy="35" r="19.5" fill="none" stroke="url(#logoGoldGrad)" strokeWidth="0.5" opacity="0.55" />

      <path
        d="M18.5,15 L22.5,6.5 L27,13.5 L32,4 L37,13.5 L41.5,6.5 L45.5,15 Z"
        fill="none"
        stroke="url(#logoGoldGrad)"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="4" r="1.4" fill="#E7D08A" />
      <circle cx="22.5" cy="6.5" r="1.1" fill="#E7D08A" />
      <circle cx="41.5" cy="6.5" r="1.1" fill="#E7D08A" />

      <text
        x="32"
        y="45"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), 'Cormorant Garamond', Garamond, Georgia, serif"
        fontStyle="italic"
        fontWeight={600}
        fontSize="25"
        fill="url(#logoGoldGrad)"
      >
        P
      </text>
    </svg>
  );
}
