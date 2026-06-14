import { Icon } from "@iconify/react";

const METRICS = [
  { cls: "is-cyan", label: "Agents", count: "128", decimal: "0", suffix: "", prefix: "", caption: "Launch-ready Profiles" },
  { cls: "is-blue", label: "Policies", count: "42", decimal: "0", suffix: "", prefix: "", caption: "Governed Workflows" },
  { cls: "is-pink", label: "Trust", count: "9.8", decimal: "1", suffix: "x", prefix: "", caption: "Visibility Multiplier" },
  { cls: "is-purple", label: "Layers", count: "4", decimal: "0", suffix: "", prefix: "0", caption: "Core Product Pillars" },
];

const LEADERS = [
  { rank: "01", color: "#00f0ff", name: "Creator Agents", meta: "Launch and mint flow", type: "Ownership Layer", score: "98,400" },
  { rank: "02", color: "#6f9bff", name: "Governed Agents", meta: "Policy and controls", type: "Safety Layer", score: "87,200" },
  { rank: "03", color: "#ff66b3", name: "Verifiable Agents", meta: "Activity and trust surface", type: "Trust Layer", score: "76,900" },
  { rank: "04", color: "#b45cff", name: "Monetized Agents", meta: "Paid access design", type: "Revenue Layer", score: "71,300" },
];

const PROGRESS = [
  { label: "Launch Surface", val: "87%", width: "87%", color: "#00f0ff", delay: "0s" },
  { label: "Trust Coverage", val: "74%", width: "74%", color: "#6f9bff", delay: "0.18s" },
  { label: "Scale Readiness", val: "91%", width: "91%", color: "#ff66b3", delay: "0.36s" },
];

export default function S05HighScores() {
  return (
    <section id="scale" className="nexus-s5-section">
      <div id="section-5-catcher" className="nexus-s5-stage">
        <div className="nexus-s5-inner">
          <div className="nexus-s5-header">
            <div>
              <div className="nexus-s5-eyebrow" data-s5-collider="eyebrow">
                <span className="font-arcade text-2xl leading-none">//</span>
                <span className="text-xs font-bold uppercase tracking-[0.28em]">Scale vision</span>
              </div>
              <h2 className="nexus-s5-title">
                <span className="line-one" data-s5-collider="headline">Why it matters</span>
                <span className="line-two" data-s5-collider="headline">at scale</span>
              </h2>
            </div>
            <div className="lg:ml-auto">
              <p className="nexus-s5-copy" data-s5-collider="subtitle">
                AgentVault is designed for an ecosystem of agents, not a single demo. As more AI agents launch on 0G, creators and users will need reusable trust, governance, and monetization infrastructure.
              </p>
              <div className="nexus-s5-tags" data-s5-collider="tags">
                <span className="nexus-s5-tag text-[#00f0ff]" data-s5-collider="tag">Reusable Launch Flow</span>
                <span className="nexus-s5-tag text-[#6f9bff]" data-s5-collider="tag">Agent Governance</span>
                <span className="nexus-s5-tag text-[#ff66b3]" data-s5-collider="tag">Ecosystem Trust</span>
              </div>
            </div>
          </div>

          <div className="nexus-s5-metrics">
            {METRICS.map((m, i) => (
              <article key={m.label} className={`nexus-s5-metric-card ${m.cls}`} data-s5-collider="metric-card">
                <div className="nexus-s5-metric-inner">
                  <div className="nexus-s5-metric-top" data-s5-collider="metric-top">
                    <div className="nexus-s5-metric-label">{m.label}</div>
                    <span className="nexus-s5-dot" style={{ "--delay": `${i * -0.4}s` } as React.CSSProperties} />
                  </div>
                  <div className="nexus-s5-number" data-s5-collider="metric-number">
                    <span className="nexus-count" data-count={m.count} data-decimal={m.decimal} data-suffix={m.suffix} data-prefix={m.prefix}>0</span>
                  </div>
                  <div className="nexus-s5-caption" data-s5-collider="metric-caption">{m.caption}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="nexus-s5-board-grid">
            <div className="nexus-s5-leaderboard" data-s5-collider="leaderboard">
              <div className="nexus-s5-leaderboard-head" data-s5-collider="leaderboard-head">
                <div>Rank</div><div>Layer</div><div>Purpose</div><div className="text-right">Signal</div>
              </div>
              {LEADERS.map((row) => (
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
                    <div className="mt-2 font-display text-3xl font-extrabold uppercase tracking-[-0.055em] text-white">AgentVault V1</div>
                  </div>
                  <div className="nexus-s5-run-icon" data-s5-collider="run-icon">
                    <Icon icon="solar:shield-keyhole-linear" className="text-3xl" />
                  </div>
                </div>
                <div className="nexus-s5-progress-group" data-s5-collider="progress-group">
                  {PROGRESS.map((p) => (
                    <div key={p.label} style={{ color: p.color }} data-s5-collider="progress-row">
                      <div className="nexus-s5-progress-label"><span>{p.label}</span><span>{p.val}</span></div>
                      <div className="nexus-s5-progress-track">
                        <i className="nexus-s5-progress-fill is-animated" style={{ "--target-width": p.width, "--delay": p.delay } as React.CSSProperties} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="nexus-s5-bonus" data-s5-collider="bonus">
                  <div className="nexus-s5-bonus-title" data-s5-collider="bonus-title">Scale Goal</div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300" data-s5-collider="bonus-copy">
                    Standardize how agents are launched, governed, and trusted across the 0G ecosystem.
                  </p>
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
