/* ════════════════════════════════════════════════════════
   PARTICLES.JS — bioluminescent marine snow effect
   Used by all subpages.

   Usage (after the canvas element exists in HTML):
     initParticles('biolum-layer');
   ════════════════════════════════════════════════════════ */

(function () {
  const PARTICLE_COUNT_DIVISOR = 36;  // 1 particle per N viewport-width pixels
  const PARTICLE_MIN           = 32;
  const GLOW_RADIUS_MULTIPLIER = 7;
  const DRIFT_FREQ             = 0.00022;
  const ALPHA_PULSE_FREQ       = 0.0016;
  const ALPHA_PULSE_AMP        = 0.14;

  function initParticles(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
      console.warn('initParticles: canvas "' + canvasId + '" not found');
      return;
    }
    const ctx = canvas.getContext('2d');
    let particles = [];

    function buildParticles() {
      const count = Math.max(
        PARTICLE_MIN,
        Math.floor(window.innerWidth / PARTICLE_COUNT_DIVISOR)
      );
      particles = Array.from({ length: count }, () => ({
        x:    Math.random() * canvas.width,
        y:    Math.random() * canvas.height,
        r:    Math.random() * 2.0 + 0.5,
        vy:   Math.random() * 0.16 + 0.02,
        vx:   (Math.random() - 0.5) * 0.1,
        glow: Math.random() * Math.PI * 2,
        a:    Math.random() * 0.40 + 0.16,
      }));
    }

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      buildParticles();
    }

    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx + Math.sin(t * DRIFT_FREQ + p.glow) * 0.05;
        p.y += p.vy;

        // wrap edges
        if (p.y > canvas.height + 10) p.y = -10;
        if (p.x > canvas.width  + 10) p.x = -10;
        if (p.x < -10)                p.x =  canvas.width + 10;

        const alpha = p.a + ALPHA_PULSE_AMP * Math.sin(t * ALPHA_PULSE_FREQ + p.glow);
        const safeAlpha = Math.max(0, alpha);
        const gr = p.r * GLOW_RADIUS_MULTIPLIER;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, gr);
        g.addColorStop(0,    `rgba(110,255,212,${safeAlpha})`);
        g.addColorStop(0.45, `rgba(79,200,216,${Math.max(0, alpha * 0.42)})`);
        g.addColorStop(1,    'rgba(79,200,216,0)');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, gr, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    resize();
    requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
  }

  // expose globally so HTML pages can call it
  window.initParticles = initParticles;
}());
