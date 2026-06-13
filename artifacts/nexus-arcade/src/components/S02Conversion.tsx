const railItems = [
  { num: "01", color: "var(--nexus-cyan)",  title: "Input fragments",  copy: "Prompts, screenshots, references, moods, loose concepts, and visual signals." },
  { num: "02", color: "var(--nexus-pink)",  title: "Force collision",  copy: "The system compares, compresses, remixes, rejects, and sharpens the direction." },
  { num: "03", color: "var(--nexus-gold)",  title: "Lock the world",   copy: "The strongest patterns become typography, color, layout, motion, and section rhythm." },
];

export default function S02Conversion() {
  return (
    <section id="chaos-to-form" className="relative w-full max-w-[90rem] mx-auto px-6 lg:px-12 pb-28 lg:pb-36">
      <div id="section-2-catcher" className="nexus-s2-frame">
        <div className="nexus-s2-corner tl" />
        <div className="nexus-s2-corner tr" />
        <div className="nexus-s2-corner bl" />
        <div className="nexus-s2-corner br" />

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
            {/* Left stack */}
            <div className="nexus-s2-left-stack">
              <div className="nexus-s2-rail">
                {railItems.map((item) => (
                  <div key={item.num} className="nexus-s2-rail-item" data-s2-collider="rail-card">
                    <div className="nexus-s2-rail-index" data-s2-collider="rail-index" style={{ color: item.color }}>{item.num}</div>
                    <h3 className="nexus-s2-rail-title" data-s2-collider="rail-title">{item.title}</h3>
                    <p className="nexus-s2-rail-copy">{item.copy}</p>
                  </div>
                ))}
              </div>

              <div className="nexus-s2-info-card" data-s2-collider="info-card">
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-2.5 w-2.5" style={{ background: "var(--nexus-cyan)", boxShadow: "0 0 12px rgba(53,221,242,0.9)" }} />
                  <div className="text-[0.65rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(53,221,242,0.80)" }}>First transformation</div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(248,243,255,0.62)" }}>
                  This is where falling fragments stop being random pixels and start becoming a readable creative structure.
                </p>
              </div>

              <div className="nexus-s2-note" data-s2-collider="note-card">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center font-arcade text-2xl" style={{ border: "1px solid rgba(232,184,93,0.35)", color: "var(--nexus-gold)" }}>i</div>
                  <div className="text-[0.65rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(232,184,93,0.72)" }}>System note</div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(232,184,93,0.72)" }}>
                  Better inputs create better collisions. Better collisions create better worlds.
                  This chamber is the first physical stop in the page-wide falling block sequence.
                </p>
              </div>
            </div>

            {/* Right machine */}
            <div className="relative">
              <div className="nexus-s2-machine" data-s2-collider="machine">
                <div className="nexus-s2-machine-header" data-s2-collider="machine-header">
                  <div>
                    <div className="text-[0.62rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(248,243,255,0.40)" }}>Nexus Engine v2.0</div>
                    <div className="nexus-s2-machine-title" data-s2-collider="machine-title">Conversion chamber</div>
                  </div>
                  <div className="nexus-s2-machine-status" data-s2-collider="machine-status">
                    <span />Online
                  </div>
                </div>

                <div className="nexus-s2-monitor" data-s2-collider="monitor">
                  <div className="nexus-s2-node-line one" />
                  <div className="nexus-s2-node-line two" />
                  <div className="nexus-s2-node-line three" />
                  <div className="nexus-s2-node-line four" />
                  <div className="nexus-s2-node input"     data-s2-collider="node">Raw input</div>
                  <div className="nexus-s2-node collision" data-s2-collider="node">Collision</div>
                  <div className="nexus-s2-node system"    data-s2-collider="node">Rules locked</div>
                  <div className="nexus-s2-node output"    data-s2-collider="node">Playable form</div>
                  <div className="nexus-s2-chamber" data-s2-collider="chamber">
                    <div className="nexus-s2-core" />
                  </div>
                  {(["", "pink", "gold", "blue"] as const).map((variant, i) => (
                    <div key={i} className={`nexus-s2-flow-pixel${variant ? ` ${variant}` : ""}`} style={{ "--delay": `${i * -1.2}s` } as React.CSSProperties} />
                  ))}
                  <div className="nexus-s2-console" data-s2-collider="console">
                    <div className="grid gap-4 md:grid-cols-[1fr_150px] md:items-end">
                      <div>
                        <div className="nexus-s2-meter-label">
                          <span>World stability</span>
                          <span style={{ color: "var(--nexus-cyan)" }}>active</span>
                        </div>
                        <div className="nexus-s2-meter"><span /></div>
                      </div>
                      <div className="p-3 text-right" data-s2-collider="run-score" style={{ border: "1px solid rgba(232,184,93,0.22)", background: "rgba(232,184,93,0.06)" }}>
                        <div className="text-[0.58rem] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(232,184,93,0.70)" }}>Current run</div>
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
  );
}

import React from "react";
