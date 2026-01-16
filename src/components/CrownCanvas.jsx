import { useEffect, useRef } from "react";

export default function CrownCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const crowns = Array.from({ length: 30 }, () => createCrown());

    function createCrown() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        size: 20 + Math.random() * 25,
        speed: 0.3 + Math.random() * 0.5,
        drift: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.002,
        opacity: 0.4 + Math.random() * 0.6
      };
    }

    function drawCrown(x, y, size, rot, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(size / 100, size / 100);
      ctx.globalAlpha = opacity;

      // cuerpo base
      ctx.beginPath();
      ctx.moveTo(10, 70);
      ctx.lineTo(90, 70);
      ctx.lineTo(80, 40);
      ctx.lineTo(65, 60);
      ctx.lineTo(50, 35);
      ctx.lineTo(35, 60);
      ctx.lineTo(20, 40);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, 35, 0, 70);
      grad.addColorStop(0, "#ffd86b");
      grad.addColorStop(1, "#c89b2c");
      ctx.fillStyle = grad;
      ctx.fill();

      // borde
      ctx.strokeStyle = "rgba(255,215,100,0.8)";
      ctx.lineWidth = 3;
      ctx.stroke();

      // gemas
      [25, 50, 75].forEach(px => {
        ctx.beginPath();
        ctx.arc(px, 55, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#fff3b0";
        ctx.fill();
      });

      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);

      crowns.forEach(c => {
        c.y += c.speed;
        c.x += c.drift;
        c.rotation += c.rotSpeed;

        if (c.y > h + c.size) {
          Object.assign(c, createCrown(), { y: -c.size });
        }

        drawCrown(c.x, c.y, c.size, c.rotation, c.opacity);
      });

      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="crown-canvas" />;
}
