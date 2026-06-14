import { Icon } from "@iconify/react";
import LogoMark from "./LogoMark";

export default function Header() {
  return (
    <header className="nexus-header">
      <a href="#" className="nexus-logo flex items-center gap-3 group">
        <span className="nexus-logo-mark">
          <LogoMark className="h-7 w-7" />
        </span>
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.55rem] font-extrabold uppercase tracking-[-0.04em] text-white transition-colors duration-300 group-hover:[color:var(--nexus-cyan)]">
            AgentVault
          </span>
          <span className="mt-1 text-[0.58rem] font-bold tracking-[0.32em] uppercase" style={{ color: "rgba(232,184,93,0.70)" }}>
            Trust Layer
          </span>
        </span>
      </a>

      <nav className="nexus-nav">
        <a href="#" className="nexus-nav-link is-active">[ Vision ]</a>
        <a href="#scale" className="nexus-nav-link">Scale</a>
        <a href="#principles" className="nexus-nav-link">Rules</a>
        <a href="#build" className="nexus-nav-link">Build</a>
      </nav>

      <a href="#build" className="nexus-header-cta">
        <Icon icon="solar:alt-arrow-right-linear" className="text-base" />
        Explore Build
      </a>
    </header>
  );
}
