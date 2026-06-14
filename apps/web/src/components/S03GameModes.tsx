import { Icon } from "@iconify/react";

const MODES = [
  {
    cls: "is-cyan is-selected", icon: "solar:document-text-linear",
    title: "Phase 1", copy: "Define the agent model, manifest schema, and public listing flow so the product has a real operational core.",
    badge: "Starting point",
    meters: [
      { label: "Scope", width: "96%", delay: "0s" },
      { label: "Clarity", width: "84%", delay: "-0.6s" },
      { label: "Risk", width: "42%", delay: "-1.2s" },
    ],
    action: "Model core",
  },
  {
    cls: "is-pink", icon: "solar:database-linear",
    title: "Phase 2", copy: "Integrate 0G Storage and Agentic ID so every agent has structured metadata and real ownership on the 0G stack.",
    meters: [
      { label: "Storage", width: "92%", delay: "-0.2s" },
      { label: "Ownership", width: "94%", delay: "-0.8s" },
      { label: "0G Fit", width: "88%", delay: "-1.4s" },
    ],
    action: "Wire stack",
  },
  {
    cls: "is-purple", icon: "solar:shield-check-linear",
    title: "Phase 3", copy: "Add governance controls, trust signals, pause and resume actions, and a visible lifecycle for each launched agent.",
    meters: [
      { label: "Control", width: "92%", delay: "-0.3s" },
      { label: "Visibility", width: "86%", delay: "-0.9s" },
      { label: "Trust", width: "78%", delay: "-1.5s" },
    ],
    action: "Govern agents",
  },
  {
    cls: "is-blue", icon: "solar:graph-up-linear",
    title: "Phase 4", copy: "Prepare monetization, execution visibility, and a scalable control surface for a broader 0G agent ecosystem.",
    meters: [
      { label: "Revenue", width: "98%", delay: "-0.4s" },
      { label: "Scale", width: "76%", delay: "-1s" },
      { label: "Network", width: "91%", delay: "-1.6s" },
    ],
    action: "Ecosystem ready",
  },
];

export default function S03GameModes() {
  return (
    <section id="roadmap" className="nexus-s3-section">
      <div id="section-3-catcher" className="nexus-s3-catcher">
        <div className="nexus-s3-inner">
          <div className="nexus-s3-header">
            <div className="nexus-s3-eyebrow" data-s3-collider="eyebrow">
              <span className="font-arcade text-2xl leading-none">//</span>
              <span className="text-xs font-bold uppercase tracking-[0.28em]">Product roadmap</span>
            </div>
            <h2 className="nexus-s3-title">
              <span className="line-one" data-s3-collider="headline">What we are</span>
              <span className="line-two" data-s3-collider="headline">building next</span>
            </h2>
            <p className="nexus-s3-copy" data-s3-collider="subtitle">
              AgentVault is being built in phases so the foundation stays real: agent launch first, 0G-native ownership next, governance and trust after that, then monetization and ecosystem scale.
            </p>
          </div>

          <div className="nexus-s3-mode-grid">
            {MODES.map((mode) => (
              <article key={mode.title} className={`nexus-s3-card ${mode.cls}`} data-s3-collider="card">
                <div className="nexus-s3-card-content">
                  <div className="nexus-s3-card-top" data-s3-collider="card-top">
                    <div />
                    {mode.badge && <div className="nexus-s3-badge" data-s3-collider="badge">{mode.badge}</div>}
                  </div>
                  <div className="nexus-s3-icon-wrap" data-s3-collider="icon">
                    <Icon icon={mode.icon} className="text-[5rem] md:text-[5.25rem]" />
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
                  <span>Build focus</span><span>{mode.action}</span>
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
                    Start with one complete launch flow. Do not expand into broader monetization or execution logic before storage, minting, and policy are real.
                  </p>
                </div>
              </div>
            </div>
            <div className="nexus-s3-rank" data-s3-collider="rank">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: "rgba(232,184,93,0.75)" }}>Current Position</div>
                  <div className="mt-2 font-display text-3xl font-extrabold uppercase tracking-[-0.05em] text-white">Vision Locked</div>
                </div>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2" style={{ borderColor: "rgba(232,184,93,0.55)", color: "var(--nexus-gold)", boxShadow: "0 0 24px rgba(232,184,93,0.18)" }}>
                  <span className="font-arcade text-4xl">A</span>
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
