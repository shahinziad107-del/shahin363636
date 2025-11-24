import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/Hero.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1b3edb27"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1b3edb27"; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import { ArrowDown, Users, PlayCircle } from "/node_modules/.vite/deps/lucide-react.js?v=1b3edb27";
import { ScrollReveal } from "/components/ScrollReveal.tsx";
const teamMembers = [
  "Ziad Shahin",
  "Ahmed Hossam",
  "Bellal Arafa",
  "Khaled Mohammed",
  "Ahmed Morsy"
];
export const Hero = () => {
  _s();
  const [displayText, setDisplayText] = useState("");
  const fullText = "Dynamic World";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 50;
    const moveY = (clientY - window.innerHeight / 2) / 50;
    setMousePos({ x: moveX, y: moveY });
  };
  const scrollToContent = () => {
    const element = document.getElementById("history");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxDEV(
    "section",
    {
      onMouseMove: handleMouseMove,
      className: "relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] transition-transform duration-100 ease-out",
            style: { transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }
          },
          void 0,
          false,
          {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 51,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px] transition-transform duration-100 ease-out",
            style: { transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }
          },
          void 0,
          false,
          {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 55,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center z-10 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "inline-block px-4 py-2 mb-6 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-sm animate-pulse-slow", children: /* @__PURE__ */ jsxDEV("span", { className: "text-brand-accent uppercase tracking-widest text-xs font-bold", children: "Group 1 Presentation" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 200, children: /* @__PURE__ */ jsxDEV("h1", { className: "font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-brand-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]", children: "Principles of Management" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 400, children: /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed h-8", children: [
            "In a ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-brand-glow font-semibold border-r-2 border-brand-glow pr-1 animate-pulse", children: displayText }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
              lineNumber: 75,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 74,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 500, children: /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: scrollToContent,
              className: "mb-12 px-8 py-4 bg-brand-primary text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group",
              children: [
                "Start Journey",
                /* @__PURE__ */ jsxDEV(PlayCircle, { size: 20, className: "group-hover:translate-x-1 transition-transform" }, void 0, false, {
                  fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
                  lineNumber: 85,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
              lineNumber: 80,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 600, children: /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed", children: [
            "Successful management is not a fixed science but an ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-white font-semibold", children: "art" }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
              lineNumber: 91,
              columnNumber: 65
            }, this),
            " that depends entirely on the external environment."
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 89,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 800, children: /* @__PURE__ */ jsxDEV("div", { className: "glass-panel rounded-2xl p-8 max-w-3xl mx-auto hover:bg-white/5 transition-colors duration-500 group", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-3 mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300", children: [
              /* @__PURE__ */ jsxDEV(Users, { size: 24 }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
                lineNumber: 99,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold uppercase tracking-widest", children: "Black Falcons Team" }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
                lineNumber: 100,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
              lineNumber: 98,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-4", children: teamMembers.map(
              (member, idx) => /* @__PURE__ */ jsxDEV(
                "span",
                {
                  className: "px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-brand-primary/20 hover:border-brand-primary/50 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-default",
                  children: member
                },
                idx,
                false,
                {
                  fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
                  lineNumber: 104,
                  columnNumber: 15
                },
                this
              )
            ) }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
              lineNumber: 102,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
            lineNumber: 96,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-brand-accent/50 cursor-pointer", onClick: scrollToContent, children: /* @__PURE__ */ jsxDEV(ArrowDown, { size: 32 }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
          lineNumber: 116,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  );
};
_s(Hero, "ZR79lztJnInOsGzn5otRB501SgE=");
_c = Hero;
var _c;
$RefreshReg$(_c, "Hero");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/Hero.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0RNOztBQWxETixTQUFnQkEsVUFBVUMsaUJBQWlCO0FBQzNDLFNBQVNDLFdBQVdDLE9BQU9DLGtCQUFrQjtBQUM3QyxTQUFTQyxvQkFBb0I7QUFFN0IsTUFBTUMsY0FBYztBQUFBLEVBQ2xCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFhO0FBR1IsYUFBTUMsT0FBaUJBLE1BQU07QUFBQUMsS0FBQTtBQUNsQyxRQUFNLENBQUNDLGFBQWFDLGNBQWMsSUFBSVYsU0FBUyxFQUFFO0FBQ2pELFFBQU1XLFdBQVc7QUFDakIsUUFBTSxDQUFDQyxVQUFVQyxXQUFXLElBQUliLFNBQVMsRUFBRWMsR0FBRyxHQUFHQyxHQUFHLEVBQUUsQ0FBQztBQUd2RGQsWUFBVSxNQUFNO0FBQ2QsUUFBSWUsUUFBUTtBQUNaLFVBQU1DLFFBQVFDLFlBQVksTUFBTTtBQUM5QlIscUJBQWVDLFNBQVNRLFVBQVUsR0FBR0gsS0FBSyxDQUFDO0FBQzNDQTtBQUNBLFVBQUlBLFFBQVFMLFNBQVNTLE9BQVFDLGVBQWNKLEtBQUs7QUFBQSxJQUNsRCxHQUFHLEdBQUc7QUFDTixXQUFPLE1BQU1JLGNBQWNKLEtBQUs7QUFBQSxFQUNsQyxHQUFHLEVBQUU7QUFHTCxRQUFNSyxrQkFBa0JBLENBQUNDLE1BQXdCO0FBQy9DLFVBQU0sRUFBRUMsU0FBU0MsUUFBUSxJQUFJRjtBQUM3QixVQUFNRyxTQUFTRixVQUFVRyxPQUFPQyxhQUFhLEtBQUs7QUFDbEQsVUFBTUMsU0FBU0osVUFBVUUsT0FBT0csY0FBYyxLQUFLO0FBQ25EakIsZ0JBQVksRUFBRUMsR0FBR1ksT0FBT1gsR0FBR2MsTUFBTSxDQUFDO0FBQUEsRUFDcEM7QUFFQSxRQUFNRSxrQkFBa0JBLE1BQU07QUFDNUIsVUFBTUMsVUFBVUMsU0FBU0MsZUFBZSxTQUFTO0FBQ2pELFFBQUlGLFNBQVM7QUFDWEEsY0FBUUcsZUFBZSxFQUFFQyxVQUFVLFNBQVMsQ0FBQztBQUFBLElBQy9DO0FBQUEsRUFDRjtBQUVBLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLGFBQWFkO0FBQUFBLE1BQ2IsV0FBVTtBQUFBLE1BSVY7QUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsT0FBTyxFQUFFZSxXQUFXLGFBQWF6QixTQUFTRSxJQUFJLEVBQUUsT0FBT0YsU0FBU0csSUFBSSxFQUFFLE1BQU07QUFBQTtBQUFBLFVBRjlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUdDO0FBQUEsUUFDRDtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsT0FBTyxFQUFFc0IsV0FBVyxhQUFhekIsU0FBU0UsQ0FBQyxPQUFPRixTQUFTRyxDQUFDLE1BQU07QUFBQTtBQUFBLFVBRnBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUdDO0FBQUEsUUFFRCx1QkFBQyxTQUFJLFdBQVUsc0NBQ2I7QUFBQSxpQ0FBQyxnQkFDQyxpQ0FBQyxTQUFJLFdBQVUsaUlBQ2IsaUNBQUMsVUFBSyxXQUFVLGlFQUFnRSxvQ0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBb0csS0FEdEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSUE7QUFBQSxVQUVBLHVCQUFDLGdCQUFhLE9BQU8sS0FDbkIsaUNBQUMsUUFBRyxXQUFVLGtOQUFnTix3Q0FBOU47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSUE7QUFBQSxVQUVBLHVCQUFDLGdCQUFhLE9BQU8sS0FDbkIsaUNBQUMsT0FBRSxXQUFVLHlFQUF1RTtBQUFBO0FBQUEsWUFDN0UsdUJBQUMsVUFBSyxXQUFVLGlGQUFpRk4seUJBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTZHO0FBQUEsZUFEcEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSUE7QUFBQSxVQUVBLHVCQUFDLGdCQUFhLE9BQU8sS0FDbkI7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLFNBQVNzQjtBQUFBQSxjQUNULFdBQVU7QUFBQSxjQUFrUDtBQUFBO0FBQUEsZ0JBRzVQLHVCQUFDLGNBQVcsTUFBTSxJQUFJLFdBQVUsb0RBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWdGO0FBQUE7QUFBQTtBQUFBLFlBTGxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1BLEtBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFRQTtBQUFBLFVBRUEsdUJBQUMsZ0JBQWEsT0FBTyxLQUNuQixpQ0FBQyxPQUFFLFdBQVUseURBQXVEO0FBQUE7QUFBQSxZQUNkLHVCQUFDLFVBQUssV0FBVSw0QkFBMkIsbUJBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQThDO0FBQUEsWUFBTztBQUFBLGVBRDNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUlBO0FBQUEsVUFHQSx1QkFBQyxnQkFBYSxPQUFPLEtBQ25CLGlDQUFDLFNBQUksV0FBVSx1R0FDYjtBQUFBLG1DQUFDLFNBQUksV0FBVSwwSEFDYjtBQUFBLHFDQUFDLFNBQU0sTUFBTSxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWdCO0FBQUEsY0FDaEIsdUJBQUMsUUFBRyxXQUFVLCtDQUE4QyxrQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBOEU7QUFBQSxpQkFGaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHQTtBQUFBLFlBQ0EsdUJBQUMsU0FBSSxXQUFVLHVDQUNaekIsc0JBQVlnQztBQUFBQSxjQUFJLENBQUNDLFFBQVFDLFFBQ3hCO0FBQUEsZ0JBQUM7QUFBQTtBQUFBLGtCQUVDLFdBQVU7QUFBQSxrQkFFVEQ7QUFBQUE7QUFBQUEsZ0JBSElDO0FBQUFBLGdCQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FLQTtBQUFBLFlBQ0QsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVNBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWVBLEtBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaUJBO0FBQUEsYUFyREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXNEQTtBQUFBLFFBRUEsdUJBQUMsU0FBSSxXQUFVLG1HQUFrRyxTQUFTVCxpQkFDeEgsaUNBQUMsYUFBVSxNQUFNLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBb0IsS0FEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUE7QUFBQTtBQUFBLElBekVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQTBFQTtBQUVKO0FBQUV2QixHQTVHV0QsTUFBYztBQUFBa0MsS0FBZGxDO0FBQWMsSUFBQWtDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFycm93RG93biIsIlVzZXJzIiwiUGxheUNpcmNsZSIsIlNjcm9sbFJldmVhbCIsInRlYW1NZW1iZXJzIiwiSGVybyIsIl9zIiwiZGlzcGxheVRleHQiLCJzZXREaXNwbGF5VGV4dCIsImZ1bGxUZXh0IiwibW91c2VQb3MiLCJzZXRNb3VzZVBvcyIsIngiLCJ5IiwiaW5kZXgiLCJ0aW1lciIsInNldEludGVydmFsIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZU1vdXNlTW92ZSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsIm1vdmVYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1vdmVZIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxUb0NvbnRlbnQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJ0cmFuc2Zvcm0iLCJtYXAiLCJtZW1iZXIiLCJpZHgiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJIZXJvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFycm93RG93biwgVXNlcnMsIFBsYXlDaXJjbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgU2Nyb2xsUmV2ZWFsIH0gZnJvbSAnLi9TY3JvbGxSZXZlYWwnO1xuXG5jb25zdCB0ZWFtTWVtYmVycyA9IFtcbiAgXCJaaWFkIFNoYWhpblwiLFxuICBcIkFobWVkIEhvc3NhbVwiLFxuICBcIkJlbGxhbCBBcmFmYVwiLFxuICBcIktoYWxlZCBNb2hhbW1lZFwiLFxuICBcIkFobWVkIE1vcnN5XCJcbl07XG5cbmV4cG9ydCBjb25zdCBIZXJvOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2Rpc3BsYXlUZXh0LCBzZXREaXNwbGF5VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGZ1bGxUZXh0ID0gXCJEeW5hbWljIFdvcmxkXCI7XG4gIGNvbnN0IFttb3VzZVBvcywgc2V0TW91c2VQb3NdID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuXG4gIC8vIFR5cGluZyBFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0RGlzcGxheVRleHQoZnVsbFRleHQuc3Vic3RyaW5nKDAsIGluZGV4KSk7XG4gICAgICBpbmRleCsrO1xuICAgICAgaWYgKGluZGV4ID4gZnVsbFRleHQubGVuZ3RoKSBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB9LCAxMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIC8vIFBhcmFsbGF4IEVmZmVjdCBIYW5kbGVyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBlO1xuICAgIGNvbnN0IG1vdmVYID0gKGNsaWVudFggLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC8gNTA7XG4gICAgY29uc3QgbW92ZVkgPSAoY2xpZW50WSAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC8gNTA7XG4gICAgc2V0TW91c2VQb3MoeyB4OiBtb3ZlWCwgeTogbW92ZVkgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsVG9Db250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeScpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIFxuICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC02IHB0LTIwIG92ZXJmbG93LWhpZGRlblwiXG4gICAgPlxuICAgICAgXG4gICAgICB7LyogQWJzdHJhY3QgR2xvdyBCYWNrZ3JvdW5kIHdpdGggUGFyYWxsYXggKi99XG4gICAgICA8ZGl2IFxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS80IGxlZnQtMS80IHctOTYgaC05NiBiZy1icmFuZC1wcmltYXJ5LzIwIHJvdW5kZWQtZnVsbCBibHVyLVsxMDBweF0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMTAwIGVhc2Utb3V0XCJcbiAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7bW91c2VQb3MueCAqIC0xfXB4LCAke21vdXNlUG9zLnkgKiAtMX1weClgIH19XG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2IFxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMS80IHJpZ2h0LTEvNCB3LTk2IGgtOTYgYmctYnJhbmQtcHVycGxlLzIwIHJvdW5kZWQtZnVsbCBibHVyLVsxMDBweF0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMTAwIGVhc2Utb3V0XCJcbiAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7bW91c2VQb3MueH1weCwgJHttb3VzZVBvcy55fXB4KWAgfX1cbiAgICAgID48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB6LTEwIG1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgIDxTY3JvbGxSZXZlYWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNCBweS0yIG1iLTYgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItYnJhbmQtYWNjZW50LzMwIGJnLWJyYW5kLWFjY2VudC8xMCBiYWNrZHJvcC1ibHVyLXNtIGFuaW1hdGUtcHVsc2Utc2xvd1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1icmFuZC1hY2NlbnQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LXhzIGZvbnQtYm9sZFwiPkdyb3VwIDEgUHJlc2VudGF0aW9uPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Njcm9sbFJldmVhbD5cblxuICAgICAgICA8U2Nyb2xsUmV2ZWFsIGRlbGF5PXsyMDB9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgdGV4dC01eGwgbWQ6dGV4dC03eGwgbGc6dGV4dC04eGwgZm9udC1ib2xkIG1iLTYgbGVhZGluZy10aWdodCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudCBiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUgdmlhLWJsdWUtMTAwIHRvLWJyYW5kLXByaW1hcnkgZHJvcC1zaGFkb3ctWzBfMF8xNXB4X3JnYmEoNTksMTMwLDI0NiwwLjUpXVwiPlxuICAgICAgICAgICAgUHJpbmNpcGxlcyBvZiBNYW5hZ2VtZW50XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9TY3JvbGxSZXZlYWw+XG5cbiAgICAgICAgPFNjcm9sbFJldmVhbCBkZWxheT17NDAwfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIHRleHQtZ3JheS0zMDAgbWItOCBmb250LWxpZ2h0IGxlYWRpbmctcmVsYXhlZCBoLThcIj5cbiAgICAgICAgICAgIEluIGEgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1icmFuZC1nbG93IGZvbnQtc2VtaWJvbGQgYm9yZGVyLXItMiBib3JkZXItYnJhbmQtZ2xvdyBwci0xIGFuaW1hdGUtcHVsc2VcIj57ZGlzcGxheVRleHR9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9TY3JvbGxSZXZlYWw+XG5cbiAgICAgICAgPFNjcm9sbFJldmVhbCBkZWxheT17NTAwfT5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9Db250ZW50fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMTIgcHgtOCBweS00IGJnLWJyYW5kLXByaW1hcnkgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgZm9udC1ib2xkIHRleHQtbGcgc2hhZG93LVswXzBfMjBweF9yZ2JhKDU5LDEzMCwyNDYsMC41KV0gaG92ZXI6c2hhZG93LVswXzBfMzBweF9yZ2JhKDU5LDEzMCwyNDYsMC44KV0gaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBteC1hdXRvIGdyb3VwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdGFydCBKb3VybmV5XG4gICAgICAgICAgICA8UGxheUNpcmNsZSBzaXplPXsyMH0gY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvU2Nyb2xsUmV2ZWFsPlxuXG4gICAgICAgIDxTY3JvbGxSZXZlYWwgZGVsYXk9ezYwMH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBtYXgtdy0yeGwgbXgtYXV0byBtYi0xMiBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgIFN1Y2Nlc3NmdWwgbWFuYWdlbWVudCBpcyBub3QgYSBmaXhlZCBzY2llbmNlIGJ1dCBhbiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGRcIj5hcnQ8L3NwYW4+IHRoYXQgZGVwZW5kcyBlbnRpcmVseSBvbiB0aGUgZXh0ZXJuYWwgZW52aXJvbm1lbnQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L1Njcm9sbFJldmVhbD5cblxuICAgICAgICB7LyogVGVhbSBTZWN0aW9uICovfVxuICAgICAgICA8U2Nyb2xsUmV2ZWFsIGRlbGF5PXs4MDB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xhc3MtcGFuZWwgcm91bmRlZC0yeGwgcC04IG1heC13LTN4bCBteC1hdXRvIGhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tNTAwIGdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0zIG1iLTYgdGV4dC1icmFuZC1wcmltYXJ5IGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgPFVzZXJzIHNpemU9ezI0fSAvPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPkJsYWNrIEZhbGNvbnMgVGVhbTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAge3RlYW1NZW1iZXJzLm1hcCgobWVtYmVyLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQtbGcgYmctd2hpdGUvNSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRleHQtc20gaG92ZXI6YmctYnJhbmQtcHJpbWFyeS8yMCBob3Zlcjpib3JkZXItYnJhbmQtcHJpbWFyeS81MCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOnNoYWRvdy1bMF8wXzE1cHhfcmdiYSg1OSwxMzAsMjQ2LDAuNCldIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBjdXJzb3ItZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge21lbWJlcn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2Nyb2xsUmV2ZWFsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEwIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgYW5pbWF0ZS1ib3VuY2UgdGV4dC1icmFuZC1hY2NlbnQvNTAgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtzY3JvbGxUb0NvbnRlbnR9PlxuICAgICAgICA8QXJyb3dEb3duIHNpemU9ezMyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTsiXSwiZmlsZSI6IkM6L1VzZXJzL1Byb2Zlc3Npb25hbC9EZXNrdG9wL1NoZXJkZjU1Ni1tYWluICgyKS9TaGVyZGY1NTYtbWFpbi9jb21wb25lbnRzL0hlcm8udHN4In0=