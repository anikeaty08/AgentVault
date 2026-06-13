const NAV_LINKS = [
  { href: "#hero",           label: "Arcade" },
  { href: "#game-modes",     label: "Modes"  },
  { href: "#high-scores",    label: "Scores" },
  { href: "#cheat-codes",    label: "Cheats" },
  { href: "#join-the-guild", label: "Guild"  },
];

export default function Footer() {
  return (
    <footer className="nexus-footer">
      <div className="nexus-footer-shell">
        <div className="nexus-footer-grid">
          <div className="nexus-footer-logo">
            <span className="nexus-footer-mark">
              <span className="font-arcade text-3xl leading-none">N</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.35rem] font-extrabold uppercase tracking-[-0.04em] text-white">Nexus</span>
              <span className="mt-1 text-[0.56rem] font-bold uppercase tracking-[0.30em]" style={{ color: "rgba(232,184,93,0.70)" }}>Idea Arcade</span>
            </span>
          </div>
          <nav className="nexus-footer-nav">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={label} href={href} className="nexus-footer-link">{label}</a>
            ))}
          </nav>
          <div className="flex items-center justify-start gap-3 lg:justify-end">
            <span className="h-2.5 w-2.5" style={{ background: "var(--nexus-cyan)", boxShadow: "0 0 12px rgba(53,221,242,0.85)" }} />
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(53,221,242,0.78)" }}>Creative engine online</span>
          </div>
        </div>
        <div className="nexus-footer-meta">
          <span>© 2026 NEXUS Idea Arcade. All systems online.</span>
          <span>Designed for creative collisions, remix chains, and playable worlds.</span>
        </div>
      </div>
    </footer>
  );
}
