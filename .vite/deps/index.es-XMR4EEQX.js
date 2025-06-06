import {
  esm_exports,
  f,
  formatJsonRpcError,
  formatJsonRpcRequest,
  formatJsonRpcResult,
  getBigIntRpcId,
  init_esm,
  init_esm2,
  isJsonRpcError,
  isJsonRpcRequest,
  isJsonRpcResponse,
  isJsonRpcResult,
  isLocalhostUrl,
  isWsUrl,
  parseConnectionError,
  payloadId,
  r,
  safeJsonParse,
  safeJsonStringify
} from "./chunk-I6OMGHAI.js";
import {
  $,
  Ae,
  B,
  Bt,
  C,
  D,
  Dt,
  Et,
  Fn,
  Ft,
  Gt,
  Hn,
  Ht,
  It,
  Jn,
  Jt,
  Kn,
  Kt,
  Ln,
  Lt,
  Mn,
  Mt,
  N,
  Qn,
  S,
  U,
  Un,
  Vn,
  Vt,
  Wt,
  Xn,
  Xt,
  Yt,
  _,
  at,
  dn,
  dt,
  ee,
  en,
  er,
  fn,
  ft,
  gt,
  h,
  ht,
  jt,
  k,
  kn,
  kt,
  ln,
  lt,
  mt,
  nr,
  oe,
  ot,
  p,
  pt,
  qn,
  qt,
  require_cjs,
  rt,
  te,
  toString,
  tr,
  ut,
  ve,
  vt,
  w,
  wt,
  xn,
  xt,
  yt,
  zt
} from "./chunk-DF7IFHN6.js";
import "./chunk-WRZ4SLBK.js";
import {
  require_events
} from "./chunk-PAY5Q6JC.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-RZ55PUNP.js";

// node_modules/@walletconnect/heartbeat/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d2, b6) {
  extendStatics(d2, b6);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b6 === null ? Object.create(b6) : (__.prototype = b6.prototype, new __());
}
function __rest(s2, e) {
  var t = {};
  for (var p5 in s2) if (Object.prototype.hasOwnProperty.call(s2, p5) && e.indexOf(p5) < 0)
    t[p5] = s2[p5];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i3 = 0, p5 = Object.getOwnPropertySymbols(s2); i3 < p5.length; i3++) {
      if (e.indexOf(p5[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p5[i3]))
        t[p5[i3]] = s2[p5[i3]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c4 = arguments.length, r2 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i3 = decorators.length - 1; i3 >= 0; i3--) if (d2 = decorators[i3]) r2 = (c4 < 3 ? d2(r2) : c4 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c4 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P4, generator) {
  function adopt(value) {
    return value instanceof P4 ? value : new P4(function(resolve) {
      resolve(value);
    });
  }
  return new (P4 || (P4 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _5 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f5, y7, t, g6;
  return g6 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g6[Symbol.iterator] = function() {
    return this;
  }), g6;
  function verb(n3) {
    return function(v5) {
      return step([n3, v5]);
    };
  }
  function step(op) {
    if (f5) throw new TypeError("Generator is already executing.");
    while (_5) try {
      if (f5 = 1, y7 && (t = op[0] & 2 ? y7["return"] : op[0] ? y7["throw"] || ((t = y7["return"]) && t.call(y7), 0) : y7.next) && !(t = t.call(y7, op[1])).done) return t;
      if (y7 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _5.label++;
          return { value: op[1], done: false };
        case 5:
          _5.label++;
          y7 = op[1];
          op = [0];
          continue;
        case 7:
          op = _5.ops.pop();
          _5.trys.pop();
          continue;
        default:
          if (!(t = _5.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _5 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _5.label = op[1];
            break;
          }
          if (op[0] === 6 && _5.label < t[1]) {
            _5.label = t[1];
            t = op;
            break;
          }
          if (t && _5.label < t[2]) {
            _5.label = t[2];
            _5.ops.push(op);
            break;
          }
          if (t[2]) _5.ops.pop();
          _5.trys.pop();
          continue;
      }
      op = body.call(thisArg, _5);
    } catch (e) {
      op = [6, e];
      y7 = 0;
    } finally {
      f5 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o, m2, k5, k22) {
  if (k22 === void 0) k22 = k5;
  o[k22] = m2[k5];
}
function __exportStar(m2, exports) {
  for (var p5 in m2) if (p5 !== "default" && !exports.hasOwnProperty(p5)) exports[p5] = m2[p5];
}
function __values(o) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o[s2], i3 = 0;
  if (m2) return m2.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i3 >= o.length) o = void 0;
      return { value: o && o[i3++], done: !o };
    }
  };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n3) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2) return o;
  var i3 = m2.call(o), r2, ar3 = [], e;
  try {
    while ((n3 === void 0 || n3-- > 0) && !(r2 = i3.next()).done) ar3.push(r2.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i3["return"])) m2.call(i3);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar3;
}
function __spread() {
  for (var ar3 = [], i3 = 0; i3 < arguments.length; i3++)
    ar3 = ar3.concat(__read(arguments[i3]));
  return ar3;
}
function __spreadArrays() {
  for (var s2 = 0, i3 = 0, il = arguments.length; i3 < il; i3++) s2 += arguments[i3].length;
  for (var r2 = Array(s2), k5 = 0, i3 = 0; i3 < il; i3++)
    for (var a3 = arguments[i3], j5 = 0, jl = a3.length; j5 < jl; j5++, k5++)
      r2[k5] = a3[j5];
  return r2;
}
function __await(v5) {
  return this instanceof __await ? (this.v = v5, this) : new __await(v5);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g6 = generator.apply(thisArg, _arguments || []), i3, q2 = [];
  return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3;
  function verb(n3) {
    if (g6[n3]) i3[n3] = function(v5) {
      return new Promise(function(a3, b6) {
        q2.push([n3, v5, a3, b6]) > 1 || resume(n3, v5);
      });
    };
  }
  function resume(n3, v5) {
    try {
      step(g6[n3](v5));
    } catch (e) {
      settle(q2[0][3], e);
    }
  }
  function step(r2) {
    r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f5, v5) {
    if (f5(v5), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator(o) {
  var i3, p5;
  return i3 = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i3[Symbol.iterator] = function() {
    return this;
  }, i3;
  function verb(n3, f5) {
    i3[n3] = o[n3] ? function(v5) {
      return (p5 = !p5) ? { value: __await(o[n3](v5)), done: n3 === "return" } : f5 ? f5(v5) : v5;
    } : f5;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m2 = o[Symbol.asyncIterator], i3;
  return m2 ? m2.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3);
  function verb(n3) {
    i3[n3] = o[n3] && function(v5) {
      return new Promise(function(resolve, reject) {
        v5 = o[n3](v5), settle(resolve, reject, v5.done, v5.value);
      });
    };
  }
  function settle(resolve, reject, d2, v5) {
    Promise.resolve(v5).then(function(v6) {
      resolve({ value: v6, done: d2 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k5 in mod) if (Object.hasOwnProperty.call(mod, k5)) result[k5] = mod[k5];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/@walletconnect/heartbeat/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d2, b6) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b7) {
        d3.__proto__ = b7;
      } || function(d3, b7) {
        for (var p5 in b7) if (b7.hasOwnProperty(p5)) d3[p5] = b7[p5];
      };
      return extendStatics(d2, b6);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s2, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
          s2 = arguments[i3];
          for (var p5 in s2) if (Object.prototype.hasOwnProperty.call(s2, p5)) t[p5] = s2[p5];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/@walletconnect/events/dist/esm/events.js
var IEvents;
var init_events = __esm({
  "node_modules/@walletconnect/events/dist/esm/events.js"() {
    IEvents = class {
    };
  }
});

// node_modules/@walletconnect/events/dist/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  IEvents: () => IEvents
});
var init_esm3 = __esm({
  "node_modules/@walletconnect/events/dist/esm/index.js"() {
    init_events();
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/types/heartbeat.js
var require_heartbeat = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/types/heartbeat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IHeartBeat = void 0;
    var events_1 = (init_esm3(), __toCommonJS(esm_exports2));
    var IHeartBeat = class extends events_1.IEvents {
      constructor(opts) {
        super();
      }
    };
    exports.IHeartBeat = IHeartBeat;
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/types/index.js
var require_types = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/types/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_heartbeat(), exports);
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/constants/heartbeat.js
var require_heartbeat2 = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/constants/heartbeat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HEARTBEAT_EVENTS = exports.HEARTBEAT_INTERVAL = void 0;
    var time_1 = require_cjs();
    exports.HEARTBEAT_INTERVAL = time_1.FIVE_SECONDS;
    exports.HEARTBEAT_EVENTS = {
      pulse: "heartbeat_pulse"
    };
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/constants/index.js
var require_constants = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/constants/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_heartbeat2(), exports);
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/heartbeat.js
var require_heartbeat3 = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/heartbeat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeartBeat = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var events_1 = require_events();
    var time_1 = require_cjs();
    var types_1 = require_types();
    var constants_1 = require_constants();
    var HeartBeat = class _HeartBeat extends types_1.IHeartBeat {
      constructor(opts) {
        super(opts);
        this.events = new events_1.EventEmitter();
        this.interval = constants_1.HEARTBEAT_INTERVAL;
        this.interval = (opts === null || opts === void 0 ? void 0 : opts.interval) || constants_1.HEARTBEAT_INTERVAL;
      }
      static init(opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const heartbeat = new _HeartBeat(opts);
          yield heartbeat.init();
          return heartbeat;
        });
      }
      init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          yield this.initialize();
        });
      }
      stop() {
        clearInterval(this.intervalRef);
      }
      on(event, listener) {
        this.events.on(event, listener);
      }
      once(event, listener) {
        this.events.once(event, listener);
      }
      off(event, listener) {
        this.events.off(event, listener);
      }
      removeListener(event, listener) {
        this.events.removeListener(event, listener);
      }
      initialize() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          this.intervalRef = setInterval(() => this.pulse(), time_1.toMiliseconds(this.interval));
        });
      }
      pulse() {
        this.events.emit(constants_1.HEARTBEAT_EVENTS.pulse);
      }
    };
    exports.HeartBeat = HeartBeat;
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_heartbeat3(), exports);
    tslib_1.__exportStar(require_types(), exports);
    tslib_1.__exportStar(require_constants(), exports);
  }
});

// node_modules/quick-format-unescaped/index.js
var require_quick_format_unescaped = __commonJS({
  "node_modules/quick-format-unescaped/index.js"(exports, module) {
    "use strict";
    function tryStringify(o) {
      try {
        return JSON.stringify(o);
      } catch (e) {
        return '"[Circular]"';
      }
    }
    module.exports = format;
    function format(f5, args, opts) {
      var ss2 = opts && opts.stringify || tryStringify;
      var offset = 1;
      if (typeof f5 === "object" && f5 !== null) {
        var len = args.length + offset;
        if (len === 1) return f5;
        var objects = new Array(len);
        objects[0] = ss2(f5);
        for (var index = 1; index < len; index++) {
          objects[index] = ss2(args[index]);
        }
        return objects.join(" ");
      }
      if (typeof f5 !== "string") {
        return f5;
      }
      var argLen = args.length;
      if (argLen === 0) return f5;
      var str = "";
      var a3 = 1 - offset;
      var lastPos = -1;
      var flen = f5 && f5.length || 0;
      for (var i3 = 0; i3 < flen; ) {
        if (f5.charCodeAt(i3) === 37 && i3 + 1 < flen) {
          lastPos = lastPos > -1 ? lastPos : 0;
          switch (f5.charCodeAt(i3 + 1)) {
            case 100:
            // 'd'
            case 102:
              if (a3 >= argLen)
                break;
              if (args[a3] == null) break;
              if (lastPos < i3)
                str += f5.slice(lastPos, i3);
              str += Number(args[a3]);
              lastPos = i3 + 2;
              i3++;
              break;
            case 105:
              if (a3 >= argLen)
                break;
              if (args[a3] == null) break;
              if (lastPos < i3)
                str += f5.slice(lastPos, i3);
              str += Math.floor(Number(args[a3]));
              lastPos = i3 + 2;
              i3++;
              break;
            case 79:
            // 'O'
            case 111:
            // 'o'
            case 106:
              if (a3 >= argLen)
                break;
              if (args[a3] === void 0) break;
              if (lastPos < i3)
                str += f5.slice(lastPos, i3);
              var type = typeof args[a3];
              if (type === "string") {
                str += "'" + args[a3] + "'";
                lastPos = i3 + 2;
                i3++;
                break;
              }
              if (type === "function") {
                str += args[a3].name || "<anonymous>";
                lastPos = i3 + 2;
                i3++;
                break;
              }
              str += ss2(args[a3]);
              lastPos = i3 + 2;
              i3++;
              break;
            case 115:
              if (a3 >= argLen)
                break;
              if (lastPos < i3)
                str += f5.slice(lastPos, i3);
              str += String(args[a3]);
              lastPos = i3 + 2;
              i3++;
              break;
            case 37:
              if (lastPos < i3)
                str += f5.slice(lastPos, i3);
              str += "%";
              lastPos = i3 + 2;
              i3++;
              a3--;
              break;
          }
          ++a3;
        }
        ++i3;
      }
      if (lastPos === -1)
        return f5;
      else if (lastPos < flen) {
        str += f5.slice(lastPos);
      }
      return str;
    }
  }
});

// node_modules/pino/browser.js
var require_browser = __commonJS({
  "node_modules/pino/browser.js"(exports, module) {
    "use strict";
    var format = require_quick_format_unescaped();
    module.exports = pino;
    var _console = pfGlobalThisOrFallback().console || {};
    var stdSerializers = {
      mapHttpRequest: mock,
      mapHttpResponse: mock,
      wrapRequestSerializer: passthrough,
      wrapResponseSerializer: passthrough,
      wrapErrorSerializer: passthrough,
      req: mock,
      res: mock,
      err: asErrValue
    };
    function shouldSerialize(serialize, serializers) {
      if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k5) {
          return k5 !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize === true) {
        return Object.keys(serializers);
      }
      return false;
    }
    function pino(opts) {
      opts = opts || {};
      opts.browser = opts.browser || {};
      const transmit2 = opts.browser.transmit;
      if (transmit2 && typeof transmit2.send !== "function") {
        throw Error("pino: transmit option must have a send function");
      }
      const proto = opts.browser.write || _console;
      if (opts.browser.write) opts.browser.asObject = true;
      const serializers = opts.serializers || {};
      const serialize = shouldSerialize(opts.browser.serialize, serializers);
      let stdErrSerialize = opts.browser.serialize;
      if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
      const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
      if (typeof proto === "function") {
        proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
      }
      if (opts.enabled === false) opts.level = "silent";
      const level = opts.level || "info";
      const logger = Object.create(proto);
      if (!logger.log) logger.log = noop;
      Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
      });
      Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
      });
      const setOpts = {
        transmit: transmit2,
        serialize,
        asObject: opts.browser.asObject,
        levels,
        timestamp: getTimeFunction(opts)
      };
      logger.levels = pino.levels;
      logger.level = level;
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize;
      logger._stdErrSerialize = stdErrSerialize;
      logger.child = child;
      if (transmit2) logger._logEvent = createLogEventShape();
      function getLevelVal() {
        return this.level === "silent" ? Infinity : this.levels.values[this.level];
      }
      function getLevel() {
        return this._level;
      }
      function setLevel(level2) {
        if (level2 !== "silent" && !this.levels.values[level2]) {
          throw Error("unknown level " + level2);
        }
        this._level = level2;
        set2(setOpts, logger, "error", "log");
        set2(setOpts, logger, "fatal", "error");
        set2(setOpts, logger, "warn", "error");
        set2(setOpts, logger, "info", "log");
        set2(setOpts, logger, "debug", "log");
        set2(setOpts, logger, "trace", "log");
      }
      function child(bindings, childOptions) {
        if (!bindings) {
          throw new Error("missing bindings for child Pino");
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
          delete bindings.serializers;
          applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
          this._childLevel = (parent._childLevel | 0) + 1;
          this.error = bind(parent, bindings, "error");
          this.fatal = bind(parent, bindings, "fatal");
          this.warn = bind(parent, bindings, "warn");
          this.info = bind(parent, bindings, "info");
          this.debug = bind(parent, bindings, "debug");
          this.trace = bind(parent, bindings, "trace");
          if (childSerializers) {
            this.serializers = childSerializers;
            this._serialize = childSerialize;
          }
          if (transmit2) {
            this._logEvent = createLogEventShape(
              [].concat(parent._logEvent.bindings, bindings)
            );
          }
        }
        Child.prototype = this;
        return new Child(this);
      }
      return logger;
    }
    pino.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    };
    pino.stdSerializers = stdSerializers;
    pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
    function set2(opts, logger, level, fallback) {
      const proto = Object.getPrototypeOf(logger);
      logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
      wrap(opts, logger, level);
    }
    function wrap(opts, logger, level) {
      if (!opts.transmit && logger[level] === noop) return;
      logger[level] = /* @__PURE__ */ function(write) {
        return function LOG() {
          const ts2 = opts.timestamp();
          const args = new Array(arguments.length);
          const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
          for (var i3 = 0; i3 < args.length; i3++) args[i3] = arguments[i3];
          if (opts.serialize && !opts.asObject) {
            applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
          }
          if (opts.asObject) write.call(proto, asObject(this, level, args, ts2));
          else write.apply(proto, args);
          if (opts.transmit) {
            const transmitLevel = opts.transmit.level || logger.level;
            const transmitValue = pino.levels.values[transmitLevel];
            const methodValue = pino.levels.values[level];
            if (methodValue < transmitValue) return;
            transmit(this, {
              ts: ts2,
              methodLevel: level,
              methodValue,
              transmitLevel,
              transmitValue: pino.levels.values[opts.transmit.level || logger.level],
              send: opts.transmit.send,
              val: logger.levelVal
            }, args);
          }
        };
      }(logger[level]);
    }
    function asObject(logger, level, args, ts2) {
      if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
      const argsCloned = args.slice();
      let msg = argsCloned[0];
      const o = {};
      if (ts2) {
        o.time = ts2;
      }
      o.level = pino.levels.values[level];
      let lvl = (logger._childLevel | 0) + 1;
      if (lvl < 1) lvl = 1;
      if (msg !== null && typeof msg === "object") {
        while (lvl-- && typeof argsCloned[0] === "object") {
          Object.assign(o, argsCloned.shift());
        }
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
      } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
      if (msg !== void 0) o.msg = msg;
      return o;
    }
    function applySerializers(args, serialize, serializers, stdErrSerialize) {
      for (const i3 in args) {
        if (stdErrSerialize && args[i3] instanceof Error) {
          args[i3] = pino.stdSerializers.err(args[i3]);
        } else if (typeof args[i3] === "object" && !Array.isArray(args[i3])) {
          for (const k5 in args[i3]) {
            if (serialize && serialize.indexOf(k5) > -1 && k5 in serializers) {
              args[i3][k5] = serializers[k5](args[i3][k5]);
            }
          }
        }
      }
    }
    function bind(parent, bindings, level) {
      return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for (var i3 = 1; i3 < args.length; i3++) {
          args[i3] = arguments[i3 - 1];
        }
        return parent[level].apply(this, args);
      };
    }
    function transmit(logger, opts, args) {
      const send = opts.send;
      const ts2 = opts.ts;
      const methodLevel = opts.methodLevel;
      const methodValue = opts.methodValue;
      const val = opts.val;
      const bindings = logger._logEvent.bindings;
      applySerializers(
        args,
        logger._serialize || Object.keys(logger.serializers),
        logger.serializers,
        logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
      );
      logger._logEvent.ts = ts2;
      logger._logEvent.messages = args.filter(function(arg) {
        return bindings.indexOf(arg) === -1;
      });
      logger._logEvent.level.label = methodLevel;
      logger._logEvent.level.value = methodValue;
      send(methodLevel, logger._logEvent, val);
      logger._logEvent = createLogEventShape(bindings);
    }
    function createLogEventShape(bindings) {
      return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: { label: "", value: 0 }
      };
    }
    function asErrValue(err) {
      const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
      };
      for (const key in err) {
        if (obj[key] === void 0) {
          obj[key] = err[key];
        }
      }
      return obj;
    }
    function getTimeFunction(opts) {
      if (typeof opts.timestamp === "function") {
        return opts.timestamp;
      }
      if (opts.timestamp === false) {
        return nullTime;
      }
      return epochTime;
    }
    function mock() {
      return {};
    }
    function passthrough(a3) {
      return a3;
    }
    function noop() {
    }
    function nullTime() {
      return false;
    }
    function epochTime() {
      return Date.now();
    }
    function unixTime() {
      return Math.round(Date.now() / 1e3);
    }
    function isoTime() {
      return new Date(Date.now()).toISOString();
    }
    function pfGlobalThisOrFallback() {
      function defd(o) {
        return typeof o !== "undefined" && o;
      }
      try {
        if (typeof globalThis !== "undefined") return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function() {
            delete Object.prototype.globalThis;
            return this.globalThis = this;
          },
          configurable: true
        });
        return globalThis;
      } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
  }
});

// node_modules/@walletconnect/jsonrpc-ws-connection/node_modules/ws/browser.js
var require_browser2 = __commonJS({
  "node_modules/@walletconnect/jsonrpc-ws-connection/node_modules/ws/browser.js"(exports, module) {
    "use strict";
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// node_modules/lodash.isequal/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.isequal/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n3, iteratee) {
      var index = -1, result = Array(n3);
      while (++index < n3) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView2 = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap2 = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys2, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function keys2(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = isEqual;
  }
});

// node_modules/unfetch/dist/unfetch.module.js
var unfetch_module_exports = {};
__export(unfetch_module_exports, {
  default: () => unfetch_module_default
});
function unfetch_module_default(e, n3) {
  return n3 = n3 || {}, new Promise(function(t, r2) {
    var s2 = new XMLHttpRequest(), o = [], u4 = [], i3 = {}, a3 = function() {
      return { ok: 2 == (s2.status / 100 | 0), statusText: s2.statusText, status: s2.status, url: s2.responseURL, text: function() {
        return Promise.resolve(s2.responseText);
      }, json: function() {
        return Promise.resolve(s2.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s2.response]));
      }, clone: a3, headers: { keys: function() {
        return o;
      }, entries: function() {
        return u4;
      }, get: function(e2) {
        return i3[e2.toLowerCase()];
      }, has: function(e2) {
        return e2.toLowerCase() in i3;
      } } };
    };
    for (var l3 in s2.open(n3.method || "get", e, true), s2.onload = function() {
      s2.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e2, n4, t2) {
        o.push(n4 = n4.toLowerCase()), u4.push([n4, t2]), i3[n4] = i3[n4] ? i3[n4] + "," + t2 : t2;
      }), t(a3());
    }, s2.onerror = r2, s2.withCredentials = "include" == n3.credentials, n3.headers) s2.setRequestHeader(l3, n3.headers[l3]);
    s2.send(n3.body || null);
  });
}
var init_unfetch_module = __esm({
  "node_modules/unfetch/dist/unfetch.module.js"() {
  }
});

// node_modules/isomorphic-unfetch/browser.js
var require_browser3 = __commonJS({
  "node_modules/isomorphic-unfetch/browser.js"(exports, module) {
    module.exports = self.fetch || (self.fetch = (init_unfetch_module(), __toCommonJS(unfetch_module_exports)).default || (init_unfetch_module(), __toCommonJS(unfetch_module_exports)));
  }
});

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var import_events9 = __toESM(require_events());

// node_modules/@walletconnect/core/dist/index.es.js
var import_events5 = __toESM(require_events());

// node_modules/destr/dist/index.mjs
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

// node_modules/@walletconnect/core/node_modules/unstorage/dist/shared/unstorage.CoCt7NXC.mjs
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
var BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c4) => c4.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}
function normalizeKey(key) {
  var _a;
  if (!key) {
    return "";
  }
  return ((_a = key.split("?")[0]) == null ? void 0 : _a.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "")) || "";
}
function joinKeys(...keys2) {
  return normalizeKey(keys2.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

// node_modules/@walletconnect/core/node_modules/unstorage/dist/index.mjs
function defineDriver(factory) {
  return factory;
}
var DRIVER_NAME = "memory";
var memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r2) => r2.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r2) => r2.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      var _a;
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!((_a = mount.driver.flags) == null ? void 0 : _a.maxDepth)) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p5) => fullKey.startsWith(p5))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p5) => !p5.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m2) => {
          if (m2.driver.clear) {
            return asyncCall(m2.driver.clear, m2.relativeBase, opts);
          }
          if (m2.driver.removeItem) {
            const keys2 = await m2.driver.getKeys(m2.relativeBase || "", opts);
            return Promise.all(
              keys2.map((key) => m2.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a3, b6) => b6.length - a3.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      var _a, _b;
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        (_b = (_a = context.unwatch)[base]) == null ? void 0 : _b.call(_a);
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m2 = getMount(key);
      return {
        driver: m2.driver,
        base: m2.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m2) => ({
        driver: m2.driver,
        base: m2.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

// node_modules/idb-keyval/dist/index.js
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  let dbp;
  const getDB = () => {
    if (dbp)
      return dbp;
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    dbp = promisifyRequest(request);
    dbp.then((db) => {
      db.onclose = () => dbp = void 0;
    }, () => {
    });
    return dbp;
  };
  return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
var defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function clear(customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}

// node_modules/@walletconnect/core/node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
init_esm();
var x = "idb-keyval";
var z = (i3 = {}) => {
  const t = i3.base && i3.base.length > 0 ? `${i3.base}:` : "", e = (s2) => t + s2;
  let n3;
  return i3.dbName && i3.storeName && (n3 = createStore(i3.dbName, i3.storeName)), { name: x, options: i3, async hasItem(s2) {
    return !(typeof await get(e(s2), n3) > "u");
  }, async getItem(s2) {
    return await get(e(s2), n3) ?? null;
  }, setItem(s2, a3) {
    return set(e(s2), a3, n3);
  }, removeItem(s2) {
    return del(e(s2), n3);
  }, getKeys() {
    return keys(n3);
  }, clear() {
    return clear(n3);
  } };
};
var D2 = "WALLET_CONNECT_V2_INDEXED_DB";
var E = "keyvaluestorage";
var _2 = class {
  constructor() {
    this.indexedDb = createStorage({ driver: z({ dbName: D2, storeName: E }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const e = await this.indexedDb.getItem(t);
    if (e !== null) return e;
  }
  async setItem(t, e) {
    await this.indexedDb.setItem(t, safeJsonStringify(e));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var l = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var c = { exports: {} };
(function() {
  let i3;
  function t() {
  }
  i3 = t, i3.prototype.getItem = function(e) {
    return this.hasOwnProperty(e) ? String(this[e]) : null;
  }, i3.prototype.setItem = function(e, n3) {
    this[e] = String(n3);
  }, i3.prototype.removeItem = function(e) {
    delete this[e];
  }, i3.prototype.clear = function() {
    const e = this;
    Object.keys(e).forEach(function(n3) {
      e[n3] = void 0, delete e[n3];
    });
  }, i3.prototype.key = function(e) {
    return e = e || 0, Object.keys(this)[e];
  }, i3.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof l < "u" && l.localStorage ? c.exports = l.localStorage : typeof window < "u" && window.localStorage ? c.exports = window.localStorage : c.exports = new t();
})();
function k2(i3) {
  var t;
  return [i3[0], safeJsonParse((t = i3[1]) != null ? t : "")];
}
var K = class {
  constructor() {
    this.localStorage = c.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(k2);
  }
  async getItem(t) {
    const e = this.localStorage.getItem(t);
    if (e !== null) return safeJsonParse(e);
  }
  async setItem(t, e) {
    this.localStorage.setItem(t, safeJsonStringify(e));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
};
var N2 = "wc_storage_version";
var y = 1;
var O = async (i3, t, e) => {
  const n3 = N2, s2 = await t.getItem(n3);
  if (s2 && s2 >= y) {
    e(t);
    return;
  }
  const a3 = await i3.getKeys();
  if (!a3.length) {
    e(t);
    return;
  }
  const m2 = [];
  for (; a3.length; ) {
    const r2 = a3.shift();
    if (!r2) continue;
    const o = r2.toLowerCase();
    if (o.includes("wc@") || o.includes("walletconnect") || o.includes("wc_") || o.includes("wallet_connect")) {
      const f5 = await i3.getItem(r2);
      await t.setItem(r2, f5), m2.push(r2);
    }
  }
  await t.setItem(n3, y), e(t), j(i3, m2);
};
var j = async (i3, t) => {
  t.length && t.forEach(async (e) => {
    await i3.removeItem(e);
  });
};
var h2 = class {
  constructor() {
    this.initialized = false, this.setInitialized = (e) => {
      this.storage = e, this.initialized = true;
    };
    const t = new K();
    this.storage = t;
    try {
      const e = new _2();
      O(t, e, this.setInitialized);
    } catch {
      this.initialized = true;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, e) {
    return await this.initialize(), this.storage.setItem(t, e);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const e = setInterval(() => {
        this.initialized && (clearInterval(e), t());
      }, 20);
    });
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_heartbeat = __toESM(require_cjs2());

// node_modules/@walletconnect/logger/dist/index.es.js
var import_pino = __toESM(require_browser());
var import_pino2 = __toESM(require_browser());
init_esm();
var c2 = { level: "info" };
var n = "custom_context";
var l2 = 1e3 * 1024;
var x2 = Object.defineProperty;
var S2 = Object.defineProperties;
var _3 = Object.getOwnPropertyDescriptors;
var p2 = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty;
var z2 = Object.prototype.propertyIsEnumerable;
var f2 = (r2, e, t) => e in r2 ? x2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var i = (r2, e) => {
  for (var t in e || (e = {})) T.call(e, t) && f2(r2, t, e[t]);
  if (p2) for (var t of p2(e)) z2.call(e, t) && f2(r2, t, e[t]);
  return r2;
};
var g = (r2, e) => S2(r2, _3(e));
function k3(r2) {
  return g(i({}, r2), { level: (r2 == null ? void 0 : r2.level) || c2.level });
}
function v(r2, e = n) {
  return r2[e] || "";
}
function b(r2, e, t = n) {
  return r2[t] = e, r2;
}
function y2(r2, e = n) {
  let t = "";
  return typeof r2.bindings > "u" ? t = v(r2, e) : t = r2.bindings().context || "", t;
}
function w2(r2, e, t = n) {
  const o = y2(r2, t);
  return o.trim() ? `${o}/${e}` : e;
}
function E2(r2, e, t = n) {
  const o = w2(r2, e, t), a3 = r2.child({ context: o });
  return b(a3, o, t);
}

// node_modules/@walletconnect/types/dist/index.es.js
init_esm3();
var import_events2 = __toESM(require_events());
var n2 = class extends IEvents {
  constructor(s2) {
    super(), this.opts = s2, this.protocol = "wc", this.version = 2;
  }
};
var h4 = class extends IEvents {
  constructor(s2, t) {
    super(), this.core = s2, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
};
var a = class {
  constructor(s2, t) {
    this.logger = s2, this.core = t;
  }
};
var u = class extends IEvents {
  constructor(s2, t) {
    super(), this.relayer = s2, this.logger = t;
  }
};
var g2 = class extends IEvents {
  constructor(s2) {
    super();
  }
};
var p3 = class {
  constructor(s2, t, o, M4) {
    this.core = s2, this.logger = t, this.name = o;
  }
};
var d = class extends IEvents {
  constructor(s2, t) {
    super(), this.relayer = s2, this.logger = t;
  }
};
var E3 = class extends IEvents {
  constructor(s2, t) {
    super(), this.core = s2, this.logger = t;
  }
};
var y3 = class {
  constructor(s2, t) {
    this.projectId = s2, this.logger = t;
  }
};
var v2 = class {
  constructor(s2, t) {
    this.projectId = s2, this.logger = t;
  }
};
var b2 = class {
  constructor(s2) {
    this.opts = s2, this.protocol = "wc", this.version = 2;
  }
};
var w3 = class {
  constructor(s2) {
    this.client = s2;
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
init_esm();

// node_modules/@walletconnect/relay-auth/dist/index.es.js
var import_time = __toESM(require_cjs());
init_esm();
function En(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function fe(t, ...e) {
  if (!En(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function De(t, e = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function gn(t, e) {
  fe(t);
  const n3 = e.outputLen;
  if (t.length < n3) throw new Error("digestInto() expects output buffer of length at least " + n3);
}
var it = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
var _t = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
function yn(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function de(t) {
  return typeof t == "string" && (t = yn(t)), fe(t), t;
}
var xn2 = class {
  clone() {
    return this._cloneInto();
  }
};
function Bn(t) {
  const e = (r2) => t().update(de(r2)).digest(), n3 = t();
  return e.outputLen = n3.outputLen, e.blockLen = n3.blockLen, e.create = () => t(), e;
}
function he(t = 32) {
  if (it && typeof it.getRandomValues == "function") return it.getRandomValues(new Uint8Array(t));
  if (it && typeof it.randomBytes == "function") return it.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function Cn(t, e, n3, r2) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n3, r2);
  const o = BigInt(32), s2 = BigInt(4294967295), a3 = Number(n3 >> o & s2), u4 = Number(n3 & s2), i3 = r2 ? 4 : 0, D5 = r2 ? 0 : 4;
  t.setUint32(e + i3, a3, r2), t.setUint32(e + D5, u4, r2);
}
var An = class extends xn2 {
  constructor(e, n3, r2, o) {
    super(), this.blockLen = e, this.outputLen = n3, this.padOffset = r2, this.isLE = o, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e), this.view = _t(this.buffer);
  }
  update(e) {
    De(this);
    const { view: n3, buffer: r2, blockLen: o } = this;
    e = de(e);
    const s2 = e.length;
    for (let a3 = 0; a3 < s2; ) {
      const u4 = Math.min(o - this.pos, s2 - a3);
      if (u4 === o) {
        const i3 = _t(e);
        for (; o <= s2 - a3; a3 += o) this.process(i3, a3);
        continue;
      }
      r2.set(e.subarray(a3, a3 + u4), this.pos), this.pos += u4, a3 += u4, this.pos === o && (this.process(n3, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    De(this), gn(e, this), this.finished = true;
    const { buffer: n3, view: r2, blockLen: o, isLE: s2 } = this;
    let { pos: a3 } = this;
    n3[a3++] = 128, this.buffer.subarray(a3).fill(0), this.padOffset > o - a3 && (this.process(r2, 0), a3 = 0);
    for (let l3 = a3; l3 < o; l3++) n3[l3] = 0;
    Cn(r2, o - 8, BigInt(this.length * 8), s2), this.process(r2, 0);
    const u4 = _t(e), i3 = this.outputLen;
    if (i3 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const D5 = i3 / 4, c4 = this.get();
    if (D5 > c4.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l3 = 0; l3 < D5; l3++) u4.setUint32(4 * l3, c4[l3], s2);
  }
  digest() {
    const { buffer: e, outputLen: n3 } = this;
    this.digestInto(e);
    const r2 = e.slice(0, n3);
    return this.destroy(), r2;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n3, buffer: r2, length: o, finished: s2, destroyed: a3, pos: u4 } = this;
    return e.length = o, e.pos = u4, e.finished = s2, e.destroyed = a3, o % n3 && e.buffer.set(r2), e;
  }
};
var wt2 = BigInt(2 ** 32 - 1);
var St = BigInt(32);
function le(t, e = false) {
  return e ? { h: Number(t & wt2), l: Number(t >> St & wt2) } : { h: Number(t >> St & wt2) | 0, l: Number(t & wt2) | 0 };
}
function mn(t, e = false) {
  let n3 = new Uint32Array(t.length), r2 = new Uint32Array(t.length);
  for (let o = 0; o < t.length; o++) {
    const { h: s2, l: a3 } = le(t[o], e);
    [n3[o], r2[o]] = [s2, a3];
  }
  return [n3, r2];
}
var _n = (t, e) => BigInt(t >>> 0) << St | BigInt(e >>> 0);
var Sn = (t, e, n3) => t >>> n3;
var vn = (t, e, n3) => t << 32 - n3 | e >>> n3;
var In = (t, e, n3) => t >>> n3 | e << 32 - n3;
var Un2 = (t, e, n3) => t << 32 - n3 | e >>> n3;
var Tn = (t, e, n3) => t << 64 - n3 | e >>> n3 - 32;
var Fn2 = (t, e, n3) => t >>> n3 - 32 | e << 64 - n3;
var Nn = (t, e) => e;
var Ln2 = (t, e) => t;
var On = (t, e, n3) => t << n3 | e >>> 32 - n3;
var Hn2 = (t, e, n3) => e << n3 | t >>> 32 - n3;
var zn = (t, e, n3) => e << n3 - 32 | t >>> 64 - n3;
var Mn2 = (t, e, n3) => t << n3 - 32 | e >>> 64 - n3;
function qn2(t, e, n3, r2) {
  const o = (e >>> 0) + (r2 >>> 0);
  return { h: t + n3 + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
var $n = (t, e, n3) => (t >>> 0) + (e >>> 0) + (n3 >>> 0);
var kn2 = (t, e, n3, r2) => e + n3 + r2 + (t / 2 ** 32 | 0) | 0;
var Rn = (t, e, n3, r2) => (t >>> 0) + (e >>> 0) + (n3 >>> 0) + (r2 >>> 0);
var jn = (t, e, n3, r2, o) => e + n3 + r2 + o + (t / 2 ** 32 | 0) | 0;
var Zn = (t, e, n3, r2, o) => (t >>> 0) + (e >>> 0) + (n3 >>> 0) + (r2 >>> 0) + (o >>> 0);
var Gn = (t, e, n3, r2, o, s2) => e + n3 + r2 + o + s2 + (t / 2 ** 32 | 0) | 0;
var x3 = { fromBig: le, split: mn, toBig: _n, shrSH: Sn, shrSL: vn, rotrSH: In, rotrSL: Un2, rotrBH: Tn, rotrBL: Fn2, rotr32H: Nn, rotr32L: Ln2, rotlSH: On, rotlSL: Hn2, rotlBH: zn, rotlBL: Mn2, add: qn2, add3L: $n, add3H: kn2, add4L: Rn, add4H: jn, add5H: Gn, add5L: Zn };
var [Vn2, Yn] = (() => x3.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))))();
var P = new Uint32Array(80);
var Q = new Uint32Array(80);
var Jn2 = class extends An {
  constructor() {
    super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e, Al: n3, Bh: r2, Bl: o, Ch: s2, Cl: a3, Dh: u4, Dl: i3, Eh: D5, El: c4, Fh: l3, Fl: p5, Gh: w6, Gl: h6, Hh: g6, Hl: S5 } = this;
    return [e, n3, r2, o, s2, a3, u4, i3, D5, c4, l3, p5, w6, h6, g6, S5];
  }
  set(e, n3, r2, o, s2, a3, u4, i3, D5, c4, l3, p5, w6, h6, g6, S5) {
    this.Ah = e | 0, this.Al = n3 | 0, this.Bh = r2 | 0, this.Bl = o | 0, this.Ch = s2 | 0, this.Cl = a3 | 0, this.Dh = u4 | 0, this.Dl = i3 | 0, this.Eh = D5 | 0, this.El = c4 | 0, this.Fh = l3 | 0, this.Fl = p5 | 0, this.Gh = w6 | 0, this.Gl = h6 | 0, this.Hh = g6 | 0, this.Hl = S5 | 0;
  }
  process(e, n3) {
    for (let d2 = 0; d2 < 16; d2++, n3 += 4) P[d2] = e.getUint32(n3), Q[d2] = e.getUint32(n3 += 4);
    for (let d2 = 16; d2 < 80; d2++) {
      const m2 = P[d2 - 15] | 0, F3 = Q[d2 - 15] | 0, q2 = x3.rotrSH(m2, F3, 1) ^ x3.rotrSH(m2, F3, 8) ^ x3.shrSH(m2, F3, 7), z4 = x3.rotrSL(m2, F3, 1) ^ x3.rotrSL(m2, F3, 8) ^ x3.shrSL(m2, F3, 7), I2 = P[d2 - 2] | 0, O5 = Q[d2 - 2] | 0, ot3 = x3.rotrSH(I2, O5, 19) ^ x3.rotrBH(I2, O5, 61) ^ x3.shrSH(I2, O5, 6), tt2 = x3.rotrSL(I2, O5, 19) ^ x3.rotrBL(I2, O5, 61) ^ x3.shrSL(I2, O5, 6), st2 = x3.add4L(z4, tt2, Q[d2 - 7], Q[d2 - 16]), at3 = x3.add4H(st2, q2, ot3, P[d2 - 7], P[d2 - 16]);
      P[d2] = at3 | 0, Q[d2] = st2 | 0;
    }
    let { Ah: r2, Al: o, Bh: s2, Bl: a3, Ch: u4, Cl: i3, Dh: D5, Dl: c4, Eh: l3, El: p5, Fh: w6, Fl: h6, Gh: g6, Gl: S5, Hh: v5, Hl: L3 } = this;
    for (let d2 = 0; d2 < 80; d2++) {
      const m2 = x3.rotrSH(l3, p5, 14) ^ x3.rotrSH(l3, p5, 18) ^ x3.rotrBH(l3, p5, 41), F3 = x3.rotrSL(l3, p5, 14) ^ x3.rotrSL(l3, p5, 18) ^ x3.rotrBL(l3, p5, 41), q2 = l3 & w6 ^ ~l3 & g6, z4 = p5 & h6 ^ ~p5 & S5, I2 = x3.add5L(L3, F3, z4, Yn[d2], Q[d2]), O5 = x3.add5H(I2, v5, m2, q2, Vn2[d2], P[d2]), ot3 = I2 | 0, tt2 = x3.rotrSH(r2, o, 28) ^ x3.rotrBH(r2, o, 34) ^ x3.rotrBH(r2, o, 39), st2 = x3.rotrSL(r2, o, 28) ^ x3.rotrBL(r2, o, 34) ^ x3.rotrBL(r2, o, 39), at3 = r2 & s2 ^ r2 & u4 ^ s2 & u4, Ct3 = o & a3 ^ o & i3 ^ a3 & i3;
      v5 = g6 | 0, L3 = S5 | 0, g6 = w6 | 0, S5 = h6 | 0, w6 = l3 | 0, h6 = p5 | 0, { h: l3, l: p5 } = x3.add(D5 | 0, c4 | 0, O5 | 0, ot3 | 0), D5 = u4 | 0, c4 = i3 | 0, u4 = s2 | 0, i3 = a3 | 0, s2 = r2 | 0, a3 = o | 0;
      const At2 = x3.add3L(ot3, st2, Ct3);
      r2 = x3.add3H(At2, O5, tt2, at3), o = At2 | 0;
    }
    ({ h: r2, l: o } = x3.add(this.Ah | 0, this.Al | 0, r2 | 0, o | 0)), { h: s2, l: a3 } = x3.add(this.Bh | 0, this.Bl | 0, s2 | 0, a3 | 0), { h: u4, l: i3 } = x3.add(this.Ch | 0, this.Cl | 0, u4 | 0, i3 | 0), { h: D5, l: c4 } = x3.add(this.Dh | 0, this.Dl | 0, D5 | 0, c4 | 0), { h: l3, l: p5 } = x3.add(this.Eh | 0, this.El | 0, l3 | 0, p5 | 0), { h: w6, l: h6 } = x3.add(this.Fh | 0, this.Fl | 0, w6 | 0, h6 | 0), { h: g6, l: S5 } = x3.add(this.Gh | 0, this.Gl | 0, g6 | 0, S5 | 0), { h: v5, l: L3 } = x3.add(this.Hh | 0, this.Hl | 0, v5 | 0, L3 | 0), this.set(r2, o, s2, a3, u4, i3, D5, c4, l3, p5, w6, h6, g6, S5, v5, L3);
  }
  roundClean() {
    P.fill(0), Q.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var Kn2 = Bn(() => new Jn2());
var vt2 = BigInt(0);
var be = BigInt(1);
var Wn = BigInt(2);
function It2(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Ut(t) {
  if (!It2(t)) throw new Error("Uint8Array expected");
}
function Tt(t, e) {
  if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
var Xn2 = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Ft2(t) {
  Ut(t);
  let e = "";
  for (let n3 = 0; n3 < t.length; n3++) e += Xn2[t[n3]];
  return e;
}
function pe(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? vt2 : BigInt("0x" + t);
}
var K2 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function we(t) {
  if (t >= K2._0 && t <= K2._9) return t - K2._0;
  if (t >= K2.A && t <= K2.F) return t - (K2.A - 10);
  if (t >= K2.a && t <= K2.f) return t - (K2.a - 10);
}
function Ee(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e = t.length, n3 = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const r2 = new Uint8Array(n3);
  for (let o = 0, s2 = 0; o < n3; o++, s2 += 2) {
    const a3 = we(t.charCodeAt(s2)), u4 = we(t.charCodeAt(s2 + 1));
    if (a3 === void 0 || u4 === void 0) {
      const i3 = t[s2] + t[s2 + 1];
      throw new Error('hex string expected, got non-hex character "' + i3 + '" at index ' + s2);
    }
    r2[o] = a3 * 16 + u4;
  }
  return r2;
}
function Pn(t) {
  return pe(Ft2(t));
}
function Et2(t) {
  return Ut(t), pe(Ft2(Uint8Array.from(t).reverse()));
}
function ge(t, e) {
  return Ee(t.toString(16).padStart(e * 2, "0"));
}
function Nt(t, e) {
  return ge(t, e).reverse();
}
function W(t, e, n3) {
  let r2;
  if (typeof e == "string") try {
    r2 = Ee(e);
  } catch (s2) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + s2);
  }
  else if (It2(e)) r2 = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const o = r2.length;
  if (typeof n3 == "number" && o !== n3) throw new Error(t + " of length " + n3 + " expected, got " + o);
  return r2;
}
function ye(...t) {
  let e = 0;
  for (let r2 = 0; r2 < t.length; r2++) {
    const o = t[r2];
    Ut(o), e += o.length;
  }
  const n3 = new Uint8Array(e);
  for (let r2 = 0, o = 0; r2 < t.length; r2++) {
    const s2 = t[r2];
    n3.set(s2, o), o += s2.length;
  }
  return n3;
}
var Lt2 = (t) => typeof t == "bigint" && vt2 <= t;
function Qn2(t, e, n3) {
  return Lt2(t) && Lt2(e) && Lt2(n3) && e <= t && t < n3;
}
function ft2(t, e, n3, r2) {
  if (!Qn2(e, n3, r2)) throw new Error("expected valid " + t + ": " + n3 + " <= n < " + r2 + ", got " + e);
}
function tr2(t) {
  let e;
  for (e = 0; t > vt2; t >>= be, e += 1) ;
  return e;
}
var er2 = (t) => (Wn << BigInt(t - 1)) - be;
var nr2 = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || It2(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e) => e.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function Ot(t, e, n3 = {}) {
  const r2 = (o, s2, a3) => {
    const u4 = nr2[s2];
    if (typeof u4 != "function") throw new Error("invalid validator function");
    const i3 = t[o];
    if (!(a3 && i3 === void 0) && !u4(i3, t)) throw new Error("param " + String(o) + " is invalid. Expected " + s2 + ", got " + i3);
  };
  for (const [o, s2] of Object.entries(e)) r2(o, s2, false);
  for (const [o, s2] of Object.entries(n3)) r2(o, s2, true);
  return t;
}
function xe(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (n3, ...r2) => {
    const o = e.get(n3);
    if (o !== void 0) return o;
    const s2 = t(n3, ...r2);
    return e.set(n3, s2), s2;
  };
}
var M = BigInt(0);
var N3 = BigInt(1);
var nt = BigInt(2);
var rr = BigInt(3);
var Ht2 = BigInt(4);
var Be = BigInt(5);
var Ce = BigInt(8);
function H(t, e) {
  const n3 = t % e;
  return n3 >= M ? n3 : e + n3;
}
function or(t, e, n3) {
  if (e < M) throw new Error("invalid exponent, negatives unsupported");
  if (n3 <= M) throw new Error("invalid modulus");
  if (n3 === N3) return M;
  let r2 = N3;
  for (; e > M; ) e & N3 && (r2 = r2 * t % n3), t = t * t % n3, e >>= N3;
  return r2;
}
function J(t, e, n3) {
  let r2 = t;
  for (; e-- > M; ) r2 *= r2, r2 %= n3;
  return r2;
}
function Ae2(t, e) {
  if (t === M) throw new Error("invert: expected non-zero number");
  if (e <= M) throw new Error("invert: expected positive modulus, got " + e);
  let n3 = H(t, e), r2 = e, o = M, s2 = N3;
  for (; n3 !== M; ) {
    const u4 = r2 / n3, i3 = r2 % n3, D5 = o - s2 * u4;
    r2 = n3, n3 = i3, o = s2, s2 = D5;
  }
  if (r2 !== N3) throw new Error("invert: does not exist");
  return H(o, e);
}
function sr(t) {
  const e = (t - N3) / nt;
  let n3, r2, o;
  for (n3 = t - N3, r2 = 0; n3 % nt === M; n3 /= nt, r2++) ;
  for (o = nt; o < t && or(o, e, t) !== t - N3; o++) if (o > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r2 === 1) {
    const a3 = (t + N3) / Ht2;
    return function(i3, D5) {
      const c4 = i3.pow(D5, a3);
      if (!i3.eql(i3.sqr(c4), D5)) throw new Error("Cannot find square root");
      return c4;
    };
  }
  const s2 = (n3 + N3) / nt;
  return function(u4, i3) {
    if (u4.pow(i3, e) === u4.neg(u4.ONE)) throw new Error("Cannot find square root");
    let D5 = r2, c4 = u4.pow(u4.mul(u4.ONE, o), n3), l3 = u4.pow(i3, s2), p5 = u4.pow(i3, n3);
    for (; !u4.eql(p5, u4.ONE); ) {
      if (u4.eql(p5, u4.ZERO)) return u4.ZERO;
      let w6 = 1;
      for (let g6 = u4.sqr(p5); w6 < D5 && !u4.eql(g6, u4.ONE); w6++) g6 = u4.sqr(g6);
      const h6 = u4.pow(c4, N3 << BigInt(D5 - w6 - 1));
      c4 = u4.sqr(h6), l3 = u4.mul(l3, h6), p5 = u4.mul(p5, c4), D5 = w6;
    }
    return l3;
  };
}
function ir(t) {
  if (t % Ht2 === rr) {
    const e = (t + N3) / Ht2;
    return function(r2, o) {
      const s2 = r2.pow(o, e);
      if (!r2.eql(r2.sqr(s2), o)) throw new Error("Cannot find square root");
      return s2;
    };
  }
  if (t % Ce === Be) {
    const e = (t - Be) / Ce;
    return function(r2, o) {
      const s2 = r2.mul(o, nt), a3 = r2.pow(s2, e), u4 = r2.mul(o, a3), i3 = r2.mul(r2.mul(u4, nt), a3), D5 = r2.mul(u4, r2.sub(i3, r2.ONE));
      if (!r2.eql(r2.sqr(D5), o)) throw new Error("Cannot find square root");
      return D5;
    };
  }
  return sr(t);
}
var ur = (t, e) => (H(t, e) & N3) === N3;
var cr = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function ar(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, n3 = cr.reduce((r2, o) => (r2[o] = "function", r2), e);
  return Ot(t, n3);
}
function fr(t, e, n3) {
  if (n3 < M) throw new Error("invalid exponent, negatives unsupported");
  if (n3 === M) return t.ONE;
  if (n3 === N3) return e;
  let r2 = t.ONE, o = e;
  for (; n3 > M; ) n3 & N3 && (r2 = t.mul(r2, o)), o = t.sqr(o), n3 >>= N3;
  return r2;
}
function Dr(t, e) {
  const n3 = new Array(e.length), r2 = e.reduce((s2, a3, u4) => t.is0(a3) ? s2 : (n3[u4] = s2, t.mul(s2, a3)), t.ONE), o = t.inv(r2);
  return e.reduceRight((s2, a3, u4) => t.is0(a3) ? s2 : (n3[u4] = t.mul(s2, n3[u4]), t.mul(s2, a3)), o), n3;
}
function me(t, e) {
  const n3 = e !== void 0 ? e : t.toString(2).length, r2 = Math.ceil(n3 / 8);
  return { nBitLength: n3, nByteLength: r2 };
}
function _e(t, e, n3 = false, r2 = {}) {
  if (t <= M) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: o, nByteLength: s2 } = me(t, e);
  if (s2 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a3;
  const u4 = Object.freeze({ ORDER: t, isLE: n3, BITS: o, BYTES: s2, MASK: er2(o), ZERO: M, ONE: N3, create: (i3) => H(i3, t), isValid: (i3) => {
    if (typeof i3 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof i3);
    return M <= i3 && i3 < t;
  }, is0: (i3) => i3 === M, isOdd: (i3) => (i3 & N3) === N3, neg: (i3) => H(-i3, t), eql: (i3, D5) => i3 === D5, sqr: (i3) => H(i3 * i3, t), add: (i3, D5) => H(i3 + D5, t), sub: (i3, D5) => H(i3 - D5, t), mul: (i3, D5) => H(i3 * D5, t), pow: (i3, D5) => fr(u4, i3, D5), div: (i3, D5) => H(i3 * Ae2(D5, t), t), sqrN: (i3) => i3 * i3, addN: (i3, D5) => i3 + D5, subN: (i3, D5) => i3 - D5, mulN: (i3, D5) => i3 * D5, inv: (i3) => Ae2(i3, t), sqrt: r2.sqrt || ((i3) => (a3 || (a3 = ir(t)), a3(u4, i3))), invertBatch: (i3) => Dr(u4, i3), cmov: (i3, D5, c4) => c4 ? D5 : i3, toBytes: (i3) => n3 ? Nt(i3, s2) : ge(i3, s2), fromBytes: (i3) => {
    if (i3.length !== s2) throw new Error("Field.fromBytes: expected " + s2 + " bytes, got " + i3.length);
    return n3 ? Et2(i3) : Pn(i3);
  } });
  return Object.freeze(u4);
}
var Se = BigInt(0);
var gt2 = BigInt(1);
function zt2(t, e) {
  const n3 = e.negate();
  return t ? n3 : e;
}
function ve2(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Mt2(t, e) {
  ve2(t, e);
  const n3 = Math.ceil(e / t) + 1, r2 = 2 ** (t - 1);
  return { windows: n3, windowSize: r2 };
}
function dr(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((n3, r2) => {
    if (!(n3 instanceof e)) throw new Error("invalid point at index " + r2);
  });
}
function hr(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((n3, r2) => {
    if (!e.isValid(n3)) throw new Error("invalid scalar at index " + r2);
  });
}
var qt2 = /* @__PURE__ */ new WeakMap();
var Ie = /* @__PURE__ */ new WeakMap();
function $t(t) {
  return Ie.get(t) || 1;
}
function lr(t, e) {
  return { constTimeNegate: zt2, hasPrecomputes(n3) {
    return $t(n3) !== 1;
  }, unsafeLadder(n3, r2, o = t.ZERO) {
    let s2 = n3;
    for (; r2 > Se; ) r2 & gt2 && (o = o.add(s2)), s2 = s2.double(), r2 >>= gt2;
    return o;
  }, precomputeWindow(n3, r2) {
    const { windows: o, windowSize: s2 } = Mt2(r2, e), a3 = [];
    let u4 = n3, i3 = u4;
    for (let D5 = 0; D5 < o; D5++) {
      i3 = u4, a3.push(i3);
      for (let c4 = 1; c4 < s2; c4++) i3 = i3.add(u4), a3.push(i3);
      u4 = i3.double();
    }
    return a3;
  }, wNAF(n3, r2, o) {
    const { windows: s2, windowSize: a3 } = Mt2(n3, e);
    let u4 = t.ZERO, i3 = t.BASE;
    const D5 = BigInt(2 ** n3 - 1), c4 = 2 ** n3, l3 = BigInt(n3);
    for (let p5 = 0; p5 < s2; p5++) {
      const w6 = p5 * a3;
      let h6 = Number(o & D5);
      o >>= l3, h6 > a3 && (h6 -= c4, o += gt2);
      const g6 = w6, S5 = w6 + Math.abs(h6) - 1, v5 = p5 % 2 !== 0, L3 = h6 < 0;
      h6 === 0 ? i3 = i3.add(zt2(v5, r2[g6])) : u4 = u4.add(zt2(L3, r2[S5]));
    }
    return { p: u4, f: i3 };
  }, wNAFUnsafe(n3, r2, o, s2 = t.ZERO) {
    const { windows: a3, windowSize: u4 } = Mt2(n3, e), i3 = BigInt(2 ** n3 - 1), D5 = 2 ** n3, c4 = BigInt(n3);
    for (let l3 = 0; l3 < a3; l3++) {
      const p5 = l3 * u4;
      if (o === Se) break;
      let w6 = Number(o & i3);
      if (o >>= c4, w6 > u4 && (w6 -= D5, o += gt2), w6 === 0) continue;
      let h6 = r2[p5 + Math.abs(w6) - 1];
      w6 < 0 && (h6 = h6.negate()), s2 = s2.add(h6);
    }
    return s2;
  }, getPrecomputes(n3, r2, o) {
    let s2 = qt2.get(r2);
    return s2 || (s2 = this.precomputeWindow(r2, n3), n3 !== 1 && qt2.set(r2, o(s2))), s2;
  }, wNAFCached(n3, r2, o) {
    const s2 = $t(n3);
    return this.wNAF(s2, this.getPrecomputes(s2, n3, o), r2);
  }, wNAFCachedUnsafe(n3, r2, o, s2) {
    const a3 = $t(n3);
    return a3 === 1 ? this.unsafeLadder(n3, r2, s2) : this.wNAFUnsafe(a3, this.getPrecomputes(a3, n3, o), r2, s2);
  }, setWindowSize(n3, r2) {
    ve2(r2, e), Ie.set(n3, r2), qt2.delete(n3);
  } };
}
function br(t, e, n3, r2) {
  if (dr(n3, t), hr(r2, e), n3.length !== r2.length) throw new Error("arrays of points and scalars must have equal length");
  const o = t.ZERO, s2 = tr2(BigInt(n3.length)), a3 = s2 > 12 ? s2 - 3 : s2 > 4 ? s2 - 2 : s2 ? 2 : 1, u4 = (1 << a3) - 1, i3 = new Array(u4 + 1).fill(o), D5 = Math.floor((e.BITS - 1) / a3) * a3;
  let c4 = o;
  for (let l3 = D5; l3 >= 0; l3 -= a3) {
    i3.fill(o);
    for (let w6 = 0; w6 < r2.length; w6++) {
      const h6 = r2[w6], g6 = Number(h6 >> BigInt(l3) & BigInt(u4));
      i3[g6] = i3[g6].add(n3[w6]);
    }
    let p5 = o;
    for (let w6 = i3.length - 1, h6 = o; w6 > 0; w6--) h6 = h6.add(i3[w6]), p5 = p5.add(h6);
    if (c4 = c4.add(p5), l3 !== 0) for (let w6 = 0; w6 < a3; w6++) c4 = c4.double();
  }
  return c4;
}
function pr(t) {
  return ar(t.Fp), Ot(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...me(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
var G = BigInt(0);
var j2 = BigInt(1);
var yt2 = BigInt(2);
var wr = BigInt(8);
var Er = { zip215: true };
function gr(t) {
  const e = pr(t);
  return Ot(t, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...e });
}
function yr(t) {
  const e = gr(t), { Fp: n3, n: r2, prehash: o, hash: s2, randomBytes: a3, nByteLength: u4, h: i3 } = e, D5 = yt2 << BigInt(u4 * 8) - j2, c4 = n3.create, l3 = _e(e.n, e.nBitLength), p5 = e.uvRatio || ((y7, f5) => {
    try {
      return { isValid: true, value: n3.sqrt(y7 * n3.inv(f5)) };
    } catch {
      return { isValid: false, value: G };
    }
  }), w6 = e.adjustScalarBytes || ((y7) => y7), h6 = e.domain || ((y7, f5, b6) => {
    if (Tt("phflag", b6), f5.length || b6) throw new Error("Contexts/pre-hash are not supported");
    return y7;
  });
  function g6(y7, f5) {
    ft2("coordinate " + y7, f5, G, D5);
  }
  function S5(y7) {
    if (!(y7 instanceof d2)) throw new Error("ExtendedPoint expected");
  }
  const v5 = xe((y7, f5) => {
    const { ex: b6, ey: E5, ez: B3 } = y7, C2 = y7.is0();
    f5 == null && (f5 = C2 ? wr : n3.inv(B3));
    const A2 = c4(b6 * f5), U6 = c4(E5 * f5), _5 = c4(B3 * f5);
    if (C2) return { x: G, y: j2 };
    if (_5 !== j2) throw new Error("invZ was invalid");
    return { x: A2, y: U6 };
  }), L3 = xe((y7) => {
    const { a: f5, d: b6 } = e;
    if (y7.is0()) throw new Error("bad point: ZERO");
    const { ex: E5, ey: B3, ez: C2, et: A2 } = y7, U6 = c4(E5 * E5), _5 = c4(B3 * B3), T2 = c4(C2 * C2), $4 = c4(T2 * T2), R2 = c4(U6 * f5), V3 = c4(T2 * c4(R2 + _5)), Y = c4($4 + c4(b6 * c4(U6 * _5)));
    if (V3 !== Y) throw new Error("bad point: equation left != right (1)");
    const Z2 = c4(E5 * B3), X3 = c4(C2 * A2);
    if (Z2 !== X3) throw new Error("bad point: equation left != right (2)");
    return true;
  });
  class d2 {
    constructor(f5, b6, E5, B3) {
      this.ex = f5, this.ey = b6, this.ez = E5, this.et = B3, g6("x", f5), g6("y", b6), g6("z", E5), g6("t", B3), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(f5) {
      if (f5 instanceof d2) throw new Error("extended point not allowed");
      const { x: b6, y: E5 } = f5 || {};
      return g6("x", b6), g6("y", E5), new d2(b6, E5, j2, c4(b6 * E5));
    }
    static normalizeZ(f5) {
      const b6 = n3.invertBatch(f5.map((E5) => E5.ez));
      return f5.map((E5, B3) => E5.toAffine(b6[B3])).map(d2.fromAffine);
    }
    static msm(f5, b6) {
      return br(d2, l3, f5, b6);
    }
    _setWindowSize(f5) {
      q2.setWindowSize(this, f5);
    }
    assertValidity() {
      L3(this);
    }
    equals(f5) {
      S5(f5);
      const { ex: b6, ey: E5, ez: B3 } = this, { ex: C2, ey: A2, ez: U6 } = f5, _5 = c4(b6 * U6), T2 = c4(C2 * B3), $4 = c4(E5 * U6), R2 = c4(A2 * B3);
      return _5 === T2 && $4 === R2;
    }
    is0() {
      return this.equals(d2.ZERO);
    }
    negate() {
      return new d2(c4(-this.ex), this.ey, this.ez, c4(-this.et));
    }
    double() {
      const { a: f5 } = e, { ex: b6, ey: E5, ez: B3 } = this, C2 = c4(b6 * b6), A2 = c4(E5 * E5), U6 = c4(yt2 * c4(B3 * B3)), _5 = c4(f5 * C2), T2 = b6 + E5, $4 = c4(c4(T2 * T2) - C2 - A2), R2 = _5 + A2, V3 = R2 - U6, Y = _5 - A2, Z2 = c4($4 * V3), X3 = c4(R2 * Y), et2 = c4($4 * Y), pt3 = c4(V3 * R2);
      return new d2(Z2, X3, pt3, et2);
    }
    add(f5) {
      S5(f5);
      const { a: b6, d: E5 } = e, { ex: B3, ey: C2, ez: A2, et: U6 } = this, { ex: _5, ey: T2, ez: $4, et: R2 } = f5;
      if (b6 === BigInt(-1)) {
        const re2 = c4((C2 - B3) * (T2 + _5)), oe3 = c4((C2 + B3) * (T2 - _5)), mt3 = c4(oe3 - re2);
        if (mt3 === G) return this.double();
        const se = c4(A2 * yt2 * R2), ie2 = c4(U6 * yt2 * $4), ue3 = ie2 + se, ce3 = oe3 + re2, ae2 = ie2 - se, Dn = c4(ue3 * mt3), dn2 = c4(ce3 * ae2), hn = c4(ue3 * ae2), ln2 = c4(mt3 * ce3);
        return new d2(Dn, dn2, ln2, hn);
      }
      const V3 = c4(B3 * _5), Y = c4(C2 * T2), Z2 = c4(U6 * E5 * R2), X3 = c4(A2 * $4), et2 = c4((B3 + C2) * (_5 + T2) - V3 - Y), pt3 = X3 - Z2, ee3 = X3 + Z2, ne2 = c4(Y - b6 * V3), un = c4(et2 * pt3), cn = c4(ee3 * ne2), an = c4(et2 * ne2), fn2 = c4(pt3 * ee3);
      return new d2(un, cn, fn2, an);
    }
    subtract(f5) {
      return this.add(f5.negate());
    }
    wNAF(f5) {
      return q2.wNAFCached(this, f5, d2.normalizeZ);
    }
    multiply(f5) {
      const b6 = f5;
      ft2("scalar", b6, j2, r2);
      const { p: E5, f: B3 } = this.wNAF(b6);
      return d2.normalizeZ([E5, B3])[0];
    }
    multiplyUnsafe(f5, b6 = d2.ZERO) {
      const E5 = f5;
      return ft2("scalar", E5, G, r2), E5 === G ? F3 : this.is0() || E5 === j2 ? this : q2.wNAFCachedUnsafe(this, E5, d2.normalizeZ, b6);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i3).is0();
    }
    isTorsionFree() {
      return q2.unsafeLadder(this, r2).is0();
    }
    toAffine(f5) {
      return v5(this, f5);
    }
    clearCofactor() {
      const { h: f5 } = e;
      return f5 === j2 ? this : this.multiplyUnsafe(f5);
    }
    static fromHex(f5, b6 = false) {
      const { d: E5, a: B3 } = e, C2 = n3.BYTES;
      f5 = W("pointHex", f5, C2), Tt("zip215", b6);
      const A2 = f5.slice(), U6 = f5[C2 - 1];
      A2[C2 - 1] = U6 & -129;
      const _5 = Et2(A2), T2 = b6 ? D5 : n3.ORDER;
      ft2("pointHex.y", _5, G, T2);
      const $4 = c4(_5 * _5), R2 = c4($4 - j2), V3 = c4(E5 * $4 - B3);
      let { isValid: Y, value: Z2 } = p5(R2, V3);
      if (!Y) throw new Error("Point.fromHex: invalid y coordinate");
      const X3 = (Z2 & j2) === j2, et2 = (U6 & 128) !== 0;
      if (!b6 && Z2 === G && et2) throw new Error("Point.fromHex: x=0 and x_0=1");
      return et2 !== X3 && (Z2 = c4(-Z2)), d2.fromAffine({ x: Z2, y: _5 });
    }
    static fromPrivateKey(f5) {
      return O5(f5).point;
    }
    toRawBytes() {
      const { x: f5, y: b6 } = this.toAffine(), E5 = Nt(b6, n3.BYTES);
      return E5[E5.length - 1] |= f5 & j2 ? 128 : 0, E5;
    }
    toHex() {
      return Ft2(this.toRawBytes());
    }
  }
  d2.BASE = new d2(e.Gx, e.Gy, j2, c4(e.Gx * e.Gy)), d2.ZERO = new d2(G, j2, j2, G);
  const { BASE: m2, ZERO: F3 } = d2, q2 = lr(d2, u4 * 8);
  function z4(y7) {
    return H(y7, r2);
  }
  function I2(y7) {
    return z4(Et2(y7));
  }
  function O5(y7) {
    const f5 = n3.BYTES;
    y7 = W("private key", y7, f5);
    const b6 = W("hashed private key", s2(y7), 2 * f5), E5 = w6(b6.slice(0, f5)), B3 = b6.slice(f5, 2 * f5), C2 = I2(E5), A2 = m2.multiply(C2), U6 = A2.toRawBytes();
    return { head: E5, prefix: B3, scalar: C2, point: A2, pointBytes: U6 };
  }
  function ot3(y7) {
    return O5(y7).pointBytes;
  }
  function tt2(y7 = new Uint8Array(), ...f5) {
    const b6 = ye(...f5);
    return I2(s2(h6(b6, W("context", y7), !!o)));
  }
  function st2(y7, f5, b6 = {}) {
    y7 = W("message", y7), o && (y7 = o(y7));
    const { prefix: E5, scalar: B3, pointBytes: C2 } = O5(f5), A2 = tt2(b6.context, E5, y7), U6 = m2.multiply(A2).toRawBytes(), _5 = tt2(b6.context, U6, C2, y7), T2 = z4(A2 + _5 * B3);
    ft2("signature.s", T2, G, r2);
    const $4 = ye(U6, Nt(T2, n3.BYTES));
    return W("result", $4, n3.BYTES * 2);
  }
  const at3 = Er;
  function Ct3(y7, f5, b6, E5 = at3) {
    const { context: B3, zip215: C2 } = E5, A2 = n3.BYTES;
    y7 = W("signature", y7, 2 * A2), f5 = W("message", f5), b6 = W("publicKey", b6, A2), C2 !== void 0 && Tt("zip215", C2), o && (f5 = o(f5));
    const U6 = Et2(y7.slice(A2, 2 * A2));
    let _5, T2, $4;
    try {
      _5 = d2.fromHex(b6, C2), T2 = d2.fromHex(y7.slice(0, A2), C2), $4 = m2.multiplyUnsafe(U6);
    } catch {
      return false;
    }
    if (!C2 && _5.isSmallOrder()) return false;
    const R2 = tt2(B3, T2.toRawBytes(), _5.toRawBytes(), f5);
    return T2.add(_5.multiplyUnsafe(R2)).subtract($4).clearCofactor().equals(d2.ZERO);
  }
  return m2._setWindowSize(8), { CURVE: e, getPublicKey: ot3, sign: st2, verify: Ct3, ExtendedPoint: d2, utils: { getExtendedPublicKey: O5, randomPrivateKey: () => a3(n3.BYTES), precompute(y7 = 8, f5 = d2.BASE) {
    return f5._setWindowSize(y7), f5.multiply(BigInt(3)), f5;
  } } };
}
BigInt(0), BigInt(1);
var kt2 = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
var Ue = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
var xr = BigInt(1);
var Te = BigInt(2);
BigInt(3);
var Br = BigInt(5);
var Cr = BigInt(8);
function Ar(t) {
  const e = BigInt(10), n3 = BigInt(20), r2 = BigInt(40), o = BigInt(80), s2 = kt2, u4 = t * t % s2 * t % s2, i3 = J(u4, Te, s2) * u4 % s2, D5 = J(i3, xr, s2) * t % s2, c4 = J(D5, Br, s2) * D5 % s2, l3 = J(c4, e, s2) * c4 % s2, p5 = J(l3, n3, s2) * l3 % s2, w6 = J(p5, r2, s2) * p5 % s2, h6 = J(w6, o, s2) * w6 % s2, g6 = J(h6, o, s2) * w6 % s2, S5 = J(g6, e, s2) * c4 % s2;
  return { pow_p_5_8: J(S5, Te, s2) * t % s2, b2: u4 };
}
function mr(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function _r(t, e) {
  const n3 = kt2, r2 = H(e * e * e, n3), o = H(r2 * r2 * e, n3), s2 = Ar(t * o).pow_p_5_8;
  let a3 = H(t * r2 * s2, n3);
  const u4 = H(e * a3 * a3, n3), i3 = a3, D5 = H(a3 * Ue, n3), c4 = u4 === t, l3 = u4 === H(-t, n3), p5 = u4 === H(-t * Ue, n3);
  return c4 && (a3 = i3), (l3 || p5) && (a3 = D5), ur(a3, n3) && (a3 = H(-a3, n3)), { isValid: c4 || l3, value: a3 };
}
var Sr = (() => _e(kt2, void 0, true))();
var vr = (() => ({ a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: Sr, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: Cr, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: Kn2, randomBytes: he, adjustScalarBytes: mr, uvRatio: _r }))();
var Rt = (() => yr(vr))();
var jt2 = "EdDSA";
var Zt = "JWT";
var ut2 = ".";
var Dt2 = "base64url";
var Gt2 = "utf8";
var xt2 = "utf8";
var Vt2 = ":";
var Yt2 = "did";
var Jt2 = "key";
var dt2 = "base58btc";
var Kt2 = "z";
var Wt2 = "K36";
var Ne = 32;
function Xt2(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Le(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xt2(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Oe(t, e) {
  e || (e = t.reduce((o, s2) => o + s2.length, 0));
  const n3 = Le(e);
  let r2 = 0;
  for (const o of t) n3.set(o, r2), r2 += o.length;
  return Xt2(n3);
}
function Ir(t, e) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var n3 = new Uint8Array(256), r2 = 0; r2 < n3.length; r2++) n3[r2] = 255;
  for (var o = 0; o < t.length; o++) {
    var s2 = t.charAt(o), a3 = s2.charCodeAt(0);
    if (n3[a3] !== 255) throw new TypeError(s2 + " is ambiguous");
    n3[a3] = o;
  }
  var u4 = t.length, i3 = t.charAt(0), D5 = Math.log(u4) / Math.log(256), c4 = Math.log(256) / Math.log(u4);
  function l3(h6) {
    if (h6 instanceof Uint8Array || (ArrayBuffer.isView(h6) ? h6 = new Uint8Array(h6.buffer, h6.byteOffset, h6.byteLength) : Array.isArray(h6) && (h6 = Uint8Array.from(h6))), !(h6 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (h6.length === 0) return "";
    for (var g6 = 0, S5 = 0, v5 = 0, L3 = h6.length; v5 !== L3 && h6[v5] === 0; ) v5++, g6++;
    for (var d2 = (L3 - v5) * c4 + 1 >>> 0, m2 = new Uint8Array(d2); v5 !== L3; ) {
      for (var F3 = h6[v5], q2 = 0, z4 = d2 - 1; (F3 !== 0 || q2 < S5) && z4 !== -1; z4--, q2++) F3 += 256 * m2[z4] >>> 0, m2[z4] = F3 % u4 >>> 0, F3 = F3 / u4 >>> 0;
      if (F3 !== 0) throw new Error("Non-zero carry");
      S5 = q2, v5++;
    }
    for (var I2 = d2 - S5; I2 !== d2 && m2[I2] === 0; ) I2++;
    for (var O5 = i3.repeat(g6); I2 < d2; ++I2) O5 += t.charAt(m2[I2]);
    return O5;
  }
  function p5(h6) {
    if (typeof h6 != "string") throw new TypeError("Expected String");
    if (h6.length === 0) return new Uint8Array();
    var g6 = 0;
    if (h6[g6] !== " ") {
      for (var S5 = 0, v5 = 0; h6[g6] === i3; ) S5++, g6++;
      for (var L3 = (h6.length - g6) * D5 + 1 >>> 0, d2 = new Uint8Array(L3); h6[g6]; ) {
        var m2 = n3[h6.charCodeAt(g6)];
        if (m2 === 255) return;
        for (var F3 = 0, q2 = L3 - 1; (m2 !== 0 || F3 < v5) && q2 !== -1; q2--, F3++) m2 += u4 * d2[q2] >>> 0, d2[q2] = m2 % 256 >>> 0, m2 = m2 / 256 >>> 0;
        if (m2 !== 0) throw new Error("Non-zero carry");
        v5 = F3, g6++;
      }
      if (h6[g6] !== " ") {
        for (var z4 = L3 - v5; z4 !== L3 && d2[z4] === 0; ) z4++;
        for (var I2 = new Uint8Array(S5 + (L3 - z4)), O5 = S5; z4 !== L3; ) I2[O5++] = d2[z4++];
        return I2;
      }
    }
  }
  function w6(h6) {
    var g6 = p5(h6);
    if (g6) return g6;
    throw new Error(`Non-${e} character`);
  }
  return { encode: l3, decodeUnsafe: p5, decode: w6 };
}
var Ur = Ir;
var Tr = Ur;
var He = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var Fr = (t) => new TextEncoder().encode(t);
var Nr = (t) => new TextDecoder().decode(t);
var Lr = class {
  constructor(e, n3, r2) {
    this.name = e, this.prefix = n3, this.baseEncode = r2;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var Or = class {
  constructor(e, n3, r2) {
    if (this.name = e, this.prefix = n3, n3.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = n3.codePointAt(0), this.baseDecode = r2;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return ze(this, e);
  }
};
var Hr = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return ze(this, e);
  }
  decode(e) {
    const n3 = e[0], r2 = this.decoders[n3];
    if (r2) return r2.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var ze = (t, e) => new Hr({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
var zr = class {
  constructor(e, n3, r2, o) {
    this.name = e, this.prefix = n3, this.baseEncode = r2, this.baseDecode = o, this.encoder = new Lr(e, n3, r2), this.decoder = new Or(e, n3, o);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
var Bt2 = ({ name: t, prefix: e, encode: n3, decode: r2 }) => new zr(t, e, n3, r2);
var ht2 = ({ prefix: t, name: e, alphabet: n3 }) => {
  const { encode: r2, decode: o } = Tr(n3, e);
  return Bt2({ prefix: t, name: e, encode: r2, decode: (s2) => He(o(s2)) });
};
var Mr = (t, e, n3, r2) => {
  const o = {};
  for (let c4 = 0; c4 < e.length; ++c4) o[e[c4]] = c4;
  let s2 = t.length;
  for (; t[s2 - 1] === "="; ) --s2;
  const a3 = new Uint8Array(s2 * n3 / 8 | 0);
  let u4 = 0, i3 = 0, D5 = 0;
  for (let c4 = 0; c4 < s2; ++c4) {
    const l3 = o[t[c4]];
    if (l3 === void 0) throw new SyntaxError(`Non-${r2} character`);
    i3 = i3 << n3 | l3, u4 += n3, u4 >= 8 && (u4 -= 8, a3[D5++] = 255 & i3 >> u4);
  }
  if (u4 >= n3 || 255 & i3 << 8 - u4) throw new SyntaxError("Unexpected end of data");
  return a3;
};
var qr = (t, e, n3) => {
  const r2 = e[e.length - 1] === "=", o = (1 << n3) - 1;
  let s2 = "", a3 = 0, u4 = 0;
  for (let i3 = 0; i3 < t.length; ++i3) for (u4 = u4 << 8 | t[i3], a3 += 8; a3 > n3; ) a3 -= n3, s2 += e[o & u4 >> a3];
  if (a3 && (s2 += e[o & u4 << n3 - a3]), r2) for (; s2.length * n3 & 7; ) s2 += "=";
  return s2;
};
var k4 = ({ name: t, prefix: e, bitsPerChar: n3, alphabet: r2 }) => Bt2({ prefix: e, name: t, encode(o) {
  return qr(o, r2, n3);
}, decode(o) {
  return Mr(o, r2, n3, t);
} });
var $r = Bt2({ prefix: "\0", name: "identity", encode: (t) => Nr(t), decode: (t) => Fr(t) });
var kr = Object.freeze({ __proto__: null, identity: $r });
var Rr = k4({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var jr = Object.freeze({ __proto__: null, base2: Rr });
var Zr = k4({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Gr = Object.freeze({ __proto__: null, base8: Zr });
var Vr = ht2({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Yr = Object.freeze({ __proto__: null, base10: Vr });
var Jr = k4({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Kr = k4({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Wr = Object.freeze({ __proto__: null, base16: Jr, base16upper: Kr });
var Xr = k4({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Pr = k4({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var Qr = k4({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var to = k4({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var eo = k4({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var no = k4({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var ro = k4({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var oo = k4({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var so = k4({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var io = Object.freeze({ __proto__: null, base32: Xr, base32upper: Pr, base32pad: Qr, base32padupper: to, base32hex: eo, base32hexupper: no, base32hexpad: ro, base32hexpadupper: oo, base32z: so });
var uo = ht2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var co = ht2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var ao = Object.freeze({ __proto__: null, base36: uo, base36upper: co });
var fo = ht2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var Do = ht2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var ho = Object.freeze({ __proto__: null, base58btc: fo, base58flickr: Do });
var lo = k4({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var bo = k4({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var po = k4({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var wo = k4({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Eo = Object.freeze({ __proto__: null, base64: lo, base64pad: bo, base64url: po, base64urlpad: wo });
var Me = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var go = Me.reduce((t, e, n3) => (t[n3] = e, t), []);
var yo = Me.reduce((t, e, n3) => (t[e.codePointAt(0)] = n3, t), []);
function xo(t) {
  return t.reduce((e, n3) => (e += go[n3], e), "");
}
function Bo(t) {
  const e = [];
  for (const n3 of t) {
    const r2 = yo[n3.codePointAt(0)];
    if (r2 === void 0) throw new Error(`Non-base256emoji character: ${n3}`);
    e.push(r2);
  }
  return new Uint8Array(e);
}
var Co = Bt2({ prefix: "🚀", name: "base256emoji", encode: xo, decode: Bo });
var Ao = Object.freeze({ __proto__: null, base256emoji: Co });
var mo = $e;
var qe = 128;
var _o = 127;
var So = ~_o;
var vo = Math.pow(2, 31);
function $e(t, e, n3) {
  e = e || [], n3 = n3 || 0;
  for (var r2 = n3; t >= vo; ) e[n3++] = t & 255 | qe, t /= 128;
  for (; t & So; ) e[n3++] = t & 255 | qe, t >>>= 7;
  return e[n3] = t | 0, $e.bytes = n3 - r2 + 1, e;
}
var Io = Pt;
var Uo = 128;
var ke = 127;
function Pt(t, r2) {
  var n3 = 0, r2 = r2 || 0, o = 0, s2 = r2, a3, u4 = t.length;
  do {
    if (s2 >= u4) throw Pt.bytes = 0, new RangeError("Could not decode varint");
    a3 = t[s2++], n3 += o < 28 ? (a3 & ke) << o : (a3 & ke) * Math.pow(2, o), o += 7;
  } while (a3 >= Uo);
  return Pt.bytes = s2 - r2, n3;
}
var To = Math.pow(2, 7);
var Fo = Math.pow(2, 14);
var No = Math.pow(2, 21);
var Lo = Math.pow(2, 28);
var Oo = Math.pow(2, 35);
var Ho = Math.pow(2, 42);
var zo = Math.pow(2, 49);
var Mo = Math.pow(2, 56);
var qo = Math.pow(2, 63);
var $o = function(t) {
  return t < To ? 1 : t < Fo ? 2 : t < No ? 3 : t < Lo ? 4 : t < Oo ? 5 : t < Ho ? 6 : t < zo ? 7 : t < Mo ? 8 : t < qo ? 9 : 10;
};
var ko = { encode: mo, decode: Io, encodingLength: $o };
var Re = ko;
var je = (t, e, n3 = 0) => (Re.encode(t, e, n3), e);
var Ze = (t) => Re.encodingLength(t);
var Qt = (t, e) => {
  const n3 = e.byteLength, r2 = Ze(t), o = r2 + Ze(n3), s2 = new Uint8Array(o + n3);
  return je(t, s2, 0), je(n3, s2, r2), s2.set(e, o), new Ro(t, n3, e, s2);
};
var Ro = class {
  constructor(e, n3, r2, o) {
    this.code = e, this.size = n3, this.digest = r2, this.bytes = o;
  }
};
var Ge = ({ name: t, code: e, encode: n3 }) => new jo(t, e, n3);
var jo = class {
  constructor(e, n3, r2) {
    this.name = e, this.code = n3, this.encode = r2;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const n3 = this.encode(e);
      return n3 instanceof Uint8Array ? Qt(this.code, n3) : n3.then((r2) => Qt(this.code, r2));
    } else throw Error("Unknown type, must be binary type");
  }
};
var Ve = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e));
var Zo = Ge({ name: "sha2-256", code: 18, encode: Ve("SHA-256") });
var Go = Ge({ name: "sha2-512", code: 19, encode: Ve("SHA-512") });
var Vo = Object.freeze({ __proto__: null, sha256: Zo, sha512: Go });
var Ye = 0;
var Yo = "identity";
var Je = He;
var Jo = (t) => Qt(Ye, Je(t));
var Ko = { code: Ye, name: Yo, encode: Je, digest: Jo };
var Wo = Object.freeze({ __proto__: null, identity: Ko });
new TextEncoder(), new TextDecoder();
var Ke = { ...kr, ...jr, ...Gr, ...Yr, ...Wr, ...io, ...ao, ...ho, ...Eo, ...Ao };
({ ...Vo, ...Wo });
function We(t, e, n3, r2) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: n3 }, decoder: { decode: r2 } };
}
var Xe = We("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1)));
var te2 = We("ascii", "a", (t) => {
  let e = "a";
  for (let n3 = 0; n3 < t.length; n3++) e += String.fromCharCode(t[n3]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Le(t.length);
  for (let n3 = 0; n3 < t.length; n3++) e[n3] = t.charCodeAt(n3);
  return e;
});
var Pe = { utf8: Xe, "utf-8": Xe, hex: Ke.base16, latin1: te2, ascii: te2, binary: te2, ...Ke };
function ct(t, e = "utf8") {
  const n3 = Pe[e];
  if (!n3) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : n3.encoder.encode(t).substring(1);
}
function rt2(t, e = "utf8") {
  const n3 = Pe[e];
  if (!n3) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xt2(globalThis.Buffer.from(t, "utf-8")) : n3.decoder.decode(`${n3.prefix}${t}`);
}
function bt(t) {
  return ct(rt2(safeJsonStringify(t), Gt2), Dt2);
}
function Qe(t) {
  const e = rt2(Wt2, dt2), n3 = Kt2 + ct(Oe([e, t]), dt2);
  return [Yt2, Jt2, n3].join(Vt2);
}
function en2(t) {
  return ct(t, Dt2);
}
function rn(t) {
  return rt2([bt(t.header), bt(t.payload)].join(ut2), xt2);
}
function on(t) {
  return [bt(t.header), bt(t.payload), en2(t.signature)].join(ut2);
}
function Po(t = he(Ne)) {
  const e = Rt.getPublicKey(t);
  return { secretKey: Oe([t, e]), publicKey: e };
}
async function Qo(t, e, n3, r2, o = (0, import_time.fromMiliseconds)(Date.now())) {
  const s2 = { alg: jt2, typ: Zt }, a3 = Qe(r2.publicKey), u4 = o + n3, i3 = { iss: a3, sub: t, aud: e, iat: o, exp: u4 }, D5 = rn({ header: s2, payload: i3 }), c4 = Rt.sign(D5, r2.secretKey.slice(0, 32));
  return on({ header: s2, payload: i3, signature: c4 });
}

// node_modules/@walletconnect/core/dist/index.es.js
var import_time2 = __toESM(require_cjs());

// node_modules/@walletconnect/core/node_modules/@walletconnect/jsonrpc-provider/dist/esm/provider.js
var import_events3 = __toESM(require_events());
init_esm2();
var JsonRpcProvider = class extends r {
  constructor(connection) {
    super(connection);
    this.events = new import_events3.EventEmitter();
    this.hasRegisteredEventListeners = false;
    this.connection = this.setConnection(connection);
    if (this.connection.connected) {
      this.registerEventListeners();
    }
  }
  async connect(connection = this.connection) {
    await this.open(connection);
  }
  async disconnect() {
    await this.close();
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async request(request, context) {
    return this.requestStrict(formatJsonRpcRequest(request.method, request.params || [], request.id || getBigIntRpcId().toString()), context);
  }
  async requestStrict(request, context) {
    return new Promise(async (resolve, reject) => {
      if (!this.connection.connected) {
        try {
          await this.open();
        } catch (e) {
          reject(e);
        }
      }
      this.events.on(`${request.id}`, (response) => {
        if (isJsonRpcError(response)) {
          reject(response.error);
        } else {
          resolve(response.result);
        }
      });
      try {
        await this.connection.send(request, context);
      } catch (e) {
        reject(e);
      }
    });
  }
  setConnection(connection = this.connection) {
    return connection;
  }
  onPayload(payload) {
    this.events.emit("payload", payload);
    if (isJsonRpcResponse(payload)) {
      this.events.emit(`${payload.id}`, payload);
    } else {
      this.events.emit("message", {
        type: payload.method,
        data: payload.params
      });
    }
  }
  onClose(event) {
    if (event && event.code === 3e3) {
      this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${event.code} ${event.reason ? `(${event.reason})` : ""}`));
    }
    this.events.emit("disconnect");
  }
  async open(connection = this.connection) {
    if (this.connection === connection && this.connection.connected)
      return;
    if (this.connection.connected)
      this.close();
    if (typeof connection === "string") {
      await this.connection.open(connection);
      connection = this.connection;
    }
    this.connection = this.setConnection(connection);
    await this.connection.open();
    this.registerEventListeners();
    this.events.emit("connect");
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    if (this.hasRegisteredEventListeners)
      return;
    this.connection.on("payload", (payload) => this.onPayload(payload));
    this.connection.on("close", (event) => this.onClose(event));
    this.connection.on("error", (error) => this.events.emit("error", error));
    this.connection.on("register_error", (error) => this.onClose());
    this.hasRegisteredEventListeners = true;
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
init_esm2();

// node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
var import_events4 = __toESM(require_events());
init_esm();
init_esm2();
var w4 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require_browser2();
var b3 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u";
var a2 = (c4) => c4.split("?")[0];
var h5 = 10;
var S3 = w4();
var f3 = class {
  constructor(e) {
    if (this.url = e, this.events = new import_events4.EventEmitter(), this.registering = false, !isWsUrl(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n3) => {
        this.onClose(n3), e();
      }, this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(safeJsonStringify(e));
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  register(e = this.url) {
    if (!isWsUrl(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n3, o) => {
        this.events.once("register_error", (s2) => {
          this.resetMaxListeners(), o(s2);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return o(new Error("WebSocket connection is missing or invalid"));
          n3(this.socket);
        });
      });
    }
    return this.url = e, this.registering = true, new Promise((t, n3) => {
      const o = new URLSearchParams(e).get("origin"), s2 = (0, esm_exports.isReactNative)() ? { headers: { origin: o } } : { rejectUnauthorized: !isLocalhostUrl(e) }, i3 = new S3(e, [], s2);
      b3() ? i3.onerror = (r2) => {
        const l3 = r2;
        n3(this.emitError(l3.error));
      } : i3.on("error", (r2) => {
        n3(this.emitError(r2));
      }), i3.onopen = () => {
        this.onOpen(i3), t(i3);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (t) => this.onPayload(t), e.onclose = (t) => this.onClose(t), this.socket = e, this.registering = false, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? safeJsonParse(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const n3 = this.parseError(t), o = n3.message || n3.toString(), s2 = formatJsonRpcError(e, o);
    this.events.emit("payload", s2);
  }
  parseError(e, t = this.url) {
    return parseConnectionError(e, a2(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h5 && this.events.setMaxListeners(h5);
  }
  emitError(e) {
    const t = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${a2(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_lodash = __toESM(require_lodash());
var import_isomorphic_unfetch = __toESM(require_browser3());
function Hi(r2, e) {
  if (r2.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i3 = 0; i3 < t.length; i3++) t[i3] = 255;
  for (var s2 = 0; s2 < r2.length; s2++) {
    var n3 = r2.charAt(s2), o = n3.charCodeAt(0);
    if (t[o] !== 255) throw new TypeError(n3 + " is ambiguous");
    t[o] = s2;
  }
  var a3 = r2.length, h6 = r2.charAt(0), l3 = Math.log(a3) / Math.log(256), d2 = Math.log(256) / Math.log(a3);
  function p5(u4) {
    if (u4 instanceof Uint8Array || (ArrayBuffer.isView(u4) ? u4 = new Uint8Array(u4.buffer, u4.byteOffset, u4.byteLength) : Array.isArray(u4) && (u4 = Uint8Array.from(u4))), !(u4 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (u4.length === 0) return "";
    for (var m2 = 0, z4 = 0, I2 = 0, _5 = u4.length; I2 !== _5 && u4[I2] === 0; ) I2++, m2++;
    for (var S5 = (_5 - I2) * d2 + 1 >>> 0, f5 = new Uint8Array(S5); I2 !== _5; ) {
      for (var T2 = u4[I2], A2 = 0, C2 = S5 - 1; (T2 !== 0 || A2 < z4) && C2 !== -1; C2--, A2++) T2 += 256 * f5[C2] >>> 0, f5[C2] = T2 % a3 >>> 0, T2 = T2 / a3 >>> 0;
      if (T2 !== 0) throw new Error("Non-zero carry");
      z4 = A2, I2++;
    }
    for (var x4 = S5 - z4; x4 !== S5 && f5[x4] === 0; ) x4++;
    for (var q2 = h6.repeat(m2); x4 < S5; ++x4) q2 += r2.charAt(f5[x4]);
    return q2;
  }
  function y7(u4) {
    if (typeof u4 != "string") throw new TypeError("Expected String");
    if (u4.length === 0) return new Uint8Array();
    var m2 = 0;
    if (u4[m2] !== " ") {
      for (var z4 = 0, I2 = 0; u4[m2] === h6; ) z4++, m2++;
      for (var _5 = (u4.length - m2) * l3 + 1 >>> 0, S5 = new Uint8Array(_5); u4[m2]; ) {
        var f5 = t[u4.charCodeAt(m2)];
        if (f5 === 255) return;
        for (var T2 = 0, A2 = _5 - 1; (f5 !== 0 || T2 < I2) && A2 !== -1; A2--, T2++) f5 += a3 * S5[A2] >>> 0, S5[A2] = f5 % 256 >>> 0, f5 = f5 / 256 >>> 0;
        if (f5 !== 0) throw new Error("Non-zero carry");
        I2 = T2, m2++;
      }
      if (u4[m2] !== " ") {
        for (var C2 = _5 - I2; C2 !== _5 && S5[C2] === 0; ) C2++;
        for (var x4 = new Uint8Array(z4 + (_5 - C2)), q2 = z4; C2 !== _5; ) x4[q2++] = S5[C2++];
        return x4;
      }
    }
  }
  function M4(u4) {
    var m2 = y7(u4);
    if (m2) return m2;
    throw new Error(`Non-${e} character`);
  }
  return { encode: p5, decodeUnsafe: y7, decode: M4 };
}
var Ji = Hi;
var Xi = Ji;
var Ne2 = (r2) => {
  if (r2 instanceof Uint8Array && r2.constructor.name === "Uint8Array") return r2;
  if (r2 instanceof ArrayBuffer) return new Uint8Array(r2);
  if (ArrayBuffer.isView(r2)) return new Uint8Array(r2.buffer, r2.byteOffset, r2.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var Wi = (r2) => new TextEncoder().encode(r2);
var Qi = (r2) => new TextDecoder().decode(r2);
var Zi = class {
  constructor(e, t, i3) {
    this.name = e, this.prefix = t, this.baseEncode = i3;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var es = class {
  constructor(e, t, i3) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i3;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Ue2(this, e);
  }
};
var ts = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ue2(this, e);
  }
  decode(e) {
    const t = e[0], i3 = this.decoders[t];
    if (i3) return i3.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var Ue2 = (r2, e) => new ts({ ...r2.decoders || { [r2.prefix]: r2 }, ...e.decoders || { [e.prefix]: e } });
var is = class {
  constructor(e, t, i3, s2) {
    this.name = e, this.prefix = t, this.baseEncode = i3, this.baseDecode = s2, this.encoder = new Zi(e, t, i3), this.decoder = new es(e, t, s2);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
var W2 = ({ name: r2, prefix: e, encode: t, decode: i3 }) => new is(r2, e, t, i3);
var B2 = ({ prefix: r2, name: e, alphabet: t }) => {
  const { encode: i3, decode: s2 } = Xi(t, e);
  return W2({ prefix: r2, name: e, encode: i3, decode: (n3) => Ne2(s2(n3)) });
};
var ss = (r2, e, t, i3) => {
  const s2 = {};
  for (let d2 = 0; d2 < e.length; ++d2) s2[e[d2]] = d2;
  let n3 = r2.length;
  for (; r2[n3 - 1] === "="; ) --n3;
  const o = new Uint8Array(n3 * t / 8 | 0);
  let a3 = 0, h6 = 0, l3 = 0;
  for (let d2 = 0; d2 < n3; ++d2) {
    const p5 = s2[r2[d2]];
    if (p5 === void 0) throw new SyntaxError(`Non-${i3} character`);
    h6 = h6 << t | p5, a3 += t, a3 >= 8 && (a3 -= 8, o[l3++] = 255 & h6 >> a3);
  }
  if (a3 >= t || 255 & h6 << 8 - a3) throw new SyntaxError("Unexpected end of data");
  return o;
};
var rs = (r2, e, t) => {
  const i3 = e[e.length - 1] === "=", s2 = (1 << t) - 1;
  let n3 = "", o = 0, a3 = 0;
  for (let h6 = 0; h6 < r2.length; ++h6) for (a3 = a3 << 8 | r2[h6], o += 8; o > t; ) o -= t, n3 += e[s2 & a3 >> o];
  if (o && (n3 += e[s2 & a3 << t - o]), i3) for (; n3.length * t & 7; ) n3 += "=";
  return n3;
};
var g3 = ({ name: r2, prefix: e, bitsPerChar: t, alphabet: i3 }) => W2({ prefix: e, name: r2, encode(s2) {
  return rs(s2, i3, t);
}, decode(s2) {
  return ss(s2, i3, t, r2);
} });
var ns = W2({ prefix: "\0", name: "identity", encode: (r2) => Qi(r2), decode: (r2) => Wi(r2) });
var os = Object.freeze({ __proto__: null, identity: ns });
var as = g3({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var hs = Object.freeze({ __proto__: null, base2: as });
var cs = g3({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var us = Object.freeze({ __proto__: null, base8: cs });
var ls = B2({ prefix: "9", name: "base10", alphabet: "0123456789" });
var ds = Object.freeze({ __proto__: null, base10: ls });
var gs = g3({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var ps = g3({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Ds = Object.freeze({ __proto__: null, base16: gs, base16upper: ps });
var ys = g3({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var ms = g3({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var bs = g3({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var fs = g3({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var Es = g3({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var ws = g3({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var vs = g3({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var Is = g3({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var Cs = g3({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Rs = Object.freeze({ __proto__: null, base32: ys, base32upper: ms, base32pad: bs, base32padupper: fs, base32hex: Es, base32hexupper: ws, base32hexpad: vs, base32hexpadupper: Is, base32z: Cs });
var _s = B2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var Ss = B2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Ts = Object.freeze({ __proto__: null, base36: _s, base36upper: Ss });
var Ps = B2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var xs = B2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Os = Object.freeze({ __proto__: null, base58btc: Ps, base58flickr: xs });
var As = g3({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var zs = g3({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var Ns = g3({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var Us = g3({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Ls = Object.freeze({ __proto__: null, base64: As, base64pad: zs, base64url: Ns, base64urlpad: Us });
var Le2 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var Fs = Le2.reduce((r2, e, t) => (r2[t] = e, r2), []);
var $s = Le2.reduce((r2, e, t) => (r2[e.codePointAt(0)] = t, r2), []);
function Ms(r2) {
  return r2.reduce((e, t) => (e += Fs[t], e), "");
}
function ks(r2) {
  const e = [];
  for (const t of r2) {
    const i3 = $s[t.codePointAt(0)];
    if (i3 === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i3);
  }
  return new Uint8Array(e);
}
var Ks = W2({ prefix: "🚀", name: "base256emoji", encode: Ms, decode: ks });
var Bs = Object.freeze({ __proto__: null, base256emoji: Ks });
var Vs = $e2;
var Fe = 128;
var js = 127;
var qs = ~js;
var Gs = Math.pow(2, 31);
function $e2(r2, e, t) {
  e = e || [], t = t || 0;
  for (var i3 = t; r2 >= Gs; ) e[t++] = r2 & 255 | Fe, r2 /= 128;
  for (; r2 & qs; ) e[t++] = r2 & 255 | Fe, r2 >>>= 7;
  return e[t] = r2 | 0, $e2.bytes = t - i3 + 1, e;
}
var Ys = he2;
var Hs = 128;
var Me2 = 127;
function he2(r2, i3) {
  var t = 0, i3 = i3 || 0, s2 = 0, n3 = i3, o, a3 = r2.length;
  do {
    if (n3 >= a3) throw he2.bytes = 0, new RangeError("Could not decode varint");
    o = r2[n3++], t += s2 < 28 ? (o & Me2) << s2 : (o & Me2) * Math.pow(2, s2), s2 += 7;
  } while (o >= Hs);
  return he2.bytes = n3 - i3, t;
}
var Js = Math.pow(2, 7);
var Xs = Math.pow(2, 14);
var Ws = Math.pow(2, 21);
var Qs = Math.pow(2, 28);
var Zs = Math.pow(2, 35);
var er3 = Math.pow(2, 42);
var tr3 = Math.pow(2, 49);
var ir2 = Math.pow(2, 56);
var sr2 = Math.pow(2, 63);
var rr2 = function(r2) {
  return r2 < Js ? 1 : r2 < Xs ? 2 : r2 < Ws ? 3 : r2 < Qs ? 4 : r2 < Zs ? 5 : r2 < er3 ? 6 : r2 < tr3 ? 7 : r2 < ir2 ? 8 : r2 < sr2 ? 9 : 10;
};
var nr3 = { encode: Vs, decode: Ys, encodingLength: rr2 };
var ke2 = nr3;
var Ke2 = (r2, e, t = 0) => (ke2.encode(r2, e, t), e);
var Be2 = (r2) => ke2.encodingLength(r2);
var ce = (r2, e) => {
  const t = e.byteLength, i3 = Be2(r2), s2 = i3 + Be2(t), n3 = new Uint8Array(s2 + t);
  return Ke2(r2, n3, 0), Ke2(t, n3, i3), n3.set(e, s2), new or2(r2, t, e, n3);
};
var or2 = class {
  constructor(e, t, i3, s2) {
    this.code = e, this.size = t, this.digest = i3, this.bytes = s2;
  }
};
var Ve2 = ({ name: r2, code: e, encode: t }) => new ar2(r2, e, t);
var ar2 = class {
  constructor(e, t, i3) {
    this.name = e, this.code = t, this.encode = i3;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? ce(this.code, t) : t.then((i3) => ce(this.code, i3));
    } else throw Error("Unknown type, must be binary type");
  }
};
var je2 = (r2) => async (e) => new Uint8Array(await crypto.subtle.digest(r2, e));
var hr2 = Ve2({ name: "sha2-256", code: 18, encode: je2("SHA-256") });
var cr2 = Ve2({ name: "sha2-512", code: 19, encode: je2("SHA-512") });
var ur2 = Object.freeze({ __proto__: null, sha256: hr2, sha512: cr2 });
var qe2 = 0;
var lr2 = "identity";
var Ge2 = Ne2;
var dr2 = (r2) => ce(qe2, Ge2(r2));
var gr2 = { code: qe2, name: lr2, encode: Ge2, digest: dr2 };
var pr2 = Object.freeze({ __proto__: null, identity: gr2 });
new TextEncoder(), new TextDecoder();
var Ye2 = { ...os, ...hs, ...us, ...ds, ...Ds, ...Rs, ...Ts, ...Os, ...Ls, ...Bs };
({ ...ur2, ...pr2 });
function He2(r2) {
  return globalThis.Buffer != null ? new Uint8Array(r2.buffer, r2.byteOffset, r2.byteLength) : r2;
}
function Dr2(r2 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? He2(globalThis.Buffer.allocUnsafe(r2)) : new Uint8Array(r2);
}
function Je2(r2, e, t, i3) {
  return { name: r2, prefix: e, encoder: { name: r2, prefix: e, encode: t }, decoder: { decode: i3 } };
}
var Xe2 = Je2("utf8", "u", (r2) => "u" + new TextDecoder("utf8").decode(r2), (r2) => new TextEncoder().encode(r2.substring(1)));
var ue = Je2("ascii", "a", (r2) => {
  let e = "a";
  for (let t = 0; t < r2.length; t++) e += String.fromCharCode(r2[t]);
  return e;
}, (r2) => {
  r2 = r2.substring(1);
  const e = Dr2(r2.length);
  for (let t = 0; t < r2.length; t++) e[t] = r2.charCodeAt(t);
  return e;
});
var yr2 = { utf8: Xe2, "utf-8": Xe2, hex: Ye2.base16, latin1: ue, ascii: ue, binary: ue, ...Ye2 };
function mr2(r2, e = "utf8") {
  const t = yr2[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? He2(globalThis.Buffer.from(r2, "utf-8")) : t.decoder.decode(`${t.prefix}${r2}`);
}
var le2 = "wc";
var We2 = 2;
var Q2 = "core";
var O2 = `${le2}@2:${Q2}:`;
var Qe2 = { name: Q2, logger: "error" };
var Ze2 = { database: ":memory:" };
var et = "crypto";
var de2 = "client_ed25519_seed";
var tt = import_time2.ONE_DAY;
var it2 = "keychain";
var st = "0.3";
var rt3 = "messages";
var nt2 = "0.3";
var ot2 = import_time2.SIX_HOURS;
var at2 = "publisher";
var ht3 = "irn";
var ct2 = "error";
var ge2 = "wss://relay.walletconnect.com";
var pe2 = "wss://relay.walletconnect.org";
var ut3 = "relayer";
var D3 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
var lt2 = "_subscription";
var P2 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
var dt3 = import_time2.ONE_SECOND;
var gt3 = "2.11.0";
var pt2 = 1e4;
var Dt3 = "0.3";
var yt3 = "WALLETCONNECT_CLIENT_ID";
var w5 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
var mt2 = "subscription";
var bt2 = "0.3";
var ft3 = import_time2.FIVE_SECONDS * 1e3;
var Et3 = "pairing";
var wt3 = "0.3";
var F = { wc_pairingDelete: { req: { ttl: import_time2.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: import_time2.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: import_time2.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: import_time2.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: import_time2.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: import_time2.ONE_DAY, prompt: false, tag: 0 } } };
var V = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" };
var R = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
var vt3 = "history";
var It3 = "0.3";
var Ct = "expirer";
var v3 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
var Rt2 = "0.3";
var Z = "verify-api";
var $2 = "https://verify.walletconnect.com";
var ee2 = "https://verify.walletconnect.org";
var _t2 = [$2, ee2];
var St2 = "echo";
var Tt2 = "https://echo.walletconnect.com";
var Pt2 = class {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = it2, this.version = st, this.initialized = false, this.storagePrefix = O2, this.init = async () => {
      if (!this.initialized) {
        const i3 = await this.getKeyChain();
        typeof i3 < "u" && (this.keychain = i3), this.initialized = true;
      }
    }, this.has = (i3) => (this.isInitialized(), this.keychain.has(i3)), this.set = async (i3, s2) => {
      this.isInitialized(), this.keychain.set(i3, s2), await this.persist();
    }, this.get = (i3) => {
      this.isInitialized();
      const s2 = this.keychain.get(i3);
      if (typeof s2 > "u") {
        const { message: n3 } = N("NO_MATCHING_KEY", `${this.name}: ${i3}`);
        throw new Error(n3);
      }
      return s2;
    }, this.del = async (i3) => {
      this.isInitialized(), this.keychain.delete(i3), await this.persist();
    }, this.core = e, this.logger = E2(t, this.name);
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, rt(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ot(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var xt3 = class {
  constructor(e, t, i3) {
    this.core = e, this.logger = t, this.name = et, this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (s2) => (this.isInitialized(), this.keychain.has(s2)), this.getClientId = async () => {
      this.isInitialized();
      const s2 = await this.getClientSeed(), n3 = Po(s2);
      return Qe(n3.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s2 = kn();
      return this.setPrivateKey(s2.publicKey, s2.privateKey);
    }, this.signJWT = async (s2) => {
      this.isInitialized();
      const n3 = await this.getClientSeed(), o = Po(n3), a3 = Vn(), h6 = tt;
      return await Qo(a3, s2, h6, o);
    }, this.generateSharedKey = (s2, n3, o) => {
      this.isInitialized();
      const a3 = this.getPrivateKey(s2), h6 = Mn(a3, n3);
      return this.setSymKey(h6, o);
    }, this.setSymKey = async (s2, n3) => {
      this.isInitialized();
      const o = n3 || Kn(s2);
      return await this.keychain.set(o, s2), o;
    }, this.deleteKeyPair = async (s2) => {
      this.isInitialized(), await this.keychain.del(s2);
    }, this.deleteSymKey = async (s2) => {
      this.isInitialized(), await this.keychain.del(s2);
    }, this.encode = async (s2, n3, o) => {
      this.isInitialized();
      const a3 = Ae(o), h6 = safeJsonStringify(n3);
      if (qn(a3)) {
        const y7 = a3.senderPublicKey, M4 = a3.receiverPublicKey;
        s2 = await this.generateSharedKey(y7, M4);
      }
      const l3 = this.getSymKey(s2), { type: d2, senderPublicKey: p5 } = a3;
      return xn({ type: d2, symKey: l3, message: h6, senderPublicKey: p5 });
    }, this.decode = async (s2, n3, o) => {
      this.isInitialized();
      const a3 = Hn(n3, o);
      if (qn(a3)) {
        const h6 = a3.receiverPublicKey, l3 = a3.senderPublicKey;
        s2 = await this.generateSharedKey(h6, l3);
      }
      try {
        const h6 = this.getSymKey(s2), l3 = Fn({ symKey: h6, encoded: n3 });
        return safeJsonParse(l3);
      } catch (h6) {
        this.logger.error(`Failed to decode message from topic: '${s2}', clientId: '${await this.getClientId()}'`), this.logger.error(h6);
      }
    }, this.getPayloadType = (s2) => {
      const n3 = ee(s2);
      return $(n3.type);
    }, this.getPayloadSenderPublicKey = (s2) => {
      const n3 = ee(s2);
      return n3.senderPublicKey ? toString(n3.senderPublicKey, p) : void 0;
    }, this.core = e, this.logger = E2(t, this.name), this.keychain = i3 || new Pt2(this.core, this.logger);
  }
  get context() {
    return y2(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(de2);
    } catch {
      e = Vn(), await this.keychain.set(de2, e);
    }
    return mr2(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Ot2 = class extends a {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = rt3, this.version = nt2, this.initialized = false, this.storagePrefix = O2, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i3 = await this.getRelayerMessages();
          typeof i3 < "u" && (this.messages = i3), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i3) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i3);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (i3, s2) => {
      this.isInitialized();
      const n3 = Ln(s2);
      let o = this.messages.get(i3);
      return typeof o > "u" && (o = {}), typeof o[n3] < "u" || (o[n3] = s2, this.messages.set(i3, o), await this.persist()), n3;
    }, this.get = (i3) => {
      this.isInitialized();
      let s2 = this.messages.get(i3);
      return typeof s2 > "u" && (s2 = {}), s2;
    }, this.has = (i3, s2) => {
      this.isInitialized();
      const n3 = this.get(i3), o = Ln(s2);
      return typeof n3[o] < "u";
    }, this.del = async (i3) => {
      this.isInitialized(), this.messages.delete(i3), await this.persist();
    }, this.logger = E2(e, this.name), this.core = t;
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, rt(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ot(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var vr2 = class extends u {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new import_events5.EventEmitter(), this.name = at2, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = (0, import_time2.toMiliseconds)(import_time2.TEN_SECONDS), this.needsTransportRestart = false, this.publish = async (i3, s2, n3) => {
      var o;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i3, message: s2, opts: n3 } });
      try {
        const a3 = (n3 == null ? void 0 : n3.ttl) || ot2, h6 = vt(n3), l3 = (n3 == null ? void 0 : n3.prompt) || false, d2 = (n3 == null ? void 0 : n3.tag) || 0, p5 = (n3 == null ? void 0 : n3.id) || getBigIntRpcId().toString(), y7 = { topic: i3, message: s2, opts: { ttl: a3, relay: h6, prompt: l3, tag: d2, id: p5 } }, M4 = setTimeout(() => this.queue.set(p5, y7), this.publishTimeout);
        try {
          await await ut(this.rpcPublish(i3, s2, a3, h6, l3, d2, p5), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(p5), this.relayer.events.emit(D3.publish, y7);
        } catch (u4) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = true, (o = n3 == null ? void 0 : n3.internal) != null && o.throwOnFailedPublish) throw this.removeRequestFromQueue(p5), u4;
          return;
        } finally {
          clearTimeout(M4);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i3, message: s2, opts: n3 } });
      } catch (a3) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a3), a3;
      }
    }, this.on = (i3, s2) => {
      this.events.on(i3, s2);
    }, this.once = (i3, s2) => {
      this.events.once(i3, s2);
    }, this.off = (i3, s2) => {
      this.events.off(i3, s2);
    }, this.removeListener = (i3, s2) => {
      this.events.removeListener(i3, s2);
    }, this.relayer = e, this.logger = E2(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y2(this.logger);
  }
  rpcPublish(e, t, i3, s2, n3, o, a3) {
    var h6, l3, d2, p5;
    const y7 = { method: Et(s2.protocol).publish, params: { topic: e, message: t, ttl: i3, prompt: n3, tag: o }, id: a3 };
    return w((h6 = y7.params) == null ? void 0 : h6.prompt) && ((l3 = y7.params) == null || delete l3.prompt), w((d2 = y7.params) == null ? void 0 : d2.tag) && ((p5 = y7.params) == null || delete p5.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y7 }), this.relayer.request(y7);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: i3, opts: s2 } = e;
      await this.publish(t, i3, s2);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(import_heartbeat.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(D3.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(D3.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
};
var Ir2 = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const i3 = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i3, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e)) return;
      const i3 = this.get(e);
      if (!this.exists(e, t)) return;
      const s2 = i3.filter((n3) => n3 !== t);
      if (!s2.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s2);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var Cr2 = Object.defineProperty;
var Rr2 = Object.defineProperties;
var _r2 = Object.getOwnPropertyDescriptors;
var At = Object.getOwnPropertySymbols;
var Sr2 = Object.prototype.hasOwnProperty;
var Tr2 = Object.prototype.propertyIsEnumerable;
var zt3 = (r2, e, t) => e in r2 ? Cr2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var j3 = (r2, e) => {
  for (var t in e || (e = {})) Sr2.call(e, t) && zt3(r2, t, e[t]);
  if (At) for (var t of At(e)) Tr2.call(e, t) && zt3(r2, t, e[t]);
  return r2;
};
var De2 = (r2, e) => Rr2(r2, _r2(e));
var Nt2 = class extends d {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Ir2(), this.events = new import_events5.EventEmitter(), this.name = mt2, this.version = bt2, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = O2, this.subscribeTimeout = 1e4, this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i3, s2) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i3, opts: s2 } });
      try {
        const n3 = vt(s2), o = { topic: i3, relay: n3 };
        this.pending.set(i3, o);
        const a3 = await this.rpcSubscribe(i3, n3);
        return this.onSubscribe(a3, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i3, opts: s2 } }), a3;
      } catch (n3) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n3), n3;
      }
    }, this.unsubscribe = async (i3, s2) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s2 == null ? void 0 : s2.id) < "u" ? await this.unsubscribeById(i3, s2.id, s2) : await this.unsubscribeByTopic(i3, s2);
    }, this.isSubscribed = async (i3) => this.topics.includes(i3) ? true : await new Promise((s2, n3) => {
      const o = new import_time2.Watch();
      o.start(this.pendingSubscriptionWatchLabel);
      const a3 = setInterval(() => {
        !this.pending.has(i3) && this.topics.includes(i3) && (clearInterval(a3), o.stop(this.pendingSubscriptionWatchLabel), s2(true)), o.elapsed(this.pendingSubscriptionWatchLabel) >= ft3 && (clearInterval(a3), o.stop(this.pendingSubscriptionWatchLabel), n3(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => false), this.on = (i3, s2) => {
      this.events.on(i3, s2);
    }, this.once = (i3, s2) => {
      this.events.once(i3, s2);
    }, this.off = (i3, s2) => {
      this.events.off(i3, s2);
    }, this.removeListener = (i3, s2) => {
      this.events.removeListener(i3, s2);
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e, this.logger = E2(t, this.name), this.clientId = "";
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i3 = false;
    try {
      i3 = this.getSubscription(e).topic === t;
    } catch {
    }
    return i3;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i3 = this.topicMap.get(e);
    await Promise.all(i3.map(async (s2) => await this.unsubscribeById(e, s2, t)));
  }
  async unsubscribeById(e, t, i3) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i3 } });
    try {
      const s2 = vt(i3);
      await this.rpcUnsubscribe(e, t, s2);
      const n3 = U("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, n3), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i3 } });
    } catch (s2) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s2), s2;
    }
  }
  async rpcSubscribe(e, t) {
    const i3 = { method: Et(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i3 });
    try {
      await await ut(this.relayer.request(i3), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(D3.connection_stalled);
    }
    return Ln(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const t = e[0].relay, i3 = { method: Et(t.protocol).batchSubscribe, params: { topics: e.map((s2) => s2.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i3 });
    try {
      return await await ut(this.relayer.request(i3), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(D3.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, i3) {
    const s2 = { method: Et(i3.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s2 }), this.relayer.request(s2);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, De2(j3({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, j3({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, i3) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i3), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, j3({}, t)), this.topicMap.set(t.topic, e), this.events.emit(w5.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i3 } = N("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i3);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const i3 = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i3.topic, e), this.events.emit(w5.deleted, De2(j3({}, i3), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(w5.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const i3 = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i3);
      }
    }
    this.events.emit(w5.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: t } = N("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length) return;
    const t = await this.rpcBatchSubscribe(e);
    k(t) && this.onBatchSubscribe(t.map((i3, s2) => De2(j3({}, e[s2]), { id: i3 })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(import_heartbeat.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(D3.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(D3.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(w5.created, async (e) => {
      const t = w5.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(w5.deleted, async (e) => {
      const t = w5.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
};
var Pr2 = Object.defineProperty;
var Ut2 = Object.getOwnPropertySymbols;
var xr2 = Object.prototype.hasOwnProperty;
var Or2 = Object.prototype.propertyIsEnumerable;
var Lt3 = (r2, e, t) => e in r2 ? Pr2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var Ar2 = (r2, e) => {
  for (var t in e || (e = {})) xr2.call(e, t) && Lt3(r2, t, e[t]);
  if (Ut2) for (var t of Ut2(e)) Or2.call(e, t) && Lt3(r2, t, e[t]);
  return r2;
};
var Ft3 = class extends g2 {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new import_events5.EventEmitter(), this.name = ut3, this.transportExplicitlyClosed = false, this.initialized = false, this.connectionAttemptInProgress = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = false, this.request = async (t) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(t);
      } catch (i3) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i3), i3;
      }
    }, this.onPayloadHandler = (t) => {
      this.onProviderPayload(t);
    }, this.onConnectHandler = () => {
      this.events.emit(D3.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t) => {
      this.logger.error(t), this.events.emit(D3.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(P2.payload, this.onPayloadHandler), this.provider.on(P2.connect, this.onConnectHandler), this.provider.on(P2.disconnect, this.onDisconnectHandler), this.provider.on(P2.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? E2(e.logger, this.name) : (0, import_pino2.default)(k3({ level: e.logger || ct2 })), this.messages = new Ot2(this.logger, e.core), this.subscriber = new Nt2(this, this.logger), this.publisher = new vr2(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || ge2, this.projectId = e.projectId, this.bundleId = Jn(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${pe2}...`), await this.restartTransport(pe2);
    }
    this.initialized = true, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = false);
    }, pt2);
  }
  get context() {
    return y2(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, i3) {
    this.isInitialized(), await this.publisher.publish(e, t, i3), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now() });
  }
  async subscribe(e, t) {
    var i3;
    this.isInitialized();
    let s2 = ((i3 = this.subscriber.topicMap.get(e)) == null ? void 0 : i3[0]) || "";
    if (s2) return s2;
    let n3;
    const o = (a3) => {
      a3.topic === e && (this.subscriber.off(w5.created, o), n3());
    };
    return await Promise.all([new Promise((a3) => {
      n3 = a3, this.subscriber.on(w5.created, o);
    }), new Promise(async (a3) => {
      s2 = await this.subscriber.subscribe(e, t), a3();
    })]), s2;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, this.hasExperiencedNetworkDisruption && this.connected ? await ut(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = false, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = true;
      try {
        await Promise.all([new Promise((t) => {
          if (!this.initialized) return t();
          this.subscriber.once(w5.resubscribed, () => {
            t();
          });
        }), new Promise(async (t, i3) => {
          try {
            await ut(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (s2) {
            i3(s2);
            return;
          }
          t();
        })]);
      } catch (t) {
        this.logger.error(t);
        const i3 = t;
        if (!this.isConnectionStalled(i3.message)) throw t;
        this.provider.events.emit(P2.disconnect);
      } finally {
        this.connectionAttemptInProgress = false, this.hasExperiencedNetworkDisruption = false;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await er()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new JsonRpcProvider(new f3(Xn({ sdkVersion: gt3, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: true, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: i3 } = e;
    await this.messages.set(t, i3);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i3 } = e;
    if (!i3 || i3.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${i3}`), true;
    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), true;
    const s2 = this.messages.has(t, i3);
    return s2 && this.logger.debug(`Ignoring duplicate message: ${i3}`), s2;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), isJsonRpcRequest(e)) {
      if (!e.method.endsWith(lt2)) return;
      const t = e.params, { topic: i3, message: s2, publishedAt: n3 } = t.data, o = { topic: i3, message: s2, publishedAt: n3 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ar2({ type: "event", event: t.id }, o)), this.events.emit(t.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o);
    } else isJsonRpcResponse(e) && this.events.emit(D3.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(D3.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = formatJsonRpcResult(e.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(P2.payload, this.onPayloadHandler), this.provider.off(P2.connect, this.onConnectHandler), this.provider.off(P2.disconnect, this.onDisconnectHandler), this.provider.off(P2.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(D3.connection_stalled, () => {
      this.restartTransport().catch((t) => this.logger.error(t));
    });
    let e = await er();
    nr(async (t) => {
      this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch((i3) => this.logger.error(i3)) : (this.hasExperiencedNetworkDisruption = true, await this.transportClose().catch((i3) => this.logger.error(i3))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(D3.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, (0, import_time2.toMiliseconds)(dt3)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress) return await new Promise((e) => {
        const t = setInterval(() => {
          this.connected && (clearInterval(t), e());
        }, this.connectionStatusPollingInterval);
      });
      await this.restartTransport();
    }
  }
};
var zr2 = Object.defineProperty;
var $t2 = Object.getOwnPropertySymbols;
var Nr2 = Object.prototype.hasOwnProperty;
var Ur2 = Object.prototype.propertyIsEnumerable;
var Mt3 = (r2, e, t) => e in r2 ? zr2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var kt3 = (r2, e) => {
  for (var t in e || (e = {})) Nr2.call(e, t) && Mt3(r2, t, e[t]);
  if ($t2) for (var t of $t2(e)) Ur2.call(e, t) && Mt3(r2, t, e[t]);
  return r2;
};
var Kt3 = class extends p3 {
  constructor(e, t, i3, s2 = O2, n3 = void 0) {
    super(e, t, i3, s2), this.core = e, this.logger = t, this.name = i3, this.map = /* @__PURE__ */ new Map(), this.version = Dt3, this.cached = [], this.initialized = false, this.storagePrefix = O2, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !w(o) ? this.map.set(this.getKey(o), o) : Vt(o) ? this.map.set(o.id, o) : Mt(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (o, a3) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a3) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a3 }), this.map.set(o, a3), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((a3) => Object.keys(o).every((h6) => (0, import_lodash.default)(a3[h6], o[h6]))) : this.values), this.update = async (o, a3) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a3 });
      const h6 = kt3(kt3({}, this.getData(o)), a3);
      this.map.set(o, h6), await this.persist();
    }, this.delete = async (o, a3) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a3 }), this.map.delete(o), await this.persist());
    }, this.logger = E2(t, this.name), this.storagePrefix = s2, this.getKey = n3;
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: i3 } = N("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i3), new Error(i3);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: t } = N("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Bt3 = class {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = Et3, this.version = wt3, this.events = new import_events5.default(), this.initialized = false, this.storagePrefix = O2, this.ignoredPayloadTypes = [_], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i3 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i3])];
    }, this.create = async () => {
      this.isInitialized();
      const i3 = Vn(), s2 = await this.core.crypto.setSymKey(i3), n3 = pt(import_time2.FIVE_MINUTES), o = { protocol: ht3 }, a3 = { topic: s2, expiry: n3, relay: o, active: false }, h6 = It({ protocol: this.core.protocol, version: this.core.version, topic: s2, symKey: i3, relay: o });
      return await this.pairings.set(s2, a3), await this.core.relayer.subscribe(s2), this.core.expirer.set(s2, n3), { topic: s2, uri: h6 };
    }, this.pair = async (i3) => {
      this.isInitialized(), this.isValidPair(i3);
      const { topic: s2, symKey: n3, relay: o } = wt(i3.uri);
      let a3;
      if (this.pairings.keys.includes(s2) && (a3 = this.pairings.get(s2), a3.active)) throw new Error(`Pairing already exists: ${s2}. Please try again with a new connection URI.`);
      const h6 = pt(import_time2.FIVE_MINUTES), l3 = { topic: s2, relay: o, expiry: h6, active: false };
      return await this.pairings.set(s2, l3), this.core.expirer.set(s2, h6), i3.activatePairing && await this.activate({ topic: s2 }), this.events.emit(V.create, l3), this.core.crypto.keychain.has(s2) || (await this.core.crypto.setSymKey(n3, s2), await this.core.relayer.subscribe(s2, { relay: o })), l3;
    }, this.activate = async ({ topic: i3 }) => {
      this.isInitialized();
      const s2 = pt(import_time2.THIRTY_DAYS);
      await this.pairings.update(i3, { active: true, expiry: s2 }), this.core.expirer.set(i3, s2);
    }, this.ping = async (i3) => {
      this.isInitialized(), await this.isValidPing(i3);
      const { topic: s2 } = i3;
      if (this.pairings.keys.includes(s2)) {
        const n3 = await this.sendRequest(s2, "wc_pairingPing", {}), { done: o, resolve: a3, reject: h6 } = at();
        this.events.once(yt("pairing_ping", n3), ({ error: l3 }) => {
          l3 ? h6(l3) : a3();
        }), await o();
      }
    }, this.updateExpiry = async ({ topic: i3, expiry: s2 }) => {
      this.isInitialized(), await this.pairings.update(i3, { expiry: s2 });
    }, this.updateMetadata = async ({ topic: i3, metadata: s2 }) => {
      this.isInitialized(), await this.pairings.update(i3, { peerMetadata: s2 });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i3) => {
      this.isInitialized(), await this.isValidDisconnect(i3);
      const { topic: s2 } = i3;
      this.pairings.keys.includes(s2) && (await this.sendRequest(s2, "wc_pairingDelete", U("USER_DISCONNECTED")), await this.deletePairing(s2));
    }, this.sendRequest = async (i3, s2, n3) => {
      const o = formatJsonRpcRequest(s2, n3), a3 = await this.core.crypto.encode(i3, o), h6 = F[s2].req;
      return this.core.history.set(i3, o), this.core.relayer.publish(i3, a3, h6), o.id;
    }, this.sendResult = async (i3, s2, n3) => {
      const o = formatJsonRpcResult(i3, n3), a3 = await this.core.crypto.encode(s2, o), h6 = await this.core.history.get(s2, i3), l3 = F[h6.request.method].res;
      await this.core.relayer.publish(s2, a3, l3), await this.core.history.resolve(o);
    }, this.sendError = async (i3, s2, n3) => {
      const o = formatJsonRpcError(i3, n3), a3 = await this.core.crypto.encode(s2, o), h6 = await this.core.history.get(s2, i3), l3 = F[h6.request.method] ? F[h6.request.method].res : F.unregistered_method.res;
      await this.core.relayer.publish(s2, a3, l3), await this.core.history.resolve(o);
    }, this.deletePairing = async (i3, s2) => {
      await this.core.relayer.unsubscribe(i3), await Promise.all([this.pairings.delete(i3, U("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i3), s2 ? Promise.resolve() : this.core.expirer.del(i3)]);
    }, this.cleanup = async () => {
      const i3 = this.pairings.getAll().filter((s2) => mt(s2.expiry));
      await Promise.all(i3.map((s2) => this.deletePairing(s2.topic)));
    }, this.onRelayEventRequest = (i3) => {
      const { topic: s2, payload: n3 } = i3;
      switch (n3.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s2, n3);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s2, n3);
        default:
          return this.onUnknownRpcMethodRequest(s2, n3);
      }
    }, this.onRelayEventResponse = async (i3) => {
      const { topic: s2, payload: n3 } = i3, o = (await this.core.history.get(s2, n3.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s2, n3);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }, this.onPairingPingRequest = async (i3, s2) => {
      const { id: n3 } = s2;
      try {
        this.isValidPing({ topic: i3 }), await this.sendResult(n3, i3, true), this.events.emit(V.ping, { id: n3, topic: i3 });
      } catch (o) {
        await this.sendError(n3, i3, o), this.logger.error(o);
      }
    }, this.onPairingPingResponse = (i3, s2) => {
      const { id: n3 } = s2;
      setTimeout(() => {
        isJsonRpcResult(s2) ? this.events.emit(yt("pairing_ping", n3), {}) : isJsonRpcError(s2) && this.events.emit(yt("pairing_ping", n3), { error: s2.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i3, s2) => {
      const { id: n3 } = s2;
      try {
        this.isValidDisconnect({ topic: i3 }), await this.deletePairing(i3), this.events.emit(V.delete, { id: n3, topic: i3 });
      } catch (o) {
        await this.sendError(n3, i3, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodRequest = async (i3, s2) => {
      const { id: n3, method: o } = s2;
      try {
        if (this.registeredMethods.includes(o)) return;
        const a3 = U("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(n3, i3, a3), this.logger.error(a3);
      } catch (a3) {
        await this.sendError(n3, i3, a3), this.logger.error(a3);
      }
    }, this.onUnknownRpcMethodResponse = (i3) => {
      this.registeredMethods.includes(i3) || this.logger.error(U("WC_METHOD_UNSUPPORTED", i3));
    }, this.isValidPair = (i3) => {
      var s2;
      if (!Ht(i3)) {
        const { message: o } = N("MISSING_OR_INVALID", `pair() params: ${i3}`);
        throw new Error(o);
      }
      if (!kt(i3.uri)) {
        const { message: o } = N("MISSING_OR_INVALID", `pair() uri: ${i3.uri}`);
        throw new Error(o);
      }
      const n3 = wt(i3.uri);
      if (!((s2 = n3 == null ? void 0 : n3.relay) != null && s2.protocol)) {
        const { message: o } = N("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(o);
      }
      if (!(n3 != null && n3.symKey)) {
        const { message: o } = N("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(o);
      }
    }, this.isValidPing = async (i3) => {
      if (!Ht(i3)) {
        const { message: n3 } = N("MISSING_OR_INVALID", `ping() params: ${i3}`);
        throw new Error(n3);
      }
      const { topic: s2 } = i3;
      await this.isValidPairingTopic(s2);
    }, this.isValidDisconnect = async (i3) => {
      if (!Ht(i3)) {
        const { message: n3 } = N("MISSING_OR_INVALID", `disconnect() params: ${i3}`);
        throw new Error(n3);
      }
      const { topic: s2 } = i3;
      await this.isValidPairingTopic(s2);
    }, this.isValidPairingTopic = async (i3) => {
      if (!h(i3, false)) {
        const { message: s2 } = N("MISSING_OR_INVALID", `pairing topic should be a string: ${i3}`);
        throw new Error(s2);
      }
      if (!this.pairings.keys.includes(i3)) {
        const { message: s2 } = N("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i3}`);
        throw new Error(s2);
      }
      if (mt(this.pairings.get(i3).expiry)) {
        await this.deletePairing(i3);
        const { message: s2 } = N("EXPIRED", `pairing topic: ${i3}`);
        throw new Error(s2);
      }
    }, this.core = e, this.logger = E2(t, this.name), this.pairings = new Kt3(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y2(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(D3.message, async (e) => {
      const { topic: t, message: i3 } = e;
      if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i3))) return;
      const s2 = await this.core.crypto.decode(t, i3);
      try {
        isJsonRpcRequest(s2) ? (this.core.history.set(t, s2), this.onRelayEventRequest({ topic: t, payload: s2 })) : isJsonRpcResponse(s2) && (await this.core.history.resolve(s2), await this.onRelayEventResponse({ topic: t, payload: s2 }), this.core.history.delete(t, s2.id));
      } catch (n3) {
        this.logger.error(n3);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(v3.expired, async (e) => {
      const { topic: t } = ft(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(V.expire, { topic: t }));
    });
  }
};
var Vt3 = class extends h4 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new import_events5.EventEmitter(), this.name = vt3, this.version = It3, this.cached = [], this.initialized = false, this.storagePrefix = O2, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i3) => this.records.set(i3.id, i3)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (i3, s2, n3) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i3, request: s2, chainId: n3 }), this.records.has(s2.id)) return;
      const o = { id: s2.id, topic: i3, request: { method: s2.method, params: s2.params || null }, chainId: n3, expiry: pt(import_time2.THIRTY_DAYS) };
      this.records.set(o.id, o), this.events.emit(R.created, o);
    }, this.resolve = async (i3) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i3 }), !this.records.has(i3.id)) return;
      const s2 = await this.getRecord(i3.id);
      typeof s2.response > "u" && (s2.response = isJsonRpcError(i3) ? { error: i3.error } : { result: i3.result }, this.records.set(s2.id, s2), this.events.emit(R.updated, s2));
    }, this.get = async (i3, s2) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i3, id: s2 }), await this.getRecord(s2)), this.delete = (i3, s2) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s2 }), this.values.forEach((n3) => {
        if (n3.topic === i3) {
          if (typeof s2 < "u" && n3.id !== s2) return;
          this.records.delete(n3.id), this.events.emit(R.deleted, n3);
        }
      });
    }, this.exists = async (i3, s2) => (this.isInitialized(), this.records.has(s2) ? (await this.getRecord(s2)).topic === i3 : false), this.on = (i3, s2) => {
      this.events.on(i3, s2);
    }, this.once = (i3, s2) => {
      this.events.once(i3, s2);
    }, this.off = (i3, s2) => {
      this.events.off(i3, s2);
    }, this.removeListener = (i3, s2) => {
      this.events.removeListener(i3, s2);
    }, this.logger = E2(t, this.name);
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u") return;
      const i3 = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(i3);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i3 } = N("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i3);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(R.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: t } = N("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(R.created, (e) => {
      const t = R.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(R.updated, (e) => {
      const t = R.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(R.deleted, (e) => {
      const t = R.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.core.heartbeat.on(import_heartbeat.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        (0, import_time2.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var jt3 = class extends E3 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new import_events5.EventEmitter(), this.name = Ct, this.version = Rt2, this.cached = [], this.initialized = false, this.storagePrefix = O2, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i3) => this.expirations.set(i3.target, i3)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (i3) => {
      try {
        const s2 = this.formatTarget(i3);
        return typeof this.getExpiration(s2) < "u";
      } catch {
        return false;
      }
    }, this.set = (i3, s2) => {
      this.isInitialized();
      const n3 = this.formatTarget(i3), o = { target: n3, expiry: s2 };
      this.expirations.set(n3, o), this.checkExpiry(n3, o), this.events.emit(v3.created, { target: n3, expiration: o });
    }, this.get = (i3) => {
      this.isInitialized();
      const s2 = this.formatTarget(i3);
      return this.getExpiration(s2);
    }, this.del = (i3) => {
      if (this.isInitialized(), this.has(i3)) {
        const s2 = this.formatTarget(i3), n3 = this.getExpiration(s2);
        this.expirations.delete(s2), this.events.emit(v3.deleted, { target: s2, expiration: n3 });
      }
    }, this.on = (i3, s2) => {
      this.events.on(i3, s2);
    }, this.once = (i3, s2) => {
      this.events.once(i3, s2);
    }, this.off = (i3, s2) => {
      this.events.off(i3, s2);
    }, this.removeListener = (i3, s2) => {
      this.events.removeListener(i3, s2);
    }, this.logger = E2(t, this.name);
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return lt(e);
    if (typeof e == "number") return dt(e);
    const { message: t } = N("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(v3.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: t } = N("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i3 } = N("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i3), new Error(i3);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i3 } = t;
    (0, import_time2.toMiliseconds)(i3) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(v3.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(import_heartbeat.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(v3.created, (e) => {
      const t = v3.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(v3.expired, (e) => {
      const t = v3.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(v3.deleted, (e) => {
      const t = v3.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var qt3 = class extends y3 {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.name = Z, this.initialized = false, this.queue = [], this.verifyDisabled = false, this.init = async (i3) => {
      if (this.verifyDisabled || C() || !D()) return;
      const s2 = this.getVerifyUrl(i3 == null ? void 0 : i3.verifyUrl);
      this.verifyUrl !== s2 && this.removeIframe(), this.verifyUrl = s2;
      try {
        await this.createIframe();
      } catch (n3) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n3);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = ee2;
        try {
          await this.createIframe();
        } catch (n3) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n3), this.verifyDisabled = true;
        }
      }
    }, this.register = async (i3) => {
      this.initialized ? this.sendPost(i3.attestationId) : (this.addToQueue(i3.attestationId), await this.init());
    }, this.resolve = async (i3) => {
      if (this.isDevEnv) return "";
      const s2 = this.getVerifyUrl(i3 == null ? void 0 : i3.verifyUrl);
      let n3;
      try {
        n3 = await this.fetchAttestation(i3.attestationId, s2);
      } catch (o) {
        this.logger.info(`failed to resolve attestation: ${i3.attestationId} from url: ${s2}`), this.logger.info(o), n3 = await this.fetchAttestation(i3.attestationId, ee2);
      }
      return n3;
    }, this.fetchAttestation = async (i3, s2) => {
      this.logger.info(`resolving attestation: ${i3} from url: ${s2}`);
      const n3 = this.startAbortTimer(import_time2.ONE_SECOND * 2), o = await fetch(`${s2}/attestation/${i3}`, { signal: this.abortController.signal });
      return clearTimeout(n3), o.status === 200 ? await o.json() : void 0;
    }, this.addToQueue = (i3) => {
      this.queue.push(i3);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i3) => this.sendPost(i3)), this.queue = []);
    }, this.sendPost = (i3) => {
      var s2;
      try {
        if (!this.iframe) return;
        (s2 = this.iframe.contentWindow) == null || s2.postMessage(i3, "*"), this.logger.info(`postMessage sent: ${i3} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i3;
      const s2 = (n3) => {
        n3.data === "verify_ready" && (this.initialized = true, this.processQueue(), window.removeEventListener("message", s2), i3());
      };
      await Promise.race([new Promise((n3) => {
        if (document.getElementById(Z)) return n3();
        window.addEventListener("message", s2);
        const o = document.createElement("iframe");
        o.id = Z, o.src = `${this.verifyUrl}/${this.projectId}`, o.style.display = "none", document.body.append(o), this.iframe = o, i3 = n3;
      }), new Promise((n3, o) => setTimeout(() => {
        window.removeEventListener("message", s2), o("verify iframe load timeout");
      }, (0, import_time2.toMiliseconds)(import_time2.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = false);
    }, this.getVerifyUrl = (i3) => {
      let s2 = i3 || $2;
      return _t2.includes(s2) || (this.logger.info(`verify url: ${s2}, not included in trusted list, assigning default: ${$2}`), s2 = $2), s2;
    }, this.logger = E2(t, this.name), this.verifyUrl = $2, this.abortController = new AbortController(), this.isDevEnv = te() && process.env.IS_VITEST;
  }
  get context() {
    return y2(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_time2.toMiliseconds)(e));
  }
};
var Gt3 = class extends v2 {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.context = St2, this.registerDeviceToken = async (i3) => {
      const { clientId: s2, token: n3, notificationType: o, enableEncrypted: a3 = false } = i3, h6 = `${Tt2}/${this.projectId}/clients`;
      await (0, import_isomorphic_unfetch.default)(h6, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s2, type: o, token: n3, always_raw: a3 }) });
    }, this.logger = E2(t, this.context);
  }
};
var Lr2 = Object.defineProperty;
var Yt3 = Object.getOwnPropertySymbols;
var Fr2 = Object.prototype.hasOwnProperty;
var $r2 = Object.prototype.propertyIsEnumerable;
var Ht3 = (r2, e, t) => e in r2 ? Lr2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var Jt3 = (r2, e) => {
  for (var t in e || (e = {})) Fr2.call(e, t) && Ht3(r2, t, e[t]);
  if (Yt3) for (var t of Yt3(e)) $r2.call(e, t) && Ht3(r2, t, e[t]);
  return r2;
};
var te3 = class _te extends n2 {
  constructor(e) {
    super(e), this.protocol = le2, this.version = We2, this.name = Q2, this.events = new import_events5.EventEmitter(), this.initialized = false, this.on = (i3, s2) => this.events.on(i3, s2), this.once = (i3, s2) => this.events.once(i3, s2), this.off = (i3, s2) => this.events.off(i3, s2), this.removeListener = (i3, s2) => this.events.removeListener(i3, s2), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || ge2, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : (0, import_pino2.default)(k3({ level: (e == null ? void 0 : e.logger) || Qe2.logger }));
    this.logger = E2(t, this.name), this.heartbeat = new import_heartbeat.HeartBeat(), this.crypto = new xt3(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Vt3(this, this.logger), this.expirer = new jt3(this, this.logger), this.storage = e != null && e.storage ? e.storage : new h2(Jt3(Jt3({}, Ze2), e == null ? void 0 : e.storageOptions)), this.relayer = new Ft3({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Bt3(this, this.logger), this.verify = new qt3(this.projectId || "", this.logger), this.echoClient = new Gt3(this.projectId || "", this.logger);
  }
  static async init(e) {
    const t = new _te(e);
    await t.initialize();
    const i3 = await t.crypto.getClientId();
    return await t.storage.setItem(yt3, i3), t;
  }
  get context() {
    return y2(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
};
var Mr2 = te3;

// node_modules/@walletconnect/sign-client/dist/index.es.js
var import_events6 = __toESM(require_events());
var import_time3 = __toESM(require_cjs());
init_esm2();
var X2 = "wc";
var F2 = 2;
var H2 = "client";
var G3 = `${X2}@${F2}:${H2}:`;
var M2 = { name: H2, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" };
var W3 = "WALLETCONNECT_DEEPLINK_CHOICE";
var ne = "proposal";
var oe2 = "Proposal expired";
var ae = "session";
var A = import_time3.SEVEN_DAYS;
var ce2 = "engine";
var V2 = { wc_sessionPropose: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1101 } }, wc_sessionSettle: { req: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: import_time3.THIRTY_SECONDS, prompt: false, tag: 1114 }, res: { ttl: import_time3.THIRTY_SECONDS, prompt: false, tag: 1115 } } };
var U4 = { min: import_time3.FIVE_MINUTES, max: import_time3.SEVEN_DAYS };
var I = { idle: "IDLE", active: "ACTIVE" };
var le3 = "request";
var pe3 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var as2 = Object.defineProperty;
var cs2 = Object.defineProperties;
var ls2 = Object.getOwnPropertyDescriptors;
var he3 = Object.getOwnPropertySymbols;
var ps2 = Object.prototype.hasOwnProperty;
var hs2 = Object.prototype.propertyIsEnumerable;
var de3 = (m2, r2, e) => r2 in m2 ? as2(m2, r2, { enumerable: true, configurable: true, writable: true, value: e }) : m2[r2] = e;
var g4 = (m2, r2) => {
  for (var e in r2 || (r2 = {})) ps2.call(r2, e) && de3(m2, e, r2[e]);
  if (he3) for (var e of he3(r2)) hs2.call(r2, e) && de3(m2, e, r2[e]);
  return m2;
};
var b4 = (m2, r2) => cs2(m2, ls2(r2));
var ds2 = class extends w3 {
  constructor(r2) {
    super(r2), this.name = ce2, this.events = new import_events6.default(), this.initialized = false, this.ignoredPayloadTypes = [_], this.requestQueue = { state: I.idle, queue: [] }, this.sessionRequestQueue = { state: I.idle, queue: [] }, this.requestQueueDelay = import_time3.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(V2) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, (0, import_time3.toMiliseconds)(this.requestQueueDelay)));
    }, this.connect = async (e) => {
      await this.isInitialized();
      const s2 = b4(g4({}, e), { requiredNamespaces: e.requiredNamespaces || {}, optionalNamespaces: e.optionalNamespaces || {} });
      await this.isValidConnect(s2);
      const { pairingTopic: t, requiredNamespaces: i3, optionalNamespaces: n3, sessionProperties: o, relays: a3 } = s2;
      let c4 = t, p5, d2 = false;
      if (c4 && (d2 = this.client.core.pairing.pairings.get(c4).active), !c4 || !d2) {
        const { topic: v5, uri: S5 } = await this.client.core.pairing.create();
        c4 = v5, p5 = S5;
      }
      const h6 = await this.client.core.crypto.generateKeyPair(), R2 = g4({ requiredNamespaces: i3, optionalNamespaces: n3, relays: a3 ?? [{ protocol: ht3 }], proposer: { publicKey: h6, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: w6, resolve: T2, done: K3 } = at(import_time3.FIVE_MINUTES, oe2);
      if (this.events.once(yt("session_connect"), async ({ error: v5, session: S5 }) => {
        if (v5) w6(v5);
        else if (S5) {
          S5.self.publicKey = h6;
          const B3 = b4(g4({}, S5), { requiredNamespaces: S5.requiredNamespaces, optionalNamespaces: S5.optionalNamespaces });
          await this.client.session.set(S5.topic, B3), await this.setExpiry(S5.topic, S5.expiry), c4 && await this.client.core.pairing.updateMetadata({ topic: c4, metadata: S5.peer.metadata }), T2(B3);
        }
      }), !c4) {
        const { message: v5 } = N("NO_MATCHING_KEY", `connect() pairing topic: ${c4}`);
        throw new Error(v5);
      }
      const L3 = await this.sendRequest({ topic: c4, method: "wc_sessionPropose", params: R2 }), ge4 = pt(import_time3.FIVE_MINUTES);
      return await this.setProposal(L3, g4({ id: L3, expiry: ge4 }, R2)), { uri: p5, approval: K3 };
    }, this.pair = async (e) => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async (e) => {
      await this.isInitialized(), await this.isValidApprove(e);
      const { id: s2, relayProtocol: t, namespaces: i3, sessionProperties: n3 } = e, o = this.client.proposal.get(s2);
      let { pairingTopic: a3, proposer: c4, requiredNamespaces: p5, optionalNamespaces: d2 } = o;
      a3 = a3 || "", B(p5) || (p5 = jt(i3, "approve()"));
      const h6 = await this.client.core.crypto.generateKeyPair(), R2 = c4.publicKey, w6 = await this.client.core.crypto.generateSharedKey(h6, R2);
      a3 && s2 && (await this.client.core.pairing.updateMetadata({ topic: a3, metadata: c4.metadata }), await this.sendResult({ id: s2, topic: a3, result: { relay: { protocol: t ?? "irn" }, responderPublicKey: h6 } }), await this.client.proposal.delete(s2, U("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: a3 }));
      const T2 = g4({ relay: { protocol: t ?? "irn" }, namespaces: i3, requiredNamespaces: p5, optionalNamespaces: d2, pairingTopic: a3, controller: { publicKey: h6, metadata: this.client.metadata }, expiry: pt(A) }, n3 && { sessionProperties: n3 });
      await this.client.core.relayer.subscribe(w6), await this.sendRequest({ topic: w6, method: "wc_sessionSettle", params: T2, throwOnFailedPublish: true });
      const K3 = b4(g4({}, T2), { topic: w6, pairingTopic: a3, acknowledged: false, self: T2.controller, peer: { publicKey: c4.publicKey, metadata: c4.metadata }, controller: h6 });
      return await this.client.session.set(w6, K3), await this.setExpiry(w6, pt(A)), { topic: w6, acknowledged: () => new Promise((L3) => setTimeout(() => L3(this.client.session.get(w6)), 500)) };
    }, this.reject = async (e) => {
      await this.isInitialized(), await this.isValidReject(e);
      const { id: s2, reason: t } = e, { pairingTopic: i3 } = this.client.proposal.get(s2);
      i3 && (await this.sendError(s2, i3, t), await this.client.proposal.delete(s2, U("USER_DISCONNECTED")));
    }, this.update = async (e) => {
      await this.isInitialized(), await this.isValidUpdate(e);
      const { topic: s2, namespaces: t } = e, i3 = await this.sendRequest({ topic: s2, method: "wc_sessionUpdate", params: { namespaces: t } }), { done: n3, resolve: o, reject: a3 } = at();
      return this.events.once(yt("session_update", i3), ({ error: c4 }) => {
        c4 ? a3(c4) : o();
      }), await this.client.session.update(s2, { namespaces: t }), { acknowledged: n3 };
    }, this.extend = async (e) => {
      await this.isInitialized(), await this.isValidExtend(e);
      const { topic: s2 } = e, t = await this.sendRequest({ topic: s2, method: "wc_sessionExtend", params: {} }), { done: i3, resolve: n3, reject: o } = at();
      return this.events.once(yt("session_extend", t), ({ error: a3 }) => {
        a3 ? o(a3) : n3();
      }), await this.setExpiry(s2, pt(A)), { acknowledged: i3 };
    }, this.request = async (e) => {
      await this.isInitialized(), await this.isValidRequest(e);
      const { chainId: s2, request: t, topic: i3, expiry: n3 } = e, o = payloadId(), { done: a3, resolve: c4, reject: p5 } = at(n3, "Request expired. Please try again.");
      return this.events.once(yt("session_request", o), ({ error: d2, result: h6 }) => {
        d2 ? p5(d2) : c4(h6);
      }), await Promise.all([new Promise(async (d2) => {
        await this.sendRequest({ clientRpcId: o, topic: i3, method: "wc_sessionRequest", params: { request: t, chainId: s2 }, expiry: n3, throwOnFailedPublish: true }).catch((h6) => p5(h6)), this.client.events.emit("session_request_sent", { topic: i3, request: t, chainId: s2, id: o }), d2();
      }), new Promise(async (d2) => {
        const h6 = await gt(this.client.core.storage, W3);
        ht({ id: o, topic: i3, wcDeepLink: h6 }), d2();
      }), a3()]).then((d2) => d2[2]);
    }, this.respond = async (e) => {
      await this.isInitialized(), await this.isValidRespond(e);
      const { topic: s2, response: t } = e, { id: i3 } = t;
      isJsonRpcResult(t) ? await this.sendResult({ id: i3, topic: s2, result: t.result, throwOnFailedPublish: true }) : isJsonRpcError(t) && await this.sendError(i3, s2, t.error), this.cleanupAfterResponse(e);
    }, this.ping = async (e) => {
      await this.isInitialized(), await this.isValidPing(e);
      const { topic: s2 } = e;
      if (this.client.session.keys.includes(s2)) {
        const t = await this.sendRequest({ topic: s2, method: "wc_sessionPing", params: {} }), { done: i3, resolve: n3, reject: o } = at();
        this.events.once(yt("session_ping", t), ({ error: a3 }) => {
          a3 ? o(a3) : n3();
        }), await i3();
      } else this.client.core.pairing.pairings.keys.includes(s2) && await this.client.core.pairing.ping({ topic: s2 });
    }, this.emit = async (e) => {
      await this.isInitialized(), await this.isValidEmit(e);
      const { topic: s2, event: t, chainId: i3 } = e;
      await this.sendRequest({ topic: s2, method: "wc_sessionEvent", params: { event: t, chainId: i3 } });
    }, this.disconnect = async (e) => {
      await this.isInitialized(), await this.isValidDisconnect(e);
      const { topic: s2 } = e;
      this.client.session.keys.includes(s2) ? (await this.sendRequest({ topic: s2, method: "wc_sessionDelete", params: U("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession(s2)) : await this.client.core.pairing.disconnect({ topic: s2 });
    }, this.find = (e) => (this.isInitialized(), this.client.session.getAll().filter((s2) => Dt(s2, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (e) => {
      if (e.pairingTopic) try {
        const s2 = this.client.core.pairing.pairings.get(e.pairingTopic), t = this.client.core.pairing.pairings.getAll().filter((i3) => {
          var n3, o;
          return ((n3 = i3.peerMetadata) == null ? void 0 : n3.url) && ((o = i3.peerMetadata) == null ? void 0 : o.url) === e.peer.metadata.url && i3.topic && i3.topic !== s2.topic;
        });
        if (t.length === 0) return;
        this.client.logger.info(`Cleaning up ${t.length} duplicate pairing(s)`), await Promise.all(t.map((i3) => this.client.core.pairing.disconnect({ topic: i3.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (s2) {
        this.client.logger.error(s2);
      }
    }, this.deleteSession = async (e, s2) => {
      const { self: t } = this.client.session.get(e);
      await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, U("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(t.publicKey) && await this.client.core.crypto.deleteKeyPair(t.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), s2 || this.client.core.expirer.del(e), this.client.core.storage.removeItem(W3).catch((i3) => this.client.logger.warn(i3)), this.getPendingSessionRequests().forEach((i3) => {
        i3.topic === e && this.deletePendingSessionRequest(i3.id, U("USER_DISCONNECTED"));
      });
    }, this.deleteProposal = async (e, s2) => {
      await Promise.all([this.client.proposal.delete(e, U("USER_DISCONNECTED")), s2 ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.deletePendingSessionRequest = async (e, s2, t = false) => {
      await Promise.all([this.client.pendingRequest.delete(e, s2), t ? Promise.resolve() : this.client.core.expirer.del(e)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i3) => i3.id !== e), t && (this.sessionRequestQueue.state = I.idle);
    }, this.setExpiry = async (e, s2) => {
      this.client.session.keys.includes(e) && await this.client.session.update(e, { expiry: s2 }), this.client.core.expirer.set(e, s2);
    }, this.setProposal = async (e, s2) => {
      await this.client.proposal.set(e, s2), this.client.core.expirer.set(e, s2.expiry);
    }, this.setPendingSessionRequest = async (e) => {
      const s2 = V2.wc_sessionRequest.req.ttl, { id: t, topic: i3, params: n3, verifyContext: o } = e;
      await this.client.pendingRequest.set(t, { id: t, topic: i3, params: n3, verifyContext: o }), s2 && this.client.core.expirer.set(t, pt(s2));
    }, this.sendRequest = async (e) => {
      const { topic: s2, method: t, params: i3, expiry: n3, relayRpcId: o, clientRpcId: a3, throwOnFailedPublish: c4 } = e, p5 = formatJsonRpcRequest(t, i3, a3);
      if (D() && pe3.includes(t)) {
        const R2 = Ln(JSON.stringify(p5));
        this.client.core.verify.register({ attestationId: R2 });
      }
      const d2 = await this.client.core.crypto.encode(s2, p5), h6 = V2[t].req;
      return n3 && (h6.ttl = n3), o && (h6.id = o), this.client.core.history.set(s2, p5), c4 ? (h6.internal = b4(g4({}, h6.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s2, d2, h6)) : this.client.core.relayer.publish(s2, d2, h6).catch((R2) => this.client.logger.error(R2)), p5.id;
    }, this.sendResult = async (e) => {
      const { id: s2, topic: t, result: i3, throwOnFailedPublish: n3 } = e, o = formatJsonRpcResult(s2, i3), a3 = await this.client.core.crypto.encode(t, o), c4 = await this.client.core.history.get(t, s2), p5 = V2[c4.request.method].res;
      n3 ? (p5.internal = b4(g4({}, p5.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t, a3, p5)) : this.client.core.relayer.publish(t, a3, p5).catch((d2) => this.client.logger.error(d2)), await this.client.core.history.resolve(o);
    }, this.sendError = async (e, s2, t) => {
      const i3 = formatJsonRpcError(e, t), n3 = await this.client.core.crypto.encode(s2, i3), o = await this.client.core.history.get(s2, e), a3 = V2[o.request.method].res;
      this.client.core.relayer.publish(s2, n3, a3), await this.client.core.history.resolve(i3);
    }, this.cleanup = async () => {
      const e = [], s2 = [];
      this.client.session.getAll().forEach((t) => {
        mt(t.expiry) && e.push(t.topic);
      }), this.client.proposal.getAll().forEach((t) => {
        mt(t.expiry) && s2.push(t.id);
      }), await Promise.all([...e.map((t) => this.deleteSession(t)), ...s2.map((t) => this.deleteProposal(t))]);
    }, this.onRelayEventRequest = async (e) => {
      this.requestQueue.queue.push(e), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === I.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = I.active;
        const e = this.requestQueue.queue.shift();
        if (e) try {
          this.processRequest(e), await new Promise((s2) => setTimeout(s2, 300));
        } catch (s2) {
          this.client.logger.warn(s2);
        }
      }
      this.requestQueue.state = I.idle;
    }, this.processRequest = (e) => {
      const { topic: s2, payload: t } = e, i3 = t.method;
      switch (i3) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s2, t);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s2, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s2, t);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s2, t);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s2, t);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s2, t);
        case "wc_sessionRequest":
          return this.onSessionRequest(s2, t);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s2, t);
        default:
          return this.client.logger.info(`Unsupported request method ${i3}`);
      }
    }, this.onRelayEventResponse = async (e) => {
      const { topic: s2, payload: t } = e, i3 = (await this.client.core.history.get(s2, t.id)).request.method;
      switch (i3) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s2, t);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s2, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s2, t);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s2, t);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s2, t);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s2, t);
        default:
          return this.client.logger.info(`Unsupported response method ${i3}`);
      }
    }, this.onRelayEventUnknownPayload = (e) => {
      const { topic: s2 } = e, { message: t } = N("MISSING_OR_INVALID", `Decoded payload on topic ${s2} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(t);
    }, this.onSessionProposeRequest = async (e, s2) => {
      const { params: t, id: i3 } = s2;
      try {
        this.isValidConnect(g4({}, s2.params));
        const n3 = pt(import_time3.FIVE_MINUTES), o = g4({ id: i3, pairingTopic: e, expiry: n3 }, t);
        await this.setProposal(i3, o);
        const a3 = Ln(JSON.stringify(s2)), c4 = await this.getVerifyContext(a3, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i3, params: o, verifyContext: c4 });
      } catch (n3) {
        await this.sendError(i3, e, n3), this.client.logger.error(n3);
      }
    }, this.onSessionProposeResponse = async (e, s2) => {
      const { id: t } = s2;
      if (isJsonRpcResult(s2)) {
        const { result: i3 } = s2;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i3 });
        const n3 = this.client.proposal.get(t);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n3 });
        const o = n3.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const a3 = i3.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: a3 });
        const c4 = await this.client.core.crypto.generateSharedKey(o, a3);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c4 });
        const p5 = await this.client.core.relayer.subscribe(c4);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p5 }), await this.client.core.pairing.activate({ topic: e });
      } else isJsonRpcError(s2) && (await this.client.proposal.delete(t, U("USER_DISCONNECTED")), this.events.emit(yt("session_connect"), { error: s2.error }));
    }, this.onSessionSettleRequest = async (e, s2) => {
      const { id: t, params: i3 } = s2;
      try {
        this.isValidSessionSettleRequest(i3);
        const { relay: n3, controller: o, expiry: a3, namespaces: c4, requiredNamespaces: p5, optionalNamespaces: d2, sessionProperties: h6, pairingTopic: R2 } = s2.params, w6 = g4({ topic: e, relay: n3, expiry: a3, namespaces: c4, acknowledged: true, pairingTopic: R2, requiredNamespaces: p5, optionalNamespaces: d2, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, h6 && { sessionProperties: h6 });
        await this.sendResult({ id: s2.id, topic: e, result: true }), this.events.emit(yt("session_connect"), { session: w6 }), this.cleanupDuplicatePairings(w6);
      } catch (n3) {
        await this.sendError(t, e, n3), this.client.logger.error(n3);
      }
    }, this.onSessionSettleResponse = async (e, s2) => {
      const { id: t } = s2;
      isJsonRpcResult(s2) ? (await this.client.session.update(e, { acknowledged: true }), this.events.emit(yt("session_approve", t), {})) : isJsonRpcError(s2) && (await this.client.session.delete(e, U("USER_DISCONNECTED")), this.events.emit(yt("session_approve", t), { error: s2.error }));
    }, this.onSessionUpdateRequest = async (e, s2) => {
      const { params: t, id: i3 } = s2;
      try {
        const n3 = `${e}_session_update`, o = tr.get(n3);
        if (o && this.isRequestOutOfSync(o, i3)) {
          this.client.logger.info(`Discarding out of sync request - ${i3}`);
          return;
        }
        this.isValidUpdate(g4({ topic: e }, t)), await this.client.session.update(e, { namespaces: t.namespaces }), await this.sendResult({ id: i3, topic: e, result: true }), this.client.events.emit("session_update", { id: i3, topic: e, params: t }), tr.set(n3, i3);
      } catch (n3) {
        await this.sendError(i3, e, n3), this.client.logger.error(n3);
      }
    }, this.isRequestOutOfSync = (e, s2) => parseInt(s2.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, s2) => {
      const { id: t } = s2;
      isJsonRpcResult(s2) ? this.events.emit(yt("session_update", t), {}) : isJsonRpcError(s2) && this.events.emit(yt("session_update", t), { error: s2.error });
    }, this.onSessionExtendRequest = async (e, s2) => {
      const { id: t } = s2;
      try {
        this.isValidExtend({ topic: e }), await this.setExpiry(e, pt(A)), await this.sendResult({ id: t, topic: e, result: true }), this.client.events.emit("session_extend", { id: t, topic: e });
      } catch (i3) {
        await this.sendError(t, e, i3), this.client.logger.error(i3);
      }
    }, this.onSessionExtendResponse = (e, s2) => {
      const { id: t } = s2;
      isJsonRpcResult(s2) ? this.events.emit(yt("session_extend", t), {}) : isJsonRpcError(s2) && this.events.emit(yt("session_extend", t), { error: s2.error });
    }, this.onSessionPingRequest = async (e, s2) => {
      const { id: t } = s2;
      try {
        this.isValidPing({ topic: e }), await this.sendResult({ id: t, topic: e, result: true }), this.client.events.emit("session_ping", { id: t, topic: e });
      } catch (i3) {
        await this.sendError(t, e, i3), this.client.logger.error(i3);
      }
    }, this.onSessionPingResponse = (e, s2) => {
      const { id: t } = s2;
      setTimeout(() => {
        isJsonRpcResult(s2) ? this.events.emit(yt("session_ping", t), {}) : isJsonRpcError(s2) && this.events.emit(yt("session_ping", t), { error: s2.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (e, s2) => {
      const { id: t } = s2;
      try {
        this.isValidDisconnect({ topic: e, reason: s2.params }), await Promise.all([new Promise((i3) => {
          this.client.core.relayer.once(D3.publish, async () => {
            i3(await this.deleteSession(e));
          });
        }), this.sendResult({ id: t, topic: e, result: true })]), this.client.events.emit("session_delete", { id: t, topic: e });
      } catch (i3) {
        this.client.logger.error(i3);
      }
    }, this.onSessionRequest = async (e, s2) => {
      const { id: t, params: i3 } = s2;
      try {
        this.isValidRequest(g4({ topic: e }, i3));
        const n3 = Ln(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", i3, t))), o = this.client.session.get(e), a3 = await this.getVerifyContext(n3, o.peer.metadata), c4 = { id: t, topic: e, params: i3, verifyContext: a3 };
        await this.setPendingSessionRequest(c4), this.addSessionRequestToSessionRequestQueue(c4), this.processSessionRequestQueue();
      } catch (n3) {
        await this.sendError(t, e, n3), this.client.logger.error(n3);
      }
    }, this.onSessionRequestResponse = (e, s2) => {
      const { id: t } = s2;
      isJsonRpcResult(s2) ? this.events.emit(yt("session_request", t), { result: s2.result }) : isJsonRpcError(s2) && this.events.emit(yt("session_request", t), { error: s2.error });
    }, this.onSessionEventRequest = async (e, s2) => {
      const { id: t, params: i3 } = s2;
      try {
        const n3 = `${e}_session_event_${i3.event.name}`, o = tr.get(n3);
        if (o && this.isRequestOutOfSync(o, t)) {
          this.client.logger.info(`Discarding out of sync request - ${t}`);
          return;
        }
        this.isValidEmit(g4({ topic: e }, i3)), this.client.events.emit("session_event", { id: t, topic: e, params: i3 }), tr.set(n3, t);
      } catch (n3) {
        await this.sendError(t, e, n3), this.client.logger.error(n3);
      }
    }, this.addSessionRequestToSessionRequestQueue = (e) => {
      this.sessionRequestQueue.queue.push(e);
    }, this.cleanupAfterResponse = (e) => {
      this.deletePendingSessionRequest(e.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = I.idle, this.processSessionRequestQueue();
      }, (0, import_time3.toMiliseconds)(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === I.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e = this.sessionRequestQueue.queue[0];
      if (!e) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = I.active, this.client.events.emit("session_request", e);
      } catch (s2) {
        this.client.logger.error(s2);
      }
    }, this.onPairingCreated = (e) => {
      if (e.active) return;
      const s2 = this.client.proposal.getAll().find((t) => t.pairingTopic === e.topic);
      s2 && this.onSessionProposeRequest(e.topic, formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: s2.requiredNamespaces, optionalNamespaces: s2.optionalNamespaces, relays: s2.relays, proposer: s2.proposer, sessionProperties: s2.sessionProperties }, s2.id));
    }, this.isValidConnect = async (e) => {
      if (!Ht(e)) {
        const { message: a3 } = N("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
        throw new Error(a3);
      }
      const { pairingTopic: s2, requiredNamespaces: t, optionalNamespaces: i3, sessionProperties: n3, relays: o } = e;
      if (w(s2) || await this.isValidPairingTopic(s2), !xt(o, true)) {
        const { message: a3 } = N("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(a3);
      }
      !w(t) && B(t) !== 0 && this.validateNamespaces(t, "requiredNamespaces"), !w(i3) && B(i3) !== 0 && this.validateNamespaces(i3, "optionalNamespaces"), w(n3) || this.validateSessionProps(n3, "sessionProperties");
    }, this.validateNamespaces = (e, s2) => {
      const t = Lt(e, "connect()", s2);
      if (t) throw new Error(t.message);
    }, this.isValidApprove = async (e) => {
      if (!Ht(e)) throw new Error(N("MISSING_OR_INVALID", `approve() params: ${e}`).message);
      const { id: s2, namespaces: t, relayProtocol: i3, sessionProperties: n3 } = e;
      await this.isValidProposalId(s2);
      const o = this.client.proposal.get(s2), a3 = ln(t, "approve()");
      if (a3) throw new Error(a3.message);
      const c4 = fn(o.requiredNamespaces, t, "approve()");
      if (c4) throw new Error(c4.message);
      if (!h(i3, true)) {
        const { message: p5 } = N("MISSING_OR_INVALID", `approve() relayProtocol: ${i3}`);
        throw new Error(p5);
      }
      w(n3) || this.validateSessionProps(n3, "sessionProperties");
    }, this.isValidReject = async (e) => {
      if (!Ht(e)) {
        const { message: i3 } = N("MISSING_OR_INVALID", `reject() params: ${e}`);
        throw new Error(i3);
      }
      const { id: s2, reason: t } = e;
      if (await this.isValidProposalId(s2), !qt(t)) {
        const { message: i3 } = N("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(t)}`);
        throw new Error(i3);
      }
    }, this.isValidSessionSettleRequest = (e) => {
      if (!Ht(e)) {
        const { message: c4 } = N("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
        throw new Error(c4);
      }
      const { relay: s2, controller: t, namespaces: i3, expiry: n3 } = e;
      if (!dn(s2)) {
        const { message: c4 } = N("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c4);
      }
      const o = Kt(t, "onSessionSettleRequest()");
      if (o) throw new Error(o.message);
      const a3 = ln(i3, "onSessionSettleRequest()");
      if (a3) throw new Error(a3.message);
      if (mt(n3)) {
        const { message: c4 } = N("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c4);
      }
    }, this.isValidUpdate = async (e) => {
      if (!Ht(e)) {
        const { message: a3 } = N("MISSING_OR_INVALID", `update() params: ${e}`);
        throw new Error(a3);
      }
      const { topic: s2, namespaces: t } = e;
      await this.isValidSessionTopic(s2);
      const i3 = this.client.session.get(s2), n3 = ln(t, "update()");
      if (n3) throw new Error(n3.message);
      const o = fn(i3.requiredNamespaces, t, "update()");
      if (o) throw new Error(o.message);
    }, this.isValidExtend = async (e) => {
      if (!Ht(e)) {
        const { message: t } = N("MISSING_OR_INVALID", `extend() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s2 } = e;
      await this.isValidSessionTopic(s2);
    }, this.isValidRequest = async (e) => {
      if (!Ht(e)) {
        const { message: a3 } = N("MISSING_OR_INVALID", `request() params: ${e}`);
        throw new Error(a3);
      }
      const { topic: s2, request: t, chainId: i3, expiry: n3 } = e;
      await this.isValidSessionTopic(s2);
      const { namespaces: o } = this.client.session.get(s2);
      if (!zt(o, i3)) {
        const { message: a3 } = N("MISSING_OR_INVALID", `request() chainId: ${i3}`);
        throw new Error(a3);
      }
      if (!Bt(t)) {
        const { message: a3 } = N("MISSING_OR_INVALID", `request() ${JSON.stringify(t)}`);
        throw new Error(a3);
      }
      if (!Yt(o, i3, t.method)) {
        const { message: a3 } = N("MISSING_OR_INVALID", `request() method: ${t.method}`);
        throw new Error(a3);
      }
      if (n3 && !Xt(n3, U4)) {
        const { message: a3 } = N("MISSING_OR_INVALID", `request() expiry: ${n3}. Expiry must be a number (in seconds) between ${U4.min} and ${U4.max}`);
        throw new Error(a3);
      }
    }, this.isValidRespond = async (e) => {
      var s2;
      if (!Ht(e)) {
        const { message: n3 } = N("MISSING_OR_INVALID", `respond() params: ${e}`);
        throw new Error(n3);
      }
      const { topic: t, response: i3 } = e;
      try {
        await this.isValidSessionTopic(t);
      } catch (n3) {
        throw (s2 = e == null ? void 0 : e.response) != null && s2.id && this.cleanupAfterResponse(e), n3;
      }
      if (!Gt(i3)) {
        const { message: n3 } = N("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i3)}`);
        throw new Error(n3);
      }
    }, this.isValidPing = async (e) => {
      if (!Ht(e)) {
        const { message: t } = N("MISSING_OR_INVALID", `ping() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s2 } = e;
      await this.isValidSessionOrPairingTopic(s2);
    }, this.isValidEmit = async (e) => {
      if (!Ht(e)) {
        const { message: o } = N("MISSING_OR_INVALID", `emit() params: ${e}`);
        throw new Error(o);
      }
      const { topic: s2, event: t, chainId: i3 } = e;
      await this.isValidSessionTopic(s2);
      const { namespaces: n3 } = this.client.session.get(s2);
      if (!zt(n3, i3)) {
        const { message: o } = N("MISSING_OR_INVALID", `emit() chainId: ${i3}`);
        throw new Error(o);
      }
      if (!Wt(t)) {
        const { message: o } = N("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o);
      }
      if (!Jt(n3, i3, t.name)) {
        const { message: o } = N("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (e) => {
      if (!Ht(e)) {
        const { message: t } = N("MISSING_OR_INVALID", `disconnect() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s2 } = e;
      await this.isValidSessionOrPairingTopic(s2);
    }, this.getVerifyContext = async (e, s2) => {
      const t = { verified: { verifyUrl: s2.verifyUrl || $2, validation: "UNKNOWN", origin: s2.url || "" } };
      try {
        const i3 = await this.client.core.verify.resolve({ attestationId: e, verifyUrl: s2.verifyUrl });
        i3 && (t.verified.origin = i3.origin, t.verified.isScam = i3.isScam, t.verified.validation = i3.origin === new URL(s2.url).origin ? "VALID" : "INVALID");
      } catch (i3) {
        this.client.logger.info(i3);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(t)}`), t;
    }, this.validateSessionProps = (e, s2) => {
      Object.values(e).forEach((t) => {
        if (!h(t, false)) {
          const { message: i3 } = N("MISSING_OR_INVALID", `${s2} must be in Record<string, string> format. Received: ${JSON.stringify(t)}`);
          throw new Error(i3);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: r2 } = N("NOT_INITIALIZED", this.name);
      throw new Error(r2);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(D3.message, async (r2) => {
      const { topic: e, message: s2 } = r2;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s2))) return;
      const t = await this.client.core.crypto.decode(e, s2);
      try {
        isJsonRpcRequest(t) ? (this.client.core.history.set(e, t), this.onRelayEventRequest({ topic: e, payload: t })) : isJsonRpcResponse(t) ? (await this.client.core.history.resolve(t), await this.onRelayEventResponse({ topic: e, payload: t }), this.client.core.history.delete(e, t.id)) : this.onRelayEventUnknownPayload({ topic: e, payload: t });
      } catch (i3) {
        this.client.logger.error(i3);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(v3.expired, async (r2) => {
      const { topic: e, id: s2 } = ft(r2.target);
      if (s2 && this.client.pendingRequest.keys.includes(s2)) return await this.deletePendingSessionRequest(s2, N("EXPIRED"), true);
      e ? this.client.session.keys.includes(e) && (await this.deleteSession(e, true), this.client.events.emit("session_expire", { topic: e })) : s2 && (await this.deleteProposal(s2, true), this.client.events.emit("proposal_expire", { id: s2 }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(V.create, (r2) => this.onPairingCreated(r2));
  }
  isValidPairingTopic(r2) {
    if (!h(r2, false)) {
      const { message: e } = N("MISSING_OR_INVALID", `pairing topic should be a string: ${r2}`);
      throw new Error(e);
    }
    if (!this.client.core.pairing.pairings.keys.includes(r2)) {
      const { message: e } = N("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r2}`);
      throw new Error(e);
    }
    if (mt(this.client.core.pairing.pairings.get(r2).expiry)) {
      const { message: e } = N("EXPIRED", `pairing topic: ${r2}`);
      throw new Error(e);
    }
  }
  async isValidSessionTopic(r2) {
    if (!h(r2, false)) {
      const { message: e } = N("MISSING_OR_INVALID", `session topic should be a string: ${r2}`);
      throw new Error(e);
    }
    if (!this.client.session.keys.includes(r2)) {
      const { message: e } = N("NO_MATCHING_KEY", `session topic doesn't exist: ${r2}`);
      throw new Error(e);
    }
    if (mt(this.client.session.get(r2).expiry)) {
      await this.deleteSession(r2);
      const { message: e } = N("EXPIRED", `session topic: ${r2}`);
      throw new Error(e);
    }
  }
  async isValidSessionOrPairingTopic(r2) {
    if (this.client.session.keys.includes(r2)) await this.isValidSessionTopic(r2);
    else if (this.client.core.pairing.pairings.keys.includes(r2)) this.isValidPairingTopic(r2);
    else if (h(r2, false)) {
      const { message: e } = N("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${r2}`);
      throw new Error(e);
    } else {
      const { message: e } = N("MISSING_OR_INVALID", `session or pairing topic should be a string: ${r2}`);
      throw new Error(e);
    }
  }
  async isValidProposalId(r2) {
    if (!Ft(r2)) {
      const { message: e } = N("MISSING_OR_INVALID", `proposal id should be a number: ${r2}`);
      throw new Error(e);
    }
    if (!this.client.proposal.keys.includes(r2)) {
      const { message: e } = N("NO_MATCHING_KEY", `proposal id doesn't exist: ${r2}`);
      throw new Error(e);
    }
    if (mt(this.client.proposal.get(r2).expiry)) {
      await this.deleteProposal(r2);
      const { message: e } = N("EXPIRED", `proposal id: ${r2}`);
      throw new Error(e);
    }
  }
};
var us2 = class extends Kt3 {
  constructor(r2, e) {
    super(r2, e, ne, G3), this.core = r2, this.logger = e;
  }
};
var ue2 = class extends Kt3 {
  constructor(r2, e) {
    super(r2, e, ae, G3), this.core = r2, this.logger = e;
  }
};
var gs2 = class extends Kt3 {
  constructor(r2, e) {
    super(r2, e, le3, G3, (s2) => s2.id), this.core = r2, this.logger = e;
  }
};
var Q3 = class _Q extends b2 {
  constructor(r2) {
    super(r2), this.protocol = X2, this.version = F2, this.name = M2.name, this.events = new import_events6.EventEmitter(), this.on = (s2, t) => this.events.on(s2, t), this.once = (s2, t) => this.events.once(s2, t), this.off = (s2, t) => this.events.off(s2, t), this.removeListener = (s2, t) => this.events.removeListener(s2, t), this.removeAllListeners = (s2) => this.events.removeAllListeners(s2), this.connect = async (s2) => {
      try {
        return await this.engine.connect(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.pair = async (s2) => {
      try {
        return await this.engine.pair(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.approve = async (s2) => {
      try {
        return await this.engine.approve(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.reject = async (s2) => {
      try {
        return await this.engine.reject(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.update = async (s2) => {
      try {
        return await this.engine.update(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.extend = async (s2) => {
      try {
        return await this.engine.extend(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.request = async (s2) => {
      try {
        return await this.engine.request(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.respond = async (s2) => {
      try {
        return await this.engine.respond(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.ping = async (s2) => {
      try {
        return await this.engine.ping(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.emit = async (s2) => {
      try {
        return await this.engine.emit(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.disconnect = async (s2) => {
      try {
        return await this.engine.disconnect(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.find = (s2) => {
      try {
        return this.engine.find(s2);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.name = (r2 == null ? void 0 : r2.name) || M2.name, this.metadata = (r2 == null ? void 0 : r2.metadata) || Qn();
    const e = typeof (r2 == null ? void 0 : r2.logger) < "u" && typeof (r2 == null ? void 0 : r2.logger) != "string" ? r2.logger : (0, import_pino2.default)(k3({ level: (r2 == null ? void 0 : r2.logger) || M2.logger }));
    this.core = (r2 == null ? void 0 : r2.core) || new Mr2(r2), this.logger = E2(e, this.name), this.session = new ue2(this.core, this.logger), this.proposal = new us2(this.core, this.logger), this.pendingRequest = new gs2(this.core, this.logger), this.engine = new ds2(this);
  }
  static async init(r2) {
    const e = new _Q(r2);
    return await e.initialize(), e;
  }
  get context() {
    return y2(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (r2) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(r2.message), r2;
    }
  }
};

// node_modules/@walletconnect/universal-provider/node_modules/@walletconnect/jsonrpc-provider/dist/esm/provider.js
var import_events7 = __toESM(require_events());
init_esm2();
var JsonRpcProvider2 = class extends r {
  constructor(connection) {
    super(connection);
    this.events = new import_events7.EventEmitter();
    this.hasRegisteredEventListeners = false;
    this.connection = this.setConnection(connection);
    if (this.connection.connected) {
      this.registerEventListeners();
    }
  }
  async connect(connection = this.connection) {
    await this.open(connection);
  }
  async disconnect() {
    await this.close();
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async request(request, context) {
    return this.requestStrict(formatJsonRpcRequest(request.method, request.params || [], request.id || getBigIntRpcId().toString()), context);
  }
  async requestStrict(request, context) {
    return new Promise(async (resolve, reject) => {
      if (!this.connection.connected) {
        try {
          await this.open();
        } catch (e) {
          reject(e);
        }
      }
      this.events.on(`${request.id}`, (response) => {
        if (isJsonRpcError(response)) {
          reject(response.error);
        } else {
          resolve(response.result);
        }
      });
      try {
        await this.connection.send(request, context);
      } catch (e) {
        reject(e);
      }
    });
  }
  setConnection(connection = this.connection) {
    return connection;
  }
  onPayload(payload) {
    this.events.emit("payload", payload);
    if (isJsonRpcResponse(payload)) {
      this.events.emit(`${payload.id}`, payload);
    } else {
      this.events.emit("message", {
        type: payload.method,
        data: payload.params
      });
    }
  }
  onClose(event) {
    if (event && event.code === 3e3) {
      this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${event.code} ${event.reason ? `(${event.reason})` : ""}`));
    }
    this.events.emit("disconnect");
  }
  async open(connection = this.connection) {
    if (this.connection === connection && this.connection.connected)
      return;
    if (this.connection.connected)
      this.close();
    if (typeof connection === "string") {
      await this.connection.open(connection);
      connection = this.connection;
    }
    this.connection = this.setConnection(connection);
    await this.connection.open();
    this.registerEventListeners();
    this.events.emit("connect");
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    if (this.hasRegisteredEventListeners)
      return;
    this.connection.on("payload", (payload) => this.onPayload(payload));
    this.connection.on("close", (event) => this.onClose(event));
    this.connection.on("error", (error) => this.events.emit("error", error));
    this.connection.on("register_error", (error) => this.onClose());
    this.hasRegisteredEventListeners = true;
  }
};

// node_modules/@walletconnect/universal-provider/dist/index.es.js
var import_events8 = __toESM(require_events());
init_esm2();
var Ia = "error";
var Wg = "wss://relay.walletconnect.com";
var Fg = "wc";
var Mg = "universal_provider";
var xa = `${Fg}@2:${Mg}:`;
var qg = "https://rpc.walletconnect.com/v1/";
var Vn3 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var ge3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var Ui = { exports: {} };
(function(C2, u4) {
  (function() {
    var i3, d2 = "4.17.21", P4 = 200, O5 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", $4 = "Expected a function", En2 = "Invalid `variable` option passed into `_.template`", zt4 = "__lodash_hash_undefined__", pr3 = 500, It4 = "__lodash_placeholder__", Ln3 = 1, Fn3 = 2, xt4 = 4, Et4 = 1, ve3 = 2, vn2 = 1, ct3 = 2, qi = 4, Dn = 8, yt4 = 16, Hn3 = 32, St3 = 64, Mn3 = 128, Kt4 = 256, dr3 = 512, La = 30, Da = "...", Ha = 800, Na = 16, Bi = 1, $a = 2, Ua = 3, ht4 = 1 / 0, kn3 = 9007199254740991, Wa = 17976931348623157e292, _e3 = 0 / 0, Nn2 = 4294967295, Fa = Nn2 - 1, Ma = Nn2 >>> 1, qa = [["ary", Mn3], ["bind", vn2], ["bindKey", ct3], ["curry", Dn], ["curryRight", yt4], ["flip", dr3], ["partial", Hn3], ["partialRight", St3], ["rearg", Kt4]], Ot3 = "[object Arguments]", me2 = "[object Array]", Ba = "[object AsyncFunction]", Yt4 = "[object Boolean]", Zt2 = "[object Date]", Ga = "[object DOMException]", we2 = "[object Error]", Pe2 = "[object Function]", Gi2 = "[object GeneratorFunction]", yn2 = "[object Map]", Jt4 = "[object Number]", za = "[object Null]", qn3 = "[object Object]", zi = "[object Promise]", Ka = "[object Proxy]", Xt4 = "[object RegExp]", Sn2 = "[object Set]", Qt3 = "[object String]", Ae3 = "[object Symbol]", Ya = "[object Undefined]", Vt4 = "[object WeakMap]", Za = "[object WeakSet]", kt4 = "[object ArrayBuffer]", Rt3 = "[object DataView]", gr3 = "[object Float32Array]", vr3 = "[object Float64Array]", _r3 = "[object Int8Array]", mr3 = "[object Int16Array]", wr2 = "[object Int32Array]", Pr3 = "[object Uint8Array]", Ar3 = "[object Uint8ClampedArray]", Cr3 = "[object Uint16Array]", Ir3 = "[object Uint32Array]", Ja = /\b__p \+= '';/g, Xa = /\b(__p \+=) '' \+/g, Qa = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ki = /&(?:amp|lt|gt|quot|#39);/g, Yi2 = /[&<>"']/g, Va = RegExp(Ki.source), ka = RegExp(Yi2.source), ja = /<%-([\s\S]+?)%>/g, no2 = /<%([\s\S]+?)%>/g, Zi2 = /<%=([\s\S]+?)%>/g, to2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eo2 = /^\w*$/, ro2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xr3 = /[\\^$.*+?()[\]{}|]/g, io2 = RegExp(xr3.source), Er2 = /^\s+/, so2 = /\s/, uo2 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ao2 = /\{\n\/\* \[wrapped with (.+)\] \*/, oo2 = /,? & /, fo2 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, co2 = /[()=,{}\[\]\/\s]/, ho2 = /\\(\\)?/g, lo2 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ji2 = /\w*$/, po2 = /^[-+]0x[0-9a-f]+$/i, go2 = /^0b[01]+$/i, vo2 = /^\[object .+?Constructor\]$/, _o2 = /^0o[0-7]+$/i, mo2 = /^(?:0|[1-9]\d*)$/, wo2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ce2 = /($^)/, Po2 = /['\n\r\u2028\u2029\\]/g, Ie2 = "\\ud800-\\udfff", Ao2 = "\\u0300-\\u036f", Co2 = "\\ufe20-\\ufe2f", Io2 = "\\u20d0-\\u20ff", Xi2 = Ao2 + Co2 + Io2, Qi2 = "\\u2700-\\u27bf", Vi = "a-z\\xdf-\\xf6\\xf8-\\xff", xo2 = "\\xac\\xb1\\xd7\\xf7", Eo2 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", yo2 = "\\u2000-\\u206f", So2 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ki2 = "A-Z\\xc0-\\xd6\\xd8-\\xde", ji = "\\ufe0e\\ufe0f", ns2 = xo2 + Eo2 + yo2 + So2, yr3 = "['’]", Oo2 = "[" + Ie2 + "]", ts2 = "[" + ns2 + "]", xe2 = "[" + Xi2 + "]", es2 = "\\d+", Ro2 = "[" + Qi2 + "]", rs2 = "[" + Vi + "]", is2 = "[^" + Ie2 + ns2 + es2 + Qi2 + Vi + ki2 + "]", Sr3 = "\\ud83c[\\udffb-\\udfff]", bo2 = "(?:" + xe2 + "|" + Sr3 + ")", ss2 = "[^" + Ie2 + "]", Or3 = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rr3 = "[\\ud800-\\udbff][\\udc00-\\udfff]", bt3 = "[" + ki2 + "]", us3 = "\\u200d", as3 = "(?:" + rs2 + "|" + is2 + ")", To2 = "(?:" + bt3 + "|" + is2 + ")", os2 = "(?:" + yr3 + "(?:d|ll|m|re|s|t|ve))?", fs2 = "(?:" + yr3 + "(?:D|LL|M|RE|S|T|VE))?", cs3 = bo2 + "?", hs3 = "[" + ji + "]?", Lo2 = "(?:" + us3 + "(?:" + [ss2, Or3, Rr3].join("|") + ")" + hs3 + cs3 + ")*", Do2 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ho2 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ls3 = hs3 + cs3 + Lo2, No2 = "(?:" + [Ro2, Or3, Rr3].join("|") + ")" + ls3, $o2 = "(?:" + [ss2 + xe2 + "?", xe2, Or3, Rr3, Oo2].join("|") + ")", Uo2 = RegExp(yr3, "g"), Wo2 = RegExp(xe2, "g"), br2 = RegExp(Sr3 + "(?=" + Sr3 + ")|" + $o2 + ls3, "g"), Fo2 = RegExp([bt3 + "?" + rs2 + "+" + os2 + "(?=" + [ts2, bt3, "$"].join("|") + ")", To2 + "+" + fs2 + "(?=" + [ts2, bt3 + as3, "$"].join("|") + ")", bt3 + "?" + as3 + "+" + os2, bt3 + "+" + fs2, Ho2, Do2, es2, No2].join("|"), "g"), Mo2 = RegExp("[" + us3 + Ie2 + Xi2 + ji + "]"), qo2 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Bo2 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Go2 = -1, B3 = {};
    B3[gr3] = B3[vr3] = B3[_r3] = B3[mr3] = B3[wr2] = B3[Pr3] = B3[Ar3] = B3[Cr3] = B3[Ir3] = true, B3[Ot3] = B3[me2] = B3[kt4] = B3[Yt4] = B3[Rt3] = B3[Zt2] = B3[we2] = B3[Pe2] = B3[yn2] = B3[Jt4] = B3[qn3] = B3[Xt4] = B3[Sn2] = B3[Qt3] = B3[Vt4] = false;
    var q2 = {};
    q2[Ot3] = q2[me2] = q2[kt4] = q2[Rt3] = q2[Yt4] = q2[Zt2] = q2[gr3] = q2[vr3] = q2[_r3] = q2[mr3] = q2[wr2] = q2[yn2] = q2[Jt4] = q2[qn3] = q2[Xt4] = q2[Sn2] = q2[Qt3] = q2[Ae3] = q2[Pr3] = q2[Ar3] = q2[Cr3] = q2[Ir3] = true, q2[we2] = q2[Pe2] = q2[Vt4] = false;
    var zo2 = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, Ko2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Yo2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Zo2 = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Jo2 = parseFloat, Xo = parseInt, ps3 = typeof ge3 == "object" && ge3 && ge3.Object === Object && ge3, Qo2 = typeof self == "object" && self && self.Object === Object && self, k5 = ps3 || Qo2 || Function("return this")(), Tr3 = u4 && !u4.nodeType && u4, lt3 = Tr3 && true && C2 && !C2.nodeType && C2, ds3 = lt3 && lt3.exports === Tr3, Lr3 = ds3 && ps3.process, _n2 = function() {
      try {
        var h6 = lt3 && lt3.require && lt3.require("util").types;
        return h6 || Lr3 && Lr3.binding && Lr3.binding("util");
      } catch {
      }
    }(), gs3 = _n2 && _n2.isArrayBuffer, vs2 = _n2 && _n2.isDate, _s2 = _n2 && _n2.isMap, ms2 = _n2 && _n2.isRegExp, ws2 = _n2 && _n2.isSet, Ps2 = _n2 && _n2.isTypedArray;
    function cn(h6, g6, p5) {
      switch (p5.length) {
        case 0:
          return h6.call(g6);
        case 1:
          return h6.call(g6, p5[0]);
        case 2:
          return h6.call(g6, p5[0], p5[1]);
        case 3:
          return h6.call(g6, p5[0], p5[1], p5[2]);
      }
      return h6.apply(g6, p5);
    }
    function Vo2(h6, g6, p5, A2) {
      for (var S5 = -1, U6 = h6 == null ? 0 : h6.length; ++S5 < U6; ) {
        var X3 = h6[S5];
        g6(A2, X3, p5(X3), h6);
      }
      return A2;
    }
    function mn2(h6, g6) {
      for (var p5 = -1, A2 = h6 == null ? 0 : h6.length; ++p5 < A2 && g6(h6[p5], p5, h6) !== false; ) ;
      return h6;
    }
    function ko2(h6, g6) {
      for (var p5 = h6 == null ? 0 : h6.length; p5-- && g6(h6[p5], p5, h6) !== false; ) ;
      return h6;
    }
    function As2(h6, g6) {
      for (var p5 = -1, A2 = h6 == null ? 0 : h6.length; ++p5 < A2; ) if (!g6(h6[p5], p5, h6)) return false;
      return true;
    }
    function jn2(h6, g6) {
      for (var p5 = -1, A2 = h6 == null ? 0 : h6.length, S5 = 0, U6 = []; ++p5 < A2; ) {
        var X3 = h6[p5];
        g6(X3, p5, h6) && (U6[S5++] = X3);
      }
      return U6;
    }
    function Ee2(h6, g6) {
      var p5 = h6 == null ? 0 : h6.length;
      return !!p5 && Tt3(h6, g6, 0) > -1;
    }
    function Dr3(h6, g6, p5) {
      for (var A2 = -1, S5 = h6 == null ? 0 : h6.length; ++A2 < S5; ) if (p5(g6, h6[A2])) return true;
      return false;
    }
    function G5(h6, g6) {
      for (var p5 = -1, A2 = h6 == null ? 0 : h6.length, S5 = Array(A2); ++p5 < A2; ) S5[p5] = g6(h6[p5], p5, h6);
      return S5;
    }
    function nt3(h6, g6) {
      for (var p5 = -1, A2 = g6.length, S5 = h6.length; ++p5 < A2; ) h6[S5 + p5] = g6[p5];
      return h6;
    }
    function Hr2(h6, g6, p5, A2) {
      var S5 = -1, U6 = h6 == null ? 0 : h6.length;
      for (A2 && U6 && (p5 = h6[++S5]); ++S5 < U6; ) p5 = g6(p5, h6[S5], S5, h6);
      return p5;
    }
    function jo2(h6, g6, p5, A2) {
      var S5 = h6 == null ? 0 : h6.length;
      for (A2 && S5 && (p5 = h6[--S5]); S5--; ) p5 = g6(p5, h6[S5], S5, h6);
      return p5;
    }
    function Nr3(h6, g6) {
      for (var p5 = -1, A2 = h6 == null ? 0 : h6.length; ++p5 < A2; ) if (g6(h6[p5], p5, h6)) return true;
      return false;
    }
    var nf = $r3("length");
    function tf(h6) {
      return h6.split("");
    }
    function ef(h6) {
      return h6.match(fo2) || [];
    }
    function Cs2(h6, g6, p5) {
      var A2;
      return p5(h6, function(S5, U6, X3) {
        if (g6(S5, U6, X3)) return A2 = U6, false;
      }), A2;
    }
    function ye2(h6, g6, p5, A2) {
      for (var S5 = h6.length, U6 = p5 + (A2 ? 1 : -1); A2 ? U6-- : ++U6 < S5; ) if (g6(h6[U6], U6, h6)) return U6;
      return -1;
    }
    function Tt3(h6, g6, p5) {
      return g6 === g6 ? gf(h6, g6, p5) : ye2(h6, Is2, p5);
    }
    function rf(h6, g6, p5, A2) {
      for (var S5 = p5 - 1, U6 = h6.length; ++S5 < U6; ) if (A2(h6[S5], g6)) return S5;
      return -1;
    }
    function Is2(h6) {
      return h6 !== h6;
    }
    function xs2(h6, g6) {
      var p5 = h6 == null ? 0 : h6.length;
      return p5 ? Wr2(h6, g6) / p5 : _e3;
    }
    function $r3(h6) {
      return function(g6) {
        return g6 == null ? i3 : g6[h6];
      };
    }
    function Ur3(h6) {
      return function(g6) {
        return h6 == null ? i3 : h6[g6];
      };
    }
    function Es2(h6, g6, p5, A2, S5) {
      return S5(h6, function(U6, X3, M4) {
        p5 = A2 ? (A2 = false, U6) : g6(p5, U6, X3, M4);
      }), p5;
    }
    function sf(h6, g6) {
      var p5 = h6.length;
      for (h6.sort(g6); p5--; ) h6[p5] = h6[p5].value;
      return h6;
    }
    function Wr2(h6, g6) {
      for (var p5, A2 = -1, S5 = h6.length; ++A2 < S5; ) {
        var U6 = g6(h6[A2]);
        U6 !== i3 && (p5 = p5 === i3 ? U6 : p5 + U6);
      }
      return p5;
    }
    function Fr3(h6, g6) {
      for (var p5 = -1, A2 = Array(h6); ++p5 < h6; ) A2[p5] = g6(p5);
      return A2;
    }
    function uf(h6, g6) {
      return G5(g6, function(p5) {
        return [p5, h6[p5]];
      });
    }
    function ys2(h6) {
      return h6 && h6.slice(0, bs2(h6) + 1).replace(Er2, "");
    }
    function hn(h6) {
      return function(g6) {
        return h6(g6);
      };
    }
    function Mr3(h6, g6) {
      return G5(g6, function(p5) {
        return h6[p5];
      });
    }
    function jt4(h6, g6) {
      return h6.has(g6);
    }
    function Ss2(h6, g6) {
      for (var p5 = -1, A2 = h6.length; ++p5 < A2 && Tt3(g6, h6[p5], 0) > -1; ) ;
      return p5;
    }
    function Os2(h6, g6) {
      for (var p5 = h6.length; p5-- && Tt3(g6, h6[p5], 0) > -1; ) ;
      return p5;
    }
    function af(h6, g6) {
      for (var p5 = h6.length, A2 = 0; p5--; ) h6[p5] === g6 && ++A2;
      return A2;
    }
    var of = Ur3(zo2), ff = Ur3(Ko2);
    function cf(h6) {
      return "\\" + Zo2[h6];
    }
    function hf(h6, g6) {
      return h6 == null ? i3 : h6[g6];
    }
    function Lt4(h6) {
      return Mo2.test(h6);
    }
    function lf(h6) {
      return qo2.test(h6);
    }
    function pf(h6) {
      for (var g6, p5 = []; !(g6 = h6.next()).done; ) p5.push(g6.value);
      return p5;
    }
    function qr2(h6) {
      var g6 = -1, p5 = Array(h6.size);
      return h6.forEach(function(A2, S5) {
        p5[++g6] = [S5, A2];
      }), p5;
    }
    function Rs2(h6, g6) {
      return function(p5) {
        return h6(g6(p5));
      };
    }
    function tt2(h6, g6) {
      for (var p5 = -1, A2 = h6.length, S5 = 0, U6 = []; ++p5 < A2; ) {
        var X3 = h6[p5];
        (X3 === g6 || X3 === It4) && (h6[p5] = It4, U6[S5++] = p5);
      }
      return U6;
    }
    function Se3(h6) {
      var g6 = -1, p5 = Array(h6.size);
      return h6.forEach(function(A2) {
        p5[++g6] = A2;
      }), p5;
    }
    function df(h6) {
      var g6 = -1, p5 = Array(h6.size);
      return h6.forEach(function(A2) {
        p5[++g6] = [A2, A2];
      }), p5;
    }
    function gf(h6, g6, p5) {
      for (var A2 = p5 - 1, S5 = h6.length; ++A2 < S5; ) if (h6[A2] === g6) return A2;
      return -1;
    }
    function vf(h6, g6, p5) {
      for (var A2 = p5 + 1; A2--; ) if (h6[A2] === g6) return A2;
      return A2;
    }
    function Dt4(h6) {
      return Lt4(h6) ? mf(h6) : nf(h6);
    }
    function On2(h6) {
      return Lt4(h6) ? wf(h6) : tf(h6);
    }
    function bs2(h6) {
      for (var g6 = h6.length; g6-- && so2.test(h6.charAt(g6)); ) ;
      return g6;
    }
    var _f = Ur3(Yo2);
    function mf(h6) {
      for (var g6 = br2.lastIndex = 0; br2.test(h6); ) ++g6;
      return g6;
    }
    function wf(h6) {
      return h6.match(br2) || [];
    }
    function Pf(h6) {
      return h6.match(Fo2) || [];
    }
    var Af = function h6(g6) {
      g6 = g6 == null ? k5 : Ht4.defaults(k5.Object(), g6, Ht4.pick(k5, Bo2));
      var p5 = g6.Array, A2 = g6.Date, S5 = g6.Error, U6 = g6.Function, X3 = g6.Math, M4 = g6.Object, Br2 = g6.RegExp, Cf = g6.String, wn = g6.TypeError, Oe2 = p5.prototype, If = U6.prototype, Nt3 = M4.prototype, Re3 = g6["__core-js_shared__"], be2 = If.toString, F3 = Nt3.hasOwnProperty, xf = 0, Ts2 = function() {
        var n3 = /[^.]+$/.exec(Re3 && Re3.keys && Re3.keys.IE_PROTO || "");
        return n3 ? "Symbol(src)_1." + n3 : "";
      }(), Te3 = Nt3.toString, Ef = be2.call(M4), yf = k5._, Sf = Br2("^" + be2.call(F3).replace(xr3, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Le3 = ds3 ? g6.Buffer : i3, et2 = g6.Symbol, De3 = g6.Uint8Array, Ls2 = Le3 ? Le3.allocUnsafe : i3, He3 = Rs2(M4.getPrototypeOf, M4), Ds2 = M4.create, Hs2 = Nt3.propertyIsEnumerable, Ne3 = Oe2.splice, Ns2 = et2 ? et2.isConcatSpreadable : i3, ne2 = et2 ? et2.iterator : i3, pt3 = et2 ? et2.toStringTag : i3, $e3 = function() {
        try {
          var n3 = mt3(M4, "defineProperty");
          return n3({}, "", {}), n3;
        } catch {
        }
      }(), Of = g6.clearTimeout !== k5.clearTimeout && g6.clearTimeout, Rf = A2 && A2.now !== k5.Date.now && A2.now, bf = g6.setTimeout !== k5.setTimeout && g6.setTimeout, Ue3 = X3.ceil, We3 = X3.floor, Gr2 = M4.getOwnPropertySymbols, Tf = Le3 ? Le3.isBuffer : i3, $s2 = g6.isFinite, Lf = Oe2.join, Df = Rs2(M4.keys, M4), Q5 = X3.max, nn = X3.min, Hf = A2.now, Nf = g6.parseInt, Us2 = X3.random, $f = Oe2.reverse, zr3 = mt3(g6, "DataView"), te5 = mt3(g6, "Map"), Kr2 = mt3(g6, "Promise"), $t3 = mt3(g6, "Set"), ee3 = mt3(g6, "WeakMap"), re2 = mt3(M4, "create"), Fe3 = ee3 && new ee3(), Ut3 = {}, Uf = wt4(zr3), Wf = wt4(te5), Ff = wt4(Kr2), Mf = wt4($t3), qf = wt4(ee3), Me3 = et2 ? et2.prototype : i3, ie2 = Me3 ? Me3.valueOf : i3, Ws2 = Me3 ? Me3.toString : i3;
      function a3(n3) {
        if (Y(n3) && !R2(n3) && !(n3 instanceof H3)) {
          if (n3 instanceof Pn2) return n3;
          if (F3.call(n3, "__wrapped__")) return Fu(n3);
        }
        return new Pn2(n3);
      }
      var Wt3 = /* @__PURE__ */ function() {
        function n3() {
        }
        return function(t) {
          if (!K3(t)) return {};
          if (Ds2) return Ds2(t);
          n3.prototype = t;
          var e = new n3();
          return n3.prototype = i3, e;
        };
      }();
      function qe3() {
      }
      function Pn2(n3, t) {
        this.__wrapped__ = n3, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i3;
      }
      a3.templateSettings = { escape: ja, evaluate: no2, interpolate: Zi2, variable: "", imports: { _: a3 } }, a3.prototype = qe3.prototype, a3.prototype.constructor = a3, Pn2.prototype = Wt3(qe3.prototype), Pn2.prototype.constructor = Pn2;
      function H3(n3) {
        this.__wrapped__ = n3, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Nn2, this.__views__ = [];
      }
      function Bf() {
        var n3 = new H3(this.__wrapped__);
        return n3.__actions__ = un(this.__actions__), n3.__dir__ = this.__dir__, n3.__filtered__ = this.__filtered__, n3.__iteratees__ = un(this.__iteratees__), n3.__takeCount__ = this.__takeCount__, n3.__views__ = un(this.__views__), n3;
      }
      function Gf() {
        if (this.__filtered__) {
          var n3 = new H3(this);
          n3.__dir__ = -1, n3.__filtered__ = true;
        } else n3 = this.clone(), n3.__dir__ *= -1;
        return n3;
      }
      function zf() {
        var n3 = this.__wrapped__.value(), t = this.__dir__, e = R2(n3), r2 = t < 0, s2 = e ? n3.length : 0, o = eh(0, s2, this.__views__), f5 = o.start, c4 = o.end, l3 = c4 - f5, v5 = r2 ? c4 : f5 - 1, _5 = this.__iteratees__, m2 = _5.length, w6 = 0, I2 = nn(l3, this.__takeCount__);
        if (!e || !r2 && s2 == l3 && I2 == l3) return ou(n3, this.__actions__);
        var E5 = [];
        n: for (; l3-- && w6 < I2; ) {
          v5 += t;
          for (var T2 = -1, y7 = n3[v5]; ++T2 < m2; ) {
            var D5 = _5[T2], N6 = D5.iteratee, dn2 = D5.type, sn = N6(y7);
            if (dn2 == $a) y7 = sn;
            else if (!sn) {
              if (dn2 == Bi) continue n;
              break n;
            }
          }
          E5[w6++] = y7;
        }
        return E5;
      }
      H3.prototype = Wt3(qe3.prototype), H3.prototype.constructor = H3;
      function dt4(n3) {
        var t = -1, e = n3 == null ? 0 : n3.length;
        for (this.clear(); ++t < e; ) {
          var r2 = n3[t];
          this.set(r2[0], r2[1]);
        }
      }
      function Kf() {
        this.__data__ = re2 ? re2(null) : {}, this.size = 0;
      }
      function Yf(n3) {
        var t = this.has(n3) && delete this.__data__[n3];
        return this.size -= t ? 1 : 0, t;
      }
      function Zf(n3) {
        var t = this.__data__;
        if (re2) {
          var e = t[n3];
          return e === zt4 ? i3 : e;
        }
        return F3.call(t, n3) ? t[n3] : i3;
      }
      function Jf(n3) {
        var t = this.__data__;
        return re2 ? t[n3] !== i3 : F3.call(t, n3);
      }
      function Xf(n3, t) {
        var e = this.__data__;
        return this.size += this.has(n3) ? 0 : 1, e[n3] = re2 && t === i3 ? zt4 : t, this;
      }
      dt4.prototype.clear = Kf, dt4.prototype.delete = Yf, dt4.prototype.get = Zf, dt4.prototype.has = Jf, dt4.prototype.set = Xf;
      function Bn2(n3) {
        var t = -1, e = n3 == null ? 0 : n3.length;
        for (this.clear(); ++t < e; ) {
          var r2 = n3[t];
          this.set(r2[0], r2[1]);
        }
      }
      function Qf() {
        this.__data__ = [], this.size = 0;
      }
      function Vf(n3) {
        var t = this.__data__, e = Be3(t, n3);
        if (e < 0) return false;
        var r2 = t.length - 1;
        return e == r2 ? t.pop() : Ne3.call(t, e, 1), --this.size, true;
      }
      function kf(n3) {
        var t = this.__data__, e = Be3(t, n3);
        return e < 0 ? i3 : t[e][1];
      }
      function jf(n3) {
        return Be3(this.__data__, n3) > -1;
      }
      function nc(n3, t) {
        var e = this.__data__, r2 = Be3(e, n3);
        return r2 < 0 ? (++this.size, e.push([n3, t])) : e[r2][1] = t, this;
      }
      Bn2.prototype.clear = Qf, Bn2.prototype.delete = Vf, Bn2.prototype.get = kf, Bn2.prototype.has = jf, Bn2.prototype.set = nc;
      function Gn2(n3) {
        var t = -1, e = n3 == null ? 0 : n3.length;
        for (this.clear(); ++t < e; ) {
          var r2 = n3[t];
          this.set(r2[0], r2[1]);
        }
      }
      function tc() {
        this.size = 0, this.__data__ = { hash: new dt4(), map: new (te5 || Bn2)(), string: new dt4() };
      }
      function ec(n3) {
        var t = nr4(this, n3).delete(n3);
        return this.size -= t ? 1 : 0, t;
      }
      function rc(n3) {
        return nr4(this, n3).get(n3);
      }
      function ic(n3) {
        return nr4(this, n3).has(n3);
      }
      function sc(n3, t) {
        var e = nr4(this, n3), r2 = e.size;
        return e.set(n3, t), this.size += e.size == r2 ? 0 : 1, this;
      }
      Gn2.prototype.clear = tc, Gn2.prototype.delete = ec, Gn2.prototype.get = rc, Gn2.prototype.has = ic, Gn2.prototype.set = sc;
      function gt4(n3) {
        var t = -1, e = n3 == null ? 0 : n3.length;
        for (this.__data__ = new Gn2(); ++t < e; ) this.add(n3[t]);
      }
      function uc(n3) {
        return this.__data__.set(n3, zt4), this;
      }
      function ac(n3) {
        return this.__data__.has(n3);
      }
      gt4.prototype.add = gt4.prototype.push = uc, gt4.prototype.has = ac;
      function Rn2(n3) {
        var t = this.__data__ = new Bn2(n3);
        this.size = t.size;
      }
      function oc() {
        this.__data__ = new Bn2(), this.size = 0;
      }
      function fc(n3) {
        var t = this.__data__, e = t.delete(n3);
        return this.size = t.size, e;
      }
      function cc(n3) {
        return this.__data__.get(n3);
      }
      function hc(n3) {
        return this.__data__.has(n3);
      }
      function lc(n3, t) {
        var e = this.__data__;
        if (e instanceof Bn2) {
          var r2 = e.__data__;
          if (!te5 || r2.length < P4 - 1) return r2.push([n3, t]), this.size = ++e.size, this;
          e = this.__data__ = new Gn2(r2);
        }
        return e.set(n3, t), this.size = e.size, this;
      }
      Rn2.prototype.clear = oc, Rn2.prototype.delete = fc, Rn2.prototype.get = cc, Rn2.prototype.has = hc, Rn2.prototype.set = lc;
      function Fs2(n3, t) {
        var e = R2(n3), r2 = !e && Pt3(n3), s2 = !e && !r2 && at3(n3), o = !e && !r2 && !s2 && Bt4(n3), f5 = e || r2 || s2 || o, c4 = f5 ? Fr3(n3.length, Cf) : [], l3 = c4.length;
        for (var v5 in n3) (t || F3.call(n3, v5)) && !(f5 && (v5 == "length" || s2 && (v5 == "offset" || v5 == "parent") || o && (v5 == "buffer" || v5 == "byteLength" || v5 == "byteOffset") || Zn2(v5, l3))) && c4.push(v5);
        return c4;
      }
      function Ms2(n3) {
        var t = n3.length;
        return t ? n3[ei(0, t - 1)] : i3;
      }
      function pc(n3, t) {
        return tr4(un(n3), vt4(t, 0, n3.length));
      }
      function dc(n3) {
        return tr4(un(n3));
      }
      function Yr2(n3, t, e) {
        (e !== i3 && !bn2(n3[t], e) || e === i3 && !(t in n3)) && zn2(n3, t, e);
      }
      function se(n3, t, e) {
        var r2 = n3[t];
        (!(F3.call(n3, t) && bn2(r2, e)) || e === i3 && !(t in n3)) && zn2(n3, t, e);
      }
      function Be3(n3, t) {
        for (var e = n3.length; e--; ) if (bn2(n3[e][0], t)) return e;
        return -1;
      }
      function gc(n3, t, e, r2) {
        return rt4(n3, function(s2, o, f5) {
          t(r2, s2, e(s2), f5);
        }), r2;
      }
      function qs2(n3, t) {
        return n3 && Un3(t, V3(t), n3);
      }
      function vc(n3, t) {
        return n3 && Un3(t, on2(t), n3);
      }
      function zn2(n3, t, e) {
        t == "__proto__" && $e3 ? $e3(n3, t, { configurable: true, enumerable: true, value: e, writable: true }) : n3[t] = e;
      }
      function Zr2(n3, t) {
        for (var e = -1, r2 = t.length, s2 = p5(r2), o = n3 == null; ++e < r2; ) s2[e] = o ? i3 : Si(n3, t[e]);
        return s2;
      }
      function vt4(n3, t, e) {
        return n3 === n3 && (e !== i3 && (n3 = n3 <= e ? n3 : e), t !== i3 && (n3 = n3 >= t ? n3 : t)), n3;
      }
      function An2(n3, t, e, r2, s2, o) {
        var f5, c4 = t & Ln3, l3 = t & Fn3, v5 = t & xt4;
        if (e && (f5 = s2 ? e(n3, r2, s2, o) : e(n3)), f5 !== i3) return f5;
        if (!K3(n3)) return n3;
        var _5 = R2(n3);
        if (_5) {
          if (f5 = ih(n3), !c4) return un(n3, f5);
        } else {
          var m2 = tn(n3), w6 = m2 == Pe2 || m2 == Gi2;
          if (at3(n3)) return hu(n3, c4);
          if (m2 == qn3 || m2 == Ot3 || w6 && !s2) {
            if (f5 = l3 || w6 ? {} : bu(n3), !c4) return l3 ? Zc(n3, vc(f5, n3)) : Yc(n3, qs2(f5, n3));
          } else {
            if (!q2[m2]) return s2 ? n3 : {};
            f5 = sh(n3, m2, c4);
          }
        }
        o || (o = new Rn2());
        var I2 = o.get(n3);
        if (I2) return I2;
        o.set(n3, f5), sa(n3) ? n3.forEach(function(y7) {
          f5.add(An2(y7, t, e, y7, n3, o));
        }) : ra(n3) && n3.forEach(function(y7, D5) {
          f5.set(D5, An2(y7, t, e, D5, n3, o));
        });
        var E5 = v5 ? l3 ? pi : li : l3 ? on2 : V3, T2 = _5 ? i3 : E5(n3);
        return mn2(T2 || n3, function(y7, D5) {
          T2 && (D5 = y7, y7 = n3[D5]), se(f5, D5, An2(y7, t, e, D5, n3, o));
        }), f5;
      }
      function _c(n3) {
        var t = V3(n3);
        return function(e) {
          return Bs2(e, n3, t);
        };
      }
      function Bs2(n3, t, e) {
        var r2 = e.length;
        if (n3 == null) return !r2;
        for (n3 = M4(n3); r2--; ) {
          var s2 = e[r2], o = t[s2], f5 = n3[s2];
          if (f5 === i3 && !(s2 in n3) || !o(f5)) return false;
        }
        return true;
      }
      function Gs2(n3, t, e) {
        if (typeof n3 != "function") throw new wn($4);
        return le4(function() {
          n3.apply(i3, e);
        }, t);
      }
      function ue3(n3, t, e, r2) {
        var s2 = -1, o = Ee2, f5 = true, c4 = n3.length, l3 = [], v5 = t.length;
        if (!c4) return l3;
        e && (t = G5(t, hn(e))), r2 ? (o = Dr3, f5 = false) : t.length >= P4 && (o = jt4, f5 = false, t = new gt4(t));
        n: for (; ++s2 < c4; ) {
          var _5 = n3[s2], m2 = e == null ? _5 : e(_5);
          if (_5 = r2 || _5 !== 0 ? _5 : 0, f5 && m2 === m2) {
            for (var w6 = v5; w6--; ) if (t[w6] === m2) continue n;
            l3.push(_5);
          } else o(t, m2, r2) || l3.push(_5);
        }
        return l3;
      }
      var rt4 = vu($n2), zs2 = vu(Xr2, true);
      function mc(n3, t) {
        var e = true;
        return rt4(n3, function(r2, s2, o) {
          return e = !!t(r2, s2, o), e;
        }), e;
      }
      function Ge3(n3, t, e) {
        for (var r2 = -1, s2 = n3.length; ++r2 < s2; ) {
          var o = n3[r2], f5 = t(o);
          if (f5 != null && (c4 === i3 ? f5 === f5 && !pn(f5) : e(f5, c4))) var c4 = f5, l3 = o;
        }
        return l3;
      }
      function wc(n3, t, e, r2) {
        var s2 = n3.length;
        for (e = b6(e), e < 0 && (e = -e > s2 ? 0 : s2 + e), r2 = r2 === i3 || r2 > s2 ? s2 : b6(r2), r2 < 0 && (r2 += s2), r2 = e > r2 ? 0 : aa(r2); e < r2; ) n3[e++] = t;
        return n3;
      }
      function Ks2(n3, t) {
        var e = [];
        return rt4(n3, function(r2, s2, o) {
          t(r2, s2, o) && e.push(r2);
        }), e;
      }
      function j5(n3, t, e, r2, s2) {
        var o = -1, f5 = n3.length;
        for (e || (e = ah), s2 || (s2 = []); ++o < f5; ) {
          var c4 = n3[o];
          t > 0 && e(c4) ? t > 1 ? j5(c4, t - 1, e, r2, s2) : nt3(s2, c4) : r2 || (s2[s2.length] = c4);
        }
        return s2;
      }
      var Jr2 = _u(), Ys2 = _u(true);
      function $n2(n3, t) {
        return n3 && Jr2(n3, t, V3);
      }
      function Xr2(n3, t) {
        return n3 && Ys2(n3, t, V3);
      }
      function ze2(n3, t) {
        return jn2(t, function(e) {
          return Jn3(n3[e]);
        });
      }
      function _t3(n3, t) {
        t = st2(t, n3);
        for (var e = 0, r2 = t.length; n3 != null && e < r2; ) n3 = n3[Wn2(t[e++])];
        return e && e == r2 ? n3 : i3;
      }
      function Zs2(n3, t, e) {
        var r2 = t(n3);
        return R2(n3) ? r2 : nt3(r2, e(n3));
      }
      function en3(n3) {
        return n3 == null ? n3 === i3 ? Ya : za : pt3 && pt3 in M4(n3) ? th(n3) : dh(n3);
      }
      function Qr2(n3, t) {
        return n3 > t;
      }
      function Pc(n3, t) {
        return n3 != null && F3.call(n3, t);
      }
      function Ac(n3, t) {
        return n3 != null && t in M4(n3);
      }
      function Cc(n3, t, e) {
        return n3 >= nn(t, e) && n3 < Q5(t, e);
      }
      function Vr2(n3, t, e) {
        for (var r2 = e ? Dr3 : Ee2, s2 = n3[0].length, o = n3.length, f5 = o, c4 = p5(o), l3 = 1 / 0, v5 = []; f5--; ) {
          var _5 = n3[f5];
          f5 && t && (_5 = G5(_5, hn(t))), l3 = nn(_5.length, l3), c4[f5] = !e && (t || s2 >= 120 && _5.length >= 120) ? new gt4(f5 && _5) : i3;
        }
        _5 = n3[0];
        var m2 = -1, w6 = c4[0];
        n: for (; ++m2 < s2 && v5.length < l3; ) {
          var I2 = _5[m2], E5 = t ? t(I2) : I2;
          if (I2 = e || I2 !== 0 ? I2 : 0, !(w6 ? jt4(w6, E5) : r2(v5, E5, e))) {
            for (f5 = o; --f5; ) {
              var T2 = c4[f5];
              if (!(T2 ? jt4(T2, E5) : r2(n3[f5], E5, e))) continue n;
            }
            w6 && w6.push(E5), v5.push(I2);
          }
        }
        return v5;
      }
      function Ic(n3, t, e, r2) {
        return $n2(n3, function(s2, o, f5) {
          t(r2, e(s2), o, f5);
        }), r2;
      }
      function ae2(n3, t, e) {
        t = st2(t, n3), n3 = Hu(n3, t);
        var r2 = n3 == null ? n3 : n3[Wn2(In2(t))];
        return r2 == null ? i3 : cn(r2, n3, e);
      }
      function Js2(n3) {
        return Y(n3) && en3(n3) == Ot3;
      }
      function xc(n3) {
        return Y(n3) && en3(n3) == kt4;
      }
      function Ec(n3) {
        return Y(n3) && en3(n3) == Zt2;
      }
      function oe3(n3, t, e, r2, s2) {
        return n3 === t ? true : n3 == null || t == null || !Y(n3) && !Y(t) ? n3 !== n3 && t !== t : yc(n3, t, e, r2, oe3, s2);
      }
      function yc(n3, t, e, r2, s2, o) {
        var f5 = R2(n3), c4 = R2(t), l3 = f5 ? me2 : tn(n3), v5 = c4 ? me2 : tn(t);
        l3 = l3 == Ot3 ? qn3 : l3, v5 = v5 == Ot3 ? qn3 : v5;
        var _5 = l3 == qn3, m2 = v5 == qn3, w6 = l3 == v5;
        if (w6 && at3(n3)) {
          if (!at3(t)) return false;
          f5 = true, _5 = false;
        }
        if (w6 && !_5) return o || (o = new Rn2()), f5 || Bt4(n3) ? Su(n3, t, e, r2, s2, o) : jc(n3, t, l3, e, r2, s2, o);
        if (!(e & Et4)) {
          var I2 = _5 && F3.call(n3, "__wrapped__"), E5 = m2 && F3.call(t, "__wrapped__");
          if (I2 || E5) {
            var T2 = I2 ? n3.value() : n3, y7 = E5 ? t.value() : t;
            return o || (o = new Rn2()), s2(T2, y7, e, r2, o);
          }
        }
        return w6 ? (o || (o = new Rn2()), nh(n3, t, e, r2, s2, o)) : false;
      }
      function Sc(n3) {
        return Y(n3) && tn(n3) == yn2;
      }
      function kr2(n3, t, e, r2) {
        var s2 = e.length, o = s2, f5 = !r2;
        if (n3 == null) return !o;
        for (n3 = M4(n3); s2--; ) {
          var c4 = e[s2];
          if (f5 && c4[2] ? c4[1] !== n3[c4[0]] : !(c4[0] in n3)) return false;
        }
        for (; ++s2 < o; ) {
          c4 = e[s2];
          var l3 = c4[0], v5 = n3[l3], _5 = c4[1];
          if (f5 && c4[2]) {
            if (v5 === i3 && !(l3 in n3)) return false;
          } else {
            var m2 = new Rn2();
            if (r2) var w6 = r2(v5, _5, l3, n3, t, m2);
            if (!(w6 === i3 ? oe3(_5, v5, Et4 | ve3, r2, m2) : w6)) return false;
          }
        }
        return true;
      }
      function Xs2(n3) {
        if (!K3(n3) || fh(n3)) return false;
        var t = Jn3(n3) ? Sf : vo2;
        return t.test(wt4(n3));
      }
      function Oc(n3) {
        return Y(n3) && en3(n3) == Xt4;
      }
      function Rc(n3) {
        return Y(n3) && tn(n3) == Sn2;
      }
      function bc(n3) {
        return Y(n3) && ar3(n3.length) && !!B3[en3(n3)];
      }
      function Qs2(n3) {
        return typeof n3 == "function" ? n3 : n3 == null ? fn2 : typeof n3 == "object" ? R2(n3) ? js2(n3[0], n3[1]) : ks2(n3) : ma(n3);
      }
      function jr2(n3) {
        if (!he4(n3)) return Df(n3);
        var t = [];
        for (var e in M4(n3)) F3.call(n3, e) && e != "constructor" && t.push(e);
        return t;
      }
      function Tc(n3) {
        if (!K3(n3)) return ph(n3);
        var t = he4(n3), e = [];
        for (var r2 in n3) r2 == "constructor" && (t || !F3.call(n3, r2)) || e.push(r2);
        return e;
      }
      function ni(n3, t) {
        return n3 < t;
      }
      function Vs2(n3, t) {
        var e = -1, r2 = an(n3) ? p5(n3.length) : [];
        return rt4(n3, function(s2, o, f5) {
          r2[++e] = t(s2, o, f5);
        }), r2;
      }
      function ks2(n3) {
        var t = gi(n3);
        return t.length == 1 && t[0][2] ? Lu(t[0][0], t[0][1]) : function(e) {
          return e === n3 || kr2(e, n3, t);
        };
      }
      function js2(n3, t) {
        return _i(n3) && Tu(t) ? Lu(Wn2(n3), t) : function(e) {
          var r2 = Si(e, n3);
          return r2 === i3 && r2 === t ? Oi(e, n3) : oe3(t, r2, Et4 | ve3);
        };
      }
      function Ke3(n3, t, e, r2, s2) {
        n3 !== t && Jr2(t, function(o, f5) {
          if (s2 || (s2 = new Rn2()), K3(o)) Lc(n3, t, f5, e, Ke3, r2, s2);
          else {
            var c4 = r2 ? r2(wi(n3, f5), o, f5 + "", n3, t, s2) : i3;
            c4 === i3 && (c4 = o), Yr2(n3, f5, c4);
          }
        }, on2);
      }
      function Lc(n3, t, e, r2, s2, o, f5) {
        var c4 = wi(n3, e), l3 = wi(t, e), v5 = f5.get(l3);
        if (v5) {
          Yr2(n3, e, v5);
          return;
        }
        var _5 = o ? o(c4, l3, e + "", n3, t, f5) : i3, m2 = _5 === i3;
        if (m2) {
          var w6 = R2(l3), I2 = !w6 && at3(l3), E5 = !w6 && !I2 && Bt4(l3);
          _5 = l3, w6 || I2 || E5 ? R2(c4) ? _5 = c4 : Z2(c4) ? _5 = un(c4) : I2 ? (m2 = false, _5 = hu(l3, true)) : E5 ? (m2 = false, _5 = lu(l3, true)) : _5 = [] : pe4(l3) || Pt3(l3) ? (_5 = c4, Pt3(c4) ? _5 = oa(c4) : (!K3(c4) || Jn3(c4)) && (_5 = bu(l3))) : m2 = false;
        }
        m2 && (f5.set(l3, _5), s2(_5, l3, r2, o, f5), f5.delete(l3)), Yr2(n3, e, _5);
      }
      function nu(n3, t) {
        var e = n3.length;
        if (e) return t += t < 0 ? e : 0, Zn2(t, e) ? n3[t] : i3;
      }
      function tu(n3, t, e) {
        t.length ? t = G5(t, function(o) {
          return R2(o) ? function(f5) {
            return _t3(f5, o.length === 1 ? o[0] : o);
          } : o;
        }) : t = [fn2];
        var r2 = -1;
        t = G5(t, hn(x4()));
        var s2 = Vs2(n3, function(o, f5, c4) {
          var l3 = G5(t, function(v5) {
            return v5(o);
          });
          return { criteria: l3, index: ++r2, value: o };
        });
        return sf(s2, function(o, f5) {
          return Kc(o, f5, e);
        });
      }
      function Dc(n3, t) {
        return eu(n3, t, function(e, r2) {
          return Oi(n3, r2);
        });
      }
      function eu(n3, t, e) {
        for (var r2 = -1, s2 = t.length, o = {}; ++r2 < s2; ) {
          var f5 = t[r2], c4 = _t3(n3, f5);
          e(c4, f5) && fe2(o, st2(f5, n3), c4);
        }
        return o;
      }
      function Hc(n3) {
        return function(t) {
          return _t3(t, n3);
        };
      }
      function ti(n3, t, e, r2) {
        var s2 = r2 ? rf : Tt3, o = -1, f5 = t.length, c4 = n3;
        for (n3 === t && (t = un(t)), e && (c4 = G5(n3, hn(e))); ++o < f5; ) for (var l3 = 0, v5 = t[o], _5 = e ? e(v5) : v5; (l3 = s2(c4, _5, l3, r2)) > -1; ) c4 !== n3 && Ne3.call(c4, l3, 1), Ne3.call(n3, l3, 1);
        return n3;
      }
      function ru(n3, t) {
        for (var e = n3 ? t.length : 0, r2 = e - 1; e--; ) {
          var s2 = t[e];
          if (e == r2 || s2 !== o) {
            var o = s2;
            Zn2(s2) ? Ne3.call(n3, s2, 1) : si(n3, s2);
          }
        }
        return n3;
      }
      function ei(n3, t) {
        return n3 + We3(Us2() * (t - n3 + 1));
      }
      function Nc(n3, t, e, r2) {
        for (var s2 = -1, o = Q5(Ue3((t - n3) / (e || 1)), 0), f5 = p5(o); o--; ) f5[r2 ? o : ++s2] = n3, n3 += e;
        return f5;
      }
      function ri(n3, t) {
        var e = "";
        if (!n3 || t < 1 || t > kn3) return e;
        do
          t % 2 && (e += n3), t = We3(t / 2), t && (n3 += n3);
        while (t);
        return e;
      }
      function L3(n3, t) {
        return Pi(Du(n3, t, fn2), n3 + "");
      }
      function $c(n3) {
        return Ms2(Gt4(n3));
      }
      function Uc(n3, t) {
        var e = Gt4(n3);
        return tr4(e, vt4(t, 0, e.length));
      }
      function fe2(n3, t, e, r2) {
        if (!K3(n3)) return n3;
        t = st2(t, n3);
        for (var s2 = -1, o = t.length, f5 = o - 1, c4 = n3; c4 != null && ++s2 < o; ) {
          var l3 = Wn2(t[s2]), v5 = e;
          if (l3 === "__proto__" || l3 === "constructor" || l3 === "prototype") return n3;
          if (s2 != f5) {
            var _5 = c4[l3];
            v5 = r2 ? r2(_5, l3, c4) : i3, v5 === i3 && (v5 = K3(_5) ? _5 : Zn2(t[s2 + 1]) ? [] : {});
          }
          se(c4, l3, v5), c4 = c4[l3];
        }
        return n3;
      }
      var iu = Fe3 ? function(n3, t) {
        return Fe3.set(n3, t), n3;
      } : fn2, Wc = $e3 ? function(n3, t) {
        return $e3(n3, "toString", { configurable: true, enumerable: false, value: bi(t), writable: true });
      } : fn2;
      function Fc(n3) {
        return tr4(Gt4(n3));
      }
      function Cn2(n3, t, e) {
        var r2 = -1, s2 = n3.length;
        t < 0 && (t = -t > s2 ? 0 : s2 + t), e = e > s2 ? s2 : e, e < 0 && (e += s2), s2 = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var o = p5(s2); ++r2 < s2; ) o[r2] = n3[r2 + t];
        return o;
      }
      function Mc(n3, t) {
        var e;
        return rt4(n3, function(r2, s2, o) {
          return e = t(r2, s2, o), !e;
        }), !!e;
      }
      function Ye3(n3, t, e) {
        var r2 = 0, s2 = n3 == null ? r2 : n3.length;
        if (typeof t == "number" && t === t && s2 <= Ma) {
          for (; r2 < s2; ) {
            var o = r2 + s2 >>> 1, f5 = n3[o];
            f5 !== null && !pn(f5) && (e ? f5 <= t : f5 < t) ? r2 = o + 1 : s2 = o;
          }
          return s2;
        }
        return ii(n3, t, fn2, e);
      }
      function ii(n3, t, e, r2) {
        var s2 = 0, o = n3 == null ? 0 : n3.length;
        if (o === 0) return 0;
        t = e(t);
        for (var f5 = t !== t, c4 = t === null, l3 = pn(t), v5 = t === i3; s2 < o; ) {
          var _5 = We3((s2 + o) / 2), m2 = e(n3[_5]), w6 = m2 !== i3, I2 = m2 === null, E5 = m2 === m2, T2 = pn(m2);
          if (f5) var y7 = r2 || E5;
          else v5 ? y7 = E5 && (r2 || w6) : c4 ? y7 = E5 && w6 && (r2 || !I2) : l3 ? y7 = E5 && w6 && !I2 && (r2 || !T2) : I2 || T2 ? y7 = false : y7 = r2 ? m2 <= t : m2 < t;
          y7 ? s2 = _5 + 1 : o = _5;
        }
        return nn(o, Fa);
      }
      function su(n3, t) {
        for (var e = -1, r2 = n3.length, s2 = 0, o = []; ++e < r2; ) {
          var f5 = n3[e], c4 = t ? t(f5) : f5;
          if (!e || !bn2(c4, l3)) {
            var l3 = c4;
            o[s2++] = f5 === 0 ? 0 : f5;
          }
        }
        return o;
      }
      function uu(n3) {
        return typeof n3 == "number" ? n3 : pn(n3) ? _e3 : +n3;
      }
      function ln2(n3) {
        if (typeof n3 == "string") return n3;
        if (R2(n3)) return G5(n3, ln2) + "";
        if (pn(n3)) return Ws2 ? Ws2.call(n3) : "";
        var t = n3 + "";
        return t == "0" && 1 / n3 == -ht4 ? "-0" : t;
      }
      function it3(n3, t, e) {
        var r2 = -1, s2 = Ee2, o = n3.length, f5 = true, c4 = [], l3 = c4;
        if (e) f5 = false, s2 = Dr3;
        else if (o >= P4) {
          var v5 = t ? null : Vc(n3);
          if (v5) return Se3(v5);
          f5 = false, s2 = jt4, l3 = new gt4();
        } else l3 = t ? [] : c4;
        n: for (; ++r2 < o; ) {
          var _5 = n3[r2], m2 = t ? t(_5) : _5;
          if (_5 = e || _5 !== 0 ? _5 : 0, f5 && m2 === m2) {
            for (var w6 = l3.length; w6--; ) if (l3[w6] === m2) continue n;
            t && l3.push(m2), c4.push(_5);
          } else s2(l3, m2, e) || (l3 !== c4 && l3.push(m2), c4.push(_5));
        }
        return c4;
      }
      function si(n3, t) {
        return t = st2(t, n3), n3 = Hu(n3, t), n3 == null || delete n3[Wn2(In2(t))];
      }
      function au(n3, t, e, r2) {
        return fe2(n3, t, e(_t3(n3, t)), r2);
      }
      function Ze3(n3, t, e, r2) {
        for (var s2 = n3.length, o = r2 ? s2 : -1; (r2 ? o-- : ++o < s2) && t(n3[o], o, n3); ) ;
        return e ? Cn2(n3, r2 ? 0 : o, r2 ? o + 1 : s2) : Cn2(n3, r2 ? o + 1 : 0, r2 ? s2 : o);
      }
      function ou(n3, t) {
        var e = n3;
        return e instanceof H3 && (e = e.value()), Hr2(t, function(r2, s2) {
          return s2.func.apply(s2.thisArg, nt3([r2], s2.args));
        }, e);
      }
      function ui(n3, t, e) {
        var r2 = n3.length;
        if (r2 < 2) return r2 ? it3(n3[0]) : [];
        for (var s2 = -1, o = p5(r2); ++s2 < r2; ) for (var f5 = n3[s2], c4 = -1; ++c4 < r2; ) c4 != s2 && (o[s2] = ue3(o[s2] || f5, n3[c4], t, e));
        return it3(j5(o, 1), t, e);
      }
      function fu(n3, t, e) {
        for (var r2 = -1, s2 = n3.length, o = t.length, f5 = {}; ++r2 < s2; ) {
          var c4 = r2 < o ? t[r2] : i3;
          e(f5, n3[r2], c4);
        }
        return f5;
      }
      function ai(n3) {
        return Z2(n3) ? n3 : [];
      }
      function oi(n3) {
        return typeof n3 == "function" ? n3 : fn2;
      }
      function st2(n3, t) {
        return R2(n3) ? n3 : _i(n3, t) ? [n3] : Wu(W4(n3));
      }
      var qc = L3;
      function ut4(n3, t, e) {
        var r2 = n3.length;
        return e = e === i3 ? r2 : e, !t && e >= r2 ? n3 : Cn2(n3, t, e);
      }
      var cu = Of || function(n3) {
        return k5.clearTimeout(n3);
      };
      function hu(n3, t) {
        if (t) return n3.slice();
        var e = n3.length, r2 = Ls2 ? Ls2(e) : new n3.constructor(e);
        return n3.copy(r2), r2;
      }
      function fi(n3) {
        var t = new n3.constructor(n3.byteLength);
        return new De3(t).set(new De3(n3)), t;
      }
      function Bc(n3, t) {
        var e = t ? fi(n3.buffer) : n3.buffer;
        return new n3.constructor(e, n3.byteOffset, n3.byteLength);
      }
      function Gc(n3) {
        var t = new n3.constructor(n3.source, Ji2.exec(n3));
        return t.lastIndex = n3.lastIndex, t;
      }
      function zc(n3) {
        return ie2 ? M4(ie2.call(n3)) : {};
      }
      function lu(n3, t) {
        var e = t ? fi(n3.buffer) : n3.buffer;
        return new n3.constructor(e, n3.byteOffset, n3.length);
      }
      function pu(n3, t) {
        if (n3 !== t) {
          var e = n3 !== i3, r2 = n3 === null, s2 = n3 === n3, o = pn(n3), f5 = t !== i3, c4 = t === null, l3 = t === t, v5 = pn(t);
          if (!c4 && !v5 && !o && n3 > t || o && f5 && l3 && !c4 && !v5 || r2 && f5 && l3 || !e && l3 || !s2) return 1;
          if (!r2 && !o && !v5 && n3 < t || v5 && e && s2 && !r2 && !o || c4 && e && s2 || !f5 && s2 || !l3) return -1;
        }
        return 0;
      }
      function Kc(n3, t, e) {
        for (var r2 = -1, s2 = n3.criteria, o = t.criteria, f5 = s2.length, c4 = e.length; ++r2 < f5; ) {
          var l3 = pu(s2[r2], o[r2]);
          if (l3) {
            if (r2 >= c4) return l3;
            var v5 = e[r2];
            return l3 * (v5 == "desc" ? -1 : 1);
          }
        }
        return n3.index - t.index;
      }
      function du(n3, t, e, r2) {
        for (var s2 = -1, o = n3.length, f5 = e.length, c4 = -1, l3 = t.length, v5 = Q5(o - f5, 0), _5 = p5(l3 + v5), m2 = !r2; ++c4 < l3; ) _5[c4] = t[c4];
        for (; ++s2 < f5; ) (m2 || s2 < o) && (_5[e[s2]] = n3[s2]);
        for (; v5--; ) _5[c4++] = n3[s2++];
        return _5;
      }
      function gu(n3, t, e, r2) {
        for (var s2 = -1, o = n3.length, f5 = -1, c4 = e.length, l3 = -1, v5 = t.length, _5 = Q5(o - c4, 0), m2 = p5(_5 + v5), w6 = !r2; ++s2 < _5; ) m2[s2] = n3[s2];
        for (var I2 = s2; ++l3 < v5; ) m2[I2 + l3] = t[l3];
        for (; ++f5 < c4; ) (w6 || s2 < o) && (m2[I2 + e[f5]] = n3[s2++]);
        return m2;
      }
      function un(n3, t) {
        var e = -1, r2 = n3.length;
        for (t || (t = p5(r2)); ++e < r2; ) t[e] = n3[e];
        return t;
      }
      function Un3(n3, t, e, r2) {
        var s2 = !e;
        e || (e = {});
        for (var o = -1, f5 = t.length; ++o < f5; ) {
          var c4 = t[o], l3 = r2 ? r2(e[c4], n3[c4], c4, e, n3) : i3;
          l3 === i3 && (l3 = n3[c4]), s2 ? zn2(e, c4, l3) : se(e, c4, l3);
        }
        return e;
      }
      function Yc(n3, t) {
        return Un3(n3, vi(n3), t);
      }
      function Zc(n3, t) {
        return Un3(n3, Ou(n3), t);
      }
      function Je4(n3, t) {
        return function(e, r2) {
          var s2 = R2(e) ? Vo2 : gc, o = t ? t() : {};
          return s2(e, n3, x4(r2, 2), o);
        };
      }
      function Ft4(n3) {
        return L3(function(t, e) {
          var r2 = -1, s2 = e.length, o = s2 > 1 ? e[s2 - 1] : i3, f5 = s2 > 2 ? e[2] : i3;
          for (o = n3.length > 3 && typeof o == "function" ? (s2--, o) : i3, f5 && rn2(e[0], e[1], f5) && (o = s2 < 3 ? i3 : o, s2 = 1), t = M4(t); ++r2 < s2; ) {
            var c4 = e[r2];
            c4 && n3(t, c4, r2, o);
          }
          return t;
        });
      }
      function vu(n3, t) {
        return function(e, r2) {
          if (e == null) return e;
          if (!an(e)) return n3(e, r2);
          for (var s2 = e.length, o = t ? s2 : -1, f5 = M4(e); (t ? o-- : ++o < s2) && r2(f5[o], o, f5) !== false; ) ;
          return e;
        };
      }
      function _u(n3) {
        return function(t, e, r2) {
          for (var s2 = -1, o = M4(t), f5 = r2(t), c4 = f5.length; c4--; ) {
            var l3 = f5[n3 ? c4 : ++s2];
            if (e(o[l3], l3, o) === false) break;
          }
          return t;
        };
      }
      function Jc(n3, t, e) {
        var r2 = t & vn2, s2 = ce3(n3);
        function o() {
          var f5 = this && this !== k5 && this instanceof o ? s2 : n3;
          return f5.apply(r2 ? e : this, arguments);
        }
        return o;
      }
      function mu(n3) {
        return function(t) {
          t = W4(t);
          var e = Lt4(t) ? On2(t) : i3, r2 = e ? e[0] : t.charAt(0), s2 = e ? ut4(e, 1).join("") : t.slice(1);
          return r2[n3]() + s2;
        };
      }
      function Mt4(n3) {
        return function(t) {
          return Hr2(va(ga(t).replace(Uo2, "")), n3, "");
        };
      }
      function ce3(n3) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n3();
            case 1:
              return new n3(t[0]);
            case 2:
              return new n3(t[0], t[1]);
            case 3:
              return new n3(t[0], t[1], t[2]);
            case 4:
              return new n3(t[0], t[1], t[2], t[3]);
            case 5:
              return new n3(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n3(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n3(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var e = Wt3(n3.prototype), r2 = n3.apply(e, t);
          return K3(r2) ? r2 : e;
        };
      }
      function Xc(n3, t, e) {
        var r2 = ce3(n3);
        function s2() {
          for (var o = arguments.length, f5 = p5(o), c4 = o, l3 = qt4(s2); c4--; ) f5[c4] = arguments[c4];
          var v5 = o < 3 && f5[0] !== l3 && f5[o - 1] !== l3 ? [] : tt2(f5, l3);
          if (o -= v5.length, o < e) return Iu(n3, t, Xe4, s2.placeholder, i3, f5, v5, i3, i3, e - o);
          var _5 = this && this !== k5 && this instanceof s2 ? r2 : n3;
          return cn(_5, this, f5);
        }
        return s2;
      }
      function wu(n3) {
        return function(t, e, r2) {
          var s2 = M4(t);
          if (!an(t)) {
            var o = x4(e, 3);
            t = V3(t), e = function(c4) {
              return o(s2[c4], c4, s2);
            };
          }
          var f5 = n3(t, e, r2);
          return f5 > -1 ? s2[o ? t[f5] : f5] : i3;
        };
      }
      function Pu(n3) {
        return Yn2(function(t) {
          var e = t.length, r2 = e, s2 = Pn2.prototype.thru;
          for (n3 && t.reverse(); r2--; ) {
            var o = t[r2];
            if (typeof o != "function") throw new wn($4);
            if (s2 && !f5 && je4(o) == "wrapper") var f5 = new Pn2([], true);
          }
          for (r2 = f5 ? r2 : e; ++r2 < e; ) {
            o = t[r2];
            var c4 = je4(o), l3 = c4 == "wrapper" ? di(o) : i3;
            l3 && mi(l3[0]) && l3[1] == (Mn3 | Dn | Hn3 | Kt4) && !l3[4].length && l3[9] == 1 ? f5 = f5[je4(l3[0])].apply(f5, l3[3]) : f5 = o.length == 1 && mi(o) ? f5[c4]() : f5.thru(o);
          }
          return function() {
            var v5 = arguments, _5 = v5[0];
            if (f5 && v5.length == 1 && R2(_5)) return f5.plant(_5).value();
            for (var m2 = 0, w6 = e ? t[m2].apply(this, v5) : _5; ++m2 < e; ) w6 = t[m2].call(this, w6);
            return w6;
          };
        });
      }
      function Xe4(n3, t, e, r2, s2, o, f5, c4, l3, v5) {
        var _5 = t & Mn3, m2 = t & vn2, w6 = t & ct3, I2 = t & (Dn | yt4), E5 = t & dr3, T2 = w6 ? i3 : ce3(n3);
        function y7() {
          for (var D5 = arguments.length, N6 = p5(D5), dn2 = D5; dn2--; ) N6[dn2] = arguments[dn2];
          if (I2) var sn = qt4(y7), gn2 = af(N6, sn);
          if (r2 && (N6 = du(N6, r2, s2, I2)), o && (N6 = gu(N6, o, f5, I2)), D5 -= gn2, I2 && D5 < v5) {
            var J2 = tt2(N6, sn);
            return Iu(n3, t, Xe4, y7.placeholder, e, N6, J2, c4, l3, v5 - D5);
          }
          var Tn2 = m2 ? e : this, Qn3 = w6 ? Tn2[n3] : n3;
          return D5 = N6.length, c4 ? N6 = gh(N6, c4) : E5 && D5 > 1 && N6.reverse(), _5 && l3 < D5 && (N6.length = l3), this && this !== k5 && this instanceof y7 && (Qn3 = T2 || ce3(Qn3)), Qn3.apply(Tn2, N6);
        }
        return y7;
      }
      function Au(n3, t) {
        return function(e, r2) {
          return Ic(e, n3, t(r2), {});
        };
      }
      function Qe3(n3, t) {
        return function(e, r2) {
          var s2;
          if (e === i3 && r2 === i3) return t;
          if (e !== i3 && (s2 = e), r2 !== i3) {
            if (s2 === i3) return r2;
            typeof e == "string" || typeof r2 == "string" ? (e = ln2(e), r2 = ln2(r2)) : (e = uu(e), r2 = uu(r2)), s2 = n3(e, r2);
          }
          return s2;
        };
      }
      function ci(n3) {
        return Yn2(function(t) {
          return t = G5(t, hn(x4())), L3(function(e) {
            var r2 = this;
            return n3(t, function(s2) {
              return cn(s2, r2, e);
            });
          });
        });
      }
      function Ve3(n3, t) {
        t = t === i3 ? " " : ln2(t);
        var e = t.length;
        if (e < 2) return e ? ri(t, n3) : t;
        var r2 = ri(t, Ue3(n3 / Dt4(t)));
        return Lt4(t) ? ut4(On2(r2), 0, n3).join("") : r2.slice(0, n3);
      }
      function Qc(n3, t, e, r2) {
        var s2 = t & vn2, o = ce3(n3);
        function f5() {
          for (var c4 = -1, l3 = arguments.length, v5 = -1, _5 = r2.length, m2 = p5(_5 + l3), w6 = this && this !== k5 && this instanceof f5 ? o : n3; ++v5 < _5; ) m2[v5] = r2[v5];
          for (; l3--; ) m2[v5++] = arguments[++c4];
          return cn(w6, s2 ? e : this, m2);
        }
        return f5;
      }
      function Cu(n3) {
        return function(t, e, r2) {
          return r2 && typeof r2 != "number" && rn2(t, e, r2) && (e = r2 = i3), t = Xn3(t), e === i3 ? (e = t, t = 0) : e = Xn3(e), r2 = r2 === i3 ? t < e ? 1 : -1 : Xn3(r2), Nc(t, e, r2, n3);
        };
      }
      function ke3(n3) {
        return function(t, e) {
          return typeof t == "string" && typeof e == "string" || (t = xn3(t), e = xn3(e)), n3(t, e);
        };
      }
      function Iu(n3, t, e, r2, s2, o, f5, c4, l3, v5) {
        var _5 = t & Dn, m2 = _5 ? f5 : i3, w6 = _5 ? i3 : f5, I2 = _5 ? o : i3, E5 = _5 ? i3 : o;
        t |= _5 ? Hn3 : St3, t &= ~(_5 ? St3 : Hn3), t & qi || (t &= ~(vn2 | ct3));
        var T2 = [n3, t, s2, I2, m2, E5, w6, c4, l3, v5], y7 = e.apply(i3, T2);
        return mi(n3) && Nu(y7, T2), y7.placeholder = r2, $u(y7, n3, t);
      }
      function hi(n3) {
        var t = X3[n3];
        return function(e, r2) {
          if (e = xn3(e), r2 = r2 == null ? 0 : nn(b6(r2), 292), r2 && $s2(e)) {
            var s2 = (W4(e) + "e").split("e"), o = t(s2[0] + "e" + (+s2[1] + r2));
            return s2 = (W4(o) + "e").split("e"), +(s2[0] + "e" + (+s2[1] - r2));
          }
          return t(e);
        };
      }
      var Vc = $t3 && 1 / Se3(new $t3([, -0]))[1] == ht4 ? function(n3) {
        return new $t3(n3);
      } : Di;
      function xu(n3) {
        return function(t) {
          var e = tn(t);
          return e == yn2 ? qr2(t) : e == Sn2 ? df(t) : uf(t, n3(t));
        };
      }
      function Kn3(n3, t, e, r2, s2, o, f5, c4) {
        var l3 = t & ct3;
        if (!l3 && typeof n3 != "function") throw new wn($4);
        var v5 = r2 ? r2.length : 0;
        if (v5 || (t &= ~(Hn3 | St3), r2 = s2 = i3), f5 = f5 === i3 ? f5 : Q5(b6(f5), 0), c4 = c4 === i3 ? c4 : b6(c4), v5 -= s2 ? s2.length : 0, t & St3) {
          var _5 = r2, m2 = s2;
          r2 = s2 = i3;
        }
        var w6 = l3 ? i3 : di(n3), I2 = [n3, t, e, r2, s2, _5, m2, o, f5, c4];
        if (w6 && lh(I2, w6), n3 = I2[0], t = I2[1], e = I2[2], r2 = I2[3], s2 = I2[4], c4 = I2[9] = I2[9] === i3 ? l3 ? 0 : n3.length : Q5(I2[9] - v5, 0), !c4 && t & (Dn | yt4) && (t &= ~(Dn | yt4)), !t || t == vn2) var E5 = Jc(n3, t, e);
        else t == Dn || t == yt4 ? E5 = Xc(n3, t, c4) : (t == Hn3 || t == (vn2 | Hn3)) && !s2.length ? E5 = Qc(n3, t, e, r2) : E5 = Xe4.apply(i3, I2);
        var T2 = w6 ? iu : Nu;
        return $u(T2(E5, I2), n3, t);
      }
      function Eu(n3, t, e, r2) {
        return n3 === i3 || bn2(n3, Nt3[e]) && !F3.call(r2, e) ? t : n3;
      }
      function yu(n3, t, e, r2, s2, o) {
        return K3(n3) && K3(t) && (o.set(t, n3), Ke3(n3, t, i3, yu, o), o.delete(t)), n3;
      }
      function kc(n3) {
        return pe4(n3) ? i3 : n3;
      }
      function Su(n3, t, e, r2, s2, o) {
        var f5 = e & Et4, c4 = n3.length, l3 = t.length;
        if (c4 != l3 && !(f5 && l3 > c4)) return false;
        var v5 = o.get(n3), _5 = o.get(t);
        if (v5 && _5) return v5 == t && _5 == n3;
        var m2 = -1, w6 = true, I2 = e & ve3 ? new gt4() : i3;
        for (o.set(n3, t), o.set(t, n3); ++m2 < c4; ) {
          var E5 = n3[m2], T2 = t[m2];
          if (r2) var y7 = f5 ? r2(T2, E5, m2, t, n3, o) : r2(E5, T2, m2, n3, t, o);
          if (y7 !== i3) {
            if (y7) continue;
            w6 = false;
            break;
          }
          if (I2) {
            if (!Nr3(t, function(D5, N6) {
              if (!jt4(I2, N6) && (E5 === D5 || s2(E5, D5, e, r2, o))) return I2.push(N6);
            })) {
              w6 = false;
              break;
            }
          } else if (!(E5 === T2 || s2(E5, T2, e, r2, o))) {
            w6 = false;
            break;
          }
        }
        return o.delete(n3), o.delete(t), w6;
      }
      function jc(n3, t, e, r2, s2, o, f5) {
        switch (e) {
          case Rt3:
            if (n3.byteLength != t.byteLength || n3.byteOffset != t.byteOffset) return false;
            n3 = n3.buffer, t = t.buffer;
          case kt4:
            return !(n3.byteLength != t.byteLength || !o(new De3(n3), new De3(t)));
          case Yt4:
          case Zt2:
          case Jt4:
            return bn2(+n3, +t);
          case we2:
            return n3.name == t.name && n3.message == t.message;
          case Xt4:
          case Qt3:
            return n3 == t + "";
          case yn2:
            var c4 = qr2;
          case Sn2:
            var l3 = r2 & Et4;
            if (c4 || (c4 = Se3), n3.size != t.size && !l3) return false;
            var v5 = f5.get(n3);
            if (v5) return v5 == t;
            r2 |= ve3, f5.set(n3, t);
            var _5 = Su(c4(n3), c4(t), r2, s2, o, f5);
            return f5.delete(n3), _5;
          case Ae3:
            if (ie2) return ie2.call(n3) == ie2.call(t);
        }
        return false;
      }
      function nh(n3, t, e, r2, s2, o) {
        var f5 = e & Et4, c4 = li(n3), l3 = c4.length, v5 = li(t), _5 = v5.length;
        if (l3 != _5 && !f5) return false;
        for (var m2 = l3; m2--; ) {
          var w6 = c4[m2];
          if (!(f5 ? w6 in t : F3.call(t, w6))) return false;
        }
        var I2 = o.get(n3), E5 = o.get(t);
        if (I2 && E5) return I2 == t && E5 == n3;
        var T2 = true;
        o.set(n3, t), o.set(t, n3);
        for (var y7 = f5; ++m2 < l3; ) {
          w6 = c4[m2];
          var D5 = n3[w6], N6 = t[w6];
          if (r2) var dn2 = f5 ? r2(N6, D5, w6, t, n3, o) : r2(D5, N6, w6, n3, t, o);
          if (!(dn2 === i3 ? D5 === N6 || s2(D5, N6, e, r2, o) : dn2)) {
            T2 = false;
            break;
          }
          y7 || (y7 = w6 == "constructor");
        }
        if (T2 && !y7) {
          var sn = n3.constructor, gn2 = t.constructor;
          sn != gn2 && "constructor" in n3 && "constructor" in t && !(typeof sn == "function" && sn instanceof sn && typeof gn2 == "function" && gn2 instanceof gn2) && (T2 = false);
        }
        return o.delete(n3), o.delete(t), T2;
      }
      function Yn2(n3) {
        return Pi(Du(n3, i3, Bu), n3 + "");
      }
      function li(n3) {
        return Zs2(n3, V3, vi);
      }
      function pi(n3) {
        return Zs2(n3, on2, Ou);
      }
      var di = Fe3 ? function(n3) {
        return Fe3.get(n3);
      } : Di;
      function je4(n3) {
        for (var t = n3.name + "", e = Ut3[t], r2 = F3.call(Ut3, t) ? e.length : 0; r2--; ) {
          var s2 = e[r2], o = s2.func;
          if (o == null || o == n3) return s2.name;
        }
        return t;
      }
      function qt4(n3) {
        var t = F3.call(a3, "placeholder") ? a3 : n3;
        return t.placeholder;
      }
      function x4() {
        var n3 = a3.iteratee || Ti;
        return n3 = n3 === Ti ? Qs2 : n3, arguments.length ? n3(arguments[0], arguments[1]) : n3;
      }
      function nr4(n3, t) {
        var e = n3.__data__;
        return oh(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
      }
      function gi(n3) {
        for (var t = V3(n3), e = t.length; e--; ) {
          var r2 = t[e], s2 = n3[r2];
          t[e] = [r2, s2, Tu(s2)];
        }
        return t;
      }
      function mt3(n3, t) {
        var e = hf(n3, t);
        return Xs2(e) ? e : i3;
      }
      function th(n3) {
        var t = F3.call(n3, pt3), e = n3[pt3];
        try {
          n3[pt3] = i3;
          var r2 = true;
        } catch {
        }
        var s2 = Te3.call(n3);
        return r2 && (t ? n3[pt3] = e : delete n3[pt3]), s2;
      }
      var vi = Gr2 ? function(n3) {
        return n3 == null ? [] : (n3 = M4(n3), jn2(Gr2(n3), function(t) {
          return Hs2.call(n3, t);
        }));
      } : Hi2, Ou = Gr2 ? function(n3) {
        for (var t = []; n3; ) nt3(t, vi(n3)), n3 = He3(n3);
        return t;
      } : Hi2, tn = en3;
      (zr3 && tn(new zr3(new ArrayBuffer(1))) != Rt3 || te5 && tn(new te5()) != yn2 || Kr2 && tn(Kr2.resolve()) != zi || $t3 && tn(new $t3()) != Sn2 || ee3 && tn(new ee3()) != Vt4) && (tn = function(n3) {
        var t = en3(n3), e = t == qn3 ? n3.constructor : i3, r2 = e ? wt4(e) : "";
        if (r2) switch (r2) {
          case Uf:
            return Rt3;
          case Wf:
            return yn2;
          case Ff:
            return zi;
          case Mf:
            return Sn2;
          case qf:
            return Vt4;
        }
        return t;
      });
      function eh(n3, t, e) {
        for (var r2 = -1, s2 = e.length; ++r2 < s2; ) {
          var o = e[r2], f5 = o.size;
          switch (o.type) {
            case "drop":
              n3 += f5;
              break;
            case "dropRight":
              t -= f5;
              break;
            case "take":
              t = nn(t, n3 + f5);
              break;
            case "takeRight":
              n3 = Q5(n3, t - f5);
              break;
          }
        }
        return { start: n3, end: t };
      }
      function rh(n3) {
        var t = n3.match(ao2);
        return t ? t[1].split(oo2) : [];
      }
      function Ru(n3, t, e) {
        t = st2(t, n3);
        for (var r2 = -1, s2 = t.length, o = false; ++r2 < s2; ) {
          var f5 = Wn2(t[r2]);
          if (!(o = n3 != null && e(n3, f5))) break;
          n3 = n3[f5];
        }
        return o || ++r2 != s2 ? o : (s2 = n3 == null ? 0 : n3.length, !!s2 && ar3(s2) && Zn2(f5, s2) && (R2(n3) || Pt3(n3)));
      }
      function ih(n3) {
        var t = n3.length, e = new n3.constructor(t);
        return t && typeof n3[0] == "string" && F3.call(n3, "index") && (e.index = n3.index, e.input = n3.input), e;
      }
      function bu(n3) {
        return typeof n3.constructor == "function" && !he4(n3) ? Wt3(He3(n3)) : {};
      }
      function sh(n3, t, e) {
        var r2 = n3.constructor;
        switch (t) {
          case kt4:
            return fi(n3);
          case Yt4:
          case Zt2:
            return new r2(+n3);
          case Rt3:
            return Bc(n3, e);
          case gr3:
          case vr3:
          case _r3:
          case mr3:
          case wr2:
          case Pr3:
          case Ar3:
          case Cr3:
          case Ir3:
            return lu(n3, e);
          case yn2:
            return new r2();
          case Jt4:
          case Qt3:
            return new r2(n3);
          case Xt4:
            return Gc(n3);
          case Sn2:
            return new r2();
          case Ae3:
            return zc(n3);
        }
      }
      function uh(n3, t) {
        var e = t.length;
        if (!e) return n3;
        var r2 = e - 1;
        return t[r2] = (e > 1 ? "& " : "") + t[r2], t = t.join(e > 2 ? ", " : " "), n3.replace(uo2, `{
/* [wrapped with ` + t + `] */
`);
      }
      function ah(n3) {
        return R2(n3) || Pt3(n3) || !!(Ns2 && n3 && n3[Ns2]);
      }
      function Zn2(n3, t) {
        var e = typeof n3;
        return t = t ?? kn3, !!t && (e == "number" || e != "symbol" && mo2.test(n3)) && n3 > -1 && n3 % 1 == 0 && n3 < t;
      }
      function rn2(n3, t, e) {
        if (!K3(e)) return false;
        var r2 = typeof t;
        return (r2 == "number" ? an(e) && Zn2(t, e.length) : r2 == "string" && t in e) ? bn2(e[t], n3) : false;
      }
      function _i(n3, t) {
        if (R2(n3)) return false;
        var e = typeof n3;
        return e == "number" || e == "symbol" || e == "boolean" || n3 == null || pn(n3) ? true : eo2.test(n3) || !to2.test(n3) || t != null && n3 in M4(t);
      }
      function oh(n3) {
        var t = typeof n3;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n3 !== "__proto__" : n3 === null;
      }
      function mi(n3) {
        var t = je4(n3), e = a3[t];
        if (typeof e != "function" || !(t in H3.prototype)) return false;
        if (n3 === e) return true;
        var r2 = di(e);
        return !!r2 && n3 === r2[0];
      }
      function fh(n3) {
        return !!Ts2 && Ts2 in n3;
      }
      var ch = Re3 ? Jn3 : Ni;
      function he4(n3) {
        var t = n3 && n3.constructor, e = typeof t == "function" && t.prototype || Nt3;
        return n3 === e;
      }
      function Tu(n3) {
        return n3 === n3 && !K3(n3);
      }
      function Lu(n3, t) {
        return function(e) {
          return e == null ? false : e[n3] === t && (t !== i3 || n3 in M4(e));
        };
      }
      function hh(n3) {
        var t = sr3(n3, function(r2) {
          return e.size === pr3 && e.clear(), r2;
        }), e = t.cache;
        return t;
      }
      function lh(n3, t) {
        var e = n3[1], r2 = t[1], s2 = e | r2, o = s2 < (vn2 | ct3 | Mn3), f5 = r2 == Mn3 && e == Dn || r2 == Mn3 && e == Kt4 && n3[7].length <= t[8] || r2 == (Mn3 | Kt4) && t[7].length <= t[8] && e == Dn;
        if (!(o || f5)) return n3;
        r2 & vn2 && (n3[2] = t[2], s2 |= e & vn2 ? 0 : qi);
        var c4 = t[3];
        if (c4) {
          var l3 = n3[3];
          n3[3] = l3 ? du(l3, c4, t[4]) : c4, n3[4] = l3 ? tt2(n3[3], It4) : t[4];
        }
        return c4 = t[5], c4 && (l3 = n3[5], n3[5] = l3 ? gu(l3, c4, t[6]) : c4, n3[6] = l3 ? tt2(n3[5], It4) : t[6]), c4 = t[7], c4 && (n3[7] = c4), r2 & Mn3 && (n3[8] = n3[8] == null ? t[8] : nn(n3[8], t[8])), n3[9] == null && (n3[9] = t[9]), n3[0] = t[0], n3[1] = s2, n3;
      }
      function ph(n3) {
        var t = [];
        if (n3 != null) for (var e in M4(n3)) t.push(e);
        return t;
      }
      function dh(n3) {
        return Te3.call(n3);
      }
      function Du(n3, t, e) {
        return t = Q5(t === i3 ? n3.length - 1 : t, 0), function() {
          for (var r2 = arguments, s2 = -1, o = Q5(r2.length - t, 0), f5 = p5(o); ++s2 < o; ) f5[s2] = r2[t + s2];
          s2 = -1;
          for (var c4 = p5(t + 1); ++s2 < t; ) c4[s2] = r2[s2];
          return c4[t] = e(f5), cn(n3, this, c4);
        };
      }
      function Hu(n3, t) {
        return t.length < 2 ? n3 : _t3(n3, Cn2(t, 0, -1));
      }
      function gh(n3, t) {
        for (var e = n3.length, r2 = nn(t.length, e), s2 = un(n3); r2--; ) {
          var o = t[r2];
          n3[r2] = Zn2(o, e) ? s2[o] : i3;
        }
        return n3;
      }
      function wi(n3, t) {
        if (!(t === "constructor" && typeof n3[t] == "function") && t != "__proto__") return n3[t];
      }
      var Nu = Uu(iu), le4 = bf || function(n3, t) {
        return k5.setTimeout(n3, t);
      }, Pi = Uu(Wc);
      function $u(n3, t, e) {
        var r2 = t + "";
        return Pi(n3, uh(r2, vh(rh(r2), e)));
      }
      function Uu(n3) {
        var t = 0, e = 0;
        return function() {
          var r2 = Hf(), s2 = Na - (r2 - e);
          if (e = r2, s2 > 0) {
            if (++t >= Ha) return arguments[0];
          } else t = 0;
          return n3.apply(i3, arguments);
        };
      }
      function tr4(n3, t) {
        var e = -1, r2 = n3.length, s2 = r2 - 1;
        for (t = t === i3 ? r2 : t; ++e < t; ) {
          var o = ei(e, s2), f5 = n3[o];
          n3[o] = n3[e], n3[e] = f5;
        }
        return n3.length = t, n3;
      }
      var Wu = hh(function(n3) {
        var t = [];
        return n3.charCodeAt(0) === 46 && t.push(""), n3.replace(ro2, function(e, r2, s2, o) {
          t.push(s2 ? o.replace(ho2, "$1") : r2 || e);
        }), t;
      });
      function Wn2(n3) {
        if (typeof n3 == "string" || pn(n3)) return n3;
        var t = n3 + "";
        return t == "0" && 1 / n3 == -ht4 ? "-0" : t;
      }
      function wt4(n3) {
        if (n3 != null) {
          try {
            return be2.call(n3);
          } catch {
          }
          try {
            return n3 + "";
          } catch {
          }
        }
        return "";
      }
      function vh(n3, t) {
        return mn2(qa, function(e) {
          var r2 = "_." + e[0];
          t & e[1] && !Ee2(n3, r2) && n3.push(r2);
        }), n3.sort();
      }
      function Fu(n3) {
        if (n3 instanceof H3) return n3.clone();
        var t = new Pn2(n3.__wrapped__, n3.__chain__);
        return t.__actions__ = un(n3.__actions__), t.__index__ = n3.__index__, t.__values__ = n3.__values__, t;
      }
      function _h(n3, t, e) {
        (e ? rn2(n3, t, e) : t === i3) ? t = 1 : t = Q5(b6(t), 0);
        var r2 = n3 == null ? 0 : n3.length;
        if (!r2 || t < 1) return [];
        for (var s2 = 0, o = 0, f5 = p5(Ue3(r2 / t)); s2 < r2; ) f5[o++] = Cn2(n3, s2, s2 += t);
        return f5;
      }
      function mh(n3) {
        for (var t = -1, e = n3 == null ? 0 : n3.length, r2 = 0, s2 = []; ++t < e; ) {
          var o = n3[t];
          o && (s2[r2++] = o);
        }
        return s2;
      }
      function wh() {
        var n3 = arguments.length;
        if (!n3) return [];
        for (var t = p5(n3 - 1), e = arguments[0], r2 = n3; r2--; ) t[r2 - 1] = arguments[r2];
        return nt3(R2(e) ? un(e) : [e], j5(t, 1));
      }
      var Ph = L3(function(n3, t) {
        return Z2(n3) ? ue3(n3, j5(t, 1, Z2, true)) : [];
      }), Ah = L3(function(n3, t) {
        var e = In2(t);
        return Z2(e) && (e = i3), Z2(n3) ? ue3(n3, j5(t, 1, Z2, true), x4(e, 2)) : [];
      }), Ch = L3(function(n3, t) {
        var e = In2(t);
        return Z2(e) && (e = i3), Z2(n3) ? ue3(n3, j5(t, 1, Z2, true), i3, e) : [];
      });
      function Ih(n3, t, e) {
        var r2 = n3 == null ? 0 : n3.length;
        return r2 ? (t = e || t === i3 ? 1 : b6(t), Cn2(n3, t < 0 ? 0 : t, r2)) : [];
      }
      function xh(n3, t, e) {
        var r2 = n3 == null ? 0 : n3.length;
        return r2 ? (t = e || t === i3 ? 1 : b6(t), t = r2 - t, Cn2(n3, 0, t < 0 ? 0 : t)) : [];
      }
      function Eh(n3, t) {
        return n3 && n3.length ? Ze3(n3, x4(t, 3), true, true) : [];
      }
      function yh(n3, t) {
        return n3 && n3.length ? Ze3(n3, x4(t, 3), true) : [];
      }
      function Sh(n3, t, e, r2) {
        var s2 = n3 == null ? 0 : n3.length;
        return s2 ? (e && typeof e != "number" && rn2(n3, t, e) && (e = 0, r2 = s2), wc(n3, t, e, r2)) : [];
      }
      function Mu(n3, t, e) {
        var r2 = n3 == null ? 0 : n3.length;
        if (!r2) return -1;
        var s2 = e == null ? 0 : b6(e);
        return s2 < 0 && (s2 = Q5(r2 + s2, 0)), ye2(n3, x4(t, 3), s2);
      }
      function qu(n3, t, e) {
        var r2 = n3 == null ? 0 : n3.length;
        if (!r2) return -1;
        var s2 = r2 - 1;
        return e !== i3 && (s2 = b6(e), s2 = e < 0 ? Q5(r2 + s2, 0) : nn(s2, r2 - 1)), ye2(n3, x4(t, 3), s2, true);
      }
      function Bu(n3) {
        var t = n3 == null ? 0 : n3.length;
        return t ? j5(n3, 1) : [];
      }
      function Oh(n3) {
        var t = n3 == null ? 0 : n3.length;
        return t ? j5(n3, ht4) : [];
      }
      function Rh(n3, t) {
        var e = n3 == null ? 0 : n3.length;
        return e ? (t = t === i3 ? 1 : b6(t), j5(n3, t)) : [];
      }
      function bh(n3) {
        for (var t = -1, e = n3 == null ? 0 : n3.length, r2 = {}; ++t < e; ) {
          var s2 = n3[t];
          r2[s2[0]] = s2[1];
        }
        return r2;
      }
      function Gu(n3) {
        return n3 && n3.length ? n3[0] : i3;
      }
      function Th(n3, t, e) {
        var r2 = n3 == null ? 0 : n3.length;
        if (!r2) return -1;
        var s2 = e == null ? 0 : b6(e);
        return s2 < 0 && (s2 = Q5(r2 + s2, 0)), Tt3(n3, t, s2);
      }
      function Lh(n3) {
        var t = n3 == null ? 0 : n3.length;
        return t ? Cn2(n3, 0, -1) : [];
      }
      var Dh = L3(function(n3) {
        var t = G5(n3, ai);
        return t.length && t[0] === n3[0] ? Vr2(t) : [];
      }), Hh = L3(function(n3) {
        var t = In2(n3), e = G5(n3, ai);
        return t === In2(e) ? t = i3 : e.pop(), e.length && e[0] === n3[0] ? Vr2(e, x4(t, 2)) : [];
      }), Nh = L3(function(n3) {
        var t = In2(n3), e = G5(n3, ai);
        return t = typeof t == "function" ? t : i3, t && e.pop(), e.length && e[0] === n3[0] ? Vr2(e, i3, t) : [];
      });
      function $h(n3, t) {
        return n3 == null ? "" : Lf.call(n3, t);
      }
      function In2(n3) {
        var t = n3 == null ? 0 : n3.length;
        return t ? n3[t - 1] : i3;
      }
      function Uh(n3, t, e) {
        var r2 = n3 == null ? 0 : n3.length;
        if (!r2) return -1;
        var s2 = r2;
        return e !== i3 && (s2 = b6(e), s2 = s2 < 0 ? Q5(r2 + s2, 0) : nn(s2, r2 - 1)), t === t ? vf(n3, t, s2) : ye2(n3, Is2, s2, true);
      }
      function Wh(n3, t) {
        return n3 && n3.length ? nu(n3, b6(t)) : i3;
      }
      var Fh = L3(zu);
      function zu(n3, t) {
        return n3 && n3.length && t && t.length ? ti(n3, t) : n3;
      }
      function Mh(n3, t, e) {
        return n3 && n3.length && t && t.length ? ti(n3, t, x4(e, 2)) : n3;
      }
      function qh(n3, t, e) {
        return n3 && n3.length && t && t.length ? ti(n3, t, i3, e) : n3;
      }
      var Bh = Yn2(function(n3, t) {
        var e = n3 == null ? 0 : n3.length, r2 = Zr2(n3, t);
        return ru(n3, G5(t, function(s2) {
          return Zn2(s2, e) ? +s2 : s2;
        }).sort(pu)), r2;
      });
      function Gh(n3, t) {
        var e = [];
        if (!(n3 && n3.length)) return e;
        var r2 = -1, s2 = [], o = n3.length;
        for (t = x4(t, 3); ++r2 < o; ) {
          var f5 = n3[r2];
          t(f5, r2, n3) && (e.push(f5), s2.push(r2));
        }
        return ru(n3, s2), e;
      }
      function Ai(n3) {
        return n3 == null ? n3 : $f.call(n3);
      }
      function zh(n3, t, e) {
        var r2 = n3 == null ? 0 : n3.length;
        return r2 ? (e && typeof e != "number" && rn2(n3, t, e) ? (t = 0, e = r2) : (t = t == null ? 0 : b6(t), e = e === i3 ? r2 : b6(e)), Cn2(n3, t, e)) : [];
      }
      function Kh(n3, t) {
        return Ye3(n3, t);
      }
      function Yh(n3, t, e) {
        return ii(n3, t, x4(e, 2));
      }
      function Zh(n3, t) {
        var e = n3 == null ? 0 : n3.length;
        if (e) {
          var r2 = Ye3(n3, t);
          if (r2 < e && bn2(n3[r2], t)) return r2;
        }
        return -1;
      }
      function Jh(n3, t) {
        return Ye3(n3, t, true);
      }
      function Xh(n3, t, e) {
        return ii(n3, t, x4(e, 2), true);
      }
      function Qh(n3, t) {
        var e = n3 == null ? 0 : n3.length;
        if (e) {
          var r2 = Ye3(n3, t, true) - 1;
          if (bn2(n3[r2], t)) return r2;
        }
        return -1;
      }
      function Vh(n3) {
        return n3 && n3.length ? su(n3) : [];
      }
      function kh(n3, t) {
        return n3 && n3.length ? su(n3, x4(t, 2)) : [];
      }
      function jh(n3) {
        var t = n3 == null ? 0 : n3.length;
        return t ? Cn2(n3, 1, t) : [];
      }
      function nl(n3, t, e) {
        return n3 && n3.length ? (t = e || t === i3 ? 1 : b6(t), Cn2(n3, 0, t < 0 ? 0 : t)) : [];
      }
      function tl(n3, t, e) {
        var r2 = n3 == null ? 0 : n3.length;
        return r2 ? (t = e || t === i3 ? 1 : b6(t), t = r2 - t, Cn2(n3, t < 0 ? 0 : t, r2)) : [];
      }
      function el(n3, t) {
        return n3 && n3.length ? Ze3(n3, x4(t, 3), false, true) : [];
      }
      function rl(n3, t) {
        return n3 && n3.length ? Ze3(n3, x4(t, 3)) : [];
      }
      var il = L3(function(n3) {
        return it3(j5(n3, 1, Z2, true));
      }), sl = L3(function(n3) {
        var t = In2(n3);
        return Z2(t) && (t = i3), it3(j5(n3, 1, Z2, true), x4(t, 2));
      }), ul = L3(function(n3) {
        var t = In2(n3);
        return t = typeof t == "function" ? t : i3, it3(j5(n3, 1, Z2, true), i3, t);
      });
      function al(n3) {
        return n3 && n3.length ? it3(n3) : [];
      }
      function ol(n3, t) {
        return n3 && n3.length ? it3(n3, x4(t, 2)) : [];
      }
      function fl(n3, t) {
        return t = typeof t == "function" ? t : i3, n3 && n3.length ? it3(n3, i3, t) : [];
      }
      function Ci(n3) {
        if (!(n3 && n3.length)) return [];
        var t = 0;
        return n3 = jn2(n3, function(e) {
          if (Z2(e)) return t = Q5(e.length, t), true;
        }), Fr3(t, function(e) {
          return G5(n3, $r3(e));
        });
      }
      function Ku(n3, t) {
        if (!(n3 && n3.length)) return [];
        var e = Ci(n3);
        return t == null ? e : G5(e, function(r2) {
          return cn(t, i3, r2);
        });
      }
      var cl = L3(function(n3, t) {
        return Z2(n3) ? ue3(n3, t) : [];
      }), hl = L3(function(n3) {
        return ui(jn2(n3, Z2));
      }), ll = L3(function(n3) {
        var t = In2(n3);
        return Z2(t) && (t = i3), ui(jn2(n3, Z2), x4(t, 2));
      }), pl = L3(function(n3) {
        var t = In2(n3);
        return t = typeof t == "function" ? t : i3, ui(jn2(n3, Z2), i3, t);
      }), dl = L3(Ci);
      function gl(n3, t) {
        return fu(n3 || [], t || [], se);
      }
      function vl(n3, t) {
        return fu(n3 || [], t || [], fe2);
      }
      var _l = L3(function(n3) {
        var t = n3.length, e = t > 1 ? n3[t - 1] : i3;
        return e = typeof e == "function" ? (n3.pop(), e) : i3, Ku(n3, e);
      });
      function Yu(n3) {
        var t = a3(n3);
        return t.__chain__ = true, t;
      }
      function ml(n3, t) {
        return t(n3), n3;
      }
      function er4(n3, t) {
        return t(n3);
      }
      var wl = Yn2(function(n3) {
        var t = n3.length, e = t ? n3[0] : 0, r2 = this.__wrapped__, s2 = function(o) {
          return Zr2(o, n3);
        };
        return t > 1 || this.__actions__.length || !(r2 instanceof H3) || !Zn2(e) ? this.thru(s2) : (r2 = r2.slice(e, +e + (t ? 1 : 0)), r2.__actions__.push({ func: er4, args: [s2], thisArg: i3 }), new Pn2(r2, this.__chain__).thru(function(o) {
          return t && !o.length && o.push(i3), o;
        }));
      });
      function Pl() {
        return Yu(this);
      }
      function Al() {
        return new Pn2(this.value(), this.__chain__);
      }
      function Cl() {
        this.__values__ === i3 && (this.__values__ = ua(this.value()));
        var n3 = this.__index__ >= this.__values__.length, t = n3 ? i3 : this.__values__[this.__index__++];
        return { done: n3, value: t };
      }
      function Il() {
        return this;
      }
      function xl(n3) {
        for (var t, e = this; e instanceof qe3; ) {
          var r2 = Fu(e);
          r2.__index__ = 0, r2.__values__ = i3, t ? s2.__wrapped__ = r2 : t = r2;
          var s2 = r2;
          e = e.__wrapped__;
        }
        return s2.__wrapped__ = n3, t;
      }
      function El() {
        var n3 = this.__wrapped__;
        if (n3 instanceof H3) {
          var t = n3;
          return this.__actions__.length && (t = new H3(this)), t = t.reverse(), t.__actions__.push({ func: er4, args: [Ai], thisArg: i3 }), new Pn2(t, this.__chain__);
        }
        return this.thru(Ai);
      }
      function yl() {
        return ou(this.__wrapped__, this.__actions__);
      }
      var Sl = Je4(function(n3, t, e) {
        F3.call(n3, e) ? ++n3[e] : zn2(n3, e, 1);
      });
      function Ol(n3, t, e) {
        var r2 = R2(n3) ? As2 : mc;
        return e && rn2(n3, t, e) && (t = i3), r2(n3, x4(t, 3));
      }
      function Rl(n3, t) {
        var e = R2(n3) ? jn2 : Ks2;
        return e(n3, x4(t, 3));
      }
      var bl = wu(Mu), Tl = wu(qu);
      function Ll(n3, t) {
        return j5(rr3(n3, t), 1);
      }
      function Dl(n3, t) {
        return j5(rr3(n3, t), ht4);
      }
      function Hl(n3, t, e) {
        return e = e === i3 ? 1 : b6(e), j5(rr3(n3, t), e);
      }
      function Zu(n3, t) {
        var e = R2(n3) ? mn2 : rt4;
        return e(n3, x4(t, 3));
      }
      function Ju(n3, t) {
        var e = R2(n3) ? ko2 : zs2;
        return e(n3, x4(t, 3));
      }
      var Nl = Je4(function(n3, t, e) {
        F3.call(n3, e) ? n3[e].push(t) : zn2(n3, e, [t]);
      });
      function $l(n3, t, e, r2) {
        n3 = an(n3) ? n3 : Gt4(n3), e = e && !r2 ? b6(e) : 0;
        var s2 = n3.length;
        return e < 0 && (e = Q5(s2 + e, 0)), or3(n3) ? e <= s2 && n3.indexOf(t, e) > -1 : !!s2 && Tt3(n3, t, e) > -1;
      }
      var Ul = L3(function(n3, t, e) {
        var r2 = -1, s2 = typeof t == "function", o = an(n3) ? p5(n3.length) : [];
        return rt4(n3, function(f5) {
          o[++r2] = s2 ? cn(t, f5, e) : ae2(f5, t, e);
        }), o;
      }), Wl = Je4(function(n3, t, e) {
        zn2(n3, e, t);
      });
      function rr3(n3, t) {
        var e = R2(n3) ? G5 : Vs2;
        return e(n3, x4(t, 3));
      }
      function Fl(n3, t, e, r2) {
        return n3 == null ? [] : (R2(t) || (t = t == null ? [] : [t]), e = r2 ? i3 : e, R2(e) || (e = e == null ? [] : [e]), tu(n3, t, e));
      }
      var Ml = Je4(function(n3, t, e) {
        n3[e ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function ql(n3, t, e) {
        var r2 = R2(n3) ? Hr2 : Es2, s2 = arguments.length < 3;
        return r2(n3, x4(t, 4), e, s2, rt4);
      }
      function Bl(n3, t, e) {
        var r2 = R2(n3) ? jo2 : Es2, s2 = arguments.length < 3;
        return r2(n3, x4(t, 4), e, s2, zs2);
      }
      function Gl(n3, t) {
        var e = R2(n3) ? jn2 : Ks2;
        return e(n3, ur3(x4(t, 3)));
      }
      function zl(n3) {
        var t = R2(n3) ? Ms2 : $c;
        return t(n3);
      }
      function Kl(n3, t, e) {
        (e ? rn2(n3, t, e) : t === i3) ? t = 1 : t = b6(t);
        var r2 = R2(n3) ? pc : Uc;
        return r2(n3, t);
      }
      function Yl(n3) {
        var t = R2(n3) ? dc : Fc;
        return t(n3);
      }
      function Zl(n3) {
        if (n3 == null) return 0;
        if (an(n3)) return or3(n3) ? Dt4(n3) : n3.length;
        var t = tn(n3);
        return t == yn2 || t == Sn2 ? n3.size : jr2(n3).length;
      }
      function Jl(n3, t, e) {
        var r2 = R2(n3) ? Nr3 : Mc;
        return e && rn2(n3, t, e) && (t = i3), r2(n3, x4(t, 3));
      }
      var Xl = L3(function(n3, t) {
        if (n3 == null) return [];
        var e = t.length;
        return e > 1 && rn2(n3, t[0], t[1]) ? t = [] : e > 2 && rn2(t[0], t[1], t[2]) && (t = [t[0]]), tu(n3, j5(t, 1), []);
      }), ir3 = Rf || function() {
        return k5.Date.now();
      };
      function Ql(n3, t) {
        if (typeof t != "function") throw new wn($4);
        return n3 = b6(n3), function() {
          if (--n3 < 1) return t.apply(this, arguments);
        };
      }
      function Xu(n3, t, e) {
        return t = e ? i3 : t, t = n3 && t == null ? n3.length : t, Kn3(n3, Mn3, i3, i3, i3, i3, t);
      }
      function Qu(n3, t) {
        var e;
        if (typeof t != "function") throw new wn($4);
        return n3 = b6(n3), function() {
          return --n3 > 0 && (e = t.apply(this, arguments)), n3 <= 1 && (t = i3), e;
        };
      }
      var Ii = L3(function(n3, t, e) {
        var r2 = vn2;
        if (e.length) {
          var s2 = tt2(e, qt4(Ii));
          r2 |= Hn3;
        }
        return Kn3(n3, r2, t, e, s2);
      }), Vu = L3(function(n3, t, e) {
        var r2 = vn2 | ct3;
        if (e.length) {
          var s2 = tt2(e, qt4(Vu));
          r2 |= Hn3;
        }
        return Kn3(t, r2, n3, e, s2);
      });
      function ku(n3, t, e) {
        t = e ? i3 : t;
        var r2 = Kn3(n3, Dn, i3, i3, i3, i3, i3, t);
        return r2.placeholder = ku.placeholder, r2;
      }
      function ju(n3, t, e) {
        t = e ? i3 : t;
        var r2 = Kn3(n3, yt4, i3, i3, i3, i3, i3, t);
        return r2.placeholder = ju.placeholder, r2;
      }
      function na(n3, t, e) {
        var r2, s2, o, f5, c4, l3, v5 = 0, _5 = false, m2 = false, w6 = true;
        if (typeof n3 != "function") throw new wn($4);
        t = xn3(t) || 0, K3(e) && (_5 = !!e.leading, m2 = "maxWait" in e, o = m2 ? Q5(xn3(e.maxWait) || 0, t) : o, w6 = "trailing" in e ? !!e.trailing : w6);
        function I2(J2) {
          var Tn2 = r2, Qn3 = s2;
          return r2 = s2 = i3, v5 = J2, f5 = n3.apply(Qn3, Tn2), f5;
        }
        function E5(J2) {
          return v5 = J2, c4 = le4(D5, t), _5 ? I2(J2) : f5;
        }
        function T2(J2) {
          var Tn2 = J2 - l3, Qn3 = J2 - v5, wa = t - Tn2;
          return m2 ? nn(wa, o - Qn3) : wa;
        }
        function y7(J2) {
          var Tn2 = J2 - l3, Qn3 = J2 - v5;
          return l3 === i3 || Tn2 >= t || Tn2 < 0 || m2 && Qn3 >= o;
        }
        function D5() {
          var J2 = ir3();
          if (y7(J2)) return N6(J2);
          c4 = le4(D5, T2(J2));
        }
        function N6(J2) {
          return c4 = i3, w6 && r2 ? I2(J2) : (r2 = s2 = i3, f5);
        }
        function dn2() {
          c4 !== i3 && cu(c4), v5 = 0, r2 = l3 = s2 = c4 = i3;
        }
        function sn() {
          return c4 === i3 ? f5 : N6(ir3());
        }
        function gn2() {
          var J2 = ir3(), Tn2 = y7(J2);
          if (r2 = arguments, s2 = this, l3 = J2, Tn2) {
            if (c4 === i3) return E5(l3);
            if (m2) return cu(c4), c4 = le4(D5, t), I2(l3);
          }
          return c4 === i3 && (c4 = le4(D5, t)), f5;
        }
        return gn2.cancel = dn2, gn2.flush = sn, gn2;
      }
      var Vl = L3(function(n3, t) {
        return Gs2(n3, 1, t);
      }), kl = L3(function(n3, t, e) {
        return Gs2(n3, xn3(t) || 0, e);
      });
      function jl(n3) {
        return Kn3(n3, dr3);
      }
      function sr3(n3, t) {
        if (typeof n3 != "function" || t != null && typeof t != "function") throw new wn($4);
        var e = function() {
          var r2 = arguments, s2 = t ? t.apply(this, r2) : r2[0], o = e.cache;
          if (o.has(s2)) return o.get(s2);
          var f5 = n3.apply(this, r2);
          return e.cache = o.set(s2, f5) || o, f5;
        };
        return e.cache = new (sr3.Cache || Gn2)(), e;
      }
      sr3.Cache = Gn2;
      function ur3(n3) {
        if (typeof n3 != "function") throw new wn($4);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n3.call(this);
            case 1:
              return !n3.call(this, t[0]);
            case 2:
              return !n3.call(this, t[0], t[1]);
            case 3:
              return !n3.call(this, t[0], t[1], t[2]);
          }
          return !n3.apply(this, t);
        };
      }
      function np(n3) {
        return Qu(2, n3);
      }
      var tp = qc(function(n3, t) {
        t = t.length == 1 && R2(t[0]) ? G5(t[0], hn(x4())) : G5(j5(t, 1), hn(x4()));
        var e = t.length;
        return L3(function(r2) {
          for (var s2 = -1, o = nn(r2.length, e); ++s2 < o; ) r2[s2] = t[s2].call(this, r2[s2]);
          return cn(n3, this, r2);
        });
      }), xi = L3(function(n3, t) {
        var e = tt2(t, qt4(xi));
        return Kn3(n3, Hn3, i3, t, e);
      }), ta = L3(function(n3, t) {
        var e = tt2(t, qt4(ta));
        return Kn3(n3, St3, i3, t, e);
      }), ep = Yn2(function(n3, t) {
        return Kn3(n3, Kt4, i3, i3, i3, t);
      });
      function rp(n3, t) {
        if (typeof n3 != "function") throw new wn($4);
        return t = t === i3 ? t : b6(t), L3(n3, t);
      }
      function ip(n3, t) {
        if (typeof n3 != "function") throw new wn($4);
        return t = t == null ? 0 : Q5(b6(t), 0), L3(function(e) {
          var r2 = e[t], s2 = ut4(e, 0, t);
          return r2 && nt3(s2, r2), cn(n3, this, s2);
        });
      }
      function sp(n3, t, e) {
        var r2 = true, s2 = true;
        if (typeof n3 != "function") throw new wn($4);
        return K3(e) && (r2 = "leading" in e ? !!e.leading : r2, s2 = "trailing" in e ? !!e.trailing : s2), na(n3, t, { leading: r2, maxWait: t, trailing: s2 });
      }
      function up(n3) {
        return Xu(n3, 1);
      }
      function ap(n3, t) {
        return xi(oi(t), n3);
      }
      function op() {
        if (!arguments.length) return [];
        var n3 = arguments[0];
        return R2(n3) ? n3 : [n3];
      }
      function fp(n3) {
        return An2(n3, xt4);
      }
      function cp(n3, t) {
        return t = typeof t == "function" ? t : i3, An2(n3, xt4, t);
      }
      function hp(n3) {
        return An2(n3, Ln3 | xt4);
      }
      function lp(n3, t) {
        return t = typeof t == "function" ? t : i3, An2(n3, Ln3 | xt4, t);
      }
      function pp(n3, t) {
        return t == null || Bs2(n3, t, V3(t));
      }
      function bn2(n3, t) {
        return n3 === t || n3 !== n3 && t !== t;
      }
      var dp = ke3(Qr2), gp = ke3(function(n3, t) {
        return n3 >= t;
      }), Pt3 = Js2(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Js2 : function(n3) {
        return Y(n3) && F3.call(n3, "callee") && !Hs2.call(n3, "callee");
      }, R2 = p5.isArray, vp = gs3 ? hn(gs3) : xc;
      function an(n3) {
        return n3 != null && ar3(n3.length) && !Jn3(n3);
      }
      function Z2(n3) {
        return Y(n3) && an(n3);
      }
      function _p(n3) {
        return n3 === true || n3 === false || Y(n3) && en3(n3) == Yt4;
      }
      var at3 = Tf || Ni, mp = vs2 ? hn(vs2) : Ec;
      function wp(n3) {
        return Y(n3) && n3.nodeType === 1 && !pe4(n3);
      }
      function Pp(n3) {
        if (n3 == null) return true;
        if (an(n3) && (R2(n3) || typeof n3 == "string" || typeof n3.splice == "function" || at3(n3) || Bt4(n3) || Pt3(n3))) return !n3.length;
        var t = tn(n3);
        if (t == yn2 || t == Sn2) return !n3.size;
        if (he4(n3)) return !jr2(n3).length;
        for (var e in n3) if (F3.call(n3, e)) return false;
        return true;
      }
      function Ap(n3, t) {
        return oe3(n3, t);
      }
      function Cp(n3, t, e) {
        e = typeof e == "function" ? e : i3;
        var r2 = e ? e(n3, t) : i3;
        return r2 === i3 ? oe3(n3, t, i3, e) : !!r2;
      }
      function Ei(n3) {
        if (!Y(n3)) return false;
        var t = en3(n3);
        return t == we2 || t == Ga || typeof n3.message == "string" && typeof n3.name == "string" && !pe4(n3);
      }
      function Ip(n3) {
        return typeof n3 == "number" && $s2(n3);
      }
      function Jn3(n3) {
        if (!K3(n3)) return false;
        var t = en3(n3);
        return t == Pe2 || t == Gi2 || t == Ba || t == Ka;
      }
      function ea(n3) {
        return typeof n3 == "number" && n3 == b6(n3);
      }
      function ar3(n3) {
        return typeof n3 == "number" && n3 > -1 && n3 % 1 == 0 && n3 <= kn3;
      }
      function K3(n3) {
        var t = typeof n3;
        return n3 != null && (t == "object" || t == "function");
      }
      function Y(n3) {
        return n3 != null && typeof n3 == "object";
      }
      var ra = _s2 ? hn(_s2) : Sc;
      function xp(n3, t) {
        return n3 === t || kr2(n3, t, gi(t));
      }
      function Ep(n3, t, e) {
        return e = typeof e == "function" ? e : i3, kr2(n3, t, gi(t), e);
      }
      function yp(n3) {
        return ia(n3) && n3 != +n3;
      }
      function Sp(n3) {
        if (ch(n3)) throw new S5(O5);
        return Xs2(n3);
      }
      function Op(n3) {
        return n3 === null;
      }
      function Rp(n3) {
        return n3 == null;
      }
      function ia(n3) {
        return typeof n3 == "number" || Y(n3) && en3(n3) == Jt4;
      }
      function pe4(n3) {
        if (!Y(n3) || en3(n3) != qn3) return false;
        var t = He3(n3);
        if (t === null) return true;
        var e = F3.call(t, "constructor") && t.constructor;
        return typeof e == "function" && e instanceof e && be2.call(e) == Ef;
      }
      var yi = ms2 ? hn(ms2) : Oc;
      function bp(n3) {
        return ea(n3) && n3 >= -kn3 && n3 <= kn3;
      }
      var sa = ws2 ? hn(ws2) : Rc;
      function or3(n3) {
        return typeof n3 == "string" || !R2(n3) && Y(n3) && en3(n3) == Qt3;
      }
      function pn(n3) {
        return typeof n3 == "symbol" || Y(n3) && en3(n3) == Ae3;
      }
      var Bt4 = Ps2 ? hn(Ps2) : bc;
      function Tp(n3) {
        return n3 === i3;
      }
      function Lp(n3) {
        return Y(n3) && tn(n3) == Vt4;
      }
      function Dp(n3) {
        return Y(n3) && en3(n3) == Za;
      }
      var Hp = ke3(ni), Np = ke3(function(n3, t) {
        return n3 <= t;
      });
      function ua(n3) {
        if (!n3) return [];
        if (an(n3)) return or3(n3) ? On2(n3) : un(n3);
        if (ne2 && n3[ne2]) return pf(n3[ne2]());
        var t = tn(n3), e = t == yn2 ? qr2 : t == Sn2 ? Se3 : Gt4;
        return e(n3);
      }
      function Xn3(n3) {
        if (!n3) return n3 === 0 ? n3 : 0;
        if (n3 = xn3(n3), n3 === ht4 || n3 === -ht4) {
          var t = n3 < 0 ? -1 : 1;
          return t * Wa;
        }
        return n3 === n3 ? n3 : 0;
      }
      function b6(n3) {
        var t = Xn3(n3), e = t % 1;
        return t === t ? e ? t - e : t : 0;
      }
      function aa(n3) {
        return n3 ? vt4(b6(n3), 0, Nn2) : 0;
      }
      function xn3(n3) {
        if (typeof n3 == "number") return n3;
        if (pn(n3)) return _e3;
        if (K3(n3)) {
          var t = typeof n3.valueOf == "function" ? n3.valueOf() : n3;
          n3 = K3(t) ? t + "" : t;
        }
        if (typeof n3 != "string") return n3 === 0 ? n3 : +n3;
        n3 = ys2(n3);
        var e = go2.test(n3);
        return e || _o2.test(n3) ? Xo(n3.slice(2), e ? 2 : 8) : po2.test(n3) ? _e3 : +n3;
      }
      function oa(n3) {
        return Un3(n3, on2(n3));
      }
      function $p(n3) {
        return n3 ? vt4(b6(n3), -kn3, kn3) : n3 === 0 ? n3 : 0;
      }
      function W4(n3) {
        return n3 == null ? "" : ln2(n3);
      }
      var Up = Ft4(function(n3, t) {
        if (he4(t) || an(t)) {
          Un3(t, V3(t), n3);
          return;
        }
        for (var e in t) F3.call(t, e) && se(n3, e, t[e]);
      }), fa = Ft4(function(n3, t) {
        Un3(t, on2(t), n3);
      }), fr2 = Ft4(function(n3, t, e, r2) {
        Un3(t, on2(t), n3, r2);
      }), Wp = Ft4(function(n3, t, e, r2) {
        Un3(t, V3(t), n3, r2);
      }), Fp = Yn2(Zr2);
      function Mp(n3, t) {
        var e = Wt3(n3);
        return t == null ? e : qs2(e, t);
      }
      var qp = L3(function(n3, t) {
        n3 = M4(n3);
        var e = -1, r2 = t.length, s2 = r2 > 2 ? t[2] : i3;
        for (s2 && rn2(t[0], t[1], s2) && (r2 = 1); ++e < r2; ) for (var o = t[e], f5 = on2(o), c4 = -1, l3 = f5.length; ++c4 < l3; ) {
          var v5 = f5[c4], _5 = n3[v5];
          (_5 === i3 || bn2(_5, Nt3[v5]) && !F3.call(n3, v5)) && (n3[v5] = o[v5]);
        }
        return n3;
      }), Bp = L3(function(n3) {
        return n3.push(i3, yu), cn(ca, i3, n3);
      });
      function Gp(n3, t) {
        return Cs2(n3, x4(t, 3), $n2);
      }
      function zp(n3, t) {
        return Cs2(n3, x4(t, 3), Xr2);
      }
      function Kp(n3, t) {
        return n3 == null ? n3 : Jr2(n3, x4(t, 3), on2);
      }
      function Yp(n3, t) {
        return n3 == null ? n3 : Ys2(n3, x4(t, 3), on2);
      }
      function Zp(n3, t) {
        return n3 && $n2(n3, x4(t, 3));
      }
      function Jp(n3, t) {
        return n3 && Xr2(n3, x4(t, 3));
      }
      function Xp(n3) {
        return n3 == null ? [] : ze2(n3, V3(n3));
      }
      function Qp(n3) {
        return n3 == null ? [] : ze2(n3, on2(n3));
      }
      function Si(n3, t, e) {
        var r2 = n3 == null ? i3 : _t3(n3, t);
        return r2 === i3 ? e : r2;
      }
      function Vp(n3, t) {
        return n3 != null && Ru(n3, t, Pc);
      }
      function Oi(n3, t) {
        return n3 != null && Ru(n3, t, Ac);
      }
      var kp = Au(function(n3, t, e) {
        t != null && typeof t.toString != "function" && (t = Te3.call(t)), n3[t] = e;
      }, bi(fn2)), jp = Au(function(n3, t, e) {
        t != null && typeof t.toString != "function" && (t = Te3.call(t)), F3.call(n3, t) ? n3[t].push(e) : n3[t] = [e];
      }, x4), nd = L3(ae2);
      function V3(n3) {
        return an(n3) ? Fs2(n3) : jr2(n3);
      }
      function on2(n3) {
        return an(n3) ? Fs2(n3, true) : Tc(n3);
      }
      function td(n3, t) {
        var e = {};
        return t = x4(t, 3), $n2(n3, function(r2, s2, o) {
          zn2(e, t(r2, s2, o), r2);
        }), e;
      }
      function ed(n3, t) {
        var e = {};
        return t = x4(t, 3), $n2(n3, function(r2, s2, o) {
          zn2(e, s2, t(r2, s2, o));
        }), e;
      }
      var rd = Ft4(function(n3, t, e) {
        Ke3(n3, t, e);
      }), ca = Ft4(function(n3, t, e, r2) {
        Ke3(n3, t, e, r2);
      }), id = Yn2(function(n3, t) {
        var e = {};
        if (n3 == null) return e;
        var r2 = false;
        t = G5(t, function(o) {
          return o = st2(o, n3), r2 || (r2 = o.length > 1), o;
        }), Un3(n3, pi(n3), e), r2 && (e = An2(e, Ln3 | Fn3 | xt4, kc));
        for (var s2 = t.length; s2--; ) si(e, t[s2]);
        return e;
      });
      function sd(n3, t) {
        return ha(n3, ur3(x4(t)));
      }
      var ud = Yn2(function(n3, t) {
        return n3 == null ? {} : Dc(n3, t);
      });
      function ha(n3, t) {
        if (n3 == null) return {};
        var e = G5(pi(n3), function(r2) {
          return [r2];
        });
        return t = x4(t), eu(n3, e, function(r2, s2) {
          return t(r2, s2[0]);
        });
      }
      function ad(n3, t, e) {
        t = st2(t, n3);
        var r2 = -1, s2 = t.length;
        for (s2 || (s2 = 1, n3 = i3); ++r2 < s2; ) {
          var o = n3 == null ? i3 : n3[Wn2(t[r2])];
          o === i3 && (r2 = s2, o = e), n3 = Jn3(o) ? o.call(n3) : o;
        }
        return n3;
      }
      function od(n3, t, e) {
        return n3 == null ? n3 : fe2(n3, t, e);
      }
      function fd(n3, t, e, r2) {
        return r2 = typeof r2 == "function" ? r2 : i3, n3 == null ? n3 : fe2(n3, t, e, r2);
      }
      var la = xu(V3), pa = xu(on2);
      function cd(n3, t, e) {
        var r2 = R2(n3), s2 = r2 || at3(n3) || Bt4(n3);
        if (t = x4(t, 4), e == null) {
          var o = n3 && n3.constructor;
          s2 ? e = r2 ? new o() : [] : K3(n3) ? e = Jn3(o) ? Wt3(He3(n3)) : {} : e = {};
        }
        return (s2 ? mn2 : $n2)(n3, function(f5, c4, l3) {
          return t(e, f5, c4, l3);
        }), e;
      }
      function hd(n3, t) {
        return n3 == null ? true : si(n3, t);
      }
      function ld(n3, t, e) {
        return n3 == null ? n3 : au(n3, t, oi(e));
      }
      function pd(n3, t, e, r2) {
        return r2 = typeof r2 == "function" ? r2 : i3, n3 == null ? n3 : au(n3, t, oi(e), r2);
      }
      function Gt4(n3) {
        return n3 == null ? [] : Mr3(n3, V3(n3));
      }
      function dd(n3) {
        return n3 == null ? [] : Mr3(n3, on2(n3));
      }
      function gd(n3, t, e) {
        return e === i3 && (e = t, t = i3), e !== i3 && (e = xn3(e), e = e === e ? e : 0), t !== i3 && (t = xn3(t), t = t === t ? t : 0), vt4(xn3(n3), t, e);
      }
      function vd(n3, t, e) {
        return t = Xn3(t), e === i3 ? (e = t, t = 0) : e = Xn3(e), n3 = xn3(n3), Cc(n3, t, e);
      }
      function _d(n3, t, e) {
        if (e && typeof e != "boolean" && rn2(n3, t, e) && (t = e = i3), e === i3 && (typeof t == "boolean" ? (e = t, t = i3) : typeof n3 == "boolean" && (e = n3, n3 = i3)), n3 === i3 && t === i3 ? (n3 = 0, t = 1) : (n3 = Xn3(n3), t === i3 ? (t = n3, n3 = 0) : t = Xn3(t)), n3 > t) {
          var r2 = n3;
          n3 = t, t = r2;
        }
        if (e || n3 % 1 || t % 1) {
          var s2 = Us2();
          return nn(n3 + s2 * (t - n3 + Jo2("1e-" + ((s2 + "").length - 1))), t);
        }
        return ei(n3, t);
      }
      var md = Mt4(function(n3, t, e) {
        return t = t.toLowerCase(), n3 + (e ? da(t) : t);
      });
      function da(n3) {
        return Ri(W4(n3).toLowerCase());
      }
      function ga(n3) {
        return n3 = W4(n3), n3 && n3.replace(wo2, of).replace(Wo2, "");
      }
      function wd(n3, t, e) {
        n3 = W4(n3), t = ln2(t);
        var r2 = n3.length;
        e = e === i3 ? r2 : vt4(b6(e), 0, r2);
        var s2 = e;
        return e -= t.length, e >= 0 && n3.slice(e, s2) == t;
      }
      function Pd(n3) {
        return n3 = W4(n3), n3 && ka.test(n3) ? n3.replace(Yi2, ff) : n3;
      }
      function Ad(n3) {
        return n3 = W4(n3), n3 && io2.test(n3) ? n3.replace(xr3, "\\$&") : n3;
      }
      var Cd = Mt4(function(n3, t, e) {
        return n3 + (e ? "-" : "") + t.toLowerCase();
      }), Id = Mt4(function(n3, t, e) {
        return n3 + (e ? " " : "") + t.toLowerCase();
      }), xd = mu("toLowerCase");
      function Ed(n3, t, e) {
        n3 = W4(n3), t = b6(t);
        var r2 = t ? Dt4(n3) : 0;
        if (!t || r2 >= t) return n3;
        var s2 = (t - r2) / 2;
        return Ve3(We3(s2), e) + n3 + Ve3(Ue3(s2), e);
      }
      function yd(n3, t, e) {
        n3 = W4(n3), t = b6(t);
        var r2 = t ? Dt4(n3) : 0;
        return t && r2 < t ? n3 + Ve3(t - r2, e) : n3;
      }
      function Sd(n3, t, e) {
        n3 = W4(n3), t = b6(t);
        var r2 = t ? Dt4(n3) : 0;
        return t && r2 < t ? Ve3(t - r2, e) + n3 : n3;
      }
      function Od(n3, t, e) {
        return e || t == null ? t = 0 : t && (t = +t), Nf(W4(n3).replace(Er2, ""), t || 0);
      }
      function Rd(n3, t, e) {
        return (e ? rn2(n3, t, e) : t === i3) ? t = 1 : t = b6(t), ri(W4(n3), t);
      }
      function bd() {
        var n3 = arguments, t = W4(n3[0]);
        return n3.length < 3 ? t : t.replace(n3[1], n3[2]);
      }
      var Td = Mt4(function(n3, t, e) {
        return n3 + (e ? "_" : "") + t.toLowerCase();
      });
      function Ld(n3, t, e) {
        return e && typeof e != "number" && rn2(n3, t, e) && (t = e = i3), e = e === i3 ? Nn2 : e >>> 0, e ? (n3 = W4(n3), n3 && (typeof t == "string" || t != null && !yi(t)) && (t = ln2(t), !t && Lt4(n3)) ? ut4(On2(n3), 0, e) : n3.split(t, e)) : [];
      }
      var Dd = Mt4(function(n3, t, e) {
        return n3 + (e ? " " : "") + Ri(t);
      });
      function Hd(n3, t, e) {
        return n3 = W4(n3), e = e == null ? 0 : vt4(b6(e), 0, n3.length), t = ln2(t), n3.slice(e, e + t.length) == t;
      }
      function Nd(n3, t, e) {
        var r2 = a3.templateSettings;
        e && rn2(n3, t, e) && (t = i3), n3 = W4(n3), t = fr2({}, t, r2, Eu);
        var s2 = fr2({}, t.imports, r2.imports, Eu), o = V3(s2), f5 = Mr3(s2, o), c4, l3, v5 = 0, _5 = t.interpolate || Ce2, m2 = "__p += '", w6 = Br2((t.escape || Ce2).source + "|" + _5.source + "|" + (_5 === Zi2 ? lo2 : Ce2).source + "|" + (t.evaluate || Ce2).source + "|$", "g"), I2 = "//# sourceURL=" + (F3.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Go2 + "]") + `
`;
        n3.replace(w6, function(y7, D5, N6, dn2, sn, gn2) {
          return N6 || (N6 = dn2), m2 += n3.slice(v5, gn2).replace(Po2, cf), D5 && (c4 = true, m2 += `' +
__e(` + D5 + `) +
'`), sn && (l3 = true, m2 += `';
` + sn + `;
__p += '`), N6 && (m2 += `' +
((__t = (` + N6 + `)) == null ? '' : __t) +
'`), v5 = gn2 + y7.length, y7;
        }), m2 += `';
`;
        var E5 = F3.call(t, "variable") && t.variable;
        if (!E5) m2 = `with (obj) {
` + m2 + `
}
`;
        else if (co2.test(E5)) throw new S5(En2);
        m2 = (l3 ? m2.replace(Ja, "") : m2).replace(Xa, "$1").replace(Qa, "$1;"), m2 = "function(" + (E5 || "obj") + `) {
` + (E5 ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (c4 ? ", __e = _.escape" : "") + (l3 ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m2 + `return __p
}`;
        var T2 = _a(function() {
          return U6(o, I2 + "return " + m2).apply(i3, f5);
        });
        if (T2.source = m2, Ei(T2)) throw T2;
        return T2;
      }
      function $d(n3) {
        return W4(n3).toLowerCase();
      }
      function Ud(n3) {
        return W4(n3).toUpperCase();
      }
      function Wd(n3, t, e) {
        if (n3 = W4(n3), n3 && (e || t === i3)) return ys2(n3);
        if (!n3 || !(t = ln2(t))) return n3;
        var r2 = On2(n3), s2 = On2(t), o = Ss2(r2, s2), f5 = Os2(r2, s2) + 1;
        return ut4(r2, o, f5).join("");
      }
      function Fd(n3, t, e) {
        if (n3 = W4(n3), n3 && (e || t === i3)) return n3.slice(0, bs2(n3) + 1);
        if (!n3 || !(t = ln2(t))) return n3;
        var r2 = On2(n3), s2 = Os2(r2, On2(t)) + 1;
        return ut4(r2, 0, s2).join("");
      }
      function Md(n3, t, e) {
        if (n3 = W4(n3), n3 && (e || t === i3)) return n3.replace(Er2, "");
        if (!n3 || !(t = ln2(t))) return n3;
        var r2 = On2(n3), s2 = Ss2(r2, On2(t));
        return ut4(r2, s2).join("");
      }
      function qd(n3, t) {
        var e = La, r2 = Da;
        if (K3(t)) {
          var s2 = "separator" in t ? t.separator : s2;
          e = "length" in t ? b6(t.length) : e, r2 = "omission" in t ? ln2(t.omission) : r2;
        }
        n3 = W4(n3);
        var o = n3.length;
        if (Lt4(n3)) {
          var f5 = On2(n3);
          o = f5.length;
        }
        if (e >= o) return n3;
        var c4 = e - Dt4(r2);
        if (c4 < 1) return r2;
        var l3 = f5 ? ut4(f5, 0, c4).join("") : n3.slice(0, c4);
        if (s2 === i3) return l3 + r2;
        if (f5 && (c4 += l3.length - c4), yi(s2)) {
          if (n3.slice(c4).search(s2)) {
            var v5, _5 = l3;
            for (s2.global || (s2 = Br2(s2.source, W4(Ji2.exec(s2)) + "g")), s2.lastIndex = 0; v5 = s2.exec(_5); ) var m2 = v5.index;
            l3 = l3.slice(0, m2 === i3 ? c4 : m2);
          }
        } else if (n3.indexOf(ln2(s2), c4) != c4) {
          var w6 = l3.lastIndexOf(s2);
          w6 > -1 && (l3 = l3.slice(0, w6));
        }
        return l3 + r2;
      }
      function Bd(n3) {
        return n3 = W4(n3), n3 && Va.test(n3) ? n3.replace(Ki, _f) : n3;
      }
      var Gd = Mt4(function(n3, t, e) {
        return n3 + (e ? " " : "") + t.toUpperCase();
      }), Ri = mu("toUpperCase");
      function va(n3, t, e) {
        return n3 = W4(n3), t = e ? i3 : t, t === i3 ? lf(n3) ? Pf(n3) : ef(n3) : n3.match(t) || [];
      }
      var _a = L3(function(n3, t) {
        try {
          return cn(n3, i3, t);
        } catch (e) {
          return Ei(e) ? e : new S5(e);
        }
      }), zd = Yn2(function(n3, t) {
        return mn2(t, function(e) {
          e = Wn2(e), zn2(n3, e, Ii(n3[e], n3));
        }), n3;
      });
      function Kd(n3) {
        var t = n3 == null ? 0 : n3.length, e = x4();
        return n3 = t ? G5(n3, function(r2) {
          if (typeof r2[1] != "function") throw new wn($4);
          return [e(r2[0]), r2[1]];
        }) : [], L3(function(r2) {
          for (var s2 = -1; ++s2 < t; ) {
            var o = n3[s2];
            if (cn(o[0], this, r2)) return cn(o[1], this, r2);
          }
        });
      }
      function Yd(n3) {
        return _c(An2(n3, Ln3));
      }
      function bi(n3) {
        return function() {
          return n3;
        };
      }
      function Zd(n3, t) {
        return n3 == null || n3 !== n3 ? t : n3;
      }
      var Jd = Pu(), Xd = Pu(true);
      function fn2(n3) {
        return n3;
      }
      function Ti(n3) {
        return Qs2(typeof n3 == "function" ? n3 : An2(n3, Ln3));
      }
      function Qd(n3) {
        return ks2(An2(n3, Ln3));
      }
      function Vd(n3, t) {
        return js2(n3, An2(t, Ln3));
      }
      var kd = L3(function(n3, t) {
        return function(e) {
          return ae2(e, n3, t);
        };
      }), jd = L3(function(n3, t) {
        return function(e) {
          return ae2(n3, e, t);
        };
      });
      function Li(n3, t, e) {
        var r2 = V3(t), s2 = ze2(t, r2);
        e == null && !(K3(t) && (s2.length || !r2.length)) && (e = t, t = n3, n3 = this, s2 = ze2(t, V3(t)));
        var o = !(K3(e) && "chain" in e) || !!e.chain, f5 = Jn3(n3);
        return mn2(s2, function(c4) {
          var l3 = t[c4];
          n3[c4] = l3, f5 && (n3.prototype[c4] = function() {
            var v5 = this.__chain__;
            if (o || v5) {
              var _5 = n3(this.__wrapped__), m2 = _5.__actions__ = un(this.__actions__);
              return m2.push({ func: l3, args: arguments, thisArg: n3 }), _5.__chain__ = v5, _5;
            }
            return l3.apply(n3, nt3([this.value()], arguments));
          });
        }), n3;
      }
      function ng() {
        return k5._ === this && (k5._ = yf), this;
      }
      function Di() {
      }
      function tg(n3) {
        return n3 = b6(n3), L3(function(t) {
          return nu(t, n3);
        });
      }
      var eg = ci(G5), rg = ci(As2), ig = ci(Nr3);
      function ma(n3) {
        return _i(n3) ? $r3(Wn2(n3)) : Hc(n3);
      }
      function sg(n3) {
        return function(t) {
          return n3 == null ? i3 : _t3(n3, t);
        };
      }
      var ug = Cu(), ag = Cu(true);
      function Hi2() {
        return [];
      }
      function Ni() {
        return false;
      }
      function og() {
        return {};
      }
      function fg() {
        return "";
      }
      function cg() {
        return true;
      }
      function hg(n3, t) {
        if (n3 = b6(n3), n3 < 1 || n3 > kn3) return [];
        var e = Nn2, r2 = nn(n3, Nn2);
        t = x4(t), n3 -= Nn2;
        for (var s2 = Fr3(r2, t); ++e < n3; ) t(e);
        return s2;
      }
      function lg(n3) {
        return R2(n3) ? G5(n3, Wn2) : pn(n3) ? [n3] : un(Wu(W4(n3)));
      }
      function pg(n3) {
        var t = ++xf;
        return W4(n3) + t;
      }
      var dg = Qe3(function(n3, t) {
        return n3 + t;
      }, 0), gg = hi("ceil"), vg = Qe3(function(n3, t) {
        return n3 / t;
      }, 1), _g = hi("floor");
      function mg(n3) {
        return n3 && n3.length ? Ge3(n3, fn2, Qr2) : i3;
      }
      function wg(n3, t) {
        return n3 && n3.length ? Ge3(n3, x4(t, 2), Qr2) : i3;
      }
      function Pg(n3) {
        return xs2(n3, fn2);
      }
      function Ag(n3, t) {
        return xs2(n3, x4(t, 2));
      }
      function Cg(n3) {
        return n3 && n3.length ? Ge3(n3, fn2, ni) : i3;
      }
      function Ig(n3, t) {
        return n3 && n3.length ? Ge3(n3, x4(t, 2), ni) : i3;
      }
      var xg = Qe3(function(n3, t) {
        return n3 * t;
      }, 1), Eg = hi("round"), yg = Qe3(function(n3, t) {
        return n3 - t;
      }, 0);
      function Sg(n3) {
        return n3 && n3.length ? Wr2(n3, fn2) : 0;
      }
      function Og(n3, t) {
        return n3 && n3.length ? Wr2(n3, x4(t, 2)) : 0;
      }
      return a3.after = Ql, a3.ary = Xu, a3.assign = Up, a3.assignIn = fa, a3.assignInWith = fr2, a3.assignWith = Wp, a3.at = Fp, a3.before = Qu, a3.bind = Ii, a3.bindAll = zd, a3.bindKey = Vu, a3.castArray = op, a3.chain = Yu, a3.chunk = _h, a3.compact = mh, a3.concat = wh, a3.cond = Kd, a3.conforms = Yd, a3.constant = bi, a3.countBy = Sl, a3.create = Mp, a3.curry = ku, a3.curryRight = ju, a3.debounce = na, a3.defaults = qp, a3.defaultsDeep = Bp, a3.defer = Vl, a3.delay = kl, a3.difference = Ph, a3.differenceBy = Ah, a3.differenceWith = Ch, a3.drop = Ih, a3.dropRight = xh, a3.dropRightWhile = Eh, a3.dropWhile = yh, a3.fill = Sh, a3.filter = Rl, a3.flatMap = Ll, a3.flatMapDeep = Dl, a3.flatMapDepth = Hl, a3.flatten = Bu, a3.flattenDeep = Oh, a3.flattenDepth = Rh, a3.flip = jl, a3.flow = Jd, a3.flowRight = Xd, a3.fromPairs = bh, a3.functions = Xp, a3.functionsIn = Qp, a3.groupBy = Nl, a3.initial = Lh, a3.intersection = Dh, a3.intersectionBy = Hh, a3.intersectionWith = Nh, a3.invert = kp, a3.invertBy = jp, a3.invokeMap = Ul, a3.iteratee = Ti, a3.keyBy = Wl, a3.keys = V3, a3.keysIn = on2, a3.map = rr3, a3.mapKeys = td, a3.mapValues = ed, a3.matches = Qd, a3.matchesProperty = Vd, a3.memoize = sr3, a3.merge = rd, a3.mergeWith = ca, a3.method = kd, a3.methodOf = jd, a3.mixin = Li, a3.negate = ur3, a3.nthArg = tg, a3.omit = id, a3.omitBy = sd, a3.once = np, a3.orderBy = Fl, a3.over = eg, a3.overArgs = tp, a3.overEvery = rg, a3.overSome = ig, a3.partial = xi, a3.partialRight = ta, a3.partition = Ml, a3.pick = ud, a3.pickBy = ha, a3.property = ma, a3.propertyOf = sg, a3.pull = Fh, a3.pullAll = zu, a3.pullAllBy = Mh, a3.pullAllWith = qh, a3.pullAt = Bh, a3.range = ug, a3.rangeRight = ag, a3.rearg = ep, a3.reject = Gl, a3.remove = Gh, a3.rest = rp, a3.reverse = Ai, a3.sampleSize = Kl, a3.set = od, a3.setWith = fd, a3.shuffle = Yl, a3.slice = zh, a3.sortBy = Xl, a3.sortedUniq = Vh, a3.sortedUniqBy = kh, a3.split = Ld, a3.spread = ip, a3.tail = jh, a3.take = nl, a3.takeRight = tl, a3.takeRightWhile = el, a3.takeWhile = rl, a3.tap = ml, a3.throttle = sp, a3.thru = er4, a3.toArray = ua, a3.toPairs = la, a3.toPairsIn = pa, a3.toPath = lg, a3.toPlainObject = oa, a3.transform = cd, a3.unary = up, a3.union = il, a3.unionBy = sl, a3.unionWith = ul, a3.uniq = al, a3.uniqBy = ol, a3.uniqWith = fl, a3.unset = hd, a3.unzip = Ci, a3.unzipWith = Ku, a3.update = ld, a3.updateWith = pd, a3.values = Gt4, a3.valuesIn = dd, a3.without = cl, a3.words = va, a3.wrap = ap, a3.xor = hl, a3.xorBy = ll, a3.xorWith = pl, a3.zip = dl, a3.zipObject = gl, a3.zipObjectDeep = vl, a3.zipWith = _l, a3.entries = la, a3.entriesIn = pa, a3.extend = fa, a3.extendWith = fr2, Li(a3, a3), a3.add = dg, a3.attempt = _a, a3.camelCase = md, a3.capitalize = da, a3.ceil = gg, a3.clamp = gd, a3.clone = fp, a3.cloneDeep = hp, a3.cloneDeepWith = lp, a3.cloneWith = cp, a3.conformsTo = pp, a3.deburr = ga, a3.defaultTo = Zd, a3.divide = vg, a3.endsWith = wd, a3.eq = bn2, a3.escape = Pd, a3.escapeRegExp = Ad, a3.every = Ol, a3.find = bl, a3.findIndex = Mu, a3.findKey = Gp, a3.findLast = Tl, a3.findLastIndex = qu, a3.findLastKey = zp, a3.floor = _g, a3.forEach = Zu, a3.forEachRight = Ju, a3.forIn = Kp, a3.forInRight = Yp, a3.forOwn = Zp, a3.forOwnRight = Jp, a3.get = Si, a3.gt = dp, a3.gte = gp, a3.has = Vp, a3.hasIn = Oi, a3.head = Gu, a3.identity = fn2, a3.includes = $l, a3.indexOf = Th, a3.inRange = vd, a3.invoke = nd, a3.isArguments = Pt3, a3.isArray = R2, a3.isArrayBuffer = vp, a3.isArrayLike = an, a3.isArrayLikeObject = Z2, a3.isBoolean = _p, a3.isBuffer = at3, a3.isDate = mp, a3.isElement = wp, a3.isEmpty = Pp, a3.isEqual = Ap, a3.isEqualWith = Cp, a3.isError = Ei, a3.isFinite = Ip, a3.isFunction = Jn3, a3.isInteger = ea, a3.isLength = ar3, a3.isMap = ra, a3.isMatch = xp, a3.isMatchWith = Ep, a3.isNaN = yp, a3.isNative = Sp, a3.isNil = Rp, a3.isNull = Op, a3.isNumber = ia, a3.isObject = K3, a3.isObjectLike = Y, a3.isPlainObject = pe4, a3.isRegExp = yi, a3.isSafeInteger = bp, a3.isSet = sa, a3.isString = or3, a3.isSymbol = pn, a3.isTypedArray = Bt4, a3.isUndefined = Tp, a3.isWeakMap = Lp, a3.isWeakSet = Dp, a3.join = $h, a3.kebabCase = Cd, a3.last = In2, a3.lastIndexOf = Uh, a3.lowerCase = Id, a3.lowerFirst = xd, a3.lt = Hp, a3.lte = Np, a3.max = mg, a3.maxBy = wg, a3.mean = Pg, a3.meanBy = Ag, a3.min = Cg, a3.minBy = Ig, a3.stubArray = Hi2, a3.stubFalse = Ni, a3.stubObject = og, a3.stubString = fg, a3.stubTrue = cg, a3.multiply = xg, a3.nth = Wh, a3.noConflict = ng, a3.noop = Di, a3.now = ir3, a3.pad = Ed, a3.padEnd = yd, a3.padStart = Sd, a3.parseInt = Od, a3.random = _d, a3.reduce = ql, a3.reduceRight = Bl, a3.repeat = Rd, a3.replace = bd, a3.result = ad, a3.round = Eg, a3.runInContext = h6, a3.sample = zl, a3.size = Zl, a3.snakeCase = Td, a3.some = Jl, a3.sortedIndex = Kh, a3.sortedIndexBy = Yh, a3.sortedIndexOf = Zh, a3.sortedLastIndex = Jh, a3.sortedLastIndexBy = Xh, a3.sortedLastIndexOf = Qh, a3.startCase = Dd, a3.startsWith = Hd, a3.subtract = yg, a3.sum = Sg, a3.sumBy = Og, a3.template = Nd, a3.times = hg, a3.toFinite = Xn3, a3.toInteger = b6, a3.toLength = aa, a3.toLower = $d, a3.toNumber = xn3, a3.toSafeInteger = $p, a3.toString = W4, a3.toUpper = Ud, a3.trim = Wd, a3.trimEnd = Fd, a3.trimStart = Md, a3.truncate = qd, a3.unescape = Bd, a3.uniqueId = pg, a3.upperCase = Gd, a3.upperFirst = Ri, a3.each = Zu, a3.eachRight = Ju, a3.first = Gu, Li(a3, function() {
        var n3 = {};
        return $n2(a3, function(t, e) {
          F3.call(a3.prototype, e) || (n3[e] = t);
        }), n3;
      }(), { chain: false }), a3.VERSION = d2, mn2(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n3) {
        a3[n3].placeholder = a3;
      }), mn2(["drop", "take"], function(n3, t) {
        H3.prototype[n3] = function(e) {
          e = e === i3 ? 1 : Q5(b6(e), 0);
          var r2 = this.__filtered__ && !t ? new H3(this) : this.clone();
          return r2.__filtered__ ? r2.__takeCount__ = nn(e, r2.__takeCount__) : r2.__views__.push({ size: nn(e, Nn2), type: n3 + (r2.__dir__ < 0 ? "Right" : "") }), r2;
        }, H3.prototype[n3 + "Right"] = function(e) {
          return this.reverse()[n3](e).reverse();
        };
      }), mn2(["filter", "map", "takeWhile"], function(n3, t) {
        var e = t + 1, r2 = e == Bi || e == Ua;
        H3.prototype[n3] = function(s2) {
          var o = this.clone();
          return o.__iteratees__.push({ iteratee: x4(s2, 3), type: e }), o.__filtered__ = o.__filtered__ || r2, o;
        };
      }), mn2(["head", "last"], function(n3, t) {
        var e = "take" + (t ? "Right" : "");
        H3.prototype[n3] = function() {
          return this[e](1).value()[0];
        };
      }), mn2(["initial", "tail"], function(n3, t) {
        var e = "drop" + (t ? "" : "Right");
        H3.prototype[n3] = function() {
          return this.__filtered__ ? new H3(this) : this[e](1);
        };
      }), H3.prototype.compact = function() {
        return this.filter(fn2);
      }, H3.prototype.find = function(n3) {
        return this.filter(n3).head();
      }, H3.prototype.findLast = function(n3) {
        return this.reverse().find(n3);
      }, H3.prototype.invokeMap = L3(function(n3, t) {
        return typeof n3 == "function" ? new H3(this) : this.map(function(e) {
          return ae2(e, n3, t);
        });
      }), H3.prototype.reject = function(n3) {
        return this.filter(ur3(x4(n3)));
      }, H3.prototype.slice = function(n3, t) {
        n3 = b6(n3);
        var e = this;
        return e.__filtered__ && (n3 > 0 || t < 0) ? new H3(e) : (n3 < 0 ? e = e.takeRight(-n3) : n3 && (e = e.drop(n3)), t !== i3 && (t = b6(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n3)), e);
      }, H3.prototype.takeRightWhile = function(n3) {
        return this.reverse().takeWhile(n3).reverse();
      }, H3.prototype.toArray = function() {
        return this.take(Nn2);
      }, $n2(H3.prototype, function(n3, t) {
        var e = /^(?:filter|find|map|reject)|While$/.test(t), r2 = /^(?:head|last)$/.test(t), s2 = a3[r2 ? "take" + (t == "last" ? "Right" : "") : t], o = r2 || /^find/.test(t);
        s2 && (a3.prototype[t] = function() {
          var f5 = this.__wrapped__, c4 = r2 ? [1] : arguments, l3 = f5 instanceof H3, v5 = c4[0], _5 = l3 || R2(f5), m2 = function(D5) {
            var N6 = s2.apply(a3, nt3([D5], c4));
            return r2 && w6 ? N6[0] : N6;
          };
          _5 && e && typeof v5 == "function" && v5.length != 1 && (l3 = _5 = false);
          var w6 = this.__chain__, I2 = !!this.__actions__.length, E5 = o && !w6, T2 = l3 && !I2;
          if (!o && _5) {
            f5 = T2 ? f5 : new H3(this);
            var y7 = n3.apply(f5, c4);
            return y7.__actions__.push({ func: er4, args: [m2], thisArg: i3 }), new Pn2(y7, w6);
          }
          return E5 && T2 ? n3.apply(this, c4) : (y7 = this.thru(m2), E5 ? r2 ? y7.value()[0] : y7.value() : y7);
        });
      }), mn2(["pop", "push", "shift", "sort", "splice", "unshift"], function(n3) {
        var t = Oe2[n3], e = /^(?:push|sort|unshift)$/.test(n3) ? "tap" : "thru", r2 = /^(?:pop|shift)$/.test(n3);
        a3.prototype[n3] = function() {
          var s2 = arguments;
          if (r2 && !this.__chain__) {
            var o = this.value();
            return t.apply(R2(o) ? o : [], s2);
          }
          return this[e](function(f5) {
            return t.apply(R2(f5) ? f5 : [], s2);
          });
        };
      }), $n2(H3.prototype, function(n3, t) {
        var e = a3[t];
        if (e) {
          var r2 = e.name + "";
          F3.call(Ut3, r2) || (Ut3[r2] = []), Ut3[r2].push({ name: t, func: e });
        }
      }), Ut3[Xe4(i3, ct3).name] = [{ name: "wrapper", func: i3 }], H3.prototype.clone = Bf, H3.prototype.reverse = Gf, H3.prototype.value = zf, a3.prototype.at = wl, a3.prototype.chain = Pl, a3.prototype.commit = Al, a3.prototype.next = Cl, a3.prototype.plant = xl, a3.prototype.reverse = El, a3.prototype.toJSON = a3.prototype.valueOf = a3.prototype.value = yl, a3.prototype.first = a3.prototype.head, ne2 && (a3.prototype[ne2] = Il), a3;
    }, Ht4 = Af();
    lt3 ? ((lt3.exports = Ht4)._ = Ht4, Tr3._ = Ht4) : k5._ = Ht4;
  }).call(ge3);
})(Ui, Ui.exports);
var Bg = Object.defineProperty;
var Gg = Object.defineProperties;
var zg = Object.getOwnPropertyDescriptors;
var Ea = Object.getOwnPropertySymbols;
var Kg = Object.prototype.hasOwnProperty;
var Yg = Object.prototype.propertyIsEnumerable;
var ya = (C2, u4, i3) => u4 in C2 ? Bg(C2, u4, { enumerable: true, configurable: true, writable: true, value: i3 }) : C2[u4] = i3;
var cr3 = (C2, u4) => {
  for (var i3 in u4 || (u4 = {})) Kg.call(u4, i3) && ya(C2, i3, u4[i3]);
  if (Ea) for (var i3 of Ea(u4)) Yg.call(u4, i3) && ya(C2, i3, u4[i3]);
  return C2;
};
var Zg = (C2, u4) => Gg(C2, zg(u4));
function ft4(C2, u4, i3) {
  var d2;
  const P4 = ve(C2);
  return ((d2 = u4.rpcMap) == null ? void 0 : d2[P4.reference]) || `${qg}?chainId=${P4.namespace}:${P4.reference}&projectId=${i3}`;
}
function Ct2(C2) {
  return C2.includes(":") ? C2.split(":")[1] : C2;
}
function Sa(C2) {
  return C2.map((u4) => `${u4.split(":")[0]}:${u4.split(":")[1]}`);
}
function Jg(C2, u4) {
  const i3 = Object.keys(u4.namespaces).filter((P4) => P4.includes(C2));
  if (!i3.length) return [];
  const d2 = [];
  return i3.forEach((P4) => {
    const O5 = u4.namespaces[P4].accounts;
    d2.push(...O5);
  }), d2;
}
function Xg(C2 = {}, u4 = {}) {
  const i3 = Oa(C2), d2 = Oa(u4);
  return Ui.exports.merge(i3, d2);
}
function Oa(C2) {
  var u4, i3, d2, P4;
  const O5 = {};
  if (!B(C2)) return O5;
  for (const [$4, En2] of Object.entries(C2)) {
    const zt4 = oe($4) ? [$4] : En2.chains, pr3 = En2.methods || [], It4 = En2.events || [], Ln3 = En2.rpcMap || {}, Fn3 = en($4);
    O5[Fn3] = Zg(cr3(cr3({}, O5[Fn3]), En2), { chains: S(zt4, (u4 = O5[Fn3]) == null ? void 0 : u4.chains), methods: S(pr3, (i3 = O5[Fn3]) == null ? void 0 : i3.methods), events: S(It4, (d2 = O5[Fn3]) == null ? void 0 : d2.events), rpcMap: cr3(cr3({}, Ln3), (P4 = O5[Fn3]) == null ? void 0 : P4.rpcMap) });
  }
  return O5;
}
function Qg(C2) {
  return C2.includes(":") ? C2.split(":")[2] : C2;
}
function Vg(C2) {
  const u4 = {};
  for (const [i3, d2] of Object.entries(C2)) {
    const P4 = d2.methods || [], O5 = d2.events || [], $4 = d2.accounts || [], En2 = oe(i3) ? [i3] : d2.chains ? d2.chains : Sa(d2.accounts);
    u4[i3] = { chains: En2, methods: P4, events: O5, accounts: $4 };
  }
  return u4;
}
function Wi2(C2) {
  return typeof C2 == "number" ? C2 : C2.includes("0x") ? parseInt(C2, 16) : C2.includes(":") ? Number(C2.split(":")[1]) : Number(C2);
}
var Ra = {};
var z3 = (C2) => Ra[C2];
var Fi = (C2, u4) => {
  Ra[C2] = u4;
};
var kg = class {
  constructor(u4) {
    this.name = "polkadot", this.namespace = u4.namespace, this.events = z3("events"), this.client = z3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u4) {
    this.namespace = Object.assign(this.namespace, u4);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u4 = this.namespace.chains[0];
    if (!u4) throw new Error("ChainId not found");
    return u4.split(":")[1];
  }
  request(u4) {
    return this.namespace.methods.includes(u4.request.method) ? this.client.request(u4) : this.getHttpProvider().request(u4.request);
  }
  setDefaultChain(u4, i3) {
    this.httpProviders[u4] || this.setHttpProvider(u4, i3), this.chainId = u4, this.events.emit(Vn3.DEFAULT_CHAIN_CHANGED, `${this.name}:${u4}`);
  }
  getAccounts() {
    const u4 = this.namespace.accounts;
    return u4 ? u4.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const u4 = {};
    return this.namespace.chains.forEach((i3) => {
      var d2;
      const P4 = Ct2(i3);
      u4[P4] = this.createHttpProvider(P4, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i3]);
    }), u4;
  }
  getHttpProvider() {
    const u4 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u4];
    if (typeof i3 > "u") throw new Error(`JSON-RPC provider for ${u4} not found`);
    return i3;
  }
  setHttpProvider(u4, i3) {
    const d2 = this.createHttpProvider(u4, i3);
    d2 && (this.httpProviders[u4] = d2);
  }
  createHttpProvider(u4, i3) {
    const d2 = i3 || ft4(u4, this.namespace, this.client.core.projectId);
    if (!d2) throw new Error(`No RPC url provided for chainId: ${u4}`);
    return new JsonRpcProvider2(new f(d2, z3("disableProviderPing")));
  }
};
var jg = class {
  constructor(u4) {
    this.name = "eip155", this.namespace = u4.namespace, this.events = z3("events"), this.client = z3("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(u4) {
    switch (u4.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(u4);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(u4.request.method) ? await this.client.request(u4) : this.getHttpProvider().request(u4.request);
  }
  updateNamespace(u4) {
    this.namespace = Object.assign(this.namespace, u4);
  }
  setDefaultChain(u4, i3) {
    this.httpProviders[u4] || this.setHttpProvider(parseInt(u4), i3), this.chainId = parseInt(u4), this.events.emit(Vn3.DEFAULT_CHAIN_CHANGED, `${this.name}:${u4}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u4 = this.namespace.chains[0];
    if (!u4) throw new Error("ChainId not found");
    return u4.split(":")[1];
  }
  createHttpProvider(u4, i3) {
    const d2 = i3 || ft4(`${this.name}:${u4}`, this.namespace, this.client.core.projectId);
    if (!d2) throw new Error(`No RPC url provided for chainId: ${u4}`);
    return new JsonRpcProvider2(new f(d2, z3("disableProviderPing")));
  }
  setHttpProvider(u4, i3) {
    const d2 = this.createHttpProvider(u4, i3);
    d2 && (this.httpProviders[u4] = d2);
  }
  createHttpProviders() {
    const u4 = {};
    return this.namespace.chains.forEach((i3) => {
      var d2;
      const P4 = parseInt(Ct2(i3));
      u4[P4] = this.createHttpProvider(P4, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i3]);
    }), u4;
  }
  getAccounts() {
    const u4 = this.namespace.accounts;
    return u4 ? [...new Set(u4.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const u4 = this.chainId, i3 = this.httpProviders[u4];
    if (typeof i3 > "u") throw new Error(`JSON-RPC provider for ${u4} not found`);
    return i3;
  }
  async handleSwitchChain(u4) {
    var i3, d2;
    let P4 = u4.request.params ? (i3 = u4.request.params[0]) == null ? void 0 : i3.chainId : "0x0";
    P4 = P4.startsWith("0x") ? P4 : `0x${P4}`;
    const O5 = parseInt(P4, 16);
    if (this.isChainApproved(O5)) this.setDefaultChain(`${O5}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: u4.topic, request: { method: u4.request.method, params: [{ chainId: P4 }] }, chainId: (d2 = this.namespace.chains) == null ? void 0 : d2[0] }), this.setDefaultChain(`${O5}`);
    else throw new Error(`Failed to switch to chain 'eip155:${O5}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(u4) {
    return this.namespace.chains.includes(`${this.name}:${u4}`);
  }
};
var nv = class {
  constructor(u4) {
    this.name = "solana", this.namespace = u4.namespace, this.events = z3("events"), this.client = z3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u4) {
    this.namespace = Object.assign(this.namespace, u4);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u4) {
    return this.namespace.methods.includes(u4.request.method) ? this.client.request(u4) : this.getHttpProvider().request(u4.request);
  }
  setDefaultChain(u4, i3) {
    this.httpProviders[u4] || this.setHttpProvider(u4, i3), this.chainId = u4, this.events.emit(Vn3.DEFAULT_CHAIN_CHANGED, `${this.name}:${u4}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u4 = this.namespace.chains[0];
    if (!u4) throw new Error("ChainId not found");
    return u4.split(":")[1];
  }
  getAccounts() {
    const u4 = this.namespace.accounts;
    return u4 ? [...new Set(u4.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u4 = {};
    return this.namespace.chains.forEach((i3) => {
      var d2;
      const P4 = Ct2(i3);
      u4[P4] = this.createHttpProvider(P4, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i3]);
    }), u4;
  }
  getHttpProvider() {
    const u4 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u4];
    if (typeof i3 > "u") throw new Error(`JSON-RPC provider for ${u4} not found`);
    return i3;
  }
  setHttpProvider(u4, i3) {
    const d2 = this.createHttpProvider(u4, i3);
    d2 && (this.httpProviders[u4] = d2);
  }
  createHttpProvider(u4, i3) {
    const d2 = i3 || ft4(u4, this.namespace, this.client.core.projectId);
    if (!d2) throw new Error(`No RPC url provided for chainId: ${u4}`);
    return new JsonRpcProvider2(new f(d2, z3("disableProviderPing")));
  }
};
var tv = class {
  constructor(u4) {
    this.name = "cosmos", this.namespace = u4.namespace, this.events = z3("events"), this.client = z3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u4) {
    this.namespace = Object.assign(this.namespace, u4);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u4 = this.namespace.chains[0];
    if (!u4) throw new Error("ChainId not found");
    return u4.split(":")[1];
  }
  request(u4) {
    return this.namespace.methods.includes(u4.request.method) ? this.client.request(u4) : this.getHttpProvider().request(u4.request);
  }
  setDefaultChain(u4, i3) {
    this.httpProviders[u4] || this.setHttpProvider(u4, i3), this.chainId = u4, this.events.emit(Vn3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u4 = this.namespace.accounts;
    return u4 ? [...new Set(u4.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u4 = {};
    return this.namespace.chains.forEach((i3) => {
      var d2;
      const P4 = Ct2(i3);
      u4[P4] = this.createHttpProvider(P4, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i3]);
    }), u4;
  }
  getHttpProvider() {
    const u4 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u4];
    if (typeof i3 > "u") throw new Error(`JSON-RPC provider for ${u4} not found`);
    return i3;
  }
  setHttpProvider(u4, i3) {
    const d2 = this.createHttpProvider(u4, i3);
    d2 && (this.httpProviders[u4] = d2);
  }
  createHttpProvider(u4, i3) {
    const d2 = i3 || ft4(u4, this.namespace, this.client.core.projectId);
    if (!d2) throw new Error(`No RPC url provided for chainId: ${u4}`);
    return new JsonRpcProvider2(new f(d2, z3("disableProviderPing")));
  }
};
var ev = class {
  constructor(u4) {
    this.name = "cip34", this.namespace = u4.namespace, this.events = z3("events"), this.client = z3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u4) {
    this.namespace = Object.assign(this.namespace, u4);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u4 = this.namespace.chains[0];
    if (!u4) throw new Error("ChainId not found");
    return u4.split(":")[1];
  }
  request(u4) {
    return this.namespace.methods.includes(u4.request.method) ? this.client.request(u4) : this.getHttpProvider().request(u4.request);
  }
  setDefaultChain(u4, i3) {
    this.httpProviders[u4] || this.setHttpProvider(u4, i3), this.chainId = u4, this.events.emit(Vn3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u4 = this.namespace.accounts;
    return u4 ? [...new Set(u4.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u4 = {};
    return this.namespace.chains.forEach((i3) => {
      const d2 = this.getCardanoRPCUrl(i3), P4 = Ct2(i3);
      u4[P4] = this.createHttpProvider(P4, d2);
    }), u4;
  }
  getHttpProvider() {
    const u4 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u4];
    if (typeof i3 > "u") throw new Error(`JSON-RPC provider for ${u4} not found`);
    return i3;
  }
  getCardanoRPCUrl(u4) {
    const i3 = this.namespace.rpcMap;
    if (i3) return i3[u4];
  }
  setHttpProvider(u4, i3) {
    const d2 = this.createHttpProvider(u4, i3);
    d2 && (this.httpProviders[u4] = d2);
  }
  createHttpProvider(u4, i3) {
    const d2 = i3 || this.getCardanoRPCUrl(u4);
    if (!d2) throw new Error(`No RPC url provided for chainId: ${u4}`);
    return new JsonRpcProvider2(new f(d2, z3("disableProviderPing")));
  }
};
var rv = class {
  constructor(u4) {
    this.name = "elrond", this.namespace = u4.namespace, this.events = z3("events"), this.client = z3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u4) {
    this.namespace = Object.assign(this.namespace, u4);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u4) {
    return this.namespace.methods.includes(u4.request.method) ? this.client.request(u4) : this.getHttpProvider().request(u4.request);
  }
  setDefaultChain(u4, i3) {
    this.httpProviders[u4] || this.setHttpProvider(u4, i3), this.chainId = u4, this.events.emit(Vn3.DEFAULT_CHAIN_CHANGED, `${this.name}:${u4}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u4 = this.namespace.chains[0];
    if (!u4) throw new Error("ChainId not found");
    return u4.split(":")[1];
  }
  getAccounts() {
    const u4 = this.namespace.accounts;
    return u4 ? [...new Set(u4.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u4 = {};
    return this.namespace.chains.forEach((i3) => {
      var d2;
      const P4 = Ct2(i3);
      u4[P4] = this.createHttpProvider(P4, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i3]);
    }), u4;
  }
  getHttpProvider() {
    const u4 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u4];
    if (typeof i3 > "u") throw new Error(`JSON-RPC provider for ${u4} not found`);
    return i3;
  }
  setHttpProvider(u4, i3) {
    const d2 = this.createHttpProvider(u4, i3);
    d2 && (this.httpProviders[u4] = d2);
  }
  createHttpProvider(u4, i3) {
    const d2 = i3 || ft4(u4, this.namespace, this.client.core.projectId);
    if (!d2) throw new Error(`No RPC url provided for chainId: ${u4}`);
    return new JsonRpcProvider2(new f(d2, z3("disableProviderPing")));
  }
};
var iv = class {
  constructor(u4) {
    this.name = "multiversx", this.namespace = u4.namespace, this.events = z3("events"), this.client = z3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u4) {
    this.namespace = Object.assign(this.namespace, u4);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u4) {
    return this.namespace.methods.includes(u4.request.method) ? this.client.request(u4) : this.getHttpProvider().request(u4.request);
  }
  setDefaultChain(u4, i3) {
    this.httpProviders[u4] || this.setHttpProvider(u4, i3), this.chainId = u4, this.events.emit(Vn3.DEFAULT_CHAIN_CHANGED, `${this.name}:${u4}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u4 = this.namespace.chains[0];
    if (!u4) throw new Error("ChainId not found");
    return u4.split(":")[1];
  }
  getAccounts() {
    const u4 = this.namespace.accounts;
    return u4 ? [...new Set(u4.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u4 = {};
    return this.namespace.chains.forEach((i3) => {
      var d2;
      const P4 = Ct2(i3);
      u4[P4] = this.createHttpProvider(P4, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i3]);
    }), u4;
  }
  getHttpProvider() {
    const u4 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u4];
    if (typeof i3 > "u") throw new Error(`JSON-RPC provider for ${u4} not found`);
    return i3;
  }
  setHttpProvider(u4, i3) {
    const d2 = this.createHttpProvider(u4, i3);
    d2 && (this.httpProviders[u4] = d2);
  }
  createHttpProvider(u4, i3) {
    const d2 = i3 || ft4(u4, this.namespace, this.client.core.projectId);
    if (!d2) throw new Error(`No RPC url provided for chainId: ${u4}`);
    return new JsonRpcProvider2(new f(d2, z3("disableProviderPing")));
  }
};
var sv = class {
  constructor(u4) {
    this.name = "near", this.namespace = u4.namespace, this.events = z3("events"), this.client = z3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u4) {
    this.namespace = Object.assign(this.namespace, u4);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const u4 = this.namespace.chains[0];
    if (!u4) throw new Error("ChainId not found");
    return u4.split(":")[1];
  }
  request(u4) {
    return this.namespace.methods.includes(u4.request.method) ? this.client.request(u4) : this.getHttpProvider().request(u4.request);
  }
  setDefaultChain(u4, i3) {
    if (this.chainId = u4, !this.httpProviders[u4]) {
      const d2 = i3 || ft4(`${this.name}:${u4}`, this.namespace);
      if (!d2) throw new Error(`No RPC url provided for chainId: ${u4}`);
      this.setHttpProvider(u4, d2);
    }
    this.events.emit(Vn3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u4 = this.namespace.accounts;
    return u4 ? u4.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const u4 = {};
    return this.namespace.chains.forEach((i3) => {
      var d2;
      u4[i3] = this.createHttpProvider(i3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i3]);
    }), u4;
  }
  getHttpProvider() {
    const u4 = `${this.name}:${this.chainId}`, i3 = this.httpProviders[u4];
    if (typeof i3 > "u") throw new Error(`JSON-RPC provider for ${u4} not found`);
    return i3;
  }
  setHttpProvider(u4, i3) {
    const d2 = this.createHttpProvider(u4, i3);
    d2 && (this.httpProviders[u4] = d2);
  }
  createHttpProvider(u4, i3) {
    const d2 = i3 || ft4(u4, this.namespace);
    return typeof d2 > "u" ? void 0 : new JsonRpcProvider2(new f(d2, z3("disableProviderPing")));
  }
};
var uv = Object.defineProperty;
var av = Object.defineProperties;
var ov = Object.getOwnPropertyDescriptors;
var ba = Object.getOwnPropertySymbols;
var fv = Object.prototype.hasOwnProperty;
var cv = Object.prototype.propertyIsEnumerable;
var Ta = (C2, u4, i3) => u4 in C2 ? uv(C2, u4, { enumerable: true, configurable: true, writable: true, value: i3 }) : C2[u4] = i3;
var hr3 = (C2, u4) => {
  for (var i3 in u4 || (u4 = {})) fv.call(u4, i3) && Ta(C2, i3, u4[i3]);
  if (ba) for (var i3 of ba(u4)) cv.call(u4, i3) && Ta(C2, i3, u4[i3]);
  return C2;
};
var Mi2 = (C2, u4) => av(C2, ov(u4));
var lr3 = class _lr {
  constructor(u4) {
    this.events = new import_events8.default(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = false, this.maxPairingAttempts = 10, this.disableProviderPing = false, this.providerOpts = u4, this.logger = typeof (u4 == null ? void 0 : u4.logger) < "u" && typeof (u4 == null ? void 0 : u4.logger) != "string" ? u4.logger : (0, import_pino2.default)(k3({ level: (u4 == null ? void 0 : u4.logger) || Ia })), this.disableProviderPing = (u4 == null ? void 0 : u4.disableProviderPing) || false;
  }
  static async init(u4) {
    const i3 = new _lr(u4);
    return await i3.initialize(), i3;
  }
  async request(u4, i3) {
    const [d2, P4] = this.validateChain(i3);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(d2).request({ request: hr3({}, u4), chainId: `${d2}:${P4}`, topic: this.session.topic });
  }
  sendAsync(u4, i3, d2) {
    const P4 = (/* @__PURE__ */ new Date()).getTime();
    this.request(u4, d2).then((O5) => i3(null, formatJsonRpcResult(P4, O5))).catch((O5) => i3(O5, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var u4;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (u4 = this.session) == null ? void 0 : u4.topic, reason: U("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(u4) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(u4), await this.cleanupPendingPairings(), !u4.skipPairing) return await this.pair(u4.pairingTopic);
  }
  on(u4, i3) {
    this.events.on(u4, i3);
  }
  once(u4, i3) {
    this.events.once(u4, i3);
  }
  removeListener(u4, i3) {
    this.events.removeListener(u4, i3);
  }
  off(u4, i3) {
    this.events.off(u4, i3);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(u4) {
    this.shouldAbortPairingAttempt = false;
    let i3 = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (i3 >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
      const { uri: d2, approval: P4 } = await this.client.connect({ pairingTopic: u4, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      d2 && (this.uri = d2, this.events.emit("display_uri", d2)), await P4().then((O5) => {
        this.session = O5, this.namespaces || (this.namespaces = Vg(O5.namespaces), this.persist("namespaces", this.namespaces));
      }).catch((O5) => {
        if (O5.message !== oe2) throw O5;
        i3++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(u4, i3) {
    try {
      if (!this.session) return;
      const [d2, P4] = this.validateChain(u4);
      this.getProvider(d2).setDefaultChain(P4, i3);
    } catch (d2) {
      if (!/Please call connect/.test(d2.message)) throw d2;
    }
  }
  async cleanupPendingPairings(u4 = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const i3 = this.client.pairing.getAll();
    if (k(i3)) {
      for (const d2 of i3) u4.deletePairings ? this.client.core.expirer.set(d2.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(d2.topic);
      this.logger.info(`Inactive pairings cleared: ${i3.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = true;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const u4 = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[u4]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await Q3.init({ logger: this.providerOpts.logger || Ia, relayUrl: this.providerOpts.relayUrl || Wg, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const u4 = [...new Set(Object.keys(this.session.namespaces).map((i3) => en(i3)))];
    Fi("client", this.client), Fi("events", this.events), Fi("disableProviderPing", this.disableProviderPing), u4.forEach((i3) => {
      if (!this.session) return;
      const d2 = Jg(i3, this.session), P4 = Sa(d2), O5 = Xg(this.namespaces, this.optionalNamespaces), $4 = Mi2(hr3({}, O5[i3]), { accounts: d2, chains: P4 });
      switch (i3) {
        case "eip155":
          this.rpcProviders[i3] = new jg({ namespace: $4 });
          break;
        case "solana":
          this.rpcProviders[i3] = new nv({ namespace: $4 });
          break;
        case "cosmos":
          this.rpcProviders[i3] = new tv({ namespace: $4 });
          break;
        case "polkadot":
          this.rpcProviders[i3] = new kg({ namespace: $4 });
          break;
        case "cip34":
          this.rpcProviders[i3] = new ev({ namespace: $4 });
          break;
        case "elrond":
          this.rpcProviders[i3] = new rv({ namespace: $4 });
          break;
        case "multiversx":
          this.rpcProviders[i3] = new iv({ namespace: $4 });
          break;
        case "near":
          this.rpcProviders[i3] = new sv({ namespace: $4 });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (u4) => {
      this.events.emit("session_ping", u4);
    }), this.client.on("session_event", (u4) => {
      const { params: i3 } = u4, { event: d2 } = i3;
      if (d2.name === "accountsChanged") {
        const P4 = d2.data;
        P4 && k(P4) && this.events.emit("accountsChanged", P4.map(Qg));
      } else if (d2.name === "chainChanged") {
        const P4 = i3.chainId, O5 = i3.event.data, $4 = en(P4), En2 = Wi2(P4) !== Wi2(O5) ? `${$4}:${Wi2(O5)}` : P4;
        this.onChainChanged(En2);
      } else this.events.emit(d2.name, d2.data);
      this.events.emit("session_event", u4);
    }), this.client.on("session_update", ({ topic: u4, params: i3 }) => {
      var d2;
      const { namespaces: P4 } = i3, O5 = (d2 = this.client) == null ? void 0 : d2.session.get(u4);
      this.session = Mi2(hr3({}, O5), { namespaces: P4 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: u4, params: i3 });
    }), this.client.on("session_delete", async (u4) => {
      await this.cleanup(), this.events.emit("session_delete", u4), this.events.emit("disconnect", Mi2(hr3({}, U("USER_DISCONNECTED")), { data: u4.topic }));
    }), this.on(Vn3.DEFAULT_CHAIN_CHANGED, (u4) => {
      this.onChainChanged(u4, true);
    });
  }
  getProvider(u4) {
    if (!this.rpcProviders[u4]) throw new Error(`Provider not found: ${u4}`);
    return this.rpcProviders[u4];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((u4) => {
      var i3;
      this.getProvider(u4).updateNamespace((i3 = this.session) == null ? void 0 : i3.namespaces[u4]);
    });
  }
  setNamespaces(u4) {
    const { namespaces: i3, optionalNamespaces: d2, sessionProperties: P4 } = u4;
    i3 && Object.keys(i3).length && (this.namespaces = i3), d2 && Object.keys(d2).length && (this.optionalNamespaces = d2), this.sessionProperties = P4, this.persist("namespaces", i3), this.persist("optionalNamespaces", d2);
  }
  validateChain(u4) {
    const [i3, d2] = (u4 == null ? void 0 : u4.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [i3, d2];
    if (i3 && !Object.keys(this.namespaces || {}).map(($4) => en($4)).includes(i3)) throw new Error(`Namespace '${i3}' is not configured. Please call connect() first with namespace config.`);
    if (i3 && d2) return [i3, d2];
    const P4 = en(Object.keys(this.namespaces)[0]), O5 = this.rpcProviders[P4].getDefaultChain();
    return [P4, O5];
  }
  async requestAccounts() {
    const [u4] = this.validateChain();
    return await this.getProvider(u4).requestAccounts();
  }
  onChainChanged(u4, i3 = false) {
    var d2;
    if (!this.namespaces) return;
    const [P4, O5] = this.validateChain(u4);
    i3 || this.getProvider(P4).setDefaultChain(O5), ((d2 = this.namespaces[P4]) != null ? d2 : this.namespaces[`${P4}:${O5}`]).defaultChain = O5, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", O5);
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: true });
  }
  persist(u4, i3) {
    this.client.core.storage.setItem(`${xa}/${u4}`, i3);
  }
  async getFromStore(u4) {
    return await this.client.core.storage.getItem(`${xa}/${u4}`);
  }
};
var hv = lr3;

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var P3 = "wc";
var S4 = "ethereum_provider";
var $3 = `${P3}@2:${S4}:`;
var j4 = "https://rpc.walletconnect.com/v1/";
var u3 = ["eth_sendTransaction", "personal_sign"];
var E4 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"];
var m = ["chainChanged", "accountsChanged"];
var _4 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var N5 = Object.defineProperty;
var q = Object.defineProperties;
var D4 = Object.getOwnPropertyDescriptors;
var y6 = Object.getOwnPropertySymbols;
var U5 = Object.prototype.hasOwnProperty;
var Q4 = Object.prototype.propertyIsEnumerable;
var O4 = (a3, t, s2) => t in a3 ? N5(a3, t, { enumerable: true, configurable: true, writable: true, value: s2 }) : a3[t] = s2;
var p4 = (a3, t) => {
  for (var s2 in t || (t = {})) U5.call(t, s2) && O4(a3, s2, t[s2]);
  if (y6) for (var s2 of y6(t)) Q4.call(t, s2) && O4(a3, s2, t[s2]);
  return a3;
};
var M3 = (a3, t) => q(a3, D4(t));
function g5(a3) {
  return Number(a3[0].split(":")[1]);
}
function f4(a3) {
  return `0x${a3.toString(16)}`;
}
function L2(a3) {
  const { chains: t, optionalChains: s2, methods: i3, optionalMethods: n3, events: e, optionalEvents: h6, rpcMap: c4 } = a3;
  if (!k(t)) throw new Error("Invalid chains");
  const o = { chains: t, methods: i3 || u3, events: e || m, rpcMap: p4({}, t.length ? { [g5(t)]: c4[g5(t)] } : {}) }, r2 = e == null ? void 0 : e.filter((l3) => !m.includes(l3)), d2 = i3 == null ? void 0 : i3.filter((l3) => !u3.includes(l3));
  if (!s2 && !h6 && !n3 && !(r2 != null && r2.length) && !(d2 != null && d2.length)) return { required: t.length ? o : void 0 };
  const C2 = (r2 == null ? void 0 : r2.length) && (d2 == null ? void 0 : d2.length) || !s2, I2 = { chains: [...new Set(C2 ? o.chains.concat(s2 || []) : s2)], methods: [...new Set(o.methods.concat(n3 != null && n3.length ? n3 : E4))], events: [...new Set(o.events.concat(h6 != null && h6.length ? h6 : _4))], rpcMap: c4 };
  return { required: t.length ? o : void 0, optional: s2.length ? I2 : void 0 };
}
var v4 = class _v {
  constructor() {
    this.events = new import_events9.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = $3, this.on = (t, s2) => (this.events.on(t, s2), this), this.once = (t, s2) => (this.events.once(t, s2), this), this.removeListener = (t, s2) => (this.events.removeListener(t, s2), this), this.off = (t, s2) => (this.events.off(t, s2), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const s2 = new _v();
    return await s2.initialize(t), s2;
  }
  async request(t) {
    return await this.signer.request(t, this.formatChainId(this.chainId));
  }
  sendAsync(t, s2) {
    this.signer.sendAsync(t, s2, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: s2, optional: i3 } = L2(this.rpc);
    try {
      const n3 = await new Promise(async (h6, c4) => {
        var o;
        this.rpc.showQrModal && ((o = this.modal) == null || o.subscribeModal((r2) => {
          !r2.open && !this.signer.session && (this.signer.abortPairingAttempt(), c4(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(M3(p4({ namespaces: p4({}, s2 && { [this.namespace]: s2 }) }, i3 && { optionalNamespaces: { [this.namespace]: i3 } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((r2) => {
          h6(r2);
        }).catch((r2) => {
          c4(new Error(r2.message));
        });
      });
      if (!n3) return;
      const e = Un(n3.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e), this.setAccounts(e), this.events.emit("connect", { chainId: f4(this.chainId) });
    } catch (n3) {
      throw this.signer.logger.error(n3), n3;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: s2 } = t, { event: i3 } = s2;
      i3.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i3.data), this.events.emit("accountsChanged", this.accounts)) : i3.name === "chainChanged" ? this.setChainId(this.formatChainId(i3.data)) : this.events.emit(i3.name, i3.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const s2 = parseInt(t);
      this.chainId = s2, this.events.emit("chainChanged", f4(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", M3(p4({}, U("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var s2, i3;
      this.rpc.showQrModal && ((s2 = this.modal) == null || s2.closeModal(), (i3 = this.modal) == null || i3.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const s2 = t.filter((i3) => this.isCompatibleChainId(i3)).map((i3) => this.parseChainId(i3));
    s2.length && (this.chainId = s2[0], this.events.emit("chainChanged", f4(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const s2 = this.parseChainId(t);
      this.chainId = s2, this.switchEthereumChain(s2);
    }
  }
  parseAccountId(t) {
    const [s2, i3, n3] = t.split(":");
    return { chainId: `${s2}:${i3}`, address: n3 };
  }
  setAccounts(t) {
    this.accounts = t.filter((s2) => this.parseChainId(this.parseAccountId(s2).chainId) === this.chainId).map((s2) => this.parseAccountId(s2).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var s2, i3;
    const n3 = (s2 = t == null ? void 0 : t.chains) != null ? s2 : [], e = (i3 = t == null ? void 0 : t.optionalChains) != null ? i3 : [], h6 = n3.concat(e);
    if (!h6.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const c4 = n3.length ? (t == null ? void 0 : t.methods) || u3 : [], o = n3.length ? (t == null ? void 0 : t.events) || m : [], r2 = (t == null ? void 0 : t.optionalMethods) || [], d2 = (t == null ? void 0 : t.optionalEvents) || [], C2 = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(h6, t.projectId), I2 = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: n3 == null ? void 0 : n3.map((l3) => this.formatChainId(l3)), optionalChains: e.map((l3) => this.formatChainId(l3)), methods: c4, events: o, optionalMethods: r2, optionalEvents: d2, rpcMap: C2, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: I2, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, s2) {
    const i3 = {};
    return t.forEach((n3) => {
      i3[n3] = this.getRpcUrl(n3, s2);
    }), i3;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? g5(this.rpc.chains) : g5(this.rpc.optionalChains), this.signer = await hv.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let s2;
      try {
        const { WalletConnectModal: i3 } = await import("./dist-HLZVA5CH.js");
        s2 = i3;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (s2) try {
        this.modal = new s2(p4({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
      } catch (i3) {
        throw this.signer.logger.error(i3), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: s2, optionalChains: i3, rpcMap: n3 } = t;
    s2 && k(s2) && (this.rpc.chains = s2.map((e) => this.formatChainId(e)), s2.forEach((e) => {
      this.rpc.rpcMap[e] = (n3 == null ? void 0 : n3[e]) || this.getRpcUrl(e);
    })), i3 && k(i3) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i3 == null ? void 0 : i3.map((e) => this.formatChainId(e)), i3.forEach((e) => {
      this.rpc.rpcMap[e] = (n3 == null ? void 0 : n3[e]) || this.getRpcUrl(e);
    }));
  }
  getRpcUrl(t, s2) {
    var i3;
    return ((i3 = this.rpc.rpcMap) == null ? void 0 : i3[t]) || `${j4}?chainId=eip155:${t}&projectId=${s2 || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (!this.session) return;
    const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), s2 = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
    this.setChainIds(t ? [this.formatChainId(t)] : s2 == null ? void 0 : s2.accounts), this.setAccounts(s2 == null ? void 0 : s2.accounts);
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((s2) => this.parseAccount(s2));
  }
};
var G4 = v4;
export {
  G4 as EthereumProvider,
  _4 as OPTIONAL_EVENTS,
  E4 as OPTIONAL_METHODS,
  m as REQUIRED_EVENTS,
  u3 as REQUIRED_METHODS,
  v4 as default
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@walletconnect/relay-auth/dist/index.es.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@walletconnect/universal-provider/dist/index.es.js:
  (**
  * @license
  * Lodash <https://lodash.com/>
  * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
  * Released under MIT license <https://lodash.com/license>
  * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
  * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  *)
*/
//# sourceMappingURL=index.es-XMR4EEQX.js.map
