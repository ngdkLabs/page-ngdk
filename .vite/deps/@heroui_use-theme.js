import {
  require_react
} from "./chunk-D2A26S2S.js";
import {
  __toESM
} from "./chunk-RZ55PUNP.js";

// node_modules/@heroui/use-theme/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var ThemeProps = {
  // localStorage key for storing the current theme
  KEY: "heroui-theme",
  // light theme
  LIGHT: "light",
  // dark theme
  DARK: "dark",
  // system theme
  SYSTEM: "system"
};
function useTheme(defaultTheme = ThemeProps.SYSTEM) {
  const MEDIA = "(prefers-color-scheme: dark)";
  const [theme, setThemeState] = (0, import_react.useState)(() => {
    var _a;
    const storedTheme = localStorage.getItem(ThemeProps.KEY);
    if (storedTheme) return storedTheme;
    if (defaultTheme === ThemeProps.SYSTEM) {
      return ((_a = window.matchMedia) == null ? void 0 : _a.call(window, MEDIA).matches) ? ThemeProps.DARK : ThemeProps.LIGHT;
    }
    return defaultTheme;
  });
  const setTheme = (0, import_react.useCallback)(
    (newTheme) => {
      var _a;
      const targetTheme = newTheme === ThemeProps.SYSTEM ? ((_a = window.matchMedia) == null ? void 0 : _a.call(window, MEDIA).matches) ? ThemeProps.DARK : ThemeProps.LIGHT : newTheme;
      localStorage.setItem(ThemeProps.KEY, newTheme);
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add(targetTheme);
      setThemeState(newTheme);
    },
    [theme]
  );
  const handleMediaQuery = (0, import_react.useCallback)(
    (e) => {
      if (defaultTheme === ThemeProps.SYSTEM) {
        setTheme(e.matches ? ThemeProps.DARK : ThemeProps.LIGHT);
      }
    },
    [setTheme]
  );
  (0, import_react.useEffect)(() => setTheme(theme), [theme, setTheme]);
  (0, import_react.useEffect)(() => {
    const media = window.matchMedia(MEDIA);
    media.addEventListener("change", handleMediaQuery);
    return () => media.removeEventListener("change", handleMediaQuery);
  }, [handleMediaQuery]);
  return { theme, setTheme };
}
export {
  ThemeProps,
  useTheme
};
//# sourceMappingURL=@heroui_use-theme.js.map
