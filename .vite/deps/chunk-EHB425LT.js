import {
  __esm,
  __export
} from "./chunk-RZ55PUNP.js";

// node_modules/clsx/dist/clsx.m.js
var clsx_m_exports = {};
__export(clsx_m_exports, {
  clsx: () => clsx,
  default: () => clsx_m_default
});
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; ) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default;
var init_clsx_m = __esm({
  "node_modules/clsx/dist/clsx.m.js"() {
    clsx_m_default = clsx;
  }
});

export {
  clsx_m_default,
  clsx_m_exports,
  init_clsx_m
};
//# sourceMappingURL=chunk-EHB425LT.js.map
