import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/EnvironmentSection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1b3edb27"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { Globe, Cpu, Users, CloudRain, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=1b3edb27";
import { ScrollReveal } from "/components/ScrollReveal.tsx";
const forces = [
  {
    title: "Economic",
    desc: "Inflation, Interest Rates, Globalization, Wage Levels.",
    icon: /* @__PURE__ */ jsxDEV(Globe, { className: "w-8 h-8 text-blue-400" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    bg: "bg-blue-500/10"
  },
  {
    title: "Technological",
    desc: "AI, Internet, Innovation, Disruption of business models.",
    icon: /* @__PURE__ */ jsxDEV(Cpu, { className: "w-8 h-8 text-purple-400" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    bg: "bg-purple-500/10"
  },
  {
    title: "Sociocultural",
    desc: "Demographics, Values, Customs, Diversity demands.",
    icon: /* @__PURE__ */ jsxDEV(Users, { className: "w-8 h-8 text-pink-400" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    bg: "bg-pink-500/10"
  },
  {
    title: "Natural",
    desc: "Climate change, Disasters, Resource availability.",
    icon: /* @__PURE__ */ jsxDEV(CloudRain, { className: "w-8 h-8 text-green-400" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    bg: "bg-green-500/10"
  }
];
export const EnvironmentSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { id: "environment", className: "py-20 bg-black/30", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-4", children: "The External Environment" }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-gray-400 max-w-2xl mx-auto", children: [
        "The organization is an ",
        /* @__PURE__ */ jsxDEV("span", { className: "text-brand-glow font-semibold", children: "Open System" }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
          lineNumber: 40,
          columnNumber: 38
        }, this),
        " that continuously interacts with these forces."
      ] }, void 0, true, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: forces.map(
      (force, idx) => /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: idx * 100, direction: "up", children: /* @__PURE__ */ jsxDEV("div", { className: `h-full p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 ${force.bg}`, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mb-4 bg-brand-dark/50 w-16 h-16 rounded-xl flex items-center justify-center", children: force.icon }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold mb-3", children: force.title }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-400 leading-relaxed", children: force.desc }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this) }, idx, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ) }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 400, children: /* @__PURE__ */ jsxDEV("div", { className: "mt-20 glass-panel p-8 rounded-3xl relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent" }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
        lineNumber: 62,
        columnNumber: 14
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1 p-4 bg-white/5 rounded-xl border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs uppercase tracking-widest text-gray-500", children: "Inputs" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
            lineNumber: 66,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-semibold mt-1", children: "Resources" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
            lineNumber: 67,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-400", children: "Raw Materials, Capital" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
            lineNumber: 68,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-brand-accent", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-32 h-32 rounded-full border-4 border-brand-accent/20 flex items-center justify-center relative", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 rounded-full border-t-4 border-brand-accent animate-spin" }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
              lineNumber: 73,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-sm", children: "PROCESS" }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
              lineNumber: 74,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
            lineNumber: 72,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "rotate-90 md:rotate-0 mt-4" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
            lineNumber: 76,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1 p-4 bg-white/5 rounded-xl border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs uppercase tracking-widest text-gray-500", children: "Outputs" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
            lineNumber: 80,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-semibold mt-1", children: "Value" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
            lineNumber: 81,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-400", children: "Goods, Services" }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
            lineNumber: 82,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
        lineNumber: 64,
        columnNumber: 14
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
};
_c = EnvironmentSection;
var _c;
$RefreshReg$(_c, "EnvironmentSection");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/EnvironmentSection.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QTFEV0o7QUFBNEIsSUFBQUk7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIkdsb2JlIiwiQ3B1IiwiVXNlcnMiLCJDbG91ZFJhaW4iLCJBcnJvd1JpZ2h0IiwiU2Nyb2xsUmV2ZWFsIiwiZm9yY2VzIiwidGl0bGUiLCJkZXNjIiwiaWNvbiIsImJnIiwiRW52aXJvbm1lbnRTZWN0aW9uIiwibWFwIiwiZm9yY2UiLCJpZHgiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJFbnZpcm9ubWVudFNlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHbG9iZSwgQ3B1LCBVc2VycywgQ2xvdWRSYWluLCBBcnJvd1JpZ2h0IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IFNjcm9sbFJldmVhbCB9IGZyb20gJy4vU2Nyb2xsUmV2ZWFsJztcblxuY29uc3QgZm9yY2VzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRWNvbm9taWNcIixcbiAgICBkZXNjOiBcIkluZmxhdGlvbiwgSW50ZXJlc3QgUmF0ZXMsIEdsb2JhbGl6YXRpb24sIFdhZ2UgTGV2ZWxzLlwiLFxuICAgIGljb246IDxHbG9iZSBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtYmx1ZS00MDBcIiAvPixcbiAgICBiZzogXCJiZy1ibHVlLTUwMC8xMFwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUZWNobm9sb2dpY2FsXCIsXG4gICAgZGVzYzogXCJBSSwgSW50ZXJuZXQsIElubm92YXRpb24sIERpc3J1cHRpb24gb2YgYnVzaW5lc3MgbW9kZWxzLlwiLFxuICAgIGljb246IDxDcHUgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LXB1cnBsZS00MDBcIiAvPixcbiAgICBiZzogXCJiZy1wdXJwbGUtNTAwLzEwXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNvY2lvY3VsdHVyYWxcIixcbiAgICBkZXNjOiBcIkRlbW9ncmFwaGljcywgVmFsdWVzLCBDdXN0b21zLCBEaXZlcnNpdHkgZGVtYW5kcy5cIixcbiAgICBpY29uOiA8VXNlcnMgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LXBpbmstNDAwXCIgLz4sXG4gICAgYmc6IFwiYmctcGluay01MDAvMTBcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTmF0dXJhbFwiLFxuICAgIGRlc2M6IFwiQ2xpbWF0ZSBjaGFuZ2UsIERpc2FzdGVycywgUmVzb3VyY2UgYXZhaWxhYmlsaXR5LlwiLFxuICAgIGljb246IDxDbG91ZFJhaW4gY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LWdyZWVuLTQwMFwiIC8+LFxuICAgIGJnOiBcImJnLWdyZWVuLTUwMC8xMFwiXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBFbnZpcm9ubWVudFNlY3Rpb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiZW52aXJvbm1lbnRcIiBjbGFzc05hbWU9XCJweS0yMCBiZy1ibGFjay8zMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC02XCI+XG4gICAgICAgIDxTY3JvbGxSZXZlYWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xNlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtZGlzcGxheSBmb250LWJvbGQgbWItNFwiPlRoZSBFeHRlcm5hbCBFbnZpcm9ubWVudDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS00MDAgbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgVGhlIG9yZ2FuaXphdGlvbiBpcyBhbiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJyYW5kLWdsb3cgZm9udC1zZW1pYm9sZFwiPk9wZW4gU3lzdGVtPC9zcGFuPiB0aGF0IGNvbnRpbnVvdXNseSBpbnRlcmFjdHMgd2l0aCB0aGVzZSBmb3JjZXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2Nyb2xsUmV2ZWFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNlwiPlxuICAgICAgICAgIHtmb3JjZXMubWFwKChmb3JjZSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8U2Nyb2xsUmV2ZWFsIGtleT17aWR4fSBkZWxheT17aWR4ICogMTAwfSBkaXJlY3Rpb249XCJ1cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtZnVsbCBwLTYgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci13aGl0ZS81IGhvdmVyOmJvcmRlci13aGl0ZS8yMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXI6LXRyYW5zbGF0ZS15LTIgJHtmb3JjZS5iZ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgYmctYnJhbmQtZGFyay81MCB3LTE2IGgtMTYgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAge2ZvcmNlLmljb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTNcIj57Zm9yY2UudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDAgbGVhZGluZy1yZWxheGVkXCI+e2ZvcmNlLmRlc2N9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2Nyb2xsUmV2ZWFsPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogT3BlbiBTeXN0ZW0gVmlzdWFsaXphdGlvbiAqL31cbiAgICAgICAgPFNjcm9sbFJldmVhbCBkZWxheT17NDAwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwIGdsYXNzLXBhbmVsIHAtOCByb3VuZGVkLTN4bCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtYnJhbmQtcHJpbWFyeSB0by10cmFuc3BhcmVudFwiPjwvZGl2PlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC04IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHAtNCBiZy13aGl0ZS81IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1ncmF5LTUwMFwiPklucHV0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtdC0xXCI+UmVzb3VyY2VzPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+UmF3IE1hdGVyaWFscywgQ2FwaXRhbDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1icmFuZC1hY2NlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zMiBoLTMyIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItYnJhbmQtYWNjZW50LzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLWZ1bGwgYm9yZGVyLXQtNCBib3JkZXItYnJhbmQtYWNjZW50IGFuaW1hdGUtc3BpblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbVwiPlBST0NFU1M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInJvdGF0ZS05MCBtZDpyb3RhdGUtMCBtdC00XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHAtNCBiZy13aGl0ZS81IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1ncmF5LTUwMFwiPk91dHB1dHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbXQtMVwiPlZhbHVlPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+R29vZHMsIFNlcnZpY2VzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Njcm9sbFJldmVhbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07Il0sImZpbGUiOiJDOi9Vc2Vycy9Qcm9mZXNzaW9uYWwvRGVza3RvcC9TaGVyZGY1NTYtbWFpbiAoMikvU2hlcmRmNTU2LW1haW4vY29tcG9uZW50cy9FbnZpcm9ubWVudFNlY3Rpb24udHN4In0=