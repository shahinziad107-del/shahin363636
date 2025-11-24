import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/DownloadsSection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1b3edb27"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1b3edb27"; const useState = __vite__cjsImport1_react["useState"];
import { FileText, Video, Download, FileType, Check, FileCheck } from "/node_modules/.vite/deps/lucide-react.js?v=1b3edb27";
import { ScrollReveal } from "/components/ScrollReveal.tsx";
const downloads = [
  {
    id: 1,
    title: "Principles Presentation",
    type: "PDF",
    size: "2.4 MB",
    icon: /* @__PURE__ */ jsxDEV(FileText, { className: "w-8 h-8 text-red-400" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    desc: "The complete slide deck covering Scientific Management to Modern Culture."
  },
  {
    id: 2,
    title: "Executive Summary",
    type: "DOCX",
    size: "1.1 MB",
    icon: /* @__PURE__ */ jsxDEV(FileType, { className: "w-8 h-8 text-blue-400" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    desc: "A concise written summary of the key management theories discussed."
  },
  {
    id: 3,
    title: "Case Study Analysis",
    type: "PDF",
    size: "3.5 MB",
    icon: /* @__PURE__ */ jsxDEV(FileCheck, { className: "w-8 h-8 text-yellow-400" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    desc: "Deep dive into real-world examples of organizational adaptation."
  },
  {
    id: 4,
    title: "Open Systems Explainer",
    type: "MP4",
    size: "45 MB",
    icon: /* @__PURE__ */ jsxDEV(Video, { className: "w-8 h-8 text-brand-accent" }, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    desc: "Animated video breakdown of the External Environment forces.",
    isVideo: true
  }
];
const DownloadButton = () => {
  _s();
  const [status, setStatus] = useState("idle");
  const handleDownload = () => {
    if (status !== "idle") return;
    setStatus("downloading");
    setTimeout(() => {
      setStatus("done");
      setTimeout(() => setStatus("idle"), 3e3);
    }, 1500);
  };
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      onClick: handleDownload,
      disabled: status !== "idle",
      className: `
        relative overflow-hidden p-3 rounded-full transition-all duration-300 border shadow-lg
        ${status === "idle" ? "bg-white/5 hover:bg-brand-accent hover:text-brand-dark border-white/10 hover:border-brand-accent hover:scale-110" : ""}
        ${status === "downloading" ? "bg-brand-primary border-brand-primary text-white cursor-wait" : ""}
        ${status === "done" ? "bg-green-500 border-green-500 text-white" : ""}
      `,
      title: "Download File",
      children: /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex items-center justify-center", children: [
        status === "idle" && /* @__PURE__ */ jsxDEV(Download, { size: 20 }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
          lineNumber: 75,
          columnNumber: 31
        }, this),
        status === "downloading" && /* @__PURE__ */ jsxDEV("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
          lineNumber: 77,
          columnNumber: 9
        }, this),
        status === "done" && /* @__PURE__ */ jsxDEV(Check, { size: 20, className: "animate-in zoom-in duration-300" }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
          lineNumber: 79,
          columnNumber: 31
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
      lineNumber: 57,
      columnNumber: 5
    },
    this
  );
};
_s(DownloadButton, "pMVgpsUAJOHrZfHrrx/6nNCpzkc=");
_c = DownloadButton;
export const DownloadsSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { id: "downloads", className: "py-24 px-6 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-[120px]" }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-block px-3 py-1 mb-4 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest", children: "Bonus Content" }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-4", children: "Downloads & Resources" }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-gray-400 max-w-2xl mx-auto", children: "Access the complete presentation materials, research documents, and visual guides used in this project." }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 lg:gap-8", children: downloads.map(
        (item, idx) => /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: idx * 100, direction: idx % 2 === 0 ? "left" : "right", children: /* @__PURE__ */ jsxDEV("div", { className: "group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-brand-accent/50 hover:to-brand-primary/50 transition-all duration-500 h-full", children: /* @__PURE__ */ jsxDEV("div", { className: "relative h-full bg-brand-dark/90 backdrop-blur-xl rounded-xl p-8 border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-6 group-hover:bg-brand-dark/80 transition-all duration-300", children: [
          /* @__PURE__ */ jsxDEV("div", { className: `
                    shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 
                    group-hover:scale-110 transition-transform duration-500 border border-white/5
                    ${item.isVideo ? "shadow-[0_0_30px_rgba(6,182,212,0.2)]" : "shadow-none"}
                  `, children: item.icon }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
            lineNumber: 118,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 text-center md:text-left", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold mb-2 group-hover:text-white transition-colors", children: item.title }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
              lineNumber: 128,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-400 mb-4 leading-relaxed", children: item.desc }, void 0, false, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
              lineNumber: 131,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center md:justify-start gap-3", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-mono text-gray-500 bg-black/40 px-2 py-1 rounded border border-white/5 uppercase tracking-wide", children: item.type }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
                lineNumber: 136,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-mono text-gray-500", children: item.size }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
                lineNumber: 139,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
              lineNumber: 135,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
            lineNumber: 127,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-4 md:mt-0 self-center shrink-0", children: /* @__PURE__ */ jsxDEV(DownloadButton, {}, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
            lineNumber: 147,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
            lineNumber: 146,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
          lineNumber: 115,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this) }, item.id, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 400, direction: "up", children: /* @__PURE__ */ jsxDEV("div", { className: "mt-12 text-center text-xs text-gray-600 font-mono", children: "* Files are protected by copyright of Black Falcons Team." }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
};
_c2 = DownloadsSection;
var _c, _c2;
$RefreshReg$(_c, "DownloadButton");
$RefreshReg$(_c2, "DownloadsSection");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/DownloadsSection.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFDLFNBQUksV0FBVSwyREFDYjtBQUFBLHFDQUFDLFVBQUssV0FBVSwrR0FDYlcsZUFBS2QsUUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVBO0FBQUEsY0FDQSx1QkFBQyxVQUFLLFdBQVUsbUNBQ2JjLGVBQUtiLFFBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBT0E7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZ0JBO0FBQUEsVUFHQSx1QkFBQyxTQUFJLFdBQVUscUNBQ2IsaUNBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZSxLQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUEsYUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW1DQSxLQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdUNBLEtBeENpQmEsS0FBS2hCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF5Q0E7QUFBQSxNQUNELEtBNUNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE2Q0E7QUFBQSxNQUdBLHVCQUFDLGdCQUFhLE9BQU8sS0FBSyxXQUFVLE1BQ2hDLGlDQUFDLFNBQUksV0FBVSxxREFBbUQseUVBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQSxLQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFJQTtBQUFBLFNBakVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FrRUE7QUFBQSxPQXpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMEVBO0FBRUo7QUFBRWtCLE1BOUVXSjtBQUEwQixJQUFBRCxJQUFBSztBQUFBQyxhQUFBTixJQUFBO0FBQUFNLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZpbGVUZXh0IiwiVmlkZW8iLCJEb3dubG9hZCIsIkZpbGVUeXBlIiwiQ2hlY2siLCJGaWxlQ2hlY2siLCJTY3JvbGxSZXZlYWwiLCJkb3dubG9hZHMiLCJpZCIsInRpdGxlIiwidHlwZSIsInNpemUiLCJpY29uIiwiZGVzYyIsImlzVmlkZW8iLCJEb3dubG9hZEJ1dHRvbiIsIl9zIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiaGFuZGxlRG93bmxvYWQiLCJzZXRUaW1lb3V0IiwiX2MiLCJEb3dubG9hZHNTZWN0aW9uIiwibWFwIiwiaXRlbSIsImlkeCIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJEb3dubG9hZHNTZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaWxlVGV4dCwgVmlkZW8sIERvd25sb2FkLCBGaWxlVHlwZSwgQ2hlY2ssIEZpbGVDaGVjayB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBTY3JvbGxSZXZlYWwgfSBmcm9tICcuL1Njcm9sbFJldmVhbCc7XG5cbmNvbnN0IGRvd25sb2FkcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIlByaW5jaXBsZXMgUHJlc2VudGF0aW9uXCIsXG4gICAgdHlwZTogXCJQREZcIixcbiAgICBzaXplOiBcIjIuNCBNQlwiLFxuICAgIGljb246IDxGaWxlVGV4dCBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtcmVkLTQwMFwiIC8+LFxuICAgIGRlc2M6IFwiVGhlIGNvbXBsZXRlIHNsaWRlIGRlY2sgY292ZXJpbmcgU2NpZW50aWZpYyBNYW5hZ2VtZW50IHRvIE1vZGVybiBDdWx0dXJlLlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiRXhlY3V0aXZlIFN1bW1hcnlcIixcbiAgICB0eXBlOiBcIkRPQ1hcIixcbiAgICBzaXplOiBcIjEuMSBNQlwiLFxuICAgIGljb246IDxGaWxlVHlwZSBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtYmx1ZS00MDBcIiAvPixcbiAgICBkZXNjOiBcIkEgY29uY2lzZSB3cml0dGVuIHN1bW1hcnkgb2YgdGhlIGtleSBtYW5hZ2VtZW50IHRoZW9yaWVzIGRpc2N1c3NlZC5cIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIkNhc2UgU3R1ZHkgQW5hbHlzaXNcIixcbiAgICB0eXBlOiBcIlBERlwiLFxuICAgIHNpemU6IFwiMy41IE1CXCIsXG4gICAgaWNvbjogPEZpbGVDaGVjayBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQteWVsbG93LTQwMFwiIC8+LFxuICAgIGRlc2M6IFwiRGVlcCBkaXZlIGludG8gcmVhbC13b3JsZCBleGFtcGxlcyBvZiBvcmdhbml6YXRpb25hbCBhZGFwdGF0aW9uLlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6IFwiT3BlbiBTeXN0ZW1zIEV4cGxhaW5lclwiLFxuICAgIHR5cGU6IFwiTVA0XCIsXG4gICAgc2l6ZTogXCI0NSBNQlwiLFxuICAgIGljb246IDxWaWRlbyBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtYnJhbmQtYWNjZW50XCIgLz4sXG4gICAgZGVzYzogXCJBbmltYXRlZCB2aWRlbyBicmVha2Rvd24gb2YgdGhlIEV4dGVybmFsIEVudmlyb25tZW50IGZvcmNlcy5cIixcbiAgICBpc1ZpZGVvOiB0cnVlXG4gIH1cbl07XG5cbmNvbnN0IERvd25sb2FkQnV0dG9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPCdpZGxlJyB8ICdkb3dubG9hZGluZycgfCAnZG9uZSc+KCdpZGxlJyk7XG5cbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAoKSA9PiB7XG4gICAgaWYgKHN0YXR1cyAhPT0gJ2lkbGUnKSByZXR1cm47XG4gICAgc2V0U3RhdHVzKCdkb3dubG9hZGluZycpO1xuICAgIFxuICAgIC8vIFNpbXVsYXRlIGRvd25sb2FkIGRlbGF5XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTdGF0dXMoJ2RvbmUnKTtcbiAgICAgIC8vIFJlc2V0IGFmdGVyIHNob3dpbmcgc3VjY2Vzc1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRTdGF0dXMoJ2lkbGUnKSwgMzAwMCk7XG4gICAgfSwgMTUwMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIFxuICAgICAgb25DbGljaz17aGFuZGxlRG93bmxvYWR9XG4gICAgICBkaXNhYmxlZD17c3RhdHVzICE9PSAnaWRsZSd9XG4gICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHAtMyByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGJvcmRlciBzaGFkb3ctbGdcbiAgICAgICAgJHtzdGF0dXMgPT09ICdpZGxlJyBcbiAgICAgICAgICA/ICdiZy13aGl0ZS81IGhvdmVyOmJnLWJyYW5kLWFjY2VudCBob3Zlcjp0ZXh0LWJyYW5kLWRhcmsgYm9yZGVyLXdoaXRlLzEwIGhvdmVyOmJvcmRlci1icmFuZC1hY2NlbnQgaG92ZXI6c2NhbGUtMTEwJyBcbiAgICAgICAgICA6ICcnfVxuICAgICAgICAke3N0YXR1cyA9PT0gJ2Rvd25sb2FkaW5nJyBcbiAgICAgICAgICA/ICdiZy1icmFuZC1wcmltYXJ5IGJvcmRlci1icmFuZC1wcmltYXJ5IHRleHQtd2hpdGUgY3Vyc29yLXdhaXQnIFxuICAgICAgICAgIDogJyd9XG4gICAgICAgICR7c3RhdHVzID09PSAnZG9uZScgXG4gICAgICAgICAgPyAnYmctZ3JlZW4tNTAwIGJvcmRlci1ncmVlbi01MDAgdGV4dC13aGl0ZScgXG4gICAgICAgICAgOiAnJ31cbiAgICAgIGB9XG4gICAgICB0aXRsZT1cIkRvd25sb2FkIEZpbGVcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7c3RhdHVzID09PSAnaWRsZScgJiYgPERvd25sb2FkIHNpemU9ezIwfSAvPn1cbiAgICAgICAge3N0YXR1cyA9PT0gJ2Rvd25sb2FkaW5nJyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUgaC01IGJvcmRlci0yIGJvcmRlci13aGl0ZS8zMCBib3JkZXItdC13aGl0ZSByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3N0YXR1cyA9PT0gJ2RvbmUnICYmIDxDaGVjayBzaXplPXsyMH0gY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbiB6b29tLWluIGR1cmF0aW9uLTMwMFwiIC8+fVxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIHsvKiBSaXBwbGUgZWZmZWN0IGNvdWxkIGdvIGhlcmUsIGJ1dCBDU1MgaG92ZXIgd29ya3Mgd2VsbCBlbm91Z2ggKi99XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgRG93bmxvYWRzU2VjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJkb3dubG9hZHNcIiBjbGFzc05hbWU9XCJweS0yNCBweC02IHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgey8qIEFtYmllbnQgQmFja2dyb3VuZCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdy1mdWxsIGgtZnVsbCBtYXgtdy00eGwgb3BhY2l0eS0xMCBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB3LTk2IGgtOTYgYmctYnJhbmQtcHJpbWFyeSByb3VuZGVkLWZ1bGwgYmx1ci1bMTIwcHhdXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHctOTYgaC05NiBiZy1icmFuZC1hY2NlbnQgcm91bmRlZC1mdWxsIGJsdXItWzEyMHB4XVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICA8U2Nyb2xsUmV2ZWFsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTMgcHktMSBtYi00IHJvdW5kZWQtZnVsbCBiZy1icmFuZC1hY2NlbnQvMTAgYm9yZGVyIGJvcmRlci1icmFuZC1hY2NlbnQvMjAgdGV4dC1icmFuZC1hY2NlbnQgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxuICAgICAgICAgICAgICBCb251cyBDb250ZW50XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWRpc3BsYXkgZm9udC1ib2xkIG1iLTRcIj5Eb3dubG9hZHMgJiBSZXNvdXJjZXM8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyYXktNDAwIG1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIEFjY2VzcyB0aGUgY29tcGxldGUgcHJlc2VudGF0aW9uIG1hdGVyaWFscywgcmVzZWFyY2ggZG9jdW1lbnRzLCBhbmQgdmlzdWFsIGd1aWRlcyB1c2VkIGluIHRoaXMgcHJvamVjdC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TY3JvbGxSZXZlYWw+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC02IGxnOmdhcC04XCI+XG4gICAgICAgICAge2Rvd25sb2Fkcy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgPFNjcm9sbFJldmVhbCBrZXk9e2l0ZW0uaWR9IGRlbGF5PXtpZHggKiAxMDB9IGRpcmVjdGlvbj17aWR4ICUgMiA9PT0gMCA/ICdsZWZ0JyA6ICdyaWdodCd9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHAtMSByb3VuZGVkLTJ4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLXdoaXRlLzEwIHRvLXRyYW5zcGFyZW50IGhvdmVyOmZyb20tYnJhbmQtYWNjZW50LzUwIGhvdmVyOnRvLWJyYW5kLXByaW1hcnkvNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsvKiBDYXJkIEJvZHkgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGwgYmctYnJhbmQtZGFyay85MCBiYWNrZHJvcC1ibHVyLXhsIHJvdW5kZWQteGwgcC04IGJvcmRlciBib3JkZXItd2hpdGUvNSBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydCBnYXAtNiBncm91cC1ob3ZlcjpiZy1icmFuZC1kYXJrLzgwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB7LyogSWNvbiBDb250YWluZXIgd2l0aCBHbG93ICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rLTAgdy0xNiBoLTE2IHJvdW5kZWQtMnhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXdoaXRlLzUgXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgYm9yZGVyIGJvcmRlci13aGl0ZS81XG4gICAgICAgICAgICAgICAgICAgICR7aXRlbS5pc1ZpZGVvID8gJ3NoYWRvdy1bMF8wXzMwcHhfcmdiYSg2LDE4MiwyMTIsMC4yKV0nIDogJ3NoYWRvdy1ub25lJ31cbiAgICAgICAgICAgICAgICAgIGB9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5pY29ufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBUZXh0IENvbnRlbnQgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTIgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDAgbWItNCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LWdyYXktNTAwIGJnLWJsYWNrLzQwIHB4LTIgcHktMSByb3VuZGVkIGJvcmRlciBib3JkZXItd2hpdGUvNSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1vbm8gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBEb3dubG9hZCBCdXR0b24gQ29tcG9uZW50ICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG1kOm10LTAgc2VsZi1jZW50ZXIgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2Nyb2xsUmV2ZWFsPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBGb290ZXIgTm90ZSBmb3Igc2VjdGlvbiAqL31cbiAgICAgICAgPFNjcm9sbFJldmVhbCBkZWxheT17NDAwfSBkaXJlY3Rpb249XCJ1cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiB0ZXh0LWNlbnRlciB0ZXh0LXhzIHRleHQtZ3JheS02MDAgZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgKiBGaWxlcyBhcmUgcHJvdGVjdGVkIGJ5IGNvcHlyaWdodCBvZiBCbGFjayBGYWxjb25zIFRlYW0uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TY3JvbGxSZXZlYWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl0sImZpbGUiOiJDOi9Vc2Vycy9Qcm9mZXNzaW9uYWwvRGVza3RvcC9TaGVyZGY1NTYtbWFpbiAoMikvU2hlcmRmNTU2LW1haW4vY29tcG9uZW50cy9Eb3dubG9hZHNTZWN0aW9uLnRzeCJ9