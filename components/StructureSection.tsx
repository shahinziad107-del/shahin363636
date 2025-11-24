import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/StructureSection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1b3edb27"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1b3edb27"; const useState = __vite__cjsImport1_react["useState"];
import { Network, Layers, Globe } from "/node_modules/.vite/deps/lucide-react.js?v=1b3edb27";
import { ScrollReveal } from "/components/ScrollReveal.tsx";
export const StructureSection = () => {
  _s();
  const [activeTab, setActiveTab] = useState("mechanistic");
  return /* @__PURE__ */ jsxDEV("section", { id: "structure", className: "py-20 px-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row justify-between items-end mb-16", children: /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-4", children: "Organizational Structure" }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-gray-400", children: "The blueprint of work. Fitting structure to environment." }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(ScrollReveal, { direction: "up", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mb-12", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 p-1 rounded-full flex relative", children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: `absolute top-1 bottom-1 w-[140px] bg-gradient-to-r rounded-full transition-all duration-500 ease-out shadow-lg ${activeTab === "mechanistic" ? "left-1 from-brand-primary to-blue-600" : "left-[156px] from-green-500 to-emerald-600"}`
        },
        void 0,
        false,
        {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 24,
          columnNumber: 14
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setActiveTab("mechanistic"),
          className: `relative z-10 w-[150px] py-3 rounded-full text-sm font-bold transition-colors duration-300 ${activeTab === "mechanistic" ? "text-white" : "text-gray-400 hover:text-white"}`,
          children: "MECHANISTIC"
        },
        void 0,
        false,
        {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 28,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setActiveTab("organic"),
          className: `relative z-10 w-[150px] py-3 rounded-full text-sm font-bold transition-colors duration-300 ${activeTab === "organic" ? "text-white" : "text-gray-400 hover:text-white"}`,
          children: "ORGANIC"
        },
        void 0,
        false,
        {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 36,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "order-2 md:order-1", children: /* @__PURE__ */ jsxDEV("div", { className: "relative h-full min-h-[300px]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: `absolute inset-0 transition-all duration-500 transform ${activeTab === "mechanistic" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`, children: /* @__PURE__ */ jsxDEV("div", { className: "animate-float space-y-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-6 rounded-xl border-l-4 border-brand-primary shadow-[0_0_20px_rgba(59,130,246,0.1)]", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold mb-2 text-white", children: "Stable Environment" }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
              lineNumber: 55,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc list-inside text-gray-300 space-y-3", children: [
              /* @__PURE__ */ jsxDEV("li", { className: "marker:text-brand-primary", children: "Rigid Hierarchy" }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
                lineNumber: 57,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "marker:text-brand-primary", children: "Centralized Authority" }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
                lineNumber: 58,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "marker:text-brand-primary", children: "Strict Rules (High Formalization)" }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
                lineNumber: 59,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "marker:text-brand-primary", children: "Vertical Communication" }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
                lineNumber: 60,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
              lineNumber: 56,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 54,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-brand-primary/10 rounded-lg text-center text-sm text-brand-primary font-mono border border-brand-primary/20", children: '"Efficiency & Control"' }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 63,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: `absolute inset-0 transition-all duration-500 transform ${activeTab === "organic" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`, children: /* @__PURE__ */ jsxDEV("div", { className: "animate-float space-y-4", style: { animationDelay: "1s" }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-6 rounded-xl border-l-4 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.1)]", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold mb-2 text-white", children: "Dynamic Environment" }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
              lineNumber: 72,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc list-inside text-gray-300 space-y-3", children: [
              /* @__PURE__ */ jsxDEV("li", { className: "marker:text-green-500", children: "Flexible Networks" }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
                lineNumber: 74,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "marker:text-green-500", children: "Decentralized" }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
                lineNumber: 75,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "marker:text-green-500", children: "Adaptive (Low Formalization)" }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
                lineNumber: 76,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "marker:text-green-500", children: "Horizontal Communication" }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
                lineNumber: 77,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
              lineNumber: 73,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 71,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-green-500/10 rounded-lg text-center text-sm text-green-400 font-mono border border-green-500/20", children: '"Innovation & Agility"' }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 80,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "order-1 md:order-2 grid grid-cols-1 gap-4", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-500 uppercase tracking-wider mb-2", children: "Modern Designs" }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 100, direction: "left", children: /* @__PURE__ */ jsxDEV("div", { className: "group flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 border border-transparent hover:border-brand-accent/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-white/5 rounded-full group-hover:bg-brand-accent/20 transition-colors", children: /* @__PURE__ */ jsxDEV(Layers, { className: "text-brand-accent", size: 24 }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 95,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 94,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "font-bold group-hover:text-brand-accent transition-colors", children: "Matrix Structure" }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
              lineNumber: 98,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-400", children: "Dual reporting for efficiency & project focus." }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
              lineNumber: 99,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 97,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 93,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 200, direction: "left", children: /* @__PURE__ */ jsxDEV("div", { className: "group flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 border border-transparent hover:border-brand-purple/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-white/5 rounded-full group-hover:bg-brand-purple/20 transition-colors", children: /* @__PURE__ */ jsxDEV(Network, { className: "text-brand-purple", size: 24 }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 107,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 106,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "font-bold group-hover:text-brand-purple transition-colors", children: "Networked Team" }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
              lineNumber: 110,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-400", children: "Temporary, cross-functional flexible teams." }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
              lineNumber: 111,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 109,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 105,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 300, direction: "left", children: /* @__PURE__ */ jsxDEV("div", { className: "group flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 border border-transparent hover:border-orange-400/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(251,146,60,0.15)]", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-white/5 rounded-full group-hover:bg-orange-400/20 transition-colors", children: /* @__PURE__ */ jsxDEV(Globe, { className: "text-orange-400", size: 24 }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 119,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 118,
            columnNumber: 22
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "font-bold group-hover:text-orange-400 transition-colors", children: "Virtual Structure" }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
              lineNumber: 122,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-400", children: "Tech-reliant, no physical boundaries (Uber, Airbnb)." }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
              lineNumber: 123,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
            lineNumber: 121,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};
_s(StructureSection, "nMwLbJYOtKwbuSuYOHIkQScNZ/Y=");
_c = StructureSection;
var _c;
$RefreshReg$(_c, "StructureSection");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/StructureSection.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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SjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUUEsS0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVUE7QUFBQSxRQUVBLHVCQUFDLGdCQUFhLE9BQU8sS0FBSyxXQUFVLFFBQ2hDLGlDQUFDLFNBQUksV0FBVSwyTkFDVjtBQUFBLGlDQUFDLFNBQUksV0FBVSw4RUFDWixpQ0FBQyxTQUFNLFdBQVUsbUJBQWtCLE1BQU0sTUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNEMsS0FEL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFRDtBQUFBLFVBQ0EsdUJBQUMsU0FDRztBQUFBLG1DQUFDLFFBQUcsV0FBVSwyREFBMEQsaUNBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXlGO0FBQUEsWUFDekYsdUJBQUMsT0FBRSxXQUFVLHlCQUF3QixvRUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBeUY7QUFBQSxlQUY3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdBO0FBQUEsYUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUUEsS0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVUE7QUFBQSxXQXJDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBc0NBO0FBQUEsU0EvRUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWdGQTtBQUFBLE9BdkhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F3SEE7QUFFSjtBQUFFSCxHQTlIV0Qsa0JBQTBCO0FBQUFLLEtBQTFCTDtBQUEwQixJQUFBSztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJOZXR3b3JrIiwiTGF5ZXJzIiwiR2xvYmUiLCJTY3JvbGxSZXZlYWwiLCJTdHJ1Y3R1cmVTZWN0aW9uIiwiX3MiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJhbmltYXRpb25EZWxheSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlN0cnVjdHVyZVNlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyaWVmY2FzZSwgTmV0d29yaywgTGF5ZXJzLCBHbG9iZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBTY3JvbGxSZXZlYWwgfSBmcm9tICcuL1Njcm9sbFJldmVhbCc7XG5cbmV4cG9ydCBjb25zdCBTdHJ1Y3R1cmVTZWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPCdtZWNoYW5pc3RpYycgfCAnb3JnYW5pYyc+KCdtZWNoYW5pc3RpYycpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJzdHJ1Y3R1cmVcIiBjbGFzc05hbWU9XCJweS0yMCBweC02IG1heC13LTd4bCBteC1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZCBtYi0xNlwiPlxuICAgICAgICA8U2Nyb2xsUmV2ZWFsPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1kaXNwbGF5IGZvbnQtYm9sZCBtYi00XCI+T3JnYW5pemF0aW9uYWwgU3RydWN0dXJlPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTQwMFwiPlRoZSBibHVlcHJpbnQgb2Ygd29yay4gRml0dGluZyBzdHJ1Y3R1cmUgdG8gZW52aXJvbm1lbnQuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Njcm9sbFJldmVhbD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogVG9nZ2xlIFN3aXRjaCAqL31cbiAgICAgIDxTY3JvbGxSZXZlYWwgZGlyZWN0aW9uPVwidXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS81IHAtMSByb3VuZGVkLWZ1bGwgZmxleCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgIHsvKiBTbGlkaW5nIEJhY2tncm91bmQgKi99XG4gICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMSBib3R0b20tMSB3LVsxNDBweF0gYmctZ3JhZGllbnQtdG8tciByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2Utb3V0IHNoYWRvdy1sZyAke2FjdGl2ZVRhYiA9PT0gJ21lY2hhbmlzdGljJyA/ICdsZWZ0LTEgZnJvbS1icmFuZC1wcmltYXJ5IHRvLWJsdWUtNjAwJyA6ICdsZWZ0LVsxNTZweF0gZnJvbS1ncmVlbi01MDAgdG8tZW1lcmFsZC02MDAnfWB9XG4gICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ21lY2hhbmlzdGljJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHotMTAgdy1bMTUwcHhdIHB5LTMgcm91bmRlZC1mdWxsIHRleHQtc20gZm9udC1ib2xkIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gJ21lY2hhbmlzdGljJyA/ICd0ZXh0LXdoaXRlJyA6ICd0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNRUNIQU5JU1RJQ1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignb3JnYW5pYycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSB6LTEwIHctWzE1MHB4XSBweS0zIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGZvbnQtYm9sZCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdvcmdhbmljJyA/ICd0ZXh0LXdoaXRlJyA6ICd0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBPUkdBTklDXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Njcm9sbFJldmVhbD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC0xMlwiPlxuICAgICAgICB7LyogRHluYW1pYyBDb250ZW50IGJhc2VkIG9uIFRvZ2dsZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci0yIG1kOm9yZGVyLTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIG1pbi1oLVszMDBweF1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIHRyYW5zZm9ybSAke2FjdGl2ZVRhYiA9PT0gJ21lY2hhbmlzdGljJyA/ICdvcGFjaXR5LTEwMCB0cmFuc2xhdGUteC0wJyA6ICdvcGFjaXR5LTAgLXRyYW5zbGF0ZS14LTEwIHBvaW50ZXItZXZlbnRzLW5vbmUnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtZmxvYXQgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLXBhbmVsIHAtNiByb3VuZGVkLXhsIGJvcmRlci1sLTQgYm9yZGVyLWJyYW5kLXByaW1hcnkgc2hhZG93LVswXzBfMjBweF9yZ2JhKDU5LDEzMCwyNDYsMC4xKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTIgdGV4dC13aGl0ZVwiPlN0YWJsZSBFbnZpcm9ubWVudDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSB0ZXh0LWdyYXktMzAwIHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWFya2VyOnRleHQtYnJhbmQtcHJpbWFyeVwiPlJpZ2lkIEhpZXJhcmNoeTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYXJrZXI6dGV4dC1icmFuZC1wcmltYXJ5XCI+Q2VudHJhbGl6ZWQgQXV0aG9yaXR5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1hcmtlcjp0ZXh0LWJyYW5kLXByaW1hcnlcIj5TdHJpY3QgUnVsZXMgKEhpZ2ggRm9ybWFsaXphdGlvbik8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWFya2VyOnRleHQtYnJhbmQtcHJpbWFyeVwiPlZlcnRpY2FsIENvbW11bmljYXRpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLWJyYW5kLXByaW1hcnkvMTAgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtYnJhbmQtcHJpbWFyeSBmb250LW1vbm8gYm9yZGVyIGJvcmRlci1icmFuZC1wcmltYXJ5LzIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFZmZpY2llbmN5ICYgQ29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIHRyYW5zZm9ybSAke2FjdGl2ZVRhYiA9PT0gJ29yZ2FuaWMnID8gJ29wYWNpdHktMTAwIHRyYW5zbGF0ZS14LTAnIDogJ29wYWNpdHktMCB0cmFuc2xhdGUteC0xMCBwb2ludGVyLWV2ZW50cy1ub25lJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWZsb2F0IHNwYWNlLXktNFwiIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzcy1wYW5lbCBwLTYgcm91bmRlZC14bCBib3JkZXItbC00IGJvcmRlci1ncmVlbi01MDAgc2hhZG93LVswXzBfMjBweF9yZ2JhKDM0LDE5Nyw5NCwwLjEpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItMiB0ZXh0LXdoaXRlXCI+RHluYW1pYyBFbnZpcm9ubWVudDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSB0ZXh0LWdyYXktMzAwIHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWFya2VyOnRleHQtZ3JlZW4tNTAwXCI+RmxleGlibGUgTmV0d29ya3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWFya2VyOnRleHQtZ3JlZW4tNTAwXCI+RGVjZW50cmFsaXplZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYXJrZXI6dGV4dC1ncmVlbi01MDBcIj5BZGFwdGl2ZSAoTG93IEZvcm1hbGl6YXRpb24pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1hcmtlcjp0ZXh0LWdyZWVuLTUwMFwiPkhvcml6b250YWwgQ29tbXVuaWNhdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctZ3JlZW4tNTAwLzEwIHJvdW5kZWQtbGcgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyZWVuLTQwMCBmb250LW1vbm8gYm9yZGVyIGJvcmRlci1ncmVlbi01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIklubm92YXRpb24gJiBBZ2lsaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU3RydWN0dXJhbCBEZXNpZ25zIEdyaWQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItMSBtZDpvcmRlci0yIGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtYi0yXCI+TW9kZXJuIERlc2lnbnM8L2gzPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8U2Nyb2xsUmV2ZWFsIGRlbGF5PXsxMDB9IGRpcmVjdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIGdhcC00IHAtNCBiZy13aGl0ZS81IHJvdW5kZWQtbGcgaG92ZXI6Ymctd2hpdGUvMTAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItYnJhbmQtYWNjZW50LzMwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzaGFkb3ctWzBfMF8xNXB4X3JnYmEoNiwxODIsMjEyLDAuMTUpXVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBiZy13aGl0ZS81IHJvdW5kZWQtZnVsbCBncm91cC1ob3ZlcjpiZy1icmFuZC1hY2NlbnQvMjAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllcnMgY2xhc3NOYW1lPVwidGV4dC1icmFuZC1hY2NlbnRcIiBzaXplPXsyNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGdyb3VwLWhvdmVyOnRleHQtYnJhbmQtYWNjZW50IHRyYW5zaXRpb24tY29sb3JzXCI+TWF0cml4IFN0cnVjdHVyZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj5EdWFsIHJlcG9ydGluZyBmb3IgZWZmaWNpZW5jeSAmIHByb2plY3QgZm9jdXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2Nyb2xsUmV2ZWFsPlxuXG4gICAgICAgICAgICA8U2Nyb2xsUmV2ZWFsIGRlbGF5PXsyMDB9IGRpcmVjdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIGdhcC00IHAtNCBiZy13aGl0ZS81IHJvdW5kZWQtbGcgaG92ZXI6Ymctd2hpdGUvMTAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItYnJhbmQtcHVycGxlLzMwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMTM5LDkyLDI0NiwwLjE1KV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYmctd2hpdGUvNSByb3VuZGVkLWZ1bGwgZ3JvdXAtaG92ZXI6YmctYnJhbmQtcHVycGxlLzIwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV0d29yayBjbGFzc05hbWU9XCJ0ZXh0LWJyYW5kLXB1cnBsZVwiIHNpemU9ezI0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgZ3JvdXAtaG92ZXI6dGV4dC1icmFuZC1wdXJwbGUgdHJhbnNpdGlvbi1jb2xvcnNcIj5OZXR3b3JrZWQgVGVhbTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj5UZW1wb3JhcnksIGNyb3NzLWZ1bmN0aW9uYWwgZmxleGlibGUgdGVhbXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2Nyb2xsUmV2ZWFsPlxuXG4gICAgICAgICAgICA8U2Nyb2xsUmV2ZWFsIGRlbGF5PXszMDB9IGRpcmVjdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIGdhcC00IHAtNCBiZy13aGl0ZS81IHJvdW5kZWQtbGcgaG92ZXI6Ymctd2hpdGUvMTAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItb3JhbmdlLTQwMC8zMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2hhZG93LVswXzBfMTVweF9yZ2JhKDI1MSwxNDYsNjAsMC4xNSldXCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBiZy13aGl0ZS81IHJvdW5kZWQtZnVsbCBncm91cC1ob3ZlcjpiZy1vcmFuZ2UtNDAwLzIwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R2xvYmUgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNDAwXCIgc2l6ZT17MjR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBncm91cC1ob3Zlcjp0ZXh0LW9yYW5nZS00MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5WaXJ0dWFsIFN0cnVjdHVyZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj5UZWNoLXJlbGlhbnQsIG5vIHBoeXNpY2FsIGJvdW5kYXJpZXMgKFViZXIsIEFpcmJuYikuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2Nyb2xsUmV2ZWFsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07Il0sImZpbGUiOiJDOi9Vc2Vycy9Qcm9mZXNzaW9uYWwvRGVza3RvcC9TaGVyZGY1NTYtbWFpbiAoMikvU2hlcmRmNTU2LW1haW4vY29tcG9uZW50cy9TdHJ1Y3R1cmVTZWN0aW9uLnRzeCJ9