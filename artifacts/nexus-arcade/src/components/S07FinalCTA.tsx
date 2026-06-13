import { Icon } from "@iconify/react";

const STATUS_ITEMS = [
  { val: "128", color: "var(--nexus-cyan)",  label: "Input fragments"  },
  { val: "42",  color: "var(--nexus-pink)",  label: "World collisions" },
  { val: "87%", color: "var(--nexus-gold)",  label: "World stability"  },
];

export default function S07FinalCTA() {
  return (
    <section id="join-the-guild" className="nexus-s7-section">
      <div id="section-7-catcher" className="nexus-s7-stage">
        <div className="nexus-s7-inner">
          <div className="nexus-s7-core" data-s7-collider="core">
            <div className="nexus-s7-ring r1" />
            <div className="nexus-s7-ring r2" />
            <div className="nexus-s7-ring r3" />
            <div className="nexus-s7-coin" data-s7-collider="coin">
              <span className="font-arcade text-6xl leading-none">N</span>
            </div>
          </div>

          <div className="nexus-s7-eyebrow" data-s7-collider="eyebrow">
            <span className="font-arcade text-2xl leading-none">//</span>
            <span className="text-xs font-bold uppercase tracking-[0.28em]">Final stage</span>
          </div>

          <h2 className="nexus-s7-title">
            <span className="line-one" data-s7-collider="headline">Your Next</span>
            <br />
            <span className="line-two" data-s7-collider="headline">World Is Waiting</span>
          </h2>

          <p className="nexus-s7-copy" data-s7-collider="subtitle">
            Start with a loose idea, a visual reference, or a messy prompt. NEXUS gives it a playable system,
            a sharper design direction, and a clearer path from chaos to finished creative work.
          </p>

          <div className="nexus-s7-actions" data-s7-collider="buttons">
            <a href="#" className="nexus-s7-button-primary" data-s7-collider="button">
              Insert Coin
              <Icon icon="solar:round-alt-arrow-right-linear" className="text-2xl" />
            </a>
            <a href="#game-modes" className="nexus-s7-button-secondary" data-s7-collider="button">
              Replay Modes
            </a>
          </div>

          <div className="nexus-s7-status" data-s7-collider="status">
            <div className="nexus-s7-status-grid">
              {STATUS_ITEMS.map((item) => (
                <div key={item.label} className="nexus-s7-status-item" data-s7-collider="status-card">
                  <div className="font-arcade text-4xl leading-none" style={{ color: item.color }}>{item.val}</div>
                  <div className="mt-2 text-[0.58rem] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(248,243,255,0.42)" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
