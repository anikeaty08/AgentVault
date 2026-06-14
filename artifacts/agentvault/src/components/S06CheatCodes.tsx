import { Icon } from "@iconify/react";

const CODE_CARDS = [
  { num: "01", cls: "is-pink", icon: "solar:lock-keyhole-linear", title: "Structured Manifests", copy: "Every agent begins with a clear identity, capability model, and metadata structure built for reliable launch and transfer.", cmd: "Clear identity and metadata" },
  { num: "02", cls: "is-purple", icon: "solar:refresh-circle-linear", title: "Policy Controls", copy: "Permissions, limits, and emergency actions are part of the operating layer so creators stay in control after launch.", cmd: "Limits and permissions built in" },
  { num: "03", cls: "is-blue", icon: "solar:layers-minimalistic-linear", title: "Trust Visibility", copy: "Ownership, activity, pause state, and proof references should stay readable for anyone evaluating an agent.", cmd: "Readable trust and activity" },
  { num: "04", cls: "is-cyan", icon: "solar:shield-warning-linear", title: "Scalable Architecture", copy: "Storage, identity, governance, compute, and monetization stay modular so the product can grow without breaking its core.", cmd: "Built to scale with the stack" },
];

const EXPORT_METERS = [
  { label: "Launch Flow", val: "94%", color: "var(--nexus-pink)", width: "94%", delay: "0s" },
  { label: "Trust Surface", val: "88%", color: "var(--nexus-purple)", width: "88%", delay: "-0.8s" },
  { label: "Architecture Readiness", val: "97%", color: "var(--nexus-cyan)", width: "97%", delay: "-1.4s" },
];

const CHIPS = [
  { label: "0G Storage", color: "var(--nexus-pink)", delay: "0s" },
  { label: "Agentic ID", color: "var(--nexus-purple)", delay: "-0.6s" },
  { label: "0G Chain", color: "var(--nexus-cyan)", delay: "-1.2s" },
];

export default function S06CheatCodes() {
  return (
    <section id="principles" className="nexus-s6-section">
      <div id="section-6-catcher" className="nexus-s6-stage">
        <div className="nexus-s6-inner">
          <div className="nexus-s6-header">
            <div className="nexus-s6-eyebrow" data-s6-collider="eyebrow">
              <span className="font-arcade text-2xl leading-none">//</span>
              <span className="text-xs font-bold uppercase tracking-[0.28em]">System principles</span>
            </div>
            <h2 className="nexus-s6-title">
              <span className="line-one" data-s6-collider="headline">What keeps</span>
              <span className="line-two" data-s6-collider="headline">AgentVault reliable</span>
            </h2>
            <p className="nexus-s6-copy" data-s6-collider="subtitle">
              AgentVault should stay disciplined as it grows. The product vision is built around clarity, control, trust visibility, and a modular 0G-native architecture.
            </p>
            <div className="nexus-s6-command" data-s6-collider="main-command">
              <div className="nexus-s6-command-inner">
                <div>
                  <div className="nexus-s6-command-label" data-s6-collider="command-label">Core principle</div>
                  <div className="nexus-s6-command-code" data-s6-collider="command-code">
                    Build<span> trusted agent infrastructure</span><span className="nexus-s6-cursor">_</span>
                  </div>
                </div>
                <div className="nexus-s6-command-button" data-s6-collider="command-button">Active</div>
              </div>
            </div>
          </div>

          <div className="nexus-s6-layout">
            <div className="nexus-s6-code-grid">
              {CODE_CARDS.map((card) => (
                <article key={card.num} className={`nexus-s6-card ${card.cls}`} data-s6-collider="code-card">
                  <div className="nexus-s6-card-inner">
                    <div className="nexus-s6-card-top" data-s6-collider="card-top">
                      <div className="nexus-s6-index" data-s6-collider="card-index">{card.num}</div>
                      <div className="nexus-s6-icon" data-s6-collider="card-icon">
                        <Icon icon={card.icon} />
                      </div>
                    </div>
                    <h3 className="nexus-s6-card-title" data-s6-collider="card-title">{card.title}</h3>
                    <p className="nexus-s6-card-copy" data-s6-collider="card-copy">{card.copy}</p>
                    <div className="nexus-s6-card-command" data-s6-collider="card-command">
                      <div className="nexus-s6-card-command-label">Why it matters</div>
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
                    <div className="text-[0.65rem] font-bold uppercase tracking-[0.24em]" style={{ color: "rgba(244,91,168,0.75)" }}>System View</div>
                    <div className="mt-2 font-display text-3xl font-extrabold uppercase tracking-[-0.055em] text-white" data-s6-collider="terminal-title">Product Principles</div>
                  </div>
                  <div className="nexus-s6-dots" data-s6-collider="terminal-dots">
                    {(["var(--nexus-pink)", "var(--nexus-purple)", "var(--nexus-cyan)"] as const).map((c) => (
                      <span key={c} style={{ background: c, color: c }} />
                    ))}
                  </div>
                </div>

                <div className="nexus-s6-terminal-lines" data-s6-collider="terminal-lines">
                  {[
                    { color: "var(--nexus-pink)", text: "Launch agents with structure, not guesswork." },
                    { color: "rgb(107,114,128)", text: "Keep metadata, ownership, and policy aligned from day one." },
                    { color: "var(--nexus-purple)", text: "Make trust visible instead of implied." },
                    { color: "rgb(107,114,128)", text: "Treat governance as part of the product, not an afterthought." },
                    { color: "var(--nexus-cyan)", text: "Design for the 0G stack without tightly coupling every layer." },
                    { color: "rgb(107,114,128)", text: "Scale through modular architecture and clear control surfaces." },
                  ].map((line, i) => (
                    <div key={i} style={{ color: line.color }} data-s6-collider="terminal-line">{line.text}</div>
                  ))}
                  <div style={{ color: "var(--nexus-pink)" }} data-s6-collider="terminal-line">
                    AgentVault principles aligned<span className="nexus-s6-cursor">_</span>
                  </div>
                </div>

                <div className="nexus-s6-export" data-s6-collider="export">
                  <div className="nexus-s6-export-top" data-s6-collider="export-top">
                    <div>
                      <div className="text-[0.65rem] font-bold uppercase tracking-[0.24em]" style={{ color: "rgba(164,119,255,0.75)" }}>Core Direction</div>
                      <div className="nexus-s6-export-title" data-s6-collider="export-title">AGENTVAULT</div>
                    </div>
                    <div className="nexus-s6-export-icon" data-s6-collider="export-icon">
                      <Icon icon="solar:export-linear" className="text-3xl" />
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(248,243,255,0.70)" }} data-s6-collider="export-copy">
                    Build a reusable trust layer around storage, ownership, policy, visibility, and future monetization instead of shipping another generic agent marketplace.
                  </p>
                  <div className="nexus-s6-meter-group" data-s6-collider="meter-group">
                    {EXPORT_METERS.map((m) => (
                      <div key={m.label} style={{ color: m.color }} data-s6-collider="meter-row">
                        <div className="nexus-s6-meter-label"><span>{m.label}</span><span>{m.val}</span></div>
                        <div className="nexus-s6-meter-track">
                          <i className="nexus-s6-meter-fill" style={{ "--meter-width": m.width, "--delay": m.delay } as React.CSSProperties} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="nexus-s6-chip-row" data-s6-collider="chips">
                  {CHIPS.map((chip) => (
                    <span key={chip.label} className="nexus-s6-chip" data-s6-collider="chip" style={{ "--delay": chip.delay, color: chip.color } as React.CSSProperties}>
                      {chip.label}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
