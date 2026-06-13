import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header className="nexus-header">
      <a href="#" className="nexus-logo flex items-center gap-3 group">
        <span className="nexus-logo-mark">
          <span className="font-arcade text-3xl leading-none">N</span>
        </span>
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.55rem] font-extrabold uppercase tracking-[-0.04em] text-white transition-colors duration-300 group-hover:[color:var(--nexus-cyan)]">
            Nexus
          </span>
          <span className="mt-1 text-[0.58rem] font-bold tracking-[0.32em] uppercase" style={{ color: "rgba(232,184,93,0.70)" }}>
            Idea Arcade
          </span>
        </span>
      </a>

      <nav className="nexus-nav">
        <a href="#" className="nexus-nav-link is-active">[ Arcades ]</a>
        <a href="#high-scores" className="nexus-nav-link">High Scores</a>
        <a href="#cheat-codes" className="nexus-nav-link">Cheats</a>
        <a href="#join-the-guild" className="nexus-nav-link">Guild</a>
      </nav>

      <a href="#join-the-guild" className="nexus-header-cta">
        <Icon icon="solar:alt-arrow-right-linear" className="text-base" />
        Insert Coin
      </a>
    </header>
  );
}
