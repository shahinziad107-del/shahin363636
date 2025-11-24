import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/ScrollReveal.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1b3edb27"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1b3edb27"; const useEffect = __vite__cjsImport1_react["useEffect"]; const useRef = __vite__cjsImport1_react["useRef"]; const useState = __vite__cjsImport1_react["useState"];
export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up"
}) => {
  _s();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-12";
      case "down":
        return "-translate-y-12";
      case "left":
        return "translate-x-12";
      case "right":
        return "-translate-x-12";
      default:
        return "translate-y-12";
    }
  };
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref,
      className: `transition-all duration-1000 ease-out ${className} ${isVisible ? "opacity-100 transform-none" : `opacity-0 ${getTransform()}`}`,
      style: { transitionDelay: `${delay}ms` },
      children
    },
    void 0,
    false,
    {
      fileName: "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/ScrollReveal.tsx",
      lineNumber: 55,
      columnNumber: 5
    },
    this
  );
};
_s(ScrollReveal, "7N8EcRPlcY6o9kzg5IgMZgWhyLI=");
_c = ScrollReveal;
var _c;
$RefreshReg$(_c, "ScrollReveal");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/ScrollReveal.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/ScrollReveal.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/Professional/Desktop/Sherdf556-main (2)/Sherdf556-main/components/ScrollReveal.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBc0RJOztBQXRESixTQUFnQkEsV0FBV0MsUUFBUUMsZ0JBQWdCO0FBUzVDLGFBQU1DLGVBQTRDQSxDQUFDO0FBQUEsRUFDeERDO0FBQUFBLEVBQ0FDLFlBQVk7QUFBQSxFQUNaQyxRQUFRO0FBQUEsRUFDUkMsWUFBWTtBQUNkLE1BQU07QUFBQUMsS0FBQTtBQUNKLFFBQU0sQ0FBQ0MsV0FBV0MsWUFBWSxJQUFJUixTQUFTLEtBQUs7QUFDaEQsUUFBTVMsTUFBTVYsT0FBdUIsSUFBSTtBQUV2Q0QsWUFBVSxNQUFNO0FBQ2QsVUFBTVksV0FBVyxJQUFJQztBQUFBQSxNQUNuQixDQUFDLENBQUNDLEtBQUssTUFBTTtBQUNYLFlBQUlBLE1BQU1DLGdCQUFnQjtBQUN4QkwsdUJBQWEsSUFBSTtBQUNqQkUsbUJBQVNJLFVBQVVGLE1BQU1HLE1BQU07QUFBQSxRQUNqQztBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRUMsV0FBVztBQUFBLFFBQ1hDLFlBQVk7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUVBLFFBQUlSLElBQUlTLFNBQVM7QUFDZlIsZUFBU1MsUUFBUVYsSUFBSVMsT0FBTztBQUFBLElBQzlCO0FBRUEsV0FBTyxNQUFNO0FBQ1gsVUFBSVQsSUFBSVMsU0FBUztBQUNmUixpQkFBU0ksVUFBVUwsSUFBSVMsT0FBTztBQUFBLE1BQ2hDO0FBQUEsSUFDRjtBQUFBLEVBQ0YsR0FBRyxFQUFFO0FBRUwsUUFBTUUsZUFBZUEsTUFBTTtBQUN6QixZQUFRZixXQUFTO0FBQUEsTUFDZixLQUFLO0FBQU0sZUFBTztBQUFBLE1BQ2xCLEtBQUs7QUFBUSxlQUFPO0FBQUEsTUFDcEIsS0FBSztBQUFRLGVBQU87QUFBQSxNQUNwQixLQUFLO0FBQVMsZUFBTztBQUFBLE1BQ3JCO0FBQVMsZUFBTztBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUVBLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDO0FBQUEsTUFDQSxXQUFXLHlDQUF5Q0YsU0FBUyxJQUMzREksWUFBWSwrQkFBK0IsYUFBYWEsYUFBYSxDQUFDLEVBQUU7QUFBQSxNQUUxRSxPQUFPLEVBQUVDLGlCQUFpQixHQUFHakIsS0FBSyxLQUFLO0FBQUEsTUFFdENGO0FBQUFBO0FBQUFBLElBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUE7QUFFSjtBQUFFSSxHQXZEV0wsY0FBeUM7QUFBQXFCLEtBQXpDckI7QUFBeUMsSUFBQXFCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlNjcm9sbFJldmVhbCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGVsYXkiLCJkaXJlY3Rpb24iLCJfcyIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwidGFyZ2V0IiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsImN1cnJlbnQiLCJvYnNlcnZlIiwiZ2V0VHJhbnNmb3JtIiwidHJhbnNpdGlvbkRlbGF5IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2Nyb2xsUmV2ZWFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgU2Nyb2xsUmV2ZWFsUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGRlbGF5PzogbnVtYmVyO1xuICBkaXJlY3Rpb24/OiAndXAnIHwgJ2Rvd24nIHwgJ2xlZnQnIHwgJ3JpZ2h0Jztcbn1cblxuZXhwb3J0IGNvbnN0IFNjcm9sbFJldmVhbDogUmVhY3QuRkM8U2Nyb2xsUmV2ZWFsUHJvcHM+ID0gKHsgXG4gIGNoaWxkcmVuLCBcbiAgY2xhc3NOYW1lID0gJycsIFxuICBkZWxheSA9IDAsXG4gIGRpcmVjdGlvbiA9ICd1cCdcbn0pID0+IHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKFtlbnRyeV0pID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aHJlc2hvbGQ6IDAuMTUsXG4gICAgICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IC01MHB4IDBweCdcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHJlZi5jdXJyZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShyZWYuY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldFRyYW5zZm9ybSA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAndXAnOiByZXR1cm4gJ3RyYW5zbGF0ZS15LTEyJztcbiAgICAgIGNhc2UgJ2Rvd24nOiByZXR1cm4gJy10cmFuc2xhdGUteS0xMic7XG4gICAgICBjYXNlICdsZWZ0JzogcmV0dXJuICd0cmFuc2xhdGUteC0xMic7XG4gICAgICBjYXNlICdyaWdodCc6IHJldHVybiAnLXRyYW5zbGF0ZS14LTEyJztcbiAgICAgIGRlZmF1bHQ6IHJldHVybiAndHJhbnNsYXRlLXktMTInO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwMCBlYXNlLW91dCAke2NsYXNzTmFtZX0gJHtcbiAgICAgICAgaXNWaXNpYmxlID8gJ29wYWNpdHktMTAwIHRyYW5zZm9ybS1ub25lJyA6IGBvcGFjaXR5LTAgJHtnZXRUcmFuc2Zvcm0oKX1gXG4gICAgICB9YH1cbiAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogYCR7ZGVsYXl9bXNgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTsiXSwiZmlsZSI6IkM6L1VzZXJzL1Byb2Zlc3Npb25hbC9EZXNrdG9wL1NoZXJkZjU1Ni1tYWluICgyKS9TaGVyZGY1NTYtbWFpbi9jb21wb25lbnRzL1Njcm9sbFJldmVhbC50c3gifQ==