const PROCESS_CARDS = [
  { num: "01", cls: "is-cyan",  title: "Drop Inputs",     copy: "Prompts, references, colors, moods, screenshots, layout fragments, and rough creative instincts enter the system." },
  { num: "02", cls: "is-pink",  title: "Force Collision", copy: "Ideas are compared, remixed, rejected, compressed, and pushed until a sharper visual language emerges." },
  { num: "03", cls: "is-gold",  title: "Lock Direction",  copy: "The strongest patterns become rules: typography, color, hierarchy, interaction, and section rhythm." },
];

const SIGNALS = [
  { label: "Signal Match", val: "94%", width: "94%", color: "var(--nexus-cyan)",  delay: "0s"    },
  { label: "Remix Force",  val: "88%", width: "88%", color: "var(--nexus-pink)",  delay: "-0.8s" },
  { label: "World Lock",   val: "97%", width: "97%", color: "var(--nexus-gold)",  delay: "-1.4s" },
];

export default function S04CollisionEngine() {
  return (
    <section id="collision-engine" className="nexus-s4-section">
      <div id="section-4-catcher" className="nexus-s4-catcher">
        <div className="nexus-s4-inner">
          <div className="nexus-s4-layout">
            {/* Left */}
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
                {PROCESS_CARDS.map((card) => (
                  <article key={card.num} className={`nexus-s4-process-card ${card.cls}`} data-s4-collider="process-card">
                    <div className="nexus-s4-process-card-inner">
                      <div className="nexus-s4-process-index" data-s4-collider="process-index">{card.num}</div>
                      <div>
                        <h3 className="nexus-s4-process-title" data-s4-collider="process-title">{card.title}</h3>
                        <p className="nexus-s4-process-copy" data-s4-collider="process-copy">{card.copy}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right machine */}
            <div className="relative z-10">
              <div className="nexus-s4-machine" data-s4-collider="machine">
                <div className="nexus-s4-machine-header" data-s4-collider="machine-header">
                  <div>
                    <div className="text-[0.62rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(232,184,93,0.62)" }}>Engine Status</div>
                    <div className="nexus-s4-status-title" data-s4-collider="status-title">Collision Stable</div>
                  </div>
                  <div className="nexus-s4-status-badge" data-s4-collider="status-badge">
                    <span />Online
                  </div>
                </div>
                <div className="nexus-s4-monitor" data-s4-collider="monitor">
                  {["Color", "Type", "Motion", "System"].map((lbl) => (
                    <div key={lbl} className={`nexus-s4-monitor-label ${lbl.toLowerCase()}`} data-s4-collider="monitor-label">{lbl}</div>
                  ))}
                  <div className="nexus-s4-core-field" data-s4-collider="core-field">
                    <div className="nexus-s4-ring" /><div className="nexus-s4-ring" /><div className="nexus-s4-ring" />
                    <div className="nexus-s4-core" data-s4-collider="core" />
                    {["d1","d2","d3","d4"].map((d) => <span key={d} className={`nexus-s4-orbit-dot ${d}`} />)}
                  </div>
                  <div className="nexus-s4-console" data-s4-collider="console">
                    <div className="nexus-s4-console-grid">
                      {SIGNALS.map((s) => (
                        <div key={s.label} style={{ color: s.color }} data-s4-collider="signal">
                          <div className="nexus-s4-signal-label"><span>{s.label}</span><span>{s.val}</span></div>
                          <div className="nexus-s4-signal-track">
                            <i className="nexus-s4-signal-fill" style={{ "--signal-width": s.width, "--delay": s.delay } as React.CSSProperties} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
