import { Icon } from "@iconify/react";

const MODES = [
  {
    num: "01", cls: "is-cyan is-selected", icon: "solar:gamepad-minimalistic-linear",
    title: "Arcade Mode", copy: "Rapid-fire creativity. Generate, test, and explore visual ideas at lightning speed.",
    badge: "Selected",
    meters: [
      { label: "Speed",   width: "96%", delay: "0s"    },
      { label: "Clarity", width: "74%", delay: "-0.6s" },
      { label: "Risk",    width: "62%", delay: "-1.2s" },
    ],
    action: "Fast run",
  },
  {
    num: "02", cls: "is-pink", icon: "solar:map-point-wave-linear",
    title: "Campaign Mode", copy: "Build a complete journey. Shape full landing pages section by section with narrative flow.",
    meters: [
      { label: "Speed",  width: "72%", delay: "-0.2s" },
      { label: "Flow",   width: "94%", delay: "-0.8s" },
      { label: "Polish", width: "88%", delay: "-1.4s" },
    ],
    action: "Full build",
  },
  {
    num: "03", cls: "is-purple", icon: "solar:crown-star-linear",
    title: "Boss Mode", copy: "Face the hard truths. Hunt weak layouts, poor hierarchy, generic copy, and visual noise.",
    meters: [
      { label: "Pressure", width: "92%", delay: "-0.3s" },
      { label: "Clarity",  width: "86%", delay: "-0.9s" },
      { label: "Fix rate", width: "78%", delay: "-1.5s" },
    ],
    action: "Audit run",
  },
  {
    num: "04", cls: "is-blue", icon: "solar:box-minimalistic-linear",
    title: "Sandbox Mode", copy: "No rules, just possibilities. Remix references, colors, layouts, and components freely.",
    meters: [
      { label: "Freedom", width: "98%", delay: "-0.4s" },
      { label: "Risk",    width: "76%", delay: "-1s"   },
      { label: "Range",   width: "91%", delay: "-1.6s" },
    ],
    action: "Free remix",
  },
];

export default function S03GameModes() {
  return (
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
            {MODES.map((mode) => (
              <article key={mode.num} className={`nexus-s3-card ${mode.cls}`} data-s3-collider="card">
                <div className="nexus-s3-card-content">
                  <div className="nexus-s3-card-top" data-s3-collider="card-top">
                    <div className="nexus-s3-index" data-s3-collider="card-index">{mode.num}</div>
                    {mode.badge && <div className="nexus-s3-badge" data-s3-collider="badge">{mode.badge}</div>}
                  </div>
                  <div className="nexus-s3-icon-wrap" data-s3-collider="icon">
                    <Icon icon={mode.icon} />
                  </div>
                  <h3 className="nexus-s3-card-title" data-s3-collider="card-title">{mode.title}</h3>
                  <p className="nexus-s3-card-copy" data-s3-collider="card-copy">{mode.copy}</p>
                  <div className="nexus-s3-meter-list" data-s3-collider="meters">
                    {mode.meters.map((m) => (
                      <div key={m.label} className="nexus-s3-meter-row">
                        <span>{m.label}</span>
                        <div className="nexus-s3-meter-track">
                          <i className="nexus-s3-meter-fill" style={{ "--meter-width": m.width, "--delay": m.delay } as React.CSSProperties} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="nexus-s3-action" data-s3-collider="action">
                  <span>Select mode</span><span>{mode.action}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="nexus-s3-footer-row">
            <div className="nexus-s3-tip" data-s3-collider="tip">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center font-arcade text-3xl" style={{ border: "1px solid rgba(53,221,242,0.40)", color: "var(--nexus-cyan)" }}>i</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: "var(--nexus-cyan)" }}>Tip</div>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(248,243,255,0.70)" }}>
                    Start in Arcade Mode when the idea is still loose. Switch to Campaign Mode once the world starts to take shape.
                  </p>
                </div>
              </div>
            </div>
            <div className="nexus-s3-rank" data-s3-collider="rank">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: "rgba(232,184,93,0.75)" }}>Your Rank</div>
                  <div className="mt-2 font-display text-3xl font-extrabold uppercase tracking-[-0.05em] text-white">Creative Player</div>
                </div>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2" style={{ borderColor: "rgba(232,184,93,0.55)", color: "var(--nexus-gold)", boxShadow: "0 0 24px rgba(232,184,93,0.18)" }}>
                  <span className="font-arcade text-4xl">N</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
