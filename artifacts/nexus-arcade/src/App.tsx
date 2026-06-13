import { useEffect } from "react";

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    Matter: any;
  }
}

export default function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.gsap && window.ScrollTrigger && window.Matter) {
        clearInterval(interval);
        initNexusApp();
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="physics-layer">
        <canvas id="pixel-canvas"></canvas>
        <div className="nexus-scanlines"></div>
        <div className="nexus-vignette"></div>
      </div>

      <div className="nexus-page-shell">

        {/* HEADER */}
        <header className="nexus-header">
          <a href="#" className="nexus-logo flex items-center gap-3 group">
            <span className="nexus-logo-mark">
              <span className="font-arcade text-3xl leading-none">N</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.55rem] font-extrabold uppercase tracking-[-0.04em] text-white transition-colors duration-300 group-hover:[color:var(--nexus-cyan)]">
                Nexus
              </span>
              <span className="mt-1 text-[0.58rem] font-bold tracking-[0.32em] uppercase" style={{ color: "rgba(232, 184, 93, 0.70)" }}>
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
            <span className="text-base leading-none">●</span>
            Insert Coin
          </a>
        </header>

        {/* HERO */}
        <main id="hero" className="nexus-hero">
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
                {/* @ts-ignore */}
                <iconify-icon icon="solar:round-alt-arrow-right-linear" class="text-2xl transform transition-transform group-hover:translate-x-1"></iconify-icon>
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

          {/* RIGHT HERO CORE VISUAL */}
          <aside className="nexus-core-wrap" aria-hidden="true">
            <div className="nexus-core-stage">
              <div className="nexus-core-glow"></div>
              <div className="nexus-core-axis"></div>
              <div className="nexus-core-ring r1"></div>
              <div className="nexus-core-ring r2"></div>
              <div className="nexus-core-ring r3"></div>
              <div className="nexus-core-chip input">Input</div>
              <div className="nexus-core-chip remix">Remix</div>
              <div className="nexus-core-chip lock">World Lock</div>
              <div className="nexus-core-chip output">Output</div>
              <div className="nexus-mini-particle p1"></div>
              <div className="nexus-mini-particle p2"></div>
              <div className="nexus-mini-particle p3"></div>
              <div className="nexus-mini-particle p4"></div>
              <div className="nexus-mini-particle p5"></div>
              <div className="nexus-cube-scene">
                <div className="nexus-cube">
                  <div className="nexus-cube-face front"></div>
                  <div className="nexus-cube-face back"></div>
                  <div className="nexus-cube-face right"></div>
                  <div className="nexus-cube-face left"></div>
                  <div className="nexus-cube-face top"></div>
                  <div className="nexus-cube-face bottom"></div>
                </div>
              </div>
              <div className="nexus-core-side-panel">
                <div className="text-[0.58rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(232, 184, 93, 0.70)" }}>
                  Core Motion
                </div>
                <div className="mt-2 font-arcade text-3xl leading-none" style={{ color: "var(--nexus-gold)" }}>
                  Sync 04
                </div>
                <div className="mt-4 grid gap-2">
                  <div className="flex items-center justify-between text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/38">
                    <span>Axis</span>
                    <span style={{ color: "rgba(232, 184, 93, 0.80)" }}>Stable</span>
                  </div>
                  <div className="flex items-center justify-between text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/38">
                    <span>Loop</span>
                    <span style={{ color: "rgba(53, 221, 242, 0.80)" }}>Active</span>
                  </div>
                </div>
              </div>
              <div className="nexus-core-panel">
                <div className="nexus-core-panel-top">
                  <span>World Core</span>
                  <span>87%</span>
                </div>
                <div className="nexus-core-meter">
                  <span></span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2" style={{ border: "1px solid rgba(53, 221, 242, 0.20)", background: "rgba(53, 221, 242, 0.05)" }}>
                    <div className="font-arcade text-2xl" style={{ color: "var(--nexus-cyan)" }}>01</div>
                    <div className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white/35">Input</div>
                  </div>
                  <div className="p-2" style={{ border: "1px solid rgba(244, 91, 168, 0.20)", background: "rgba(244, 91, 168, 0.05)" }}>
                    <div className="font-arcade text-2xl" style={{ color: "var(--nexus-pink)" }}>02</div>
                    <div className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white/35">Collide</div>
                  </div>
                  <div className="p-2" style={{ border: "1px solid rgba(232, 184, 93, 0.20)", background: "rgba(232, 184, 93, 0.05)" }}>
                    <div className="font-arcade text-2xl" style={{ color: "var(--nexus-gold)" }}>03</div>
                    <div className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white/35">Unlock</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </main>

        {/* SECTION 02 — CONVERSION CHAMBER */}
        <section id="chaos-to-form" className="relative w-full max-w-[90rem] mx-auto px-6 lg:px-12 pb-28 lg:pb-36">
          <div id="section-2-catcher" className="nexus-s2-frame">
            <div className="nexus-s2-corner tl"></div>
            <div className="nexus-s2-corner tr"></div>
            <div className="nexus-s2-corner bl"></div>
            <div className="nexus-s2-corner br"></div>
            <div className="relative z-10 min-h-[820px] p-6 md:p-10 lg:p-14 xl:p-16">
              <div className="mx-auto max-w-5xl text-center">
                <h2 className="nexus-s2-title">
                  <span className="line-one" data-s2-collider="headline">From chaos</span>
                  <span className="line-two" data-s2-collider="headline">to playable form</span>
                </h2>
                <p className="nexus-s2-intro" data-s2-collider="subtitle">
                  Every idea enters messy: a prompt, a screenshot, a reference, or a half-built direction.
                  NEXUS gives those pieces a field to collide, remix, and lock into a stronger creative system.
                </p>
              </div>

              <div className="nexus-s2-content-grid">
                <div className="nexus-s2-left-stack">
                  <div className="nexus-s2-rail">
                    <div className="nexus-s2-rail-item" data-s2-collider="rail-card">
                      <div className="nexus-s2-rail-index" data-s2-collider="rail-index" style={{ color: "var(--nexus-cyan)" }}>01</div>
                      <h3 className="nexus-s2-rail-title" data-s2-collider="rail-title">Input fragments</h3>
                      <p className="nexus-s2-rail-copy">Prompts, screenshots, references, moods, loose concepts, and visual signals.</p>
                    </div>
                    <div className="nexus-s2-rail-item" data-s2-collider="rail-card">
                      <div className="nexus-s2-rail-index" data-s2-collider="rail-index" style={{ color: "var(--nexus-pink)" }}>02</div>
                      <h3 className="nexus-s2-rail-title" data-s2-collider="rail-title">Force collision</h3>
                      <p className="nexus-s2-rail-copy">The system compares, compresses, remixes, rejects, and sharpens the direction.</p>
                    </div>
                    <div className="nexus-s2-rail-item" data-s2-collider="rail-card">
                      <div className="nexus-s2-rail-index" data-s2-collider="rail-index" style={{ color: "var(--nexus-gold)" }}>03</div>
                      <h3 className="nexus-s2-rail-title" data-s2-collider="rail-title">Lock the world</h3>
                      <p className="nexus-s2-rail-copy">The strongest patterns become typography, color, layout, motion, and section rhythm.</p>
                    </div>
                  </div>

                  <div className="nexus-s2-info-card" data-s2-collider="info-card">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="h-2.5 w-2.5" style={{ background: "var(--nexus-cyan)", boxShadow: "0 0 12px rgba(53, 221, 242, 0.9)" }}></div>
                      <div className="text-[0.65rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(53, 221, 242, 0.80)" }}>First transformation</div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(248, 243, 255, 0.62)" }}>
                      This is where falling fragments stop being random pixels and start becoming a readable creative structure.
                    </p>
                  </div>

                  <div className="nexus-s2-note" data-s2-collider="note-card">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center font-arcade text-2xl" style={{ border: "1px solid rgba(232, 184, 93, 0.35)", color: "var(--nexus-gold)" }}>i</div>
                      <div className="text-[0.65rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(232, 184, 93, 0.72)" }}>System note</div>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(232, 184, 93, 0.72)" }}>
                      Better inputs create better collisions. Better collisions create better worlds.
                      This chamber is the first physical stop in the page-wide falling block sequence.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="nexus-s2-machine" data-s2-collider="machine">
                    <div className="nexus-s2-machine-header" data-s2-collider="machine-header">
                      <div>
                        <div className="text-[0.62rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(248, 243, 255, 0.40)" }}>Nexus Engine v2.0</div>
                        <div className="nexus-s2-machine-title" data-s2-collider="machine-title">Conversion chamber</div>
                      </div>
                      <div className="nexus-s2-machine-status" data-s2-collider="machine-status">
                        <span></span>
                        Online
                      </div>
                    </div>

                    <div className="nexus-s2-monitor" data-s2-collider="monitor">
                      <div className="nexus-s2-node-line one"></div>
                      <div className="nexus-s2-node-line two"></div>
                      <div className="nexus-s2-node-line three"></div>
                      <div className="nexus-s2-node-line four"></div>
                      <div className="nexus-s2-node input" data-s2-collider="node">Raw input</div>
                      <div className="nexus-s2-node collision" data-s2-collider="node">Collision</div>
                      <div className="nexus-s2-node system" data-s2-collider="node">Rules locked</div>
                      <div className="nexus-s2-node output" data-s2-collider="node">Playable form</div>
                      <div className="nexus-s2-chamber" data-s2-collider="chamber">
                        <div className="nexus-s2-core"></div>
                      </div>
                      <div className="nexus-s2-flow-pixel" style={{ "--delay": "0s" } as any}></div>
                      <div className="nexus-s2-flow-pixel pink" style={{ "--delay": "-1.2s" } as any}></div>
                      <div className="nexus-s2-flow-pixel gold" style={{ "--delay": "-2.4s" } as any}></div>
                      <div className="nexus-s2-flow-pixel blue" style={{ "--delay": "-3.6s" } as any}></div>
                      <div className="nexus-s2-console" data-s2-collider="console">
                        <div className="grid gap-4 md:grid-cols-[1fr_150px] md:items-end">
                          <div>
                            <div className="nexus-s2-meter-label">
                              <span>World stability</span>
                              <span style={{ color: "var(--nexus-cyan)" }}>active</span>
                            </div>
                            <div className="nexus-s2-meter"><span></span></div>
                          </div>
                          <div className="p-3 text-right" data-s2-collider="run-score" style={{ border: "1px solid rgba(232, 184, 93, 0.22)", background: "rgba(232, 184, 93, 0.06)" }}>
                            <div className="text-[0.58rem] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(232, 184, 93, 0.70)" }}>Current run</div>
                            <div className="font-arcade text-3xl leading-none" style={{ color: "var(--nexus-gold)" }}>87%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03 — GAME MODES */}
        <section id="game-modes" className="nexus-s3-section">
          <div id="section-3-catcher" className="nexus-s3-catcher">
            <div className="nexus-s3-inner">
              <div className="nexus-s3-header">
                <div className="nexus-s3-eyebrow" data-s3-collider="eyebrow">
                  <span className="font-arcade text-2xl leading-none">//</span>
                  <span className="text-xs font-bold uppercase tracking-[0.28em]">Choose your route</span>
                </div>
                <h2 className="nexus-s3-title">
                  <span className="line-one" data-s3-collider="headline">Choose your</span>
                  <span className="line-two" data-s3-collider="headline">game mode</span>
                </h2>
                <p className="nexus-s3-copy" data-s3-collider="subtitle">
                  Different missions. Different rules. One goal: turn creative fragments into a complete world with the right level of speed, structure, and polish.
                </p>
              </div>

              <div className="nexus-s3-mode-grid">
                {/* Card 01 */}
                <article className="nexus-s3-card is-cyan is-selected" data-s3-collider="card">
                  <div className="nexus-s3-card-content">
                    <div className="nexus-s3-card-top" data-s3-collider="card-top">
                      <div className="nexus-s3-index" data-s3-collider="card-index">01</div>
                      <div className="nexus-s3-badge" data-s3-collider="badge">Selected</div>
                    </div>
                    <div className="nexus-s3-icon-wrap" data-s3-collider="icon">
                      {/* @ts-ignore */}
                      <iconify-icon icon="solar:gamepad-minimalistic-linear"></iconify-icon>
                    </div>
                    <h3 className="nexus-s3-card-title" data-s3-collider="card-title">Arcade Mode</h3>
                    <p className="nexus-s3-card-copy" data-s3-collider="card-copy">Rapid-fire creativity. Generate, test, and explore visual ideas at lightning speed.</p>
                    <div className="nexus-s3-meter-list" data-s3-collider="meters">
                      <div className="nexus-s3-meter-row"><span>Speed</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "96%", "--delay": "0s" } as any}></i></div></div>
                      <div className="nexus-s3-meter-row"><span>Clarity</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "74%", "--delay": "-0.6s" } as any}></i></div></div>
                      <div className="nexus-s3-meter-row"><span>Risk</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "62%", "--delay": "-1.2s" } as any}></i></div></div>
                    </div>
                  </div>
                  <div className="nexus-s3-action" data-s3-collider="action">
                    <span>Select mode</span><span>Fast run</span>
                  </div>
                </article>

                {/* Card 02 */}
                <article className="nexus-s3-card is-pink" data-s3-collider="card">
                  <div className="nexus-s3-card-content">
                    <div className="nexus-s3-card-top" data-s3-collider="card-top">
                      <div className="nexus-s3-index" data-s3-collider="card-index">02</div>
                    </div>
                    <div className="nexus-s3-icon-wrap" data-s3-collider="icon">
                      {/* @ts-ignore */}
                      <iconify-icon icon="solar:map-point-wave-linear"></iconify-icon>
                    </div>
                    <h3 className="nexus-s3-card-title" data-s3-collider="card-title">Campaign Mode</h3>
                    <p className="nexus-s3-card-copy" data-s3-collider="card-copy">Build a complete journey. Shape full landing pages section by section with narrative flow.</p>
                    <div className="nexus-s3-meter-list" data-s3-collider="meters">
                      <div className="nexus-s3-meter-row"><span>Speed</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "72%", "--delay": "-0.2s" } as any}></i></div></div>
                      <div className="nexus-s3-meter-row"><span>Flow</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "94%", "--delay": "-0.8s" } as any}></i></div></div>
                      <div className="nexus-s3-meter-row"><span>Polish</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "88%", "--delay": "-1.4s" } as any}></i></div></div>
                    </div>
                  </div>
                  <div className="nexus-s3-action" data-s3-collider="action">
                    <span>Select mode</span><span>Full build</span>
                  </div>
                </article>

                {/* Card 03 */}
                <article className="nexus-s3-card is-purple" data-s3-collider="card">
                  <div className="nexus-s3-card-content">
                    <div className="nexus-s3-card-top" data-s3-collider="card-top">
                      <div className="nexus-s3-index" data-s3-collider="card-index">03</div>
                    </div>
                    <div className="nexus-s3-icon-wrap" data-s3-collider="icon">
                      {/* @ts-ignore */}
                      <iconify-icon icon="solar:crown-star-linear"></iconify-icon>
                    </div>
                    <h3 className="nexus-s3-card-title" data-s3-collider="card-title">Boss Mode</h3>
                    <p className="nexus-s3-card-copy" data-s3-collider="card-copy">Face the hard truths. Hunt weak layouts, poor hierarchy, generic copy, and visual noise.</p>
                    <div className="nexus-s3-meter-list" data-s3-collider="meters">
                      <div className="nexus-s3-meter-row"><span>Pressure</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "92%", "--delay": "-0.3s" } as any}></i></div></div>
                      <div className="nexus-s3-meter-row"><span>Clarity</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "86%", "--delay": "-0.9s" } as any}></i></div></div>
                      <div className="nexus-s3-meter-row"><span>Fix rate</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "78%", "--delay": "-1.5s" } as any}></i></div></div>
                    </div>
                  </div>
                  <div className="nexus-s3-action" data-s3-collider="action">
                    <span>Select mode</span><span>Audit run</span>
                  </div>
                </article>

                {/* Card 04 */}
                <article className="nexus-s3-card is-blue" data-s3-collider="card">
                  <div className="nexus-s3-card-content">
                    <div className="nexus-s3-card-top" data-s3-collider="card-top">
                      <div className="nexus-s3-index" data-s3-collider="card-index">04</div>
                    </div>
                    <div className="nexus-s3-icon-wrap" data-s3-collider="icon">
                      {/* @ts-ignore */}
                      <iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
                    </div>
                    <h3 className="nexus-s3-card-title" data-s3-collider="card-title">Sandbox Mode</h3>
                    <p className="nexus-s3-card-copy" data-s3-collider="card-copy">No rules, just possibilities. Remix references, colors, layouts, and components freely.</p>
                    <div className="nexus-s3-meter-list" data-s3-collider="meters">
                      <div className="nexus-s3-meter-row"><span>Freedom</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "98%", "--delay": "-0.4s" } as any}></i></div></div>
                      <div className="nexus-s3-meter-row"><span>Risk</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "76%", "--delay": "-1s" } as any}></i></div></div>
                      <div className="nexus-s3-meter-row"><span>Range</span><div className="nexus-s3-meter-track"><i className="nexus-s3-meter-fill" style={{ "--meter-width": "91%", "--delay": "-1.6s" } as any}></i></div></div>
                    </div>
                  </div>
                  <div className="nexus-s3-action" data-s3-collider="action">
                    <span>Select mode</span><span>Free remix</span>
                  </div>
                </article>
              </div>

              <div className="nexus-s3-footer-row">
                <div className="nexus-s3-tip" data-s3-collider="tip">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center font-arcade text-3xl" style={{ border: "1px solid rgba(53, 221, 242, 0.40)", color: "var(--nexus-cyan)" }}>i</div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: "var(--nexus-cyan)" }}>Tip</div>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(248, 243, 255, 0.70)" }}>
                        Start in Arcade Mode when the idea is still loose. Switch to Campaign Mode once the world starts to take shape.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="nexus-s3-rank" data-s3-collider="rank">
                  <div className="flex items-center justify-between gap-5">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: "rgba(232, 184, 93, 0.75)" }}>Your Rank</div>
                      <div className="mt-2 font-display text-3xl font-extrabold uppercase tracking-[-0.05em] text-white">Creative Player</div>
                    </div>
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2" style={{ borderColor: "rgba(232, 184, 93, 0.55)", color: "var(--nexus-gold)", boxShadow: "0 0 24px rgba(232, 184, 93, 0.18)" }}>
                      <span className="font-arcade text-4xl">N</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 — COLLISION ENGINE */}
        <section id="collision-engine" className="nexus-s4-section">
          <div id="section-4-catcher" className="nexus-s4-catcher">
            <div className="nexus-s4-inner">
              <div className="nexus-s4-layout">
                <div className="relative z-10">
                  <div className="nexus-s4-eyebrow" data-s4-collider="eyebrow">
                    <span className="font-arcade text-2xl leading-none">//</span>
                    <span className="text-xs font-bold uppercase tracking-[0.28em]">System pressure layer</span>
                  </div>
                  <h2 className="nexus-s4-title">
                    <span className="line-one" data-s4-collider="headline">Collision</span>
                    <span className="line-two" data-s4-collider="headline">Engine</span>
                  </h2>
                  <p className="nexus-s4-copy" data-s4-collider="subtitle">
                    The engine does not simply generate ideas. It applies pressure. Inputs collide, weak signals break apart, useful patterns survive, and the strongest direction becomes easier to build.
                  </p>
                  <div className="nexus-s4-process">
                    <article className="nexus-s4-process-card is-cyan" data-s4-collider="process-card">
                      <div className="nexus-s4-process-card-inner">
                        <div className="nexus-s4-process-index" data-s4-collider="process-index">01</div>
                        <div>
                          <h3 className="nexus-s4-process-title" data-s4-collider="process-title">Drop Inputs</h3>
                          <p className="nexus-s4-process-copy" data-s4-collider="process-copy">Prompts, references, colors, moods, screenshots, layout fragments, and rough creative instincts enter the system.</p>
                        </div>
                      </div>
                    </article>
                    <article className="nexus-s4-process-card is-pink" data-s4-collider="process-card">
                      <div className="nexus-s4-process-card-inner">
                        <div className="nexus-s4-process-index" data-s4-collider="process-index">02</div>
                        <div>
                          <h3 className="nexus-s4-process-title" data-s4-collider="process-title">Force Collision</h3>
                          <p className="nexus-s4-process-copy" data-s4-collider="process-copy">Ideas are compared, remixed, rejected, compressed, and pushed until a sharper visual language emerges.</p>
                        </div>
                      </div>
                    </article>
                    <article className="nexus-s4-process-card is-gold" data-s4-collider="process-card">
                      <div className="nexus-s4-process-card-inner">
                        <div className="nexus-s4-process-index" data-s4-collider="process-index">03</div>
                        <div>
                          <h3 className="nexus-s4-process-title" data-s4-collider="process-title">Lock Direction</h3>
                          <p className="nexus-s4-process-copy" data-s4-collider="process-copy">The strongest patterns become rules: typography, color, hierarchy, interaction, and section rhythm.</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="nexus-s4-machine" data-s4-collider="machine">
                    <div className="nexus-s4-machine-header" data-s4-collider="machine-header">
                      <div>
                        <div className="text-[0.62rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(232, 184, 93, 0.62)" }}>Engine Status</div>
                        <div className="nexus-s4-status-title" data-s4-collider="status-title">Collision Stable</div>
                      </div>
                      <div className="nexus-s4-status-badge" data-s4-collider="status-badge">
                        <span></span>
                        Online
                      </div>
                    </div>
                    <div className="nexus-s4-monitor" data-s4-collider="monitor">
                      <div className="nexus-s4-monitor-label color" data-s4-collider="monitor-label">Color</div>
                      <div className="nexus-s4-monitor-label type" data-s4-collider="monitor-label">Type</div>
                      <div className="nexus-s4-monitor-label motion" data-s4-collider="monitor-label">Motion</div>
                      <div className="nexus-s4-monitor-label system" data-s4-collider="monitor-label">System</div>
                      <div className="nexus-s4-core-field" data-s4-collider="core-field">
                        <div className="nexus-s4-ring"></div>
                        <div className="nexus-s4-ring"></div>
                        <div className="nexus-s4-ring"></div>
                        <div className="nexus-s4-core" data-s4-collider="core"></div>
                        <span className="nexus-s4-orbit-dot d1"></span>
                        <span className="nexus-s4-orbit-dot d2"></span>
                        <span className="nexus-s4-orbit-dot d3"></span>
                        <span className="nexus-s4-orbit-dot d4"></span>
                      </div>
                      <div className="nexus-s4-console" data-s4-collider="console">
                        <div className="nexus-s4-console-grid">
                          <div style={{ color: "var(--nexus-cyan)" }} data-s4-collider="signal">
                            <div className="nexus-s4-signal-label"><span>Signal Match</span><span>94%</span></div>
                            <div className="nexus-s4-signal-track"><i className="nexus-s4-signal-fill" style={{ "--signal-width": "94%", "--delay": "0s" } as any}></i></div>
                          </div>
                          <div style={{ color: "var(--nexus-pink)" }} data-s4-collider="signal">
                            <div className="nexus-s4-signal-label"><span>Remix Force</span><span>88%</span></div>
                            <div className="nexus-s4-signal-track"><i className="nexus-s4-signal-fill" style={{ "--signal-width": "88%", "--delay": "-0.8s" } as any}></i></div>
                          </div>
                          <div style={{ color: "var(--nexus-gold)" }} data-s4-collider="signal">
                            <div className="nexus-s4-signal-label"><span>World Lock</span><span>97%</span></div>
                            <div className="nexus-s4-signal-track"><i className="nexus-s4-signal-fill" style={{ "--signal-width": "97%", "--delay": "-1.4s" } as any}></i></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05 — HIGH SCORES */}
        <section id="high-scores" className="nexus-s5-section">
          <div id="section-5-catcher" className="nexus-s5-stage">
            <div className="nexus-s5-inner">
              <div className="nexus-s5-header">
                <div>
                  <div className="nexus-s5-eyebrow" data-s5-collider="eyebrow">
                    <span className="font-arcade text-2xl leading-none">//</span>
                    <span className="text-xs font-bold uppercase tracking-[0.28em]">Performance layer</span>
                  </div>
                  <h2 className="nexus-s5-title">
                    <span className="line-one" data-s5-collider="headline">High</span>
                    <span className="line-two" data-s5-collider="headline">Scores</span>
                  </h2>
                </div>
                <div className="lg:ml-auto">
                  <p className="nexus-s5-copy" data-s5-collider="subtitle">
                    Every run leaves a signal. Track the worlds created, systems stabilized, layouts upgraded, and creative loops completed across the Idea Arcade.
                  </p>
                  <div className="nexus-s5-tags" data-s5-collider="tags">
                    <span className="nexus-s5-tag text-[#00f0ff]" data-s5-collider="tag">Live Board</span>
                    <span className="nexus-s5-tag text-[#6f9bff]" data-s5-collider="tag">Creative Runs</span>
                    <span className="nexus-s5-tag text-[#ff66b3]" data-s5-collider="tag">World Lock</span>
                  </div>
                </div>
              </div>

              <div className="nexus-s5-metrics">
                <article className="nexus-s5-metric-card is-cyan" data-s5-collider="metric-card">
                  <div className="nexus-s5-metric-inner">
                    <div className="nexus-s5-metric-top" data-s5-collider="metric-top">
                      <div className="nexus-s5-metric-label">Concepts</div>
                      <span className="nexus-s5-dot" style={{ "--delay": "0s" } as any}></span>
                    </div>
                    <div className="nexus-s5-number" data-s5-collider="metric-number">
                      <span className="nexus-count" data-count="128">0</span>
                    </div>
                    <div className="nexus-s5-caption" data-s5-collider="metric-caption">Generated Ideas</div>
                  </div>
                </article>
                <article className="nexus-s5-metric-card is-blue" data-s5-collider="metric-card">
                  <div className="nexus-s5-metric-inner">
                    <div className="nexus-s5-metric-top" data-s5-collider="metric-top">
                      <div className="nexus-s5-metric-label">Worlds</div>
                      <span className="nexus-s5-dot" style={{ "--delay": "-0.4s" } as any}></span>
                    </div>
                    <div className="nexus-s5-number" data-s5-collider="metric-number">
                      <span className="nexus-count" data-count="42">0</span>
                    </div>
                    <div className="nexus-s5-caption" data-s5-collider="metric-caption">Stabilized Systems</div>
                  </div>
                </article>
                <article className="nexus-s5-metric-card is-pink" data-s5-collider="metric-card">
                  <div className="nexus-s5-metric-inner">
                    <div className="nexus-s5-metric-top" data-s5-collider="metric-top">
                      <div className="nexus-s5-metric-label">Speed</div>
                      <span className="nexus-s5-dot" style={{ "--delay": "-0.8s" } as any}></span>
                    </div>
                    <div className="nexus-s5-number" data-s5-collider="metric-number">
                      <span className="nexus-count" data-count="9.8" data-decimal="1" data-suffix="x">0</span>
                    </div>
                    <div className="nexus-s5-caption" data-s5-collider="metric-caption">Faster Direction</div>
                  </div>
                </article>
                <article className="nexus-s5-metric-card is-purple" data-s5-collider="metric-card">
                  <div className="nexus-s5-metric-inner">
                    <div className="nexus-s5-metric-top" data-s5-collider="metric-top">
                      <div className="nexus-s5-metric-label">Modes</div>
                      <span className="nexus-s5-dot" style={{ "--delay": "-1.2s" } as any}></span>
                    </div>
                    <div className="nexus-s5-number" data-s5-collider="metric-number">
                      <span className="nexus-count" data-count="4" data-prefix="0">0</span>
                    </div>
                    <div className="nexus-s5-caption" data-s5-collider="metric-caption">Active Game Modes</div>
                  </div>
                </article>
              </div>

              <div className="nexus-s5-board-grid">
                <div className="nexus-s5-leaderboard" data-s5-collider="leaderboard">
                  <div className="nexus-s5-leaderboard-head" data-s5-collider="leaderboard-head">
                    <div>Rank</div><div>Player</div><div>Run Type</div><div className="text-right">Score</div>
                  </div>
                  {[
                    { rank: "01", color: "#00f0ff", name: "NovaByte", meta: "Visual System Run", type: "Brand System", score: "98,400" },
                    { rank: "02", color: "#6f9bff", name: "Mira Vector", meta: "Campaign Completion", type: "Landing Page", score: "87,200" },
                    { rank: "03", color: "#ff66b3", name: "PixelMancer", meta: "Motion Pattern Lock", type: "Motion Concept", score: "76,900" },
                    { rank: "04", color: "#b45cff", name: "Ryo Signal", meta: "Sandbox Remix Chain", type: "Visual Identity", score: "71,300" },
                  ].map((row) => (
                    <div key={row.rank} className="nexus-s5-row" data-s5-collider="leaderboard-row">
                      <div className="nexus-s5-rank-number" data-s5-collider="rank" style={{ color: row.color }}>{row.rank}</div>
                      <div>
                        <div className="nexus-s5-player-name" data-s5-collider="player-name">{row.name}</div>
                        <div className="nexus-s5-player-meta" data-s5-collider="player-meta">{row.meta}</div>
                      </div>
                      <div className="nexus-s5-run-type" data-s5-collider="run-type" style={{ color: row.color }}>{row.type}</div>
                      <div className="nexus-s5-score" data-s5-collider="score" style={{ color: row.color }}>{row.score}</div>
                    </div>
                  ))}
                </div>

                <aside className="nexus-s5-current-run" data-s5-collider="current-run">
                  <div className="nexus-s5-run-panel">
                    <div className="flex items-center justify-between gap-5" data-s5-collider="run-header">
                      <div>
                        <div className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#00f0ff]/75">Current Run</div>
                        <div className="mt-2 font-display text-3xl font-extrabold uppercase tracking-[-0.055em] text-white">Arcade Mode</div>
                      </div>
                      <div className="nexus-s5-run-icon" data-s5-collider="run-icon">
                        {/* @ts-ignore */}
                        <iconify-icon icon="solar:gamepad-minimalistic-linear" class="text-3xl"></iconify-icon>
                      </div>
                    </div>
                    <div className="nexus-s5-progress-group" data-s5-collider="progress-group">
                      {[
                        { label: "World Stability", val: "87%", width: "87%", color: "#00f0ff", delay: "0s" },
                        { label: "Signal Clarity", val: "74%", width: "74%", color: "#6f9bff", delay: "0.18s" },
                        { label: "Remix Depth", val: "91%", width: "91%", color: "#ff66b3", delay: "0.36s" },
                      ].map((p) => (
                        <div key={p.label} style={{ color: p.color }} data-s5-collider="progress-row">
                          <div className="nexus-s5-progress-label"><span>{p.label}</span><span>{p.val}</span></div>
                          <div className="nexus-s5-progress-track">
                            <i className="nexus-s5-progress-fill" style={{ "--target-width": p.width, "--delay": p.delay } as any}></i>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="nexus-s5-bonus" data-s5-collider="bonus">
                      <div className="nexus-s5-bonus-title" data-s5-collider="bonus-title">Bonus Round</div>
                      <p className="mt-3 text-sm leading-relaxed text-gray-300" data-s5-collider="bonus-copy">
                        Complete one more remix chain to unlock a cleaner system direction.
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06 — CHEAT CODES */}
        <section id="cheat-codes" className="nexus-s6-section">
          <div id="section-6-catcher" className="nexus-s6-stage">
            <div className="nexus-s6-inner">
              <div className="nexus-s6-header">
                <div className="nexus-s6-eyebrow" data-s6-collider="eyebrow">
                  <span className="font-arcade text-2xl leading-none">//</span>
                  <span className="text-xs font-bold uppercase tracking-[0.28em]">Command layer</span>
                </div>
                <h2 className="nexus-s6-title">
                  <span className="line-one" data-s6-collider="headline">Cheat</span>
                  <span className="line-two" data-s6-collider="headline">Codes</span>
                </h2>
                <p className="nexus-s6-copy" data-s6-collider="subtitle">
                  Not every creative problem needs a full rebuild. Sometimes you need the right command: lock the style, chain the remix, sync the section rhythm, or export the world.
                </p>
                <div className="nexus-s6-command" data-s6-collider="main-command">
                  <div className="nexus-s6-command-inner">
                    <div>
                      <div className="nexus-s6-command-label" data-s6-collider="command-label">Enter code</div>
                      <div className="nexus-s6-command-code" data-s6-collider="command-code">
                        &gt; unlock<span>_creative_system</span><span className="nexus-s6-cursor">_</span>
                      </div>
                    </div>
                    <div className="nexus-s6-command-button" data-s6-collider="command-button">Execute</div>
                  </div>
                </div>
              </div>

              <div className="nexus-s6-layout">
                <div className="nexus-s6-code-grid">
                  {[
                    { num: "01", cls: "is-pink", icon: "solar:lock-keyhole-linear", title: "STYLE_LOCK", copy: "Preserve the strongest visual direction so future sections keep the same design DNA.", cmd: "/lock style --active" },
                    { num: "02", cls: "is-purple", icon: "solar:refresh-circle-linear", title: "REMIX_CHAIN", copy: "Create new variations from an existing direction without losing the original creative thread.", cmd: "/remix chain --x04" },
                    { num: "03", cls: "is-blue", icon: "solar:layers-minimalistic-linear", title: "SECTION_SYNC", copy: "Keep spacing, hierarchy, type scale, borders, and interaction logic consistent across the page.", cmd: "/sync sections --all" },
                    { num: "04", cls: "is-cyan", icon: "solar:shield-warning-linear", title: "BOSS_FIX", copy: "Detect weak hierarchy, muddy contrast, generic UI patterns, and layout imbalance before shipping.", cmd: "/boss fix --critical" },
                  ].map((card) => (
                    <article key={card.num} className={`nexus-s6-card ${card.cls}`} data-s6-collider="code-card">
                      <div className="nexus-s6-card-inner">
                        <div className="nexus-s6-card-top" data-s6-collider="card-top">
                          <div className="nexus-s6-index" data-s6-collider="card-index">{card.num}</div>
                          <div className="nexus-s6-icon" data-s6-collider="card-icon">
                            {/* @ts-ignore */}
                            <iconify-icon icon={card.icon}></iconify-icon>
                          </div>
                        </div>
                        <h3 className="nexus-s6-card-title" data-s6-collider="card-title">{card.title}</h3>
                        <p className="nexus-s6-card-copy" data-s6-collider="card-copy">{card.copy}</p>
                        <div className="nexus-s6-card-command" data-s6-collider="card-command">
                          <div className="nexus-s6-card-command-label">Command</div>
                          <div className="nexus-s6-card-command-code">{card.cmd}</div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <aside className="nexus-s6-terminal" data-s6-collider="terminal">
                  <div className="nexus-s6-terminal-inner">
                    <div className="nexus-s6-terminal-head" data-s6-collider="terminal-head">
                      <div>
                        <div className="text-[0.65rem] font-bold uppercase tracking-[0.24em]" style={{ color: "rgba(244, 91, 168, 0.75)" }}>Terminal</div>
                        <div className="mt-2 font-display text-3xl font-extrabold uppercase tracking-[-0.055em] text-white" data-s6-collider="terminal-title">Code Console</div>
                      </div>
                      <div className="nexus-s6-dots" data-s6-collider="terminal-dots">
                        <span style={{ background: "var(--nexus-pink)", color: "var(--nexus-pink)" }}></span>
                        <span style={{ background: "var(--nexus-purple)", color: "var(--nexus-purple)" }}></span>
                        <span style={{ background: "var(--nexus-cyan)", color: "var(--nexus-cyan)" }}></span>
                      </div>
                    </div>
                    <div className="nexus-s6-terminal-lines" data-s6-collider="terminal-lines">
                      <div style={{ color: "var(--nexus-pink)" }} data-s6-collider="terminal-line">&gt; boot creative_engine</div>
                      <div className="text-gray-500" data-s6-collider="terminal-line">loading visual memory...</div>
                      <div style={{ color: "var(--nexus-purple)" }} data-s6-collider="terminal-line">style map detected</div>
                      <div className="text-gray-500" data-s6-collider="terminal-line">checking section rhythm...</div>
                      <div style={{ color: "var(--nexus-cyan)" }} data-s6-collider="terminal-line">generic patterns removed</div>
                      <div className="text-gray-500" data-s6-collider="terminal-line">stabilizing direction...</div>
                      <div style={{ color: "var(--nexus-pink)" }} data-s6-collider="terminal-line">
                        &gt; world_export ready<span className="nexus-s6-cursor">_</span>
                      </div>
                    </div>
                    <div className="nexus-s6-export" data-s6-collider="export">
                      <div className="nexus-s6-export-top" data-s6-collider="export-top">
                        <div>
                          <div className="text-[0.65rem] font-bold uppercase tracking-[0.24em]" style={{ color: "rgba(164, 119, 255, 0.75)" }}>Final Code</div>
                          <div className="nexus-s6-export-title" data-s6-collider="export-title">WORLD_EXPORT</div>
                        </div>
                        <div className="nexus-s6-export-icon" data-s6-collider="export-icon">
                          {/* @ts-ignore */}
                          <iconify-icon icon="solar:export-linear" class="text-3xl"></iconify-icon>
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(248, 243, 255, 0.70)" }} data-s6-collider="export-copy">
                        Turn the final creative direction into a reusable HTML system with consistent visual rules.
                      </p>
                      <div className="nexus-s6-meter-group" data-s6-collider="meter-group">
                        {[
                          { label: "Structure", val: "94%", color: "var(--nexus-pink)", width: "94%", delay: "0s" },
                          { label: "Visual DNA", val: "88%", color: "var(--nexus-purple)", width: "88%", delay: "-0.8s" },
                          { label: "Export Readiness", val: "97%", color: "var(--nexus-cyan)", width: "97%", delay: "-1.4s" },
                        ].map((m) => (
                          <div key={m.label} style={{ color: m.color }} data-s6-collider="meter-row">
                            <div className="nexus-s6-meter-label"><span>{m.label}</span><span>{m.val}</span></div>
                            <div className="nexus-s6-meter-track">
                              <i className="nexus-s6-meter-fill" style={{ "--meter-width": m.width, "--delay": m.delay } as any}></i>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="nexus-s6-chip-row" data-s6-collider="chips">
                      <span className="nexus-s6-chip" data-s6-collider="chip" style={{ "--delay": "0s", color: "var(--nexus-pink)" } as any}>HTML</span>
                      <span className="nexus-s6-chip" data-s6-collider="chip" style={{ "--delay": "-0.6s", color: "var(--nexus-purple)" } as any}>Design DNA</span>
                      <span className="nexus-s6-chip" data-s6-collider="chip" style={{ "--delay": "-1.2s", color: "var(--nexus-cyan)" } as any}>Export</span>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 07 — FINAL CTA */}
        <section id="join-the-guild" className="nexus-s7-section">
          <div id="section-7-catcher" className="nexus-s7-stage">
            <div className="nexus-s7-inner">
              <div className="nexus-s7-core" data-s7-collider="core">
                <div className="nexus-s7-ring r1"></div>
                <div className="nexus-s7-ring r2"></div>
                <div className="nexus-s7-ring r3"></div>
                <div className="nexus-s7-coin" data-s7-collider="coin">
                  <span className="font-arcade text-6xl leading-none">N</span>
                </div>
              </div>
              <div className="nexus-s7-eyebrow" data-s7-collider="eyebrow">
                <span className="font-arcade text-2xl leading-none">//</span>
                <span className="text-xs font-bold uppercase tracking-[0.28em]">Final stage</span>
              </div>
              <h2 className="nexus-s7-title">
                <span className="line-one" data-s7-collider="headline">Your Next</span><br />
                <span className="line-two" data-s7-collider="headline">World Is Waiting</span>
              </h2>
              <p className="nexus-s7-copy" data-s7-collider="subtitle">
                Start with a loose idea, a visual reference, or a messy prompt. NEXUS gives it a playable system, a sharper design direction, and a clearer path from chaos to finished creative work.
              </p>
              <div className="nexus-s7-actions" data-s7-collider="buttons">
                <a href="#" className="nexus-s7-button-primary" data-s7-collider="button">
                  Insert Coin
                  {/* @ts-ignore */}
                  <iconify-icon icon="solar:round-alt-arrow-right-linear" class="text-2xl"></iconify-icon>
                </a>
                <a href="#game-modes" className="nexus-s7-button-secondary" data-s7-collider="button">
                  Replay Modes
                </a>
              </div>
              <div className="nexus-s7-status" data-s7-collider="status">
                <div className="nexus-s7-status-grid">
                  <div className="nexus-s7-status-item" data-s7-collider="status-card">
                    <div className="font-arcade text-4xl leading-none" style={{ color: "var(--nexus-cyan)" }}>128</div>
                    <div className="mt-2 text-[0.58rem] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(248, 243, 255, 0.42)" }}>Input fragments</div>
                  </div>
                  <div className="nexus-s7-status-item" data-s7-collider="status-card">
                    <div className="font-arcade text-4xl leading-none" style={{ color: "var(--nexus-pink)" }}>42</div>
                    <div className="mt-2 text-[0.58rem] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(248, 243, 255, 0.42)" }}>World collisions</div>
                  </div>
                  <div className="nexus-s7-status-item" data-s7-collider="status-card">
                    <div className="font-arcade text-4xl leading-none" style={{ color: "var(--nexus-gold)" }}>87%</div>
                    <div className="mt-2 text-[0.58rem] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(248, 243, 255, 0.42)" }}>World stability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="nexus-footer">
          <div className="nexus-footer-shell">
            <div className="nexus-footer-grid">
              <div className="nexus-footer-logo">
                <span className="nexus-footer-mark">
                  <span className="font-arcade text-3xl leading-none">N</span>
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-display text-[1.35rem] font-extrabold uppercase tracking-[-0.04em] text-white">Nexus</span>
                  <span className="mt-1 text-[0.56rem] font-bold uppercase tracking-[0.30em]" style={{ color: "rgba(232, 184, 93, 0.70)" }}>Idea Arcade</span>
                </span>
              </div>
              <nav className="nexus-footer-nav">
                <a href="#hero" className="nexus-footer-link">Arcade</a>
                <a href="#game-modes" className="nexus-footer-link">Modes</a>
                <a href="#high-scores" className="nexus-footer-link">Scores</a>
                <a href="#cheat-codes" className="nexus-footer-link">Cheats</a>
                <a href="#join-the-guild" className="nexus-footer-link">Guild</a>
              </nav>
              <div className="flex items-center justify-start gap-3 lg:justify-end">
                <span className="h-2.5 w-2.5" style={{ background: "var(--nexus-cyan)", boxShadow: "0 0 12px rgba(53, 221, 242, 0.85)" }}></span>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(53, 221, 242, 0.78)" }}>Creative engine online</span>
              </div>
            </div>
            <div className="nexus-footer-meta">
              <span>© 2026 NEXUS Idea Arcade. All systems online.</span>
              <span>Designed for creative collisions, remix chains, and playable worlds.</span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

function initNexusApp() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const Matter = window.Matter;

  gsap.registerPlugin(ScrollTrigger);

  const CLIP_HIDDEN = "inset(0% 0% 100% 0%)";
  const CLIP_SHOWN = "inset(0% 0% 0% 0%)";
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    function buildReveal(trigger: string, steps: any[], start = "top 80%") {
      steps.forEach((step: any) => {
        gsap.set(step.targets, { transition: "none", autoAlpha: 0, ...step.from });
      });
      const tl = gsap.timeline({
        defaults: { duration: 0.7, ease: "power3.out" },
        scrollTrigger: { trigger, start, toggleActions: "play none none none" },
        onComplete: () => {
          steps.forEach((step: any) => { gsap.set(step.targets, { clearProps: "transition" }); });
        }
      });
      steps.forEach((step: any) => { tl.to(step.targets, { autoAlpha: 1, ...step.to }, step.at); });
      return tl;
    }

    gsap.set(".nexus-header", { xPercent: -50, x: 0, y: -28, autoAlpha: 0 });
    gsap.to(".nexus-header", { y: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out", delay: 0.15 });

    const heroWords = gsap.utils.toArray("#hero-title .word-collider > span");
    gsap.set(heroWords, { yPercent: 80, autoAlpha: 0 });
    gsap.to(heroWords, {
      yPercent: 0, autoAlpha: 1, duration: 1.0, ease: "power4.out", stagger: 0.15, delay: 0.2,
      onComplete: () => {
        setTimeout(() => { createWordColliders(); releaseDelayedWave(); }, 120);
      }
    });

    gsap.set(["#hero-kicker", "#hero-desc", "#hero-cta", "#hero-stats"], { y: 22, autoAlpha: 0 });
    gsap.to(["#hero-kicker", "#hero-desc", "#hero-cta", "#hero-stats"], { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out", stagger: 0.16, delay: 0.55 });

    gsap.set(".nexus-core-wrap", { autoAlpha: 0, y: 36, scale: 0.97 });
    gsap.to(".nexus-core-wrap", { autoAlpha: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out", delay: 0.7 });
    gsap.to(".nexus-core-wrap", { yPercent: -9, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 } });

    buildReveal("#chaos-to-form", [
      { targets: ".nexus-s2-corner", from: { scale: 0 }, to: { scale: 1, duration: 0.5, ease: "back.out(2)", stagger: 0.07 }, at: 0 },
      { targets: "#chaos-to-form .nexus-s2-title .line-one, #chaos-to-form .nexus-s2-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.1 },
      { targets: ".nexus-s2-intro", from: { y: 24 }, to: { y: 0 }, at: 0.4 },
      { targets: ".nexus-s2-rail-item", from: { x: -34 }, to: { x: 0, stagger: 0.13 }, at: 0.55 },
      { targets: ".nexus-s2-machine", from: { x: 46, scale: 0.98 }, to: { x: 0, scale: 1, duration: 0.9 }, at: 0.6 },
      { targets: "#chaos-to-form .nexus-s2-node", from: { scale: 0.5 }, to: { scale: 1, duration: 0.5, ease: "back.out(1.8)", stagger: 0.08 }, at: 1.1 },
      { targets: [".nexus-s2-info-card", ".nexus-s2-note"], from: { y: 26 }, to: { y: 0, stagger: 0.14 }, at: 0.95 }
    ]);

    buildReveal("#game-modes", [
      { targets: ".nexus-s3-eyebrow", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0 },
      { targets: "#game-modes .nexus-s3-title .line-one, #game-modes .nexus-s3-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.1 },
      { targets: ".nexus-s3-copy", from: { y: 24 }, to: { y: 0 }, at: 0.4 },
      { targets: ".nexus-s3-card", from: { y: 52, scale: 0.96 }, to: { y: 0, scale: 1, duration: 0.8, stagger: 0.12 }, at: 0.5 }
    ]);

    buildReveal("#collision-engine", [
      { targets: ".nexus-s4-eyebrow", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0 },
      { targets: "#collision-engine .nexus-s4-title .line-one, #collision-engine .nexus-s4-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.1 },
      { targets: ".nexus-s4-copy", from: { y: 24 }, to: { y: 0 }, at: 0.4 },
      { targets: ".nexus-s4-process-card", from: { y: 42 }, to: { y: 0, stagger: 0.13 }, at: 0.55 },
      { targets: ".nexus-s4-machine", from: { y: 48, scale: 0.98 }, to: { y: 0, scale: 1, duration: 0.9 }, at: 0.65 },
      { targets: ".nexus-s4-console", from: { y: 26 }, to: { y: 0 }, at: 1.05 }
    ]);

    buildReveal("#high-scores", [
      { targets: ".nexus-s5-eyebrow", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0 },
      { targets: "#high-scores .nexus-s5-title .line-one, #high-scores .nexus-s5-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.1 },
      { targets: ".nexus-s5-copy", from: { y: 24 }, to: { y: 0 }, at: 0.35 },
      { targets: ".nexus-s5-tags", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0.5 },
      { targets: ".nexus-s5-metric-card", from: { y: 44, scale: 0.97 }, to: { y: 0, scale: 1, stagger: 0.1 }, at: 0.55 },
      { targets: ".nexus-s5-board-grid > *", from: { y: 40 }, to: { y: 0, duration: 0.8, stagger: 0.15 }, at: 0.8 },
      { targets: ".nexus-s5-row", from: { x: -26 }, to: { x: 0, duration: 0.55, stagger: 0.09 }, at: 1.05 }
    ]);

    buildReveal("#cheat-codes", [
      { targets: ".nexus-s6-eyebrow", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0 },
      { targets: "#cheat-codes .nexus-s6-title .line-one, #cheat-codes .nexus-s6-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.1 },
      { targets: ".nexus-s6-copy", from: { y: 24 }, to: { y: 0 }, at: 0.35 },
      { targets: ".nexus-s6-command", from: { y: 28, scale: 0.98 }, to: { y: 0, scale: 1 }, at: 0.5 },
      { targets: ".nexus-s6-card", from: { y: 46, scale: 0.97 }, to: { y: 0, scale: 1, stagger: 0.11 }, at: 0.65 },
      { targets: ".nexus-s6-export", from: { y: 36 }, to: { y: 0, duration: 0.8 }, at: 1.0 }
    ]);

    buildReveal("#join-the-guild", [
      { targets: ".nexus-s7-core", from: { scale: 0.4 }, to: { scale: 1, duration: 0.9, ease: "back.out(1.6)" }, at: 0 },
      { targets: ".nexus-s7-eyebrow", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0.35 },
      { targets: "#join-the-guild .nexus-s7-title .line-one, #join-the-guild .nexus-s7-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.45 },
      { targets: ".nexus-s7-copy", from: { y: 24 }, to: { y: 0 }, at: 0.75 },
      { targets: ".nexus-s7-actions", from: { y: 26 }, to: { y: 0 }, at: 0.9 },
      { targets: ".nexus-s7-status-item", from: { y: 30 }, to: { y: 0, duration: 0.6, stagger: 0.1 }, at: 1.05 }
    ], "top 75%");

    buildReveal(".nexus-footer", [
      { targets: ".nexus-footer-shell", from: { y: 34 }, to: { y: 0, duration: 0.85 }, at: 0 }
    ], "top 92%");
  });

  // Counter animation
  ScrollTrigger.create({
    trigger: "#high-scores",
    start: "top 78%",
    once: true,
    onEnter: () => {
      document.querySelectorAll(".nexus-count").forEach((el: any) => {
        const target = parseFloat(el.getAttribute("data-count") || "0");
        const decimals = parseInt(el.getAttribute("data-decimal") || "0");
        const suffix = el.getAttribute("data-suffix") || "";
        const prefix = el.getAttribute("data-prefix") || "";
        const duration = 1800;
        const start = performance.now();
        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = eased * target;
          el.textContent = prefix + value.toFixed(decimals) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }
  });

  // MATTER.JS PHYSICS
  const { Engine, World, Bodies, Body, Runner, Sleeping } = Matter;

  const canvas = document.getElementById("pixel-canvas") as HTMLCanvasElement;
  const physicsLayer = document.getElementById("physics-layer") as HTMLElement;
  if (!canvas || !physicsLayer) return;

  const ctx = canvas.getContext("2d", { alpha: false })!;

  let width: number, height: number, pageHeight: number;
  let engine: any, world: any, runner: any;

  const blockSize = 30;
  const blocks: any[] = [];
  const boundaries: any[] = [];
  const wordColliderBodies: any[] = [];
  const delayedBodies: any[] = [];
  const sectionCatcherBodies: any[] = [];

  let started = false;
  let wordCollidersCreated = false;
  let delayedWaveReleased = false;

  let section2Activated = false, section3Activated = false, section4Activated = false;
  let section5Activated = false, section6Activated = false, section7Activated = false;

  const palette = [
    { r: 0, g: 240, b: 255, glow: "rgba(0,240,255,0.7)", maxAlpha: 0.95 },
    { r: 255, g: 0, b: 127, glow: "rgba(255,0,127,0.7)", maxAlpha: 0.95 },
    { r: 124, g: 60, b: 255, glow: "rgba(124,60,255,0.55)", maxAlpha: 0.76 },
    { r: 46, g: 93, b: 255, glow: "rgba(46,93,255,0.55)", maxAlpha: 0.76 },
    { r: 255, g: 209, b: 102, glow: "rgba(255,209,102,0.45)", maxAlpha: 0.64 }
  ];

  function getPageHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, window.innerHeight);
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    pageHeight = getPageHeight();
    canvas.width = width;
    canvas.height = pageHeight;
    physicsLayer.style.height = `${pageHeight}px`;
    if (started) { resetPhysicsScene(); ScrollTrigger.refresh(); }
  }

  function initPhysics() {
    engine = Engine.create({ enableSleeping: true });
    world = engine.world;
    world.gravity.y = 1.15;
    runner = Runner.create();
    Runner.run(runner, engine);
  }

  function createBoundary(x: number, y: number, w: number, h: number, options: any = {}) {
    const body = Bodies.rectangle(x, y, w, h, { isStatic: true, friction: 0.8, restitution: 0.1, ...options });
    boundaries.push(body);
    World.add(world, body);
    return body;
  }

  function createPixelBody(x: number, y: number, size: number, color: any, index: number, options: any = {}) {
    const body = Bodies.rectangle(x, y, size, size, {
      restitution: 0.26, friction: 0.74, frictionStatic: 0.85, frictionAir: 0.012,
      density: 0.0035, chamfer: { radius: 1 }, sleepThreshold: 42, ...options
    });
    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.18);
    Body.setVelocity(body, { x: (Math.random() - 0.5) * 2.8, y: Math.random() * 1.8 });
    return {
      body, size, color, index,
      alpha: Math.random() * color.maxAlpha,
      targetAlpha: Math.random() * color.maxAlpha,
      maxAlpha: color.maxAlpha,
      flickerSpeed: Math.random() * 0.035 + 0.012,
      blinkOffset: Math.random() * Math.PI * 2,
      settled: false
    };
  }

  function buildPhysicsStage() {
    boundaries.length = 0;
    createBoundary(width / 2, height + 40, width + 400, 80, { label: "hero-floor" });
    createBoundary(-80, pageHeight / 2, 120, pageHeight * 2, { label: "left-wall" });
    createBoundary(width + 80, pageHeight / 2, 120, pageHeight * 2, { label: "right-wall" });
    const ramp = Bodies.rectangle(width * 0.72, height * 0.88, width * 0.82, 34, {
      isStatic: true, angle: -0.28, friction: 0.92, restitution: 0.05, label: "hero-ramp"
    });
    boundaries.push(ramp);
    World.add(world, ramp);
  }

  function spawnFallingPixels() {
    blocks.length = 0;
    delayedBodies.length = 0;
    const isMobile = width < 768;
    const count = isMobile ? 70 : 130;
    const firstWaveCount = Math.floor(count * 0.64);
    for (let i = 0; i < count; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)];
      const isDelayed = i >= firstWaveCount;
      const spawnMinX = isMobile ? width * 0.12 : isDelayed ? width * 0.06 : width * 0.48;
      const spawnMaxX = isMobile ? width * 0.95 : isDelayed ? width * 0.58 : width * 0.98;
      const x = spawnMinX + Math.random() * (spawnMaxX - spawnMinX);
      const y = isDelayed ? -160 - Math.random() * 360 : -80 - Math.random() * height * 0.9 - i * 1.4;
      const sv = Math.random();
      const size = sv > 0.88 ? blockSize * 1.35 : sv > 0.62 ? blockSize * 1.1 : blockSize;
      const block = createPixelBody(x, y, size, color, i, { isStatic: isDelayed });
      blocks.push(block);
      if (isDelayed) delayedBodies.push(block.body);
      World.add(world, block.body);
    }
  }

  function createWordColliders() {
    if (!world || wordCollidersCreated) return;
    if (wordColliderBodies.length) { World.remove(world, wordColliderBodies); wordColliderBodies.length = 0; }
    document.querySelectorAll(".word-collider").forEach((el: any, index: number) => {
      const rect = el.getBoundingClientRect();
      if (rect.width < 8 || rect.height < 8) return;
      const body = Bodies.rectangle(
        rect.left + rect.width / 2, rect.top + window.scrollY + rect.height / 2,
        rect.width * 0.88, rect.height * 0.68,
        { isStatic: true, restitution: 0.34, friction: 0.18, frictionStatic: 0.2, label: `word-${index}` }
      );
      wordColliderBodies.push(body);
    });
    World.add(world, wordColliderBodies);
    wordCollidersCreated = true;
    setTimeout(() => {
      if (world && wordColliderBodies.length) { World.remove(world, wordColliderBodies); wordColliderBodies.length = 0; wordCollidersCreated = false; }
    }, 5200);
  }

  function releaseDelayedWave() {
    if (delayedWaveReleased) return;
    delayedWaveReleased = true;
    delayedBodies.forEach((body: any, index: number) => {
      setTimeout(() => {
        Body.setStatic(body, false);
        Body.setVelocity(body, { x: 0.8 + Math.random() * 2.4, y: 1.5 + Math.random() * 2.2 });
        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.22);
        Sleeping.set(body, false);
      }, index * 28);
    });
  }

  function wakeBlocks(minVx: number, maxVx: number, maxVy: number, angularScale: number) {
    blocks.forEach((block: any) => {
      if (block.body.isSleeping || block.body.isStatic) {
        Sleeping.set(block.body, false);
        Body.setVelocity(block.body, {
          x: (Math.random() - 0.5) * (maxVx - minVx) * 2 + (Math.random() > 0.5 ? minVx : -minVx),
          y: -(Math.random() * maxVy * 0.5)
        });
        Body.setAngularVelocity(block.body, (Math.random() - 0.5) * angularScale * 2);
      }
    });
  }

  function spawnSectionBlocks(sectionId: string, count: number = 36) {
    if (!world) return;
    const target = document.getElementById(sectionId);
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const sectionLeft = rect.left + window.scrollX;
    for (let i = 0; i < count; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)];
      const sv = Math.random();
      const size = sv > 0.86 ? blockSize * 1.25 : sv > 0.58 ? blockSize : blockSize * 0.82;
      const x = sectionLeft + rect.width * (0.12 + Math.random() * 0.76);
      const y = sectionTop - 180 - Math.random() * 280;
      const block = createPixelBody(x, y, size, color, blocks.length, { isStatic: false, frictionAir: 0.012 });
      Body.setVelocity(block.body, { x: (Math.random() - 0.5) * 2.2, y: 2.4 + Math.random() * 2.8 });
      Body.setAngularVelocity(block.body, (Math.random() - 0.5) * 0.24);
      blocks.push(block);
      World.add(world, block.body);
    }
  }

  function createSectionCatchers(sectionId: string, colliderAttr: string, sectionLabel: string) {
    const target = document.getElementById(sectionId);
    if (!target || !world) return;
    if (sectionCatcherBodies.length) { World.remove(world, sectionCatcherBodies); sectionCatcherBodies.length = 0; }
    const r = target.getBoundingClientRect();
    const sTop = r.top + window.scrollY, sLeft = r.left + window.scrollX, sRight = r.right + window.scrollX;
    const sCx = sLeft + r.width / 2;
    sectionCatcherBodies.push(
      Bodies.rectangle(sLeft + 12, sTop + r.height * 0.5, 24, r.height * 0.88, { isStatic: true, friction: 0.9, restitution: 0.04, label: `${sectionLabel}-lw` }),
      Bodies.rectangle(sRight - 12, sTop + r.height * 0.5, 24, r.height * 0.88, { isStatic: true, friction: 0.9, restitution: 0.04, label: `${sectionLabel}-rw` })
    );
    target.querySelectorAll(`[${colliderAttr}]`).forEach((el: any) => {
      const er = el.getBoundingClientRect();
      if (er.width < 16 || er.height < 10) return;
      const body = Bodies.rectangle(
        er.left + window.scrollX + er.width / 2, er.top + window.scrollY + er.height * 0.46,
        er.width * 0.92, Math.max(18, er.height * 0.30),
        { isStatic: true, friction: 0.94, restitution: 0.05, angle: (Math.random() - 0.5) * 0.02, label: `${sectionLabel}-el` }
      );
      sectionCatcherBodies.push(body);
    });
    sectionCatcherBodies.push(
      Bodies.rectangle(sCx, sTop + r.height * 0.90, r.width * 0.86, 30, { isStatic: true, friction: 0.95, restitution: 0.04, label: `${sectionLabel}-shelf` })
    );
    World.add(world, sectionCatcherBodies);
  }

  function checkSettled() {
    const allSleeping = blocks.every((b: any) => b.body.isSleeping || b.body.isStatic);
    if (allSleeping && blocks.length > 0) { /* settled */ }
  }

  function drawBlock(block: any, time: number) {
    const body = block.body;
    const pos = body.position;
    const angle = body.angle;
    const size = block.size;
    const color = block.color;
    const blinkPulse = Math.sin(time * 0.002 + block.blinkOffset) * 0.18 + 0.82;
    block.alpha += (block.targetAlpha - block.alpha) * block.flickerSpeed;
    if (Math.abs(block.alpha - block.targetAlpha) < 0.025) block.targetAlpha = (0.22 + Math.random() * 0.78) * block.maxAlpha;
    const alpha = Math.max(0.08, block.alpha * blinkPulse);
    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.rotate(angle);
    ctx.shadowBlur = 16;
    ctx.shadowColor = color.glow;
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
    ctx.fillRect(-size / 2, -size / 2, size - 2, size - 2);
    ctx.shadowBlur = 0;
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.32})`;
    ctx.fillRect(-size / 2, -size / 2, size - 2, 3);
    ctx.fillStyle = `rgba(0, 0, 0, ${alpha * 0.44})`;
    ctx.fillRect(-size / 2, size / 2 - 5, size - 2, 3);
    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.10})`;
    ctx.lineWidth = 1;
    ctx.strokeRect(-size / 2 + 3, -size / 2 + 3, size - 8, size - 8);
    ctx.restore();
  }

  function drawBackgroundBase() {
    ctx.fillStyle = "#03000a";
    ctx.fillRect(0, 0, width, pageHeight);
    const gradient = ctx.createRadialGradient(width * 0.78, height * 0.38, 0, width * 0.78, height * 0.38, Math.max(width, height) * 0.72);
    gradient.addColorStop(0, "rgba(0, 240, 255, 0.13)");
    gradient.addColorStop(0.35, "rgba(255, 0, 127, 0.08)");
    gradient.addColorStop(1, "rgba(5, 0, 16, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  function animatePixels(time: number) {
    drawBackgroundBase();
    blocks.forEach((block: any) => drawBlock(block, time));
    checkSettled();
    requestAnimationFrame(animatePixels);
  }

  function setupScrollPhysics() {
    const sections = [
      { trigger: "#chaos-to-form", id: "section-2-catcher", attr: "data-s2-collider", label: "s2", count: 42, activate: () => { if (section2Activated) return; section2Activated = true; createSectionCatchers("section-2-catcher", "data-s2-collider", "s2"); const rem = boundaries.filter((b: any) => b.label === "hero-floor" || b.label === "hero-ramp"); if (rem.length) World.remove(world, rem); spawnSectionBlocks("section-2-catcher", 42); wakeBlocks(1.8, 2.5, 3.2, 0.18); } },
      { trigger: "#game-modes", id: "section-3-catcher", attr: "data-s3-collider", label: "s3", count: 38, activate: () => { if (section3Activated) return; section3Activated = true; createSectionCatchers("section-3-catcher", "data-s3-collider", "s3"); spawnSectionBlocks("section-3-catcher", 38); wakeBlocks(1.9, 2.6, 3.3, 0.20); } },
      { trigger: "#collision-engine", id: "section-4-catcher", attr: "data-s4-collider", label: "s4", count: 36, activate: () => { if (section4Activated) return; section4Activated = true; createSectionCatchers("section-4-catcher", "data-s4-collider", "s4"); spawnSectionBlocks("section-4-catcher", 36); wakeBlocks(2.0, 2.6, 3.3, 0.22); } },
      { trigger: "#high-scores", id: "section-5-catcher", attr: "data-s5-collider", label: "s5", count: 34, activate: () => { if (section5Activated) return; section5Activated = true; createSectionCatchers("section-5-catcher", "data-s5-collider", "s5"); spawnSectionBlocks("section-5-catcher", 34); wakeBlocks(2.1, 2.6, 3.4, 0.24); } },
      { trigger: "#cheat-codes", id: "section-6-catcher", attr: "data-s6-collider", label: "s6", count: 34, activate: () => { if (section6Activated) return; section6Activated = true; createSectionCatchers("section-6-catcher", "data-s6-collider", "s6"); spawnSectionBlocks("section-6-catcher", 34); wakeBlocks(2.2, 2.7, 3.5, 0.26); } },
      { trigger: "#join-the-guild", id: "section-7-catcher", attr: "data-s7-collider", label: "s7", count: 32, activate: () => { if (section7Activated) return; section7Activated = true; createSectionCatchers("section-7-catcher", "data-s7-collider", "s7"); spawnSectionBlocks("section-7-catcher", 32); wakeBlocks(2.4, 3.0, 3.8, 0.30); } },
    ];
    sections.forEach(s => {
      ScrollTrigger.create({ trigger: s.trigger, start: "top 72%", once: true, onEnter: s.activate });
    });
  }

  function resetPhysicsScene() {
    if (runner) Runner.stop(runner);
    if (engine) { World.clear(world, false); Engine.clear(engine); }
    section2Activated = section3Activated = section4Activated = false;
    section5Activated = section6Activated = section7Activated = false;
    sectionCatcherBodies.length = 0;
    wordColliderBodies.length = 0;
    initPhysics();
    buildPhysicsStage();
    spawnFallingPixels();
    wordCollidersCreated = false;
    delayedWaveReleased = false;
    setTimeout(() => { createWordColliders(); releaseDelayedWave(); }, 900);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("load", () => { resize(); ScrollTrigger.refresh(); });

  resize();
  resetPhysicsScene();
  started = true;
  setupScrollPhysics();
  requestAnimationFrame(animatePixels);
}
