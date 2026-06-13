import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <main id="hero" className="nexus-hero">
      {/* Left content */}
      <div className="relative z-10 max-w-4xl">
        <div className="nexus-hero-kicker" id="hero-kicker">
          <span className="kicker-symbol font-arcade text-2xl leading-none">//</span>
          <span className="text-xs font-bold uppercase tracking-[0.28em]">Creative engine online</span>
        </div>

        <h1 id="hero-title" className="nexus-hero-title">
          <span className="block whitespace-nowrap">
            <span className="word-collider"><span className="inline-block">Ideas</span></span>
            {" "}
            <span className="word-collider"><span className="inline-block">Collide.</span></span>
          </span>
          <span className="block whitespace-nowrap">
            <span className="word-collider"><span className="inline-block cyan">Worlds</span></span>
            {" "}
            <span className="word-collider"><span className="inline-block pink">Unlock.</span></span>
          </span>
        </h1>

        <p className="nexus-hero-copy" id="hero-desc">
          Drop loose prompts, visual references, and half-formed concepts into the field.
          NEXUS turns creative chaos into structured worlds, playable systems, and sharper visual direction.
        </p>

        <div className="nexus-hero-actions" id="hero-cta">
          <a href="#chaos-to-form" className="nexus-button-primary group">
            Insert Coin
            <Icon icon="solar:round-alt-arrow-right-linear" className="text-2xl transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#game-modes" className="nexus-button-secondary">
            Explore Engine
          </a>
        </div>

        <div className="nexus-hero-stats" id="hero-stats">
          <div className="nexus-hero-stat">
            <div className="nexus-hero-stat-value" style={{ color: "var(--nexus-cyan)" }}>128</div>
            <div className="nexus-hero-stat-label">Input fragments</div>
          </div>
          <div className="nexus-hero-stat">
            <div className="nexus-hero-stat-value" style={{ color: "var(--nexus-pink)" }}>42</div>
            <div className="nexus-hero-stat-label">World collisions</div>
          </div>
          <div className="nexus-hero-stat">
            <div className="nexus-hero-stat-value" style={{ color: "var(--nexus-gold)" }}>87%</div>
            <div className="nexus-hero-stat-label">World stability</div>
          </div>
        </div>
      </div>

      {/* Right 3-D core visual */}
      <aside className="nexus-core-wrap" aria-hidden="true">
        <div className="nexus-core-stage">
          <div className="nexus-core-glow" />
          <div className="nexus-core-axis" />
          <div className="nexus-core-ring r1" />
          <div className="nexus-core-ring r2" />
          <div className="nexus-core-ring r3" />
          <div className="nexus-core-chip input">Input</div>
          <div className="nexus-core-chip remix">Remix</div>
          <div className="nexus-core-chip lock">World Lock</div>
          <div className="nexus-core-chip output">Output</div>
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
              Core Motion
            </div>
            <div className="mt-2 font-arcade text-3xl leading-none" style={{ color: "var(--nexus-gold)" }}>
              Sync 04
            </div>
            <div className="mt-4 grid gap-2">
              <div className="flex items-center justify-between text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/38">
                <span>Axis</span>
                <span style={{ color: "rgba(232,184,93,0.80)" }}>Stable</span>
              </div>
              <div className="flex items-center justify-between text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/38">
                <span>Loop</span>
                <span style={{ color: "rgba(53,221,242,0.80)" }}>Active</span>
              </div>
            </div>
          </div>
          <div className="nexus-core-panel">
            <div className="nexus-core-panel-top">
              <span>World Core</span>
              <span>87%</span>
            </div>
            <div className="nexus-core-meter"><span /></div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                { num: "01", label: "Input",   r: "53,221,242",  a: 0.20 },
                { num: "02", label: "Collide", r: "244,91,168",  a: 0.20 },
                { num: "03", label: "Unlock",  r: "232,184,93",  a: 0.20 },
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
