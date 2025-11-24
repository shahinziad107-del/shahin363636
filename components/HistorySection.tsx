import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/HistorySection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1b3edb27"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { Lightbulb, Users, Handshake, Scale } from "/node_modules/.vite/deps/lucide-react.js?v=1b3edb27";
import { ScrollReveal } from "/components/ScrollReveal.tsx";
const timelineEvents = [
  {
    year: "Era 1",
    title: "Scientific Management",
    description: "Focus on laws, production, and physical efficiency. Workers as parts of a machine.",
    icon: /* @__PURE__ */ jsxDEV(Scale, { size: 24, className: "text-orange-400" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    color: "border-orange-400/50"
  },
  {
    year: "1924",
    title: "Hawthorne Studies",
    description: "The shift to the Social Aspect. Proved that attention to workers and social factors increases productivity more than physical conditions.",
    icon: /* @__PURE__ */ jsxDEV(Lightbulb, { size: 24, className: "text-yellow-400" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    color: "border-yellow-400/50"
  },
  {
    year: "Era 2",
    title: "Chester Barnard",
    description: "Zone of Indifference: Workers comply if orders don't conflict with personal interests.",
    icon: /* @__PURE__ */ jsxDEV(Users, { size: 24, className: "text-brand-primary" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    color: "border-brand-primary/50"
  },
  {
    year: "Era 3",
    title: "Mary Parker Follett",
    description: "Conflict Resolution & Integration. Both parties find a mutually satisfying solution rather than compromise.",
    icon: /* @__PURE__ */ jsxDEV(Handshake, { size: 24, className: "text-brand-purple" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    color: "border-brand-purple/50"
  }
];
export const HistorySection = () => {
  return /* @__PURE__ */ jsxDEV("section", { id: "history", className: "py-20 px-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "mb-16 border-l-4 border-brand-primary pl-6", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-4", children: "Evolution of Thought" }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-gray-400", children: "From strict mechanics to human relations." }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-8 relative", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary/20 to-transparent md:hidden" }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
          lineNumber: 49,
          columnNumber: 12
        }, this),
        timelineEvents.map(
          (event, idx) => /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: idx * 150, direction: "left", children: /* @__PURE__ */ jsxDEV("div", { className: `glass-panel p-6 rounded-xl flex gap-6 relative group hover:bg-white/5 transition-colors ${event.color} border-l-4 border-t-0 border-b-0 border-r-0`, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "shrink-0 mt-1 p-3 rounded-full bg-white/5 backdrop-blur-sm", children: event.icon }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
              lineNumber: 54,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-mono text-gray-500 mb-1 block", children: event.year }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
                lineNumber: 58,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold mb-2 group-hover:text-brand-accent transition-colors", children: event.title }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
                lineNumber: 59,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 leading-relaxed", children: event.description }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
                lineNumber: 60,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
              lineNumber: 57,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this) }, idx, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
            lineNumber: 52,
            columnNumber: 11
          }, this)
        )
      ] }, void 0, true, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "sticky top-32", children: /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 300, direction: "right", children: /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-8 rounded-2xl border border-brand-accent/20 bg-gradient-to-br from-brand-dark to-brand-primary/10", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold mb-6 text-brand-glow", children: 'The "It Depends" Principle' }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-300 mb-8 text-lg", children: [
          "The ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Contingency School" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
            lineNumber: 72,
            columnNumber: 21
          }, this),
          ' teaches us that there is no single "best way" to manage.'
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative h-48 bg-black/30 rounded-lg flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-32 h-32 border-4 border-dashed border-gray-600 rounded-full animate-[spin_10s_linear_infinite]" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
            lineNumber: 76,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 border-4 border-dotted border-brand-primary rounded-full absolute animate-[spin_8s_linear_infinite_reverse]" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
            lineNumber: 77,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-center z-10", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "block text-sm text-gray-500", children: "Management" }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
              lineNumber: 79,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "block text-xl font-bold text-white", children: "Response" }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
              lineNumber: 80,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
            lineNumber: 78,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
          lineNumber: 75,
          columnNumber: 18
        }, this) }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-6 text-sm text-gray-400 text-center", children: "Unique Situations Require Unique Responses" }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
};
_c = HistorySection;
var _c;
$RefreshReg$(_c, "HistorySection");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/HistorySection.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUE7QUFBQSxTQXFEQTtBQUVKO0FBQUVDLEtBekRXSjtBQUF3QixJQUFBSTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiTGlnaHRidWxiIiwiVXNlcnMiLCJIYW5kc2hha2UiLCJTY2FsZSIsIlNjcm9sbFJldmVhbCIsInRpbWVsaW5lRXZlbnRzIiwieWVhciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY29sb3IiLCJIaXN0b3J5U2VjdGlvbiIsIm1hcCIsImV2ZW50IiwiaWR4IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSGlzdG9yeVNlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaWdodGJ1bGIsIFVzZXJzLCBIYW5kc2hha2UsIFNjYWxlIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IFNjcm9sbFJldmVhbCB9IGZyb20gJy4vU2Nyb2xsUmV2ZWFsJztcblxuY29uc3QgdGltZWxpbmVFdmVudHMgPSBbXG4gIHtcbiAgICB5ZWFyOiBcIkVyYSAxXCIsXG4gICAgdGl0bGU6IFwiU2NpZW50aWZpYyBNYW5hZ2VtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9jdXMgb24gbGF3cywgcHJvZHVjdGlvbiwgYW5kIHBoeXNpY2FsIGVmZmljaWVuY3kuIFdvcmtlcnMgYXMgcGFydHMgb2YgYSBtYWNoaW5lLlwiLFxuICAgIGljb246IDxTY2FsZSBzaXplPXsyNH0gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNDAwXCIgLz4sXG4gICAgY29sb3I6IFwiYm9yZGVyLW9yYW5nZS00MDAvNTBcIlxuICB9LFxuICB7XG4gICAgeWVhcjogXCIxOTI0XCIsXG4gICAgdGl0bGU6IFwiSGF3dGhvcm5lIFN0dWRpZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgc2hpZnQgdG8gdGhlIFNvY2lhbCBBc3BlY3QuIFByb3ZlZCB0aGF0IGF0dGVudGlvbiB0byB3b3JrZXJzIGFuZCBzb2NpYWwgZmFjdG9ycyBpbmNyZWFzZXMgcHJvZHVjdGl2aXR5IG1vcmUgdGhhbiBwaHlzaWNhbCBjb25kaXRpb25zLlwiLFxuICAgIGljb246IDxMaWdodGJ1bGIgc2l6ZT17MjR9IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTQwMFwiIC8+LFxuICAgIGNvbG9yOiBcImJvcmRlci15ZWxsb3ctNDAwLzUwXCJcbiAgfSxcbiAge1xuICAgIHllYXI6IFwiRXJhIDJcIixcbiAgICB0aXRsZTogXCJDaGVzdGVyIEJhcm5hcmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJab25lIG9mIEluZGlmZmVyZW5jZTogV29ya2VycyBjb21wbHkgaWYgb3JkZXJzIGRvbid0IGNvbmZsaWN0IHdpdGggcGVyc29uYWwgaW50ZXJlc3RzLlwiLFxuICAgIGljb246IDxVc2VycyBzaXplPXsyNH0gY2xhc3NOYW1lPVwidGV4dC1icmFuZC1wcmltYXJ5XCIgLz4sXG4gICAgY29sb3I6IFwiYm9yZGVyLWJyYW5kLXByaW1hcnkvNTBcIlxuICB9LFxuICB7XG4gICAgeWVhcjogXCJFcmEgM1wiLFxuICAgIHRpdGxlOiBcIk1hcnkgUGFya2VyIEZvbGxldHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb25mbGljdCBSZXNvbHV0aW9uICYgSW50ZWdyYXRpb24uIEJvdGggcGFydGllcyBmaW5kIGEgbXV0dWFsbHkgc2F0aXNmeWluZyBzb2x1dGlvbiByYXRoZXIgdGhhbiBjb21wcm9taXNlLlwiLFxuICAgIGljb246IDxIYW5kc2hha2Ugc2l6ZT17MjR9IGNsYXNzTmFtZT1cInRleHQtYnJhbmQtcHVycGxlXCIgLz4sXG4gICAgY29sb3I6IFwiYm9yZGVyLWJyYW5kLXB1cnBsZS81MFwiXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBIaXN0b3J5U2VjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJoaXN0b3J5XCIgY2xhc3NOYW1lPVwicHktMjAgcHgtNiBtYXgtdy03eGwgbXgtYXV0b1wiPlxuICAgICAgPFNjcm9sbFJldmVhbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xNiBib3JkZXItbC00IGJvcmRlci1icmFuZC1wcmltYXJ5IHBsLTZcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1kaXNwbGF5IGZvbnQtYm9sZCBtYi00XCI+RXZvbHV0aW9uIG9mIFRob3VnaHQ8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTQwMFwiPkZyb20gc3RyaWN0IG1lY2hhbmljcyB0byBodW1hbiByZWxhdGlvbnMuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2Nyb2xsUmV2ZWFsPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTEyIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS04IHJlbGF0aXZlXCI+XG4gICAgICAgICAgIHsvKiBUaW1lbGluZSBMaW5lICovfVxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtOCB0b3AtMCBib3R0b20tMCB3LTAuNSBiZy1ncmFkaWVudC10by1iIGZyb20tYnJhbmQtcHJpbWFyeS8yMCB0by10cmFuc3BhcmVudCBtZDpoaWRkZW5cIj48L2Rpdj5cblxuICAgICAgICAgIHt0aW1lbGluZUV2ZW50cy5tYXAoKGV2ZW50LCBpZHgpID0+IChcbiAgICAgICAgICAgIDxTY3JvbGxSZXZlYWwga2V5PXtpZHh9IGRlbGF5PXtpZHggKiAxNTB9IGRpcmVjdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BnbGFzcy1wYW5lbCBwLTYgcm91bmRlZC14bCBmbGV4IGdhcC02IHJlbGF0aXZlIGdyb3VwIGhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1jb2xvcnMgJHtldmVudC5jb2xvcn0gYm9yZGVyLWwtNCBib3JkZXItdC0wIGJvcmRlci1iLTAgYm9yZGVyLXItMGB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hyaW5rLTAgbXQtMSBwLTMgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzUgYmFja2Ryb3AtYmx1ci1zbVwiPlxuICAgICAgICAgICAgICAgICAge2V2ZW50Lmljb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIHRleHQtZ3JheS01MDAgbWItMSBibG9ja1wiPntldmVudC55ZWFyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yIGdyb3VwLWhvdmVyOnRleHQtYnJhbmQtYWNjZW50IHRyYW5zaXRpb24tY29sb3JzXCI+e2V2ZW50LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGxlYWRpbmctcmVsYXhlZFwiPntldmVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TY3JvbGxSZXZlYWw+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0zMlwiPlxuICAgICAgICAgIDxTY3JvbGxSZXZlYWwgZGVsYXk9ezMwMH0gZGlyZWN0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xhc3MtcGFuZWwgcC04IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItYnJhbmQtYWNjZW50LzIwIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYnJhbmQtZGFyayB0by1icmFuZC1wcmltYXJ5LzEwXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNiB0ZXh0LWJyYW5kLWdsb3dcIj5UaGUgXCJJdCBEZXBlbmRzXCIgUHJpbmNpcGxlPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBtYi04IHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICBUaGUgPHN0cm9uZz5Db250aW5nZW5jeSBTY2hvb2w8L3N0cm9uZz4gdGVhY2hlcyB1cyB0aGF0IHRoZXJlIGlzIG5vIHNpbmdsZSBcImJlc3Qgd2F5XCIgdG8gbWFuYWdlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC00OCBiZy1ibGFjay8zMCByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMyIGgtMzIgYm9yZGVyLTQgYm9yZGVyLWRhc2hlZCBib3JkZXItZ3JheS02MDAgcm91bmRlZC1mdWxsIGFuaW1hdGUtW3NwaW5fMTBzX2xpbmVhcl9pbmZpbml0ZV1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgYm9yZGVyLTQgYm9yZGVyLWRvdHRlZCBib3JkZXItYnJhbmQtcHJpbWFyeSByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgYW5pbWF0ZS1bc3Bpbl84c19saW5lYXJfaW5maW5pdGVfcmV2ZXJzZV1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB6LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+TWFuYWdlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+UmVzcG9uc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1zbSB0ZXh0LWdyYXktNDAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgVW5pcXVlIFNpdHVhdGlvbnMgUmVxdWlyZSBVbmlxdWUgUmVzcG9uc2VzXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2Nyb2xsUmV2ZWFsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07Il0sImZpbGUiOiJDOi9Vc2Vycy9Qcm9mZXNzaW9uYWwvRGVza3RvcC9TaGVyZGY1NTYtbWFpbiAoMikvU2hlcmRmNTU2LW1haW4vY29tcG9uZW50cy9IaXN0b3J5U2VjdGlvbi50c3gifQ==