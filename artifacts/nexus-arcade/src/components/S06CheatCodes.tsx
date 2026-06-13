import { Icon } from "@iconify/react";

const CODE_CARDS = [
  { num: "01", cls: "is-pink",   icon: "solar:lock-keyhole-linear",       title: "STYLE_LOCK",   copy: "Preserve the strongest visual direction so future sections keep the same design DNA.",                            cmd: "/lock style --active" },
  { num: "02", cls: "is-purple", icon: "solar:refresh-circle-linear",     title: "REMIX_CHAIN",  copy: "Create new variations from an existing direction without losing the original creative thread.",                   cmd: "/remix chain --x04"  },
  { num: "03", cls: "is-blue",   icon: "solar:layers-minimalistic-linear", title: "SECTION_SYNC", copy: "Keep spacing, hierarchy, type scale, borders, and interaction logic consistent across the page.",               cmd: "/sync sections --all" },
  { num: "04", cls: "is-cyan",   icon: "solar:shield-warning-linear",     title: "BOSS_FIX",     copy: "Detect weak hierarchy, muddy contrast, generic UI patterns, and layout imbalance before shipping.",              cmd: "/boss fix --critical" },
];

const EXPORT_METERS = [
  { label: "Structure",        val: "94%", color: "var(--nexus-pink)",   width: "94%", delay: "0s"    },
  { label: "Visual DNA",       val: "88%", color: "var(--nexus-purple)", width: "88%", delay: "-0.8s" },
  { label: "Export Readiness", val: "97%", color: "var(--nexus-cyan)",   width: "97%", delay: "-1.4s" },
];

const CHIPS = [
  { label: "HTML",       color: "var(--nexus-pink)",   delay: "0s"    },
  { label: "Design DNA", color: "var(--nexus-purple)", delay: "-0.6s" },
  { label: "Export",     color: "var(--nexus-cyan)",   delay: "-1.2s" },
];

export default function S06CheatCodes() {
  return (
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
            {/* Code cards grid */}
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
                      <div className="nexus-s6-card-command-label">Command</div>
                      <div className="nexus-s6-card-command-code">{card.cmd}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Terminal aside */}
            <aside className="nexus-s6-terminal" data-s6-collider="terminal">
              <div className="nexus-s6-terminal-inner">
                <div className="nexus-s6-terminal-head" data-s6-collider="terminal-head">
                  <div>
                    <div className="text-[0.65rem] font-bold uppercase tracking-[0.24em]" style={{ color: "rgba(244,91,168,0.75)" }}>Terminal</div>
                    <div className="mt-2 font-display text-3xl font-extrabold uppercase tracking-[-0.055em] text-white" data-s6-collider="terminal-title">Code Console</div>
                  </div>
                  <div className="nexus-s6-dots" data-s6-collider="terminal-dots">
                    {(["var(--nexus-pink)","var(--nexus-purple)","var(--nexus-cyan)"] as const).map((c) => (
                      <span key={c} style={{ background: c, color: c }} />
                    ))}
                  </div>
                </div>

                <div className="nexus-s6-terminal-lines" data-s6-collider="terminal-lines">
                  {[
                    { color: "var(--nexus-pink)",   text: "> boot creative_engine" },
                    { color: "rgb(107,114,128)",     text: "loading visual memory..." },
                    { color: "var(--nexus-purple)",  text: "style map detected" },
                    { color: "rgb(107,114,128)",     text: "checking section rhythm..." },
                    { color: "var(--nexus-cyan)",    text: "generic patterns removed" },
                    { color: "rgb(107,114,128)",     text: "stabilizing direction..." },
                  ].map((line, i) => (
                    <div key={i} style={{ color: line.color }} data-s6-collider="terminal-line">{line.text}</div>
                  ))}
                  <div style={{ color: "var(--nexus-pink)" }} data-s6-collider="terminal-line">
                    &gt; world_export ready<span className="nexus-s6-cursor">_</span>
                  </div>
                </div>

                <div className="nexus-s6-export" data-s6-collider="export">
                  <div className="nexus-s6-export-top" data-s6-collider="export-top">
                    <div>
                      <div className="text-[0.65rem] font-bold uppercase tracking-[0.24em]" style={{ color: "rgba(164,119,255,0.75)" }}>Final Code</div>
                      <div className="nexus-s6-export-title" data-s6-collider="export-title">WORLD_EXPORT</div>
                    </div>
                    <div className="nexus-s6-export-icon" data-s6-collider="export-icon">
                      <Icon icon="solar:export-linear" className="text-3xl" />
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(248,243,255,0.70)" }} data-s6-collider="export-copy">
                    Turn the final creative direction into a reusable HTML system with consistent visual rules.
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
