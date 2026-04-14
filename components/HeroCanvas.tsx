'use client';

import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }

    let nodes: Node[] = [];
    let nodeCount = 80;
    let connectDist = 150;

    function resize() {
      width = canvas!.width = canvas!.offsetWidth;
      height = canvas!.height = canvas!.offsetHeight;
      // 화면 면적 기준으로 노드 수·연결 거리 조정
      const area = width * height;
      nodeCount = Math.max(20, Math.min(80, Math.floor(area / 7000)));
      connectDist = width < 640 ? 90 : width < 1024 ? 120 : 150;
      // 리사이즈 시 노드 재생성
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    }

    window.addEventListener('resize', resize);
    resize();

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillStyle = 'rgba(0, 229, 255, 0.5)';

      nodes.forEach((n, i) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < connectDist) {
            ctx.globalAlpha = 1 - dist / connectDist;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
