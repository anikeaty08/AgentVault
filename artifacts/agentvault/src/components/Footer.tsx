import LogoMark from "./LogoMark";

const NAV_LINKS = [
  { href: "#hero", label: "Vision" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#scale", label: "Scale" },
  { href: "#principles", label: "Rules" },
  { href: "#build", label: "Build" },
];

export default function Footer() {
  return (
    <footer className="nexus-footer">
      <div className="nexus-footer-shell">
        <div className="nexus-footer-grid">
          <div className="nexus-footer-logo">
            <span className="nexus-footer-mark">
              <LogoMark className="h-8 w-8" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.35rem] font-extrabold uppercase tracking-[-0.04em] text-white">AgentVault</span>
              <span className="mt-1 text-[0.56rem] font-bold uppercase tracking-[0.30em]" style={{ color: "rgba(232,184,93,0.70)" }}>0G Trust Layer</span>
            </span>
          </div>
          <nav className="nexus-footer-nav">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={label} href={href} className="nexus-footer-link">{label}</a>
            ))}
          </nav>
          <div className="flex items-center justify-start gap-3 lg:justify-end">
            <span className="h-2.5 w-2.5" style={{ background: "var(--nexus-cyan)", boxShadow: "0 0 12px rgba(53,221,242,0.85)" }} />
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(53,221,242,0.78)" }}>Product vision online</span>
          </div>
        </div>
        <div className="nexus-footer-meta">
          <span>(c) 2026 AgentVault. Product vision for trusted AI agents on 0G.</span>
          <span>Designed for launch, governance, verification, and monetization at ecosystem scale.</span>
        </div>
      </div>
    </footer>
  );
}
