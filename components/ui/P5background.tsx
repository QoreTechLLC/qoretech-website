"use client";

import { useEffect, useRef } from "react";
import type p5Types from "p5";

export default function P5Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<p5Types | null>(null);

  useEffect(() => {
    // Dynamically import p5 so it never runs on the server
    import("p5").then(({ default: p5 }) => {
      if (!containerRef.current) return;

      // Clean up any previous sketch instance
      if (sketchRef.current) {
        sketchRef.current.remove();
      }

      const sketch = (p: p5Types) => {
        // ── Particle class ────────────────────────────
        class Particle {
          pos: p5Types.Vector;
          vel: p5Types.Vector;
          size: number;
          alpha: number;

          constructor() {
            this.pos = p.createVector(p.random(p.width), p.random(p.height));
            this.vel = p5.Vector.random2D().mult(p.random(0.2, 0.6));
            this.size = p.random(1.5, 3.5);
            this.alpha = p.random(40, 120);
          }

          update() {
            this.pos.add(this.vel);

            // Wrap around edges
            if (this.pos.x < 0) this.pos.x = p.width;
            if (this.pos.x > p.width) this.pos.x = 0;
            if (this.pos.y < 0) this.pos.y = p.height;
            if (this.pos.y > p.height) this.pos.y = 0;
          }

          draw() {
            p.noStroke();
            p.fill(0, 217, 126, this.alpha);
            p.circle(this.pos.x, this.pos.y, this.size);
          }
        }

        // ── Sketch setup & draw ───────────────────────
        let particles: Particle[] = [];
        const PARTICLE_COUNT = 80;
        const CONNECTION_DIST = 140; // max distance to draw a line

        p.setup = () => {
          const canvas = p.createCanvas(
            containerRef.current!.offsetWidth,
            containerRef.current!.offsetHeight,
          );
          canvas.parent(containerRef.current!);
          canvas.style("position", "absolute");
          canvas.style("top", "0");
          canvas.style("left", "0");
          canvas.style("pointer-events", "none"); // let clicks pass through

          for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
          }

          p.colorMode(p.RGB, 255, 255, 255, 255);
        };

        p.draw = () => {
          p.clear(); // transparent background — hero gradient shows through

          // Draw connections between nearby particles
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const d = p.dist(
                particles[i].pos.x,
                particles[i].pos.y,
                particles[j].pos.x,
                particles[j].pos.y,
              );

              if (d < CONNECTION_DIST) {
                // Fade line out as distance increases
                const alpha = p.map(d, 0, CONNECTION_DIST, 60, 0);
                p.stroke(0, 217, 126, alpha);
                p.strokeWeight(0.5);
                p.line(
                  particles[i].pos.x,
                  particles[i].pos.y,
                  particles[j].pos.x,
                  particles[j].pos.y,
                );
              }
            }
          }

          // Draw and update each particle
          particles.forEach((pt) => {
            pt.update();
            pt.draw();
          });
        };

        // Resize canvas when window resizes
        p.windowResized = () => {
          if (containerRef.current) {
            p.resizeCanvas(
              containerRef.current.offsetWidth,
              containerRef.current.offsetHeight,
            );
          }
        };
      };

      sketchRef.current = new p5(sketch);
    });

    // Cleanup on unmount
    return () => {
      if (sketchRef.current) {
        sketchRef.current.remove();
        sketchRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
    />
  );
}
