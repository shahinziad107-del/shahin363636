import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/App.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1b3edb27"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1b3edb27"; const useEffect = __vite__cjsImport1_react["useEffect"]; const useState = __vite__cjsImport1_react["useState"];
import { Menu, X, ChevronUp, Link as LinkIcon, Check } from "/node_modules/.vite/deps/lucide-react.js?v=1b3edb27";
import { Hero } from "/components/Hero.tsx";
import { HistorySection } from "/components/HistorySection.tsx";
import { EnvironmentSection } from "/components/EnvironmentSection.tsx";
import { StructureSection } from "/components/StructureSection.tsx";
import { CultureSection } from "/components/CultureSection.tsx";
import { DownloadsSection } from "/components/DownloadsSection.tsx";
import { Footer } from "/components/Footer.tsx";
import { BackgroundParticles } from "/components/BackgroundParticles.tsx";
const App = () => {
  _s();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2e3);
  };
  const navItems = [
    { id: "history", label: "History" },
    { id: "environment", label: "Environment" },
    { id: "structure", label: "Structure" },
    { id: "culture", label: "Culture" },
    { id: "downloads", label: "Downloads" }
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "relative min-h-screen bg-brand-dark text-white selection:bg-brand-accent selection:text-brand-dark", children: [
    /* @__PURE__ */ jsxDEV(BackgroundParticles, {}, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "nav",
      {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent py-6"}`,
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 cursor-pointer", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }), children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]", children: /* @__PURE__ */ jsxDEV("span", { className: "text-white font-bold -rotate-45 text-sm", children: "BF" }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                lineNumber: 60,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                lineNumber: 59,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "font-display font-bold text-xl tracking-wide", children: [
                "BLACK ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-brand-accent", children: "FALCONS" }, void 0, false, {
                  fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                  lineNumber: 62,
                  columnNumber: 82
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                lineNumber: 62,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex items-center gap-8", children: [
              navItems.map(
                (item) => /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => scrollToSection(item.id),
                    className: "text-sm uppercase tracking-wider font-semibold text-gray-400 hover:text-brand-accent transition-colors relative group",
                    children: [
                      item.label,
                      /* @__PURE__ */ jsxDEV("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full" }, void 0, false, {
                        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                      }, this)
                    ]
                  },
                  item.id,
                  true,
                  {
                    fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                    lineNumber: 68,
                    columnNumber: 13
                  },
                  this
                )
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: handleCopyLink,
                  className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group ml-4",
                  title: "Copy Link",
                  children: [
                    linkCopied ? /* @__PURE__ */ jsxDEV(Check, { size: 16, className: "text-green-400" }, void 0, false, {
                      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                      lineNumber: 84,
                      columnNumber: 29
                    }, this) : /* @__PURE__ */ jsxDEV(LinkIcon, { size: 16, className: "text-brand-accent group-hover:scale-110 transition-transform" }, void 0, false, {
                      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                      lineNumber: 84,
                      columnNumber: 78
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-gray-300 group-hover:text-white", children: linkCopied ? "Copied!" : "Link" }, void 0, false, {
                      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                      lineNumber: 85,
                      columnNumber: 15
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                  lineNumber: 79,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                className: "md:hidden text-white",
                onClick: () => setIsMenuOpen(!isMenuOpen),
                children: isMenuOpen ? /* @__PURE__ */ jsxDEV(X, { size: 24 }, void 0, false, {
                  fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                  lineNumber: 96,
                  columnNumber: 27
                }, this) : /* @__PURE__ */ jsxDEV(Menu, { size: 24 }, void 0, false, {
                  fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                  lineNumber: 96,
                  columnNumber: 45
                }, this)
              },
              void 0,
              false,
              {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                lineNumber: 92,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: `md:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-80" : "max-h-0"}`, children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col p-6 gap-4", children: [
            navItems.map(
              (item) => /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => scrollToSection(item.id),
                  className: "text-left text-lg font-medium text-gray-300 hover:text-brand-accent",
                  children: item.label
                },
                item.id,
                false,
                {
                  fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                  lineNumber: 104,
                  columnNumber: 13
                },
                this
              )
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleCopyLink,
                className: "flex items-center gap-2 text-gray-400 hover:text-white mt-4 pt-4 border-t border-white/10",
                children: [
                  linkCopied ? /* @__PURE__ */ jsxDEV(Check, { size: 18, className: "text-green-400" }, void 0, false, {
                    fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                    lineNumber: 116,
                    columnNumber: 30
                  }, this) : /* @__PURE__ */ jsxDEV(LinkIcon, { size: 18 }, void 0, false, {
                    fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                    lineNumber: 116,
                    columnNumber: 79
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { children: linkCopied ? "Link Copied" : "Copy Website Link" }, void 0, false, {
                    fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                    lineNumber: 117,
                    columnNumber: 16
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
                lineNumber: 112,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
            lineNumber: 102,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
            lineNumber: 101,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
        lineNumber: 52,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("main", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-24 pb-24", children: [
        /* @__PURE__ */ jsxDEV(HistorySection, {}, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(EnvironmentSection, {}, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(StructureSection, {}, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(CultureSection, {}, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(DownloadsSection, {}, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: `fixed bottom-8 right-8 z-40 p-3 rounded-full bg-brand-accent text-brand-dark shadow-lg shadow-brand-accent/20 transition-all duration-300 transform hover:scale-110 ${scrolled ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`,
        children: /* @__PURE__ */ jsxDEV(ChevronUp, { size: 24 }, void 0, false, {
          fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
          lineNumber: 143,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
        lineNumber: 137,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
};
_s(App, "C2RwKjpwnQYX3AF/3GCYGYuN2HQ=");
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/App.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWU7QUFBQSxRQUNmLHVCQUFDLHdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBbUI7QUFBQSxRQUNuQix1QkFBQyxzQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWlCO0FBQUEsUUFDakIsdUJBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFlO0FBQUEsUUFDZix1QkFBQyxzQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWlCO0FBQUEsV0FMbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU1BO0FBQUEsU0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBU0E7QUFBQSxJQUVBLHVCQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFPO0FBQUEsSUFHUDtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsU0FBUyxNQUFNRyxPQUFPb0IsU0FBUyxFQUFFQyxLQUFLLEdBQUdYLFVBQVUsU0FBUyxDQUFDO0FBQUEsUUFDN0QsV0FBVyx1S0FDVGYsV0FBVyw4QkFBOEIsMEJBQTBCO0FBQUEsUUFHckUsaUNBQUMsYUFBVSxNQUFNLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBb0I7QUFBQTtBQUFBLE1BTnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU9BO0FBQUEsT0FoR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWlHQTtBQUVKO0FBQUVILEdBdklJRCxLQUFhO0FBQUFpQyxLQUFiakM7QUF5SU4sZUFBZUE7QUFBSSxJQUFBaUM7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWVudSIsIlgiLCJDaGV2cm9uVXAiLCJMaW5rIiwiTGlua0ljb24iLCJDaGVjayIsIkhlcm8iLCJIaXN0b3J5U2VjdGlvbiIsIkVudmlyb25tZW50U2VjdGlvbiIsIlN0cnVjdHVyZVNlY3Rpb24iLCJDdWx0dXJlU2VjdGlvbiIsIkRvd25sb2Fkc1NlY3Rpb24iLCJGb290ZXIiLCJCYWNrZ3JvdW5kUGFydGljbGVzIiwiQXBwIiwiX3MiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsInNjcm9sbGVkIiwic2V0U2Nyb2xsZWQiLCJsaW5rQ29waWVkIiwic2V0TGlua0NvcGllZCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvU2VjdGlvbiIsImlkIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiaGFuZGxlQ29weUxpbmsiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJsb2NhdGlvbiIsImhyZWYiLCJzZXRUaW1lb3V0IiwibmF2SXRlbXMiLCJsYWJlbCIsInNjcm9sbFRvIiwidG9wIiwibWFwIiwiaXRlbSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51LCBYLCBDaGV2cm9uVXAsIExpbmsgYXMgTGlua0ljb24sIENoZWNrIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2NvbXBvbmVudHMvSGVybyc7XG5pbXBvcnQgeyBIaXN0b3J5U2VjdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9IaXN0b3J5U2VjdGlvbic7XG5pbXBvcnQgeyBFbnZpcm9ubWVudFNlY3Rpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvRW52aXJvbm1lbnRTZWN0aW9uJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlY3Rpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvU3RydWN0dXJlU2VjdGlvbic7XG5pbXBvcnQgeyBDdWx0dXJlU2VjdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9DdWx0dXJlU2VjdGlvbic7XG5pbXBvcnQgeyBEb3dubG9hZHNTZWN0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL0Rvd25sb2Fkc1NlY3Rpb24nO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kUGFydGljbGVzIH0gZnJvbSAnLi9jb21wb25lbnRzL0JhY2tncm91bmRQYXJ0aWNsZXMnO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbGlua0NvcGllZCwgc2V0TGlua0NvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBzZXRTY3JvbGxlZCh3aW5kb3cuc2Nyb2xsWSA+IDUwKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0SXNNZW51T3BlbihmYWxzZSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29weUxpbmsgPSAoKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIHNldExpbmtDb3BpZWQodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRMaW5rQ29waWVkKGZhbHNlKSwgMjAwMCk7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBbXG4gICAgeyBpZDogJ2hpc3RvcnknLCBsYWJlbDogJ0hpc3RvcnknIH0sXG4gICAgeyBpZDogJ2Vudmlyb25tZW50JywgbGFiZWw6ICdFbnZpcm9ubWVudCcgfSxcbiAgICB7IGlkOiAnc3RydWN0dXJlJywgbGFiZWw6ICdTdHJ1Y3R1cmUnIH0sXG4gICAgeyBpZDogJ2N1bHR1cmUnLCBsYWJlbDogJ0N1bHR1cmUnIH0sXG4gICAgeyBpZDogJ2Rvd25sb2FkcycsIGxhYmVsOiAnRG93bmxvYWRzJyB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtaW4taC1zY3JlZW4gYmctYnJhbmQtZGFyayB0ZXh0LXdoaXRlIHNlbGVjdGlvbjpiZy1icmFuZC1hY2NlbnQgc2VsZWN0aW9uOnRleHQtYnJhbmQtZGFya1wiPlxuICAgICAgPEJhY2tncm91bmRQYXJ0aWNsZXMgLz5cbiAgICAgIFxuICAgICAgey8qIE5hdmJhciAqL31cbiAgICAgIDxuYXYgXG4gICAgICAgIGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgc2Nyb2xsZWQgPyAnYmctYnJhbmQtZGFyay84MCBiYWNrZHJvcC1ibHVyLWxnIGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMCBweS0zJyA6ICdiZy10cmFuc3BhcmVudCBweS02J1xuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1icmFuZC1wcmltYXJ5IHRvLWJyYW5kLWFjY2VudCByb3VuZGVkLWxnIHJvdGF0ZS00NSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoNiwxODIsMjEyLDAuNSldXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIC1yb3RhdGUtNDUgdGV4dC1zbVwiPkJGPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgZm9udC1ib2xkIHRleHQteGwgdHJhY2tpbmctd2lkZVwiPkJMQUNLIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYnJhbmQtYWNjZW50XCI+RkFMQ09OUzwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogRGVza3RvcCBOYXYgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb1NlY3Rpb24oaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtYnJhbmQtYWNjZW50IHRyYW5zaXRpb24tY29sb3JzIHJlbGF0aXZlIGdyb3VwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIC1ib3R0b20tMSBsZWZ0LTAgdy0wIGgtMC41IGJnLWJyYW5kLWFjY2VudCB0cmFuc2l0aW9uLWFsbCBncm91cC1ob3Zlcjp3LWZ1bGxcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBTaGFyZSBMaW5rIEJ1dHRvbiAqL31cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvcHlMaW5rfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0zIHB5LTEuNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUvNSBob3ZlcjpiZy13aGl0ZS8xMCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBncm91cCBtbC00XCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDb3B5IExpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGlua0NvcGllZCA/IDxDaGVjayBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi00MDBcIiAvPiA6IDxMaW5rSWNvbiBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1icmFuZC1hY2NlbnQgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtXCIgLz59XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTMwMCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAge2xpbmtDb3BpZWQgPyAnQ29waWVkIScgOiAnTGluayd9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIE1vYmlsZSBOYXYgVG9nZ2xlICovfVxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZDpoaWRkZW4gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVPcGVuKCFpc01lbnVPcGVuKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNNZW51T3BlbiA/IDxYIHNpemU9ezI0fSAvPiA6IDxNZW51IHNpemU9ezI0fSAvPn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1vYmlsZSBNZW51ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1kOmhpZGRlbiBhYnNvbHV0ZSB0b3AtZnVsbCBsZWZ0LTAgcmlnaHQtMCBiZy1icmFuZC1kYXJrLzk1IGJhY2tkcm9wLWJsdXIteGwgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzEwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBvdmVyZmxvdy1oaWRkZW4gJHtpc01lbnVPcGVuID8gJ21heC1oLTgwJyA6ICdtYXgtaC0wJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC02IGdhcC00XCI+XG4gICAgICAgICAgICB7bmF2SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1icmFuZC1hY2NlbnRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb3B5TGlua31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIG10LTQgcHQtNCBib3JkZXItdCBib3JkZXItd2hpdGUvMTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAge2xpbmtDb3BpZWQgPyA8Q2hlY2sgc2l6ZT17MTh9IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwXCIgLz4gOiA8TGlua0ljb24gc2l6ZT17MTh9IC8+fVxuICAgICAgICAgICAgICAgPHNwYW4+e2xpbmtDb3BpZWQgPyAnTGluayBDb3BpZWQnIDogJ0NvcHkgV2Vic2l0ZSBMaW5rJ308L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiPlxuICAgICAgICA8SGVybyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMjQgcGItMjRcIj5cbiAgICAgICAgICA8SGlzdG9yeVNlY3Rpb24gLz5cbiAgICAgICAgICA8RW52aXJvbm1lbnRTZWN0aW9uIC8+XG4gICAgICAgICAgPFN0cnVjdHVyZVNlY3Rpb24gLz5cbiAgICAgICAgICA8Q3VsdHVyZVNlY3Rpb24gLz5cbiAgICAgICAgICA8RG93bmxvYWRzU2VjdGlvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPEZvb3RlciAvPlxuXG4gICAgICB7LyogU2Nyb2xsIHRvIHRvcCAqL31cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17YGZpeGVkIGJvdHRvbS04IHJpZ2h0LTggei00MCBwLTMgcm91bmRlZC1mdWxsIGJnLWJyYW5kLWFjY2VudCB0ZXh0LWJyYW5kLWRhcmsgc2hhZG93LWxnIHNoYWRvdy1icmFuZC1hY2NlbnQvMjAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAgJHtcbiAgICAgICAgICBzY3JvbGxlZCA/ICd0cmFuc2xhdGUteS0wIG9wYWNpdHktMTAwJyA6ICd0cmFuc2xhdGUteS0yMCBvcGFjaXR5LTAnXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8Q2hldnJvblVwIHNpemU9ezI0fSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sImZpbGUiOiJDOi9Vc2Vycy9Qcm9mZXNzaW9uYWwvRGVza3RvcC9TaGVyZGY1NTYtbWFpbiAoMikvU2hlcmRmNTU2LW1haW4vQXBwLnRzeCJ9