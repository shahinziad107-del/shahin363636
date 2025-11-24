import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/BackgroundParticles.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1b3edb27"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1b3edb27"; const useEffect = __vite__cjsImport1_react["useEffect"]; const useRef = __vite__cjsImport1_react["useRef"];
export const BackgroundParticles = () => {
  _s();
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const mouse = { x: -1e3, y: -1e3 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    const particles = [];
    const particleCount = Math.min(window.innerWidth / 8, 120);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        // Slower, smoother movement
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.1 - dist / 1e3})`;
            ctx.stroke();
          }
        }
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 - distMouse / 150})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.lineWidth = 0.5;
        }
      }
      requestAnimationFrame(draw);
    };
    const animationFrame = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  return /* @__PURE__ */ jsxDEV(
    "canvas",
    {
      ref: canvasRef,
      className: "fixed top-0 left-0 w-full h-full pointer-events-none opacity-60",
      style: { zIndex: 0 }
    },
    void 0,
    false,
    {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/BackgroundParticles.tsx",
      lineNumber: 112,
      columnNumber: 5
    },
    this
  );
};
_s(BackgroundParticles, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = BackgroundParticles;
var _c;
$RefreshReg$(_c, "BackgroundParticles");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/BackgroundParticles.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/BackgroundParticles.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/BackgroundParticles.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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SUFBQTREO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJCYWNrZ3JvdW5kUGFydGljbGVzIiwiX3MiLCJjYW52YXNSZWYiLCJjYW52YXMiLCJjdXJyZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibW91c2UiLCJ4IiwieSIsImhhbmRsZU1vdXNlTW92ZSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsInJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNsZXMiLCJwYXJ0aWNsZUNvdW50IiwiTWF0aCIsIm1pbiIsImkiLCJwdXNoIiwicmFuZG9tIiwidngiLCJ2eSIsInNpemUiLCJhbHBoYSIsImRyYXciLCJjbGVhclJlY3QiLCJsZW5ndGgiLCJwIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiaiIsInAyIiwiZHgiLCJkeSIsImRpc3QiLCJzcXJ0IiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJkeE1vdXNlIiwiZHlNb3VzZSIsImRpc3RNb3VzZSIsImxpbmVXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiekluZGV4IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQmFja2dyb3VuZFBhcnRpY2xlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZFBhcnRpY2xlczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKCFjdHgpIHJldHVybjtcblxuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgXG4gICAgLy8gTW91c2UgdHJhY2tpbmdcbiAgICBjb25zdCBtb3VzZSA9IHsgeDogLTEwMDAsIHk6IC0xMDAwIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgbW91c2UueCA9IGUuY2xpZW50WDtcbiAgICAgIG1vdXNlLnkgPSBlLmNsaWVudFk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgIHJlc2l6ZSgpO1xuXG4gICAgY29uc3QgcGFydGljbGVzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB2eDogbnVtYmVyOyB2eTogbnVtYmVyOyBzaXplOiBudW1iZXI7IGFscGhhOiBudW1iZXI7IGJhc2VYPzogbnVtYmVyOyBiYXNlWT86IG51bWJlciB9W10gPSBbXTtcbiAgICBjb25zdCBwYXJ0aWNsZUNvdW50ID0gTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLyA4LCAxMjApOyAvLyBJbmNyZWFzZWQgY291bnQgc2xpZ2h0bHlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVDb3VudDsgaSsrKSB7XG4gICAgICBwYXJ0aWNsZXMucHVzaCh7XG4gICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiB3aWR0aCxcbiAgICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGhlaWdodCxcbiAgICAgICAgdng6IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMywgLy8gU2xvd2VyLCBzbW9vdGhlciBtb3ZlbWVudFxuICAgICAgICB2eTogKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4zLFxuICAgICAgICBzaXplOiBNYXRoLnJhbmRvbSgpICogMiArIDAuNSxcbiAgICAgICAgYWxwaGE6IE1hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIFxuICAgICAgLy8gRHJhdyBwYXJ0aWNsZXNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHAgPSBwYXJ0aWNsZXNbaV07XG4gICAgICAgIHAueCArPSBwLnZ4O1xuICAgICAgICBwLnkgKz0gcC52eTtcblxuICAgICAgICAvLyBCb3VuY2Ugb2ZmIHdhbGxzXG4gICAgICAgIGlmIChwLnggPCAwIHx8IHAueCA+IHdpZHRoKSBwLnZ4ICo9IC0xO1xuICAgICAgICBpZiAocC55IDwgMCB8fCBwLnkgPiBoZWlnaHQpIHAudnkgKj0gLTE7XG5cbiAgICAgICAgLy8gRHJhdyBQYXJ0aWNsZVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMocC54LCBwLnksIHAuc2l6ZSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoNTYsIDE4OSwgMjQ4LCAke3AuYWxwaGF9KWA7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgLy8gQ29ubmVjdCB0byBvdGhlciBwYXJ0aWNsZXNcbiAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgcGFydGljbGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3QgcDIgPSBwYXJ0aWNsZXNbal07XG4gICAgICAgICAgY29uc3QgZHggPSBwLnggLSBwMi54O1xuICAgICAgICAgIGNvbnN0IGR5ID0gcC55IC0gcDIueTtcbiAgICAgICAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgICAgICAgIGlmIChkaXN0IDwgMTAwKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSg1NiwgMTg5LCAyNDgsICR7MC4xIC0gZGlzdC8xMDAwfSlgOyAvLyBGYWRpbmcgbGluZVxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbm5lY3QgdG8gTW91c2VcbiAgICAgICAgY29uc3QgZHhNb3VzZSA9IHAueCAtIG1vdXNlLng7XG4gICAgICAgIGNvbnN0IGR5TW91c2UgPSBwLnkgLSBtb3VzZS55O1xuICAgICAgICBjb25zdCBkaXN0TW91c2UgPSBNYXRoLnNxcnQoZHhNb3VzZSAqIGR4TW91c2UgKyBkeU1vdXNlICogZHlNb3VzZSk7XG5cbiAgICAgICAgaWYgKGRpc3RNb3VzZSA8IDE1MCkge1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgICAgICBjdHgubGluZVRvKG1vdXNlLngsIG1vdXNlLnkpO1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKDYsIDE4MiwgMjEyLCAkezAuMiAtIGRpc3RNb3VzZS8xNTB9KWA7IC8vIEJyaWdodGVyIGNvbm5lY3Rpb24gdG8gbW91c2VcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC44O1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC41OyAvLyBSZXNldFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGNhbnZhcyBcbiAgICAgIHJlZj17Y2FudmFzUmVmfSBcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIHBvaW50ZXItZXZlbnRzLW5vbmUgb3BhY2l0eS02MFwiXG4gICAgICBzdHlsZT17eyB6SW5kZXg6IDAgfX1cbiAgICAvPlxuICApO1xufTsiXSwiZmlsZSI6IkM6L1VzZXJzL1Byb2Zlc3Npb25hbC9EZXNrdG9wL1NoZXJkZjU1Ni1tYWluICgyKS9TaGVyZGY1NTYtbWFpbi9jb21wb25lbnRzL0JhY2tncm91bmRQYXJ0aWNsZXMudHN4In0=