import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <main id="hero" className="nexus-hero">
      <div className="relative z-10 max-w-4xl">
        <div className="nexus-hero-kicker" id="hero-kicker">
          <span className="kicker-symbol font-arcade text-2xl leading-none">//</span>
          <span className="text-xs font-bold uppercase tracking-[0.28em]">0G-native product vision</span>
        </div>

        <h1 id="hero-title" className="nexus-hero-title">
          <span className="block whitespace-nowrap">
            <span className="word-collider"><span className="inline-block">Launch</span></span>
            {" "}
            <span className="word-collider"><span className="inline-block">Govern</span></span>
          </span>
          <span className="block whitespace-nowrap">
            <span className="word-collider"><span className="inline-block cyan">Verify</span></span>
            {" "}
            <span className="word-collider"><span className="inline-block pink">Monetize</span></span>
          </span>
        </h1>

        <p className="nexus-hero-copy" id="hero-desc">
          AgentVault is the platform we are building to help creators launch AI agents on 0G with ownership,
          policy controls, trust signals, execution visibility, and monetization built in.
        </p>

        <div className="nexus-hero-actions" id="hero-cta">
          <a href="#why-agentvault" className="nexus-button-primary group">
            Explore Vision
            <Icon icon="solar:round-alt-arrow-right-linear" className="text-2xl transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#roadmap" className="nexus-button-secondary">
            View Roadmap
          </a>
        </div>

        <div className="nexus-hero-stats" id="hero-stats">
          <div className="nexus-hero-stat">
            <div className="nexus-hero-stat-value" style={{ color: "var(--nexus-cyan)" }}>4</div>
            <div className="nexus-hero-stat-label">Core pillars</div>
          </div>
          <div className="nexus-hero-stat">
            <div className="nexus-hero-stat-value" style={{ color: "var(--nexus-pink)" }}>5</div>
            <div className="nexus-hero-stat-label">Build phases</div>
          </div>
          <div className="nexus-hero-stat">
            <div className="nexus-hero-stat-value" style={{ color: "var(--nexus-gold)" }}>0G</div>
            <div className="nexus-hero-stat-label">Native stack</div>
          </div>
        </div>
      </div>

      <aside className="nexus-core-wrap" aria-hidden="true">
        <div className="nexus-core-stage">
          <div className="nexus-core-glow" />
          <div className="nexus-core-axis" />
          <div className="nexus-core-ring r1" />
          <div className="nexus-core-ring r2" />
          <div className="nexus-core-ring r3" />
          <div className="nexus-core-chip input">Launch</div>
          <div className="nexus-core-chip remix">Govern</div>
          <div className="nexus-core-chip lock">Verify</div>
          <div className="nexus-core-chip output">Monetize</div>
          <div className="nexus-mini-particle p1" />
          <div className="nexus-mini-particle p2" />
          <div className="nexus-mini-particle p3" />
          <div className="nexus-mini-particle p4" />
          <div className="nexus-mini-particle p5" />
          <div className="nexus-cube-scene">
            <div className="nexus-cube">
              <div className="nexus-cube-face front" />
              <div className="nexus-cube-face back" />
              <div className="nexus-cube-face right" />
              <div className="nexus-cube-face left" />
              <div className="nexus-cube-face top" />
              <div className="nexus-cube-face bottom" />
            </div>
          </div>
          <div className="nexus-core-side-panel">
            <div className="text-[0.58rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(232,184,93,0.70)" }}>
              Product Core
            </div>
            <div className="mt-2 font-arcade text-3xl leading-none" style={{ color: "var(--nexus-gold)" }}>
              0G Sync
            </div>
            <div className="mt-4 grid gap-2">
              <div className="flex items-center justify-between text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/38">
                <span>Ownership</span>
                <span style={{ color: "rgba(232,184,93,0.80)" }}>Linked</span>
              </div>
              <div className="flex items-center justify-between text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/38">
                <span>Trust</span>
                <span style={{ color: "rgba(53,221,242,0.80)" }}>Visible</span>
              </div>
            </div>
          </div>
          <div className="nexus-core-panel">
            <div className="nexus-core-panel-top">
              <span>AgentVault Core</span>
              <span>V1</span>
            </div>
            <div className="nexus-core-meter"><span /></div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                { num: "01", label: "Launch", r: "53,221,242", a: 0.20 },
                { num: "02", label: "Govern", r: "244,91,168", a: 0.20 },
                { num: "03", label: "Verify", r: "232,184,93", a: 0.20 },
              ].map(({ num, label, r, a }) => (
                <div key={num} className="p-2" style={{ border: `1px solid rgba(${r},${a})`, background: `rgba(${r},0.05)` }}>
                  <div className="font-arcade text-2xl" style={{ color: `rgba(${r},1)` }}>{num}</div>
                  <div className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white/35">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
