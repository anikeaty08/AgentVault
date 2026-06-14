import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Matter from "matter-js";

gsap.registerPlugin(ScrollTrigger);

const { Engine, World, Bodies, Body, Runner, Sleeping } = Matter;

export function useNexusApp() {
  useEffect(() => {
    const CLIP_HIDDEN = "inset(0% 0% 100% 0%)";
    const CLIP_SHOWN  = "inset(0% 0% 0% 0%)";

    // ─── GSAP ANIMATIONS ───────────────────────────────────────────────────────

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
          },
        });
        steps.forEach((step: any) => { tl.to(step.targets, { autoAlpha: 1, ...step.to }, step.at); });
        return tl;
      }

      gsap.set(".nexus-header", { y: -28, autoAlpha: 0 });
      gsap.to(".nexus-header", { y: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out", delay: 0.15 });

      const heroWords = gsap.utils.toArray("#hero-title .word-collider > span");
      gsap.set(heroWords, { yPercent: 80, autoAlpha: 0 });
      gsap.to(heroWords, {
        yPercent: 0, autoAlpha: 1, duration: 1.0, ease: "power4.out", stagger: 0.15, delay: 0.2,
        onComplete: () => { setTimeout(() => { createWordColliders(); releaseDelayedWave(); }, 120); },
      });

      gsap.set(["#hero-kicker", "#hero-desc", "#hero-cta", "#hero-stats"], { y: 22, autoAlpha: 0 });
      gsap.to(["#hero-kicker", "#hero-desc", "#hero-cta", "#hero-stats"], {
        y: 0, autoAlpha: 1, duration: 1, ease: "power3.out", stagger: 0.16, delay: 0.55,
      });

      gsap.set(".nexus-core-wrap", { autoAlpha: 0, y: 36, scale: 0.97 });
      gsap.to(".nexus-core-wrap", { autoAlpha: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out", delay: 0.7 });
      gsap.to(".nexus-core-wrap", {
        yPercent: -9, ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 },
      });

      buildReveal("#why-agentvault", [
        { targets: ".nexus-s2-corner", from: { scale: 0 }, to: { scale: 1, duration: 0.5, ease: "back.out(2)", stagger: 0.07 }, at: 0 },
        { targets: "#why-agentvault .nexus-s2-title .line-one, #why-agentvault .nexus-s2-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.1 },
        { targets: ".nexus-s2-intro", from: { y: 24 }, to: { y: 0 }, at: 0.4 },
        { targets: ".nexus-s2-rail-item", from: { x: -34 }, to: { x: 0, stagger: 0.13 }, at: 0.55 },
        { targets: ".nexus-s2-machine", from: { x: 46, scale: 0.98 }, to: { x: 0, scale: 1, duration: 0.9 }, at: 0.6 },
        { targets: "#why-agentvault .nexus-s2-node", from: { scale: 0.5 }, to: { scale: 1, duration: 0.5, ease: "back.out(1.8)", stagger: 0.08 }, at: 1.1 },
        { targets: [".nexus-s2-info-card", ".nexus-s2-note"], from: { y: 26 }, to: { y: 0, stagger: 0.14 }, at: 0.95 },
      ]);

      buildReveal("#roadmap", [
        { targets: ".nexus-s3-eyebrow", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0 },
        { targets: "#roadmap .nexus-s3-title .line-one, #roadmap .nexus-s3-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.1 },
        { targets: ".nexus-s3-copy", from: { y: 24 }, to: { y: 0 }, at: 0.4 },
        { targets: ".nexus-s3-card", from: { y: 52, scale: 0.96 }, to: { y: 0, scale: 1, duration: 0.8, stagger: 0.12 }, at: 0.5 },
      ]);

      buildReveal("#architecture", [
        { targets: ".nexus-s4-eyebrow", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0 },
        { targets: "#architecture .nexus-s4-title .line-one, #architecture .nexus-s4-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.1 },
        { targets: ".nexus-s4-copy", from: { y: 24 }, to: { y: 0 }, at: 0.4 },
        { targets: ".nexus-s4-process-card", from: { y: 42 }, to: { y: 0, stagger: 0.13 }, at: 0.55 },
        { targets: ".nexus-s4-machine", from: { y: 48, scale: 0.98 }, to: { y: 0, scale: 1, duration: 0.9 }, at: 0.65 },
        { targets: ".nexus-s4-console", from: { y: 26 }, to: { y: 0 }, at: 1.05 },
      ]);

      buildReveal("#scale", [
        { targets: ".nexus-s5-eyebrow", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0 },
        { targets: "#scale .nexus-s5-title .line-one, #scale .nexus-s5-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.1 },
        { targets: ".nexus-s5-copy", from: { y: 24 }, to: { y: 0 }, at: 0.35 },
        { targets: ".nexus-s5-tags", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0.5 },
        { targets: ".nexus-s5-metric-card", from: { y: 44, scale: 0.97 }, to: { y: 0, scale: 1, stagger: 0.1 }, at: 0.55 },
        { targets: ".nexus-s5-board-grid > *", from: { y: 40 }, to: { y: 0, duration: 0.8, stagger: 0.15 }, at: 0.8 },
        { targets: ".nexus-s5-row", from: { x: -26 }, to: { x: 0, duration: 0.55, stagger: 0.09 }, at: 1.05 },
      ]);

      buildReveal("#principles", [
        { targets: ".nexus-s6-eyebrow", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0 },
        { targets: "#principles .nexus-s6-title .line-one, #principles .nexus-s6-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.1 },
        { targets: ".nexus-s6-copy", from: { y: 24 }, to: { y: 0 }, at: 0.35 },
        { targets: ".nexus-s6-command", from: { y: 28, scale: 0.98 }, to: { y: 0, scale: 1 }, at: 0.5 },
        { targets: ".nexus-s6-card", from: { y: 46, scale: 0.97 }, to: { y: 0, scale: 1, stagger: 0.11 }, at: 0.65 },
        { targets: ".nexus-s6-export", from: { y: 36 }, to: { y: 0, duration: 0.8 }, at: 1.0 },
      ]);

      buildReveal("#build", [
        { targets: ".nexus-s7-core", from: { scale: 0.4 }, to: { scale: 1, duration: 0.9, ease: "back.out(1.6)" }, at: 0 },
        { targets: ".nexus-s7-eyebrow", from: { y: 18 }, to: { y: 0, duration: 0.55 }, at: 0.35 },
        { targets: "#build .nexus-s7-title .line-one, #build .nexus-s7-title .line-two", from: { clipPath: CLIP_HIDDEN }, to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 }, at: 0.45 },
        { targets: ".nexus-s7-copy", from: { y: 24 }, to: { y: 0 }, at: 0.75 },
        { targets: ".nexus-s7-actions", from: { y: 26 }, to: { y: 0 }, at: 0.9 },
        { targets: ".nexus-s7-status-item", from: { y: 30 }, to: { y: 0, duration: 0.6, stagger: 0.1 }, at: 1.05 },
      ], "top 75%");

      buildReveal(".nexus-footer", [
        { targets: ".nexus-footer-shell", from: { y: 34 }, to: { y: 0, duration: 0.85 }, at: 0 },
      ], "top 92%");
    });

    // Counter animation
    ScrollTrigger.create({
      trigger: "#scale",
      start: "top 78%",
      once: true,
      onEnter: () => {
        document.querySelectorAll<HTMLElement>(".nexus-count").forEach((el) => {
          const target   = parseFloat(el.getAttribute("data-count")   ?? "0");
          const decimals = parseInt(el.getAttribute("data-decimal")   ?? "0");
          const suffix   = el.getAttribute("data-suffix")  ?? "";
          const prefix   = el.getAttribute("data-prefix")  ?? "";
          const duration = 1800;
          const startTime = performance.now();
          function tick(now: number) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 3);
            el.textContent = prefix + (eased * target).toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
    });

    // ─── MATTER.JS PHYSICS ─────────────────────────────────────────────────────

    const canvas       = document.getElementById("pixel-canvas") as HTMLCanvasElement;
    const physicsLayer = document.getElementById("physics-layer") as HTMLElement;
    if (!canvas || !physicsLayer) return;

    const ctx = canvas.getContext("2d", { alpha: false })!;

    let width = 0, height = 0, pageHeight = 0;
    let engine: Matter.Engine;
    let world: Matter.World;
    let runner: Matter.Runner;

    const blockSize = 30;
    const blocks: any[]              = [];
    const boundaries: Matter.Body[]  = [];
    const wordColliderBodies: Matter.Body[] = [];
    const delayedBodies: Matter.Body[]      = [];
    const sectionCatcherBodies: Matter.Body[] = [];

    let started              = false;
    let wordCollidersCreated = false;
    let delayedWaveReleased  = false;

    let section2Activated = false, section3Activated = false, section4Activated = false;
    let section5Activated = false, section6Activated = false, section7Activated = false;

    const palette = [
      { r: 0,   g: 240, b: 255, glow: "rgba(0,240,255,0.7)",   maxAlpha: 0.95 },
      { r: 255, g: 0,   b: 127, glow: "rgba(255,0,127,0.7)",   maxAlpha: 0.95 },
      { r: 124, g: 60,  b: 255, glow: "rgba(124,60,255,0.55)", maxAlpha: 0.76 },
      { r: 46,  g: 93,  b: 255, glow: "rgba(46,93,255,0.55)",  maxAlpha: 0.76 },
      { r: 255, g: 209, b: 102, glow: "rgba(255,209,102,0.45)",maxAlpha: 0.64 },
    ];

    function getPageHeight() {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, window.innerHeight);
    }

    function initPhysics() {
      engine = Engine.create({ enableSleeping: true });
      world  = engine.world;
      world.gravity.y = 1.15;
      runner = Runner.create();
      Runner.run(runner, engine);
    }

    function createBoundary(x: number, y: number, w: number, h: number, opts: object = {}) {
      const body = Bodies.rectangle(x, y, w, h, { isStatic: true, friction: 0.8, restitution: 0.1, ...opts });
      boundaries.push(body);
      World.add(world, body);
      return body;
    }

    function createPixelBody(x: number, y: number, size: number, color: any, opts: object = {}) {
      const body = Bodies.rectangle(x, y, size, size, {
        restitution: 0.26, friction: 0.74, frictionStatic: 0.85, frictionAir: 0.012,
        density: 0.0035, chamfer: { radius: 1 }, sleepThreshold: 42, ...opts,
      });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.18);
      Body.setVelocity(body, { x: (Math.random() - 0.5) * 2.8, y: Math.random() * 1.8 });
      return {
        body, size, color,
        alpha:        Math.random() * color.maxAlpha,
        targetAlpha:  Math.random() * color.maxAlpha,
        maxAlpha:     color.maxAlpha,
        flickerSpeed: Math.random() * 0.035 + 0.012,
        blinkOffset:  Math.random() * Math.PI * 2,
      };
    }

    function buildPhysicsStage() {
      boundaries.length = 0;
      createBoundary(width / 2, height + 40, width + 400, 80, { label: "hero-floor" });
      createBoundary(-80, pageHeight / 2, 120, pageHeight * 2, { label: "left-wall" });
      createBoundary(width + 80, pageHeight / 2, 120, pageHeight * 2, { label: "right-wall" });
      const ramp = Bodies.rectangle(width * 0.72, height * 0.88, width * 0.82, 34, {
        isStatic: true, angle: -0.28, friction: 0.92, restitution: 0.05, label: "hero-ramp",
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
        const color     = palette[Math.floor(Math.random() * palette.length)];
        const isDelayed = i >= firstWaveCount;
        const minX = isMobile ? width * 0.12 : isDelayed ? width * 0.06 : width * 0.48;
        const maxX = isMobile ? width * 0.95 : isDelayed ? width * 0.58 : width * 0.98;
        const x    = minX + Math.random() * (maxX - minX);
        const y    = isDelayed ? -160 - Math.random() * 360 : -80 - Math.random() * height * 0.9 - i * 1.4;
        const sv   = Math.random();
        const size = sv > 0.88 ? blockSize * 1.35 : sv > 0.62 ? blockSize * 1.1 : blockSize;
        const block = createPixelBody(x, y, size, color, { isStatic: isDelayed });
        blocks.push(block);
        if (isDelayed) delayedBodies.push(block.body);
        World.add(world, block.body);
      }
    }

    function createWordColliders() {
      if (wordCollidersCreated) return;
      if (wordColliderBodies.length) { World.remove(world, wordColliderBodies); wordColliderBodies.length = 0; }
      document.querySelectorAll<HTMLElement>(".word-collider").forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.width < 8 || rect.height < 8) return;
        wordColliderBodies.push(Bodies.rectangle(
          rect.left + rect.width / 2,
          rect.top + window.scrollY + rect.height / 2,
          rect.width * 0.88, rect.height * 0.68,
          { isStatic: true, restitution: 0.34, friction: 0.18, label: `word-${i}` },
        ));
      });
      World.add(world, wordColliderBodies);
      wordCollidersCreated = true;
      setTimeout(() => {
        if (wordColliderBodies.length) { World.remove(world, wordColliderBodies); wordColliderBodies.length = 0; wordCollidersCreated = false; }
      }, 5200);
    }

    function releaseDelayedWave() {
      if (delayedWaveReleased) return;
      delayedWaveReleased = true;
      delayedBodies.forEach((body, i) => {
        setTimeout(() => {
          Body.setStatic(body, false);
          Body.setVelocity(body, { x: 0.8 + Math.random() * 2.4, y: 1.5 + Math.random() * 2.2 });
          Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.22);
          Sleeping.set(body, false);
        }, i * 28);
      });
    }

    function wakeBlocks(minVx: number, maxVx: number, maxVy: number, angularScale: number) {
      blocks.forEach((block) => {
        if ((block.body as any).isSleeping || block.body.isStatic) {
          Sleeping.set(block.body, false);
          Body.setVelocity(block.body, {
            x: (Math.random() - 0.5) * (maxVx - minVx) * 2 + (Math.random() > 0.5 ? minVx : -minVx),
            y: -(Math.random() * maxVy * 0.5),
          });
          Body.setAngularVelocity(block.body, (Math.random() - 0.5) * angularScale * 2);
        }
      });
    }

    function spawnSectionBlocks(sectionId: string, count = 36) {
      const target = document.getElementById(sectionId);
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const sTop  = rect.top  + window.scrollY;
      const sLeft = rect.left + window.scrollX;
      for (let i = 0; i < count; i++) {
        const color = palette[Math.floor(Math.random() * palette.length)];
        const sv    = Math.random();
        const size  = sv > 0.86 ? blockSize * 1.25 : sv > 0.58 ? blockSize : blockSize * 0.82;
        const x     = sLeft + rect.width * (0.12 + Math.random() * 0.76);
        const y     = sTop - 180 - Math.random() * 280;
        const block = createPixelBody(x, y, size, color, { frictionAir: 0.012 });
        Body.setVelocity(block.body, { x: (Math.random() - 0.5) * 2.2, y: 2.4 + Math.random() * 2.8 });
        Body.setAngularVelocity(block.body, (Math.random() - 0.5) * 0.24);
        blocks.push(block);
        World.add(world, block.body);
      }
    }

    function createSectionCatchers(sectionId: string, colliderAttr: string, label: string) {
      const target = document.getElementById(sectionId);
      if (!target) return;
      if (sectionCatcherBodies.length) { World.remove(world, sectionCatcherBodies); sectionCatcherBodies.length = 0; }
      const r    = target.getBoundingClientRect();
      const sTop = r.top  + window.scrollY;
      const sLeft= r.left + window.scrollX;
      const sRight=r.right + window.scrollX;
      const sCx  = sLeft + r.width / 2;
      sectionCatcherBodies.push(
        Bodies.rectangle(sLeft  + 12, sTop + r.height * 0.5, 24, r.height * 0.88, { isStatic: true, friction: 0.9, restitution: 0.04, label: `${label}-lw` }),
        Bodies.rectangle(sRight - 12, sTop + r.height * 0.5, 24, r.height * 0.88, { isStatic: true, friction: 0.9, restitution: 0.04, label: `${label}-rw` }),
      );
      target.querySelectorAll<HTMLElement>(`[${colliderAttr}]`).forEach((el) => {
        const er = el.getBoundingClientRect();
        if (er.width < 16 || er.height < 10) return;
        sectionCatcherBodies.push(Bodies.rectangle(
          er.left + window.scrollX + er.width / 2,
          er.top  + window.scrollY + er.height * 0.46,
          er.width * 0.92, Math.max(18, er.height * 0.30),
          { isStatic: true, friction: 0.94, restitution: 0.05, angle: (Math.random() - 0.5) * 0.02, label: `${label}-el` },
        ));
      });
      sectionCatcherBodies.push(
        Bodies.rectangle(sCx, sTop + r.height * 0.90, r.width * 0.86, 30, { isStatic: true, friction: 0.95, restitution: 0.04, label: `${label}-shelf` }),
      );
      World.add(world, sectionCatcherBodies);
    }

    function drawBlock(block: any, time: number) {
      const { body, size, color } = block;
      const blinkPulse = Math.sin(time * 0.002 + block.blinkOffset) * 0.18 + 0.82;
      block.alpha += (block.targetAlpha - block.alpha) * block.flickerSpeed;
      if (Math.abs(block.alpha - block.targetAlpha) < 0.025) {
        block.targetAlpha = (0.22 + Math.random() * 0.78) * block.maxAlpha;
      }
      const alpha = Math.max(0.08, block.alpha * blinkPulse);
      ctx.save();
      ctx.translate(body.position.x, body.position.y);
      ctx.rotate(body.angle);
      ctx.shadowBlur   = 16;
      ctx.shadowColor  = color.glow;
      ctx.fillStyle    = `rgba(${color.r},${color.g},${color.b},${alpha})`;
      ctx.fillRect(-size / 2, -size / 2, size - 2, size - 2);
      ctx.shadowBlur = 0;
      ctx.fillStyle  = `rgba(255,255,255,${alpha * 0.32})`;
      ctx.fillRect(-size / 2, -size / 2, size - 2, 3);
      ctx.fillStyle  = `rgba(0,0,0,${alpha * 0.44})`;
      ctx.fillRect(-size / 2, size / 2 - 5, size - 2, 3);
      ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.10})`;
      ctx.lineWidth   = 1;
      ctx.strokeRect(-size / 2 + 3, -size / 2 + 3, size - 8, size - 8);
      ctx.restore();
    }

    function drawBackground() {
      ctx.fillStyle = "#03000a";
      ctx.fillRect(0, 0, width, pageHeight);
      const g = ctx.createRadialGradient(width * 0.78, height * 0.38, 0, width * 0.78, height * 0.38, Math.max(width, height) * 0.72);
      g.addColorStop(0,    "rgba(0,240,255,0.13)");
      g.addColorStop(0.35, "rgba(255,0,127,0.08)");
      g.addColorStop(1,    "rgba(5,0,16,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    }

    let rafId: number;
    function animate(time: number) {
      drawBackground();
      blocks.forEach((b) => drawBlock(b, time));
      rafId = requestAnimationFrame(animate);
    }

    function resetScene() {
      if (runner) Runner.stop(runner);
      if (engine) { World.clear(world, false); Engine.clear(engine); }
      section2Activated = section3Activated = section4Activated = false;
      section5Activated = section6Activated = section7Activated = false;
      sectionCatcherBodies.length = 0;
      wordColliderBodies.length   = 0;
      wordCollidersCreated = false;
      delayedWaveReleased  = false;
      initPhysics();
      buildPhysicsStage();
      spawnFallingPixels();
      setTimeout(() => { createWordColliders(); releaseDelayedWave(); }, 900);
    }

    function resize() {
      width      = window.innerWidth;
      height     = window.innerHeight;
      pageHeight = getPageHeight();
      canvas.width  = width;
      canvas.height = pageHeight;
      physicsLayer.style.height = `${pageHeight}px`;
      if (started) { resetScene(); ScrollTrigger.refresh(); }
    }

    function setupScrollPhysics() {
      const sections = [
        { trigger: "#why-agentvault",  id: "section-2-catcher", attr: "data-s2-collider", label: "s2", count: 42,
          activate() { if (section2Activated) return; section2Activated = true;
            createSectionCatchers("section-2-catcher", "data-s2-collider", "s2");
            const rem = boundaries.filter((b: any) => b.label === "hero-floor" || b.label === "hero-ramp");
            if (rem.length) World.remove(world, rem);
            spawnSectionBlocks("section-2-catcher", 42); wakeBlocks(1.8, 2.5, 3.2, 0.18); } },
        { trigger: "#roadmap",         id: "section-3-catcher", attr: "data-s3-collider", label: "s3", count: 38,
          activate() { if (section3Activated) return; section3Activated = true;
            createSectionCatchers("section-3-catcher", "data-s3-collider", "s3");
            spawnSectionBlocks("section-3-catcher", 38); wakeBlocks(1.9, 2.6, 3.3, 0.20); } },
        { trigger: "#architecture",    id: "section-4-catcher", attr: "data-s4-collider", label: "s4", count: 36,
          activate() { if (section4Activated) return; section4Activated = true;
            createSectionCatchers("section-4-catcher", "data-s4-collider", "s4");
            spawnSectionBlocks("section-4-catcher", 36); wakeBlocks(2.0, 2.6, 3.3, 0.22); } },
        { trigger: "#scale",           id: "section-5-catcher", attr: "data-s5-collider", label: "s5", count: 34,
          activate() { if (section5Activated) return; section5Activated = true;
            createSectionCatchers("section-5-catcher", "data-s5-collider", "s5");
            spawnSectionBlocks("section-5-catcher", 34); wakeBlocks(2.1, 2.6, 3.4, 0.24); } },
        { trigger: "#principles",      id: "section-6-catcher", attr: "data-s6-collider", label: "s6", count: 34,
          activate() { if (section6Activated) return; section6Activated = true;
            createSectionCatchers("section-6-catcher", "data-s6-collider", "s6");
            spawnSectionBlocks("section-6-catcher", 34); wakeBlocks(2.2, 2.7, 3.5, 0.26); } },
        { trigger: "#build",           id: "section-7-catcher", attr: "data-s7-collider", label: "s7", count: 32,
          activate() { if (section7Activated) return; section7Activated = true;
            createSectionCatchers("section-7-catcher", "data-s7-collider", "s7");
            spawnSectionBlocks("section-7-catcher", 32); wakeBlocks(2.4, 3.0, 3.8, 0.30); } },
      ];
      sections.forEach((s) => {
        ScrollTrigger.create({ trigger: s.trigger, start: "top 72%", once: true, onEnter: s.activate });
      });
    }

    window.addEventListener("resize", resize);

    resize();
    resetScene();
    started = true;
    setupScrollPhysics();
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      if (runner) Runner.stop(runner);
      if (engine) { World.clear(world, false); Engine.clear(engine); }
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
