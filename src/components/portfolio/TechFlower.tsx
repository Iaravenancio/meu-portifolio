// @ts-nocheck
import { useEffect, useRef } from "react";

/** Flor holográfica em Canvas, adaptada de flor-tecnologica.html. */
export function TechFlower() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    return createTechFlower(canvas);
  }, []);
  return <div className="tech-flower" aria-hidden="true"><canvas ref={canvasRef} className="tech-flower__canvas" /></div>;
}

function createTechFlower(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const CAM = 7;
  let W = 0, H = 0, dpr = 1, scale = 1, cx = 0, cy = 0;
  let raf = 0, visible = true, last = performance.now(), rot = 0.4, time = 0;
  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };

  function buildPetal({ az, L, Wd, open, curl, cup = 0.35, by = 0, pal }) {
    const N = 22, mid = [];
    let r = 0, y = by;
    for (let i = 0; i <= N; i++) {
      mid.push({ r, y, t: i / N });
      const th = open + curl * i / N;
      r += Math.sin(th) * L / N; y += Math.cos(th) * L / N;
    }
    const ca = Math.cos(az), sa = Math.sin(az);
    const pt = (i, s) => {
      const m = mid[i], w = Wd * Math.pow(Math.sin(Math.PI * Math.pow(m.t, .7)), .9);
      const rr = m.r + cup * s * s * w;
      return [ca * rr - sa * s * w, m.y, sa * rr + ca * s * w];
    };
    const lines = [];
    [-1, -.66, -.33, 0, .33, .66, 1].forEach(s => {
      const p = []; for (let i = 0; i <= N; i++) p.push(pt(i, s));
      lines.push({ p, edge: Math.abs(s) === 1 });
    });
    [4, 7, 10, 13, 16, 19].forEach(i => {
      const p = []; for (let k = 0; k <= 10; k++) p.push(pt(i, -1 + k / 5));
      lines.push({ p, edge: false });
    });
    return { lines, outline: [...lines[0].p, ...lines[6].p.slice().reverse()], base: pt(0, 0), tip: pt(N, 0), pal };
  }
  const outer = ["rgba(255,110,210,", "rgba(70,215,255,", "rgba(205,235,255,"];
  const inner = ["rgba(255,190,90,", "rgba(168,120,255,", "rgba(120,230,255,"];
  const green = ["rgba(60,220,170,", "rgba(40,190,230,", "rgba(90,150,255,"];
  const petals = [];
  for (let k = 0; k < 6; k++) {
    petals.push(buildPetal({ az: k * Math.PI / 3, L: 2.1, Wd: .62, open: .55, curl: 1.25, pal: outer }));
    petals.push(buildPetal({ az: k * Math.PI / 3 + Math.PI / 6, L: 1.75, Wd: .55, open: .28, curl: 1.05, pal: inner }));
  }
  const leaves = [
    buildPetal({ az: .6, L: 2.3, Wd: .26, open: 1.75, curl: .55, cup: .1, by: -1.5, pal: green }),
    buildPetal({ az: Math.PI + .5, L: 2, Wd: .24, open: 1.85, curl: .5, cup: .1, by: -1.9, pal: green }),
  ];
  const stem = Array.from({ length: 23 }, (_, i) => [.18 * Math.sin(i * .15), -i * .125, 0]);
  const stamens = Array.from({ length: 6 }, (_, k) => {
    const az = k * Math.PI / 3 + .25;
    return Array.from({ length: 15 }, (_, i) => {
      const u = i / 14, r = .95 * Math.pow(u, 1.4), y = .15 + 1.6 * u - .45 * u * u;
      return [Math.cos(az) * r, y, Math.sin(az) * r];
    });
  });
  const particles = Array.from({ length: 70 }, () => ({
    a: Math.random() * Math.PI * 2, r: 1.2 + Math.random() * 2.4,
    y: -1.5 + Math.random() * 4.5, v: .08 + Math.random() * .2,
    ph: Math.random() * 6.28, s: .6 + Math.random() * 1.4,
  }));
  function project(p, rotY, tilt, k) {
    const c = Math.cos(rotY), s = Math.sin(rotY);
    const X = p[0] * c + p[2] * s, Z = -p[0] * s + p[2] * c;
    const ct = Math.cos(tilt), st = Math.sin(tilt);
    const Y = p[1] * ct + Z * st, Z2 = -p[1] * st + Z * ct;
    const f = CAM / (CAM + Z2) * k;
    return [cx + X * f * scale, cy - Y * f * scale, Z2];
  }
  function line(pts) {
    if (!pts.length) return;
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  }
  function mesh(m, ry, tilt, k, alpha) {
    const pr = pts => pts.map(p => project(p, ry, tilt, k));
    const b = project(m.base, ry, tilt, k), t = project(m.tip, ry, tilt, k);
    const g = ctx.createLinearGradient(b[0], b[1], t[0], t[1]);
    g.addColorStop(0, m.pal[0] + ".95)"); g.addColorStop(.35, m.pal[1] + ".9)"); g.addColorStop(1, m.pal[2] + ".95)");
    const depth = Math.max(.35, Math.min(1, 1 - (t[2] + 2.5) / 6)) * alpha;
    ctx.globalAlpha = .1 * depth; ctx.fillStyle = g; ctx.beginPath(); line(pr(m.outline)); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = g; ctx.lineWidth = .7; ctx.globalAlpha = .38 * depth;
    ctx.beginPath(); m.lines.forEach(l => { if (!l.edge) line(pr(l.p)); }); ctx.stroke();
    ctx.lineWidth = 1.4; ctx.globalAlpha = .95 * depth; ctx.shadowBlur = 10; ctx.shadowColor = m.pal[1] + ".9)";
    ctx.beginPath(); m.lines.forEach(l => { if (l.edge) line(pr(l.p)); }); ctx.stroke(); ctx.shadowBlur = 0;
  }
  function draw(dt) {
    time += dt; if (!reduceMotion) rot += dt * .28;
    mouse.sx += (mouse.x - mouse.sx) * .05; mouse.sy += (mouse.y - mouse.sy) * .05;
    const ry = rot + mouse.sx * .5, tilt = .42 + mouse.sy * .18, k = 1 + .015 * Math.sin(time * 1.4);
    ctx.clearRect(0, 0, W, H); ctx.globalCompositeOperation = "lighter";
    const ox = cx, oy = cy - .5 * scale;
    [[3.1, .1, .04, [4, 10]], [3.7, .07, -.025, [2, 14]], [2.45, .12, .07, [1, 6]]].forEach(([r, a, sp, dash]) => {
      ctx.save(); ctx.translate(ox, oy); ctx.rotate(time * sp); ctx.globalAlpha = a; ctx.strokeStyle = "#67e8f9"; ctx.setLineDash(dash);
      ctx.beginPath(); ctx.arc(0, 0, r * scale, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
    });
    ctx.setLineDash([]); ctx.save(); ctx.translate(ox, oy); ctx.rotate(-time * .03); ctx.globalAlpha = .18; ctx.strokeStyle = "#67e8f9"; ctx.beginPath();
    for (let i = 0; i < 72; i++) {
      const a = i / 72 * Math.PI * 2, r0 = 3.1 * scale, r1 = r0 + (i % 6 === 0 ? 10 : 4);
      ctx.moveTo(Math.cos(a) * r0, Math.sin(a) * r0); ctx.lineTo(Math.cos(a) * r1, Math.sin(a) * r1);
    }
    ctx.stroke(); ctx.restore();
    ctx.globalAlpha = .5; ctx.lineWidth = 1.4; ctx.strokeStyle = "rgba(70,200,230,.8)"; ctx.beginPath(); line(stem.map(p => project(p, ry, tilt, k))); ctx.stroke();
    leaves.forEach(p => mesh(p, ry, tilt, k, .65)); petals.forEach(p => mesh(p, ry, tilt, k, 1));
    stamens.forEach(s => {
      const pts = s.map(p => project(p, ry, tilt, k)); ctx.globalAlpha = .8; ctx.lineWidth = 1; ctx.strokeStyle = "rgba(255,220,150,.9)";
      ctx.beginPath(); line(pts); ctx.stroke();
      const e = pts[pts.length - 1], glow = ctx.createRadialGradient(e[0], e[1], 0, e[0], e[1], 9);
      glow.addColorStop(0, "rgba(255,230,160,1)"); glow.addColorStop(1, "rgba(255,150,80,0)");
      ctx.globalAlpha = .9; ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(e[0], e[1], 9, 0, 6.283); ctx.fill();
    });
    const c = project([0, .25, 0], ry, tilt, k), R = .95 * scale * (.9 + .1 * Math.sin(time * 2));
    const glow = ctx.createRadialGradient(c[0], c[1], 0, c[0], c[1], R);
    glow.addColorStop(0, "rgba(255,255,255,1)"); glow.addColorStop(.12, "rgba(255,220,140,.85)");
    glow.addColorStop(.35, "rgba(255,70,200,.45)"); glow.addColorStop(.65, "rgba(60,200,255,.18)"); glow.addColorStop(1, "rgba(60,200,255,0)");
    ctx.globalAlpha = 1; ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(c[0], c[1], R, 0, 6.283); ctx.fill();
    particles.forEach(p => {
      if (!reduceMotion) { p.y += p.v * dt; if (p.y > 3.4) p.y = -1.6; }
      const a = p.a + time * .05, q = project([Math.cos(a) * p.r, p.y, Math.sin(a) * p.r], ry, tilt, 1);
      ctx.globalAlpha = .25 + .55 * (.5 + .5 * Math.sin(time * 2 + p.ph)); ctx.fillStyle = "#9defff";
      ctx.beginPath(); ctx.arc(q[0], q[1], p.s, 0, 6.283); ctx.fill();
    });
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
  }
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2); W = canvas.clientWidth; H = canvas.clientHeight;
    if (!W || !H) return;
    canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    scale = Math.min(W * .95, H) / 6.2; cx = W / 2; cy = H * .58;
    if (reduceMotion) draw(0);
  }
  function loop(now) {
    raf = requestAnimationFrame(loop); const dt = Math.min(.05, (now - last) / 1000); last = now;
    if (visible && !document.hidden && W && H) draw(dt);
  }
  const onMove = e => { mouse.x = (e.clientX / innerWidth - .5) * 2; mouse.y = (e.clientY / innerHeight - .5) * 2; };
  const ro = new ResizeObserver(resize); ro.observe(canvas);
  const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }); io.observe(canvas);
  window.addEventListener("pointermove", onMove); resize();
  if (!reduceMotion) raf = requestAnimationFrame(loop);
  return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); window.removeEventListener("pointermove", onMove); };
}
