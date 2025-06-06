import {
  f,
  formatJsonRpcError,
  formatJsonRpcRequest,
  getBigIntRpcId,
  init_esm,
  init_esm2,
  init_index_es,
  isJsonRpcError,
  isJsonRpcResponse,
  o,
  payloadId,
  r,
  require_cjs as require_cjs3,
  safeJsonParse,
  safeJsonStringify
} from "./chunk-I6OMGHAI.js";
import {
  A,
  E,
  F,
  G,
  H,
  J,
  K,
  P,
  T,
  _,
  _2,
  b,
  b2,
  d,
  g,
  h,
  init_hooks_module,
  init_preact_module,
  k,
  l,
  q,
  x,
  x2,
  y
} from "./chunk-JJY6PVKG.js";
import {
  detect,
  init_es,
  require_cjs,
  require_cjs2,
  require_decode_uri_component,
  require_filter_obj,
  require_split_on_first,
  require_strict_uri_encode
} from "./chunk-WRZ4SLBK.js";
import {
  require_events
} from "./chunk-PAY5Q6JC.js";
import {
  require_browser
} from "./chunk-ZSSN7NCG.js";
import {
  __commonJS,
  __esm,
  __export,
  __reExport,
  __toCommonJS,
  __toESM
} from "./chunk-RZ55PUNP.js";

// node_modules/@walletconnect/legacy-types/dist/esm/crypto.js
var init_crypto = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/crypto.js"() {
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/constants/errors.js
var ERROR_SESSION_CONNECTED, ERROR_SESSION_DISCONNECTED, ERROR_SESSION_REJECTED, ERROR_MISSING_JSON_RPC, ERROR_MISSING_RESULT, ERROR_MISSING_ERROR, ERROR_MISSING_METHOD, ERROR_MISSING_ID, ERROR_MISSING_REQUIRED, ERROR_INVALID_RESPONSE, ERROR_INVALID_URI, ERROR_QRCODE_MODAL_NOT_PROVIDED, ERROR_QRCODE_MODAL_USER_CLOSED;
var init_errors = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/constants/errors.js"() {
    ERROR_SESSION_CONNECTED = "Session currently connected";
    ERROR_SESSION_DISCONNECTED = "Session currently disconnected";
    ERROR_SESSION_REJECTED = "Session Rejected";
    ERROR_MISSING_JSON_RPC = "Missing JSON RPC response";
    ERROR_MISSING_RESULT = `JSON-RPC success response must include "result" field`;
    ERROR_MISSING_ERROR = `JSON-RPC error response must include "error" field`;
    ERROR_MISSING_METHOD = `JSON RPC request must have valid "method" value`;
    ERROR_MISSING_ID = `JSON RPC request must have valid "id" value`;
    ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session";
    ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid";
    ERROR_INVALID_URI = "URI format is invalid";
    ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided";
    ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal";
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/constants/events.js
var RESERVED_EVENTS;
var init_events = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/constants/events.js"() {
    RESERVED_EVENTS = [
      "session_request",
      "session_update",
      "exchange_key",
      "connect",
      "disconnect",
      "display_uri",
      "modal_closed",
      "transport_open",
      "transport_close",
      "transport_error"
    ];
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/constants/jsonrpc.js
var WALLET_METHODS, SIGNING_METHODS;
var init_jsonrpc = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/constants/jsonrpc.js"() {
    WALLET_METHODS = [
      "wallet_addEthereumChain",
      "wallet_switchEthereumChain",
      "wallet_getPermissions",
      "wallet_requestPermissions",
      "wallet_registerOnboarding",
      "wallet_watchAsset",
      "wallet_scanQRCode"
    ];
    SIGNING_METHODS = [
      "eth_sendTransaction",
      "eth_signTransaction",
      "eth_sign",
      "eth_signTypedData",
      "eth_signTypedData_v1",
      "eth_signTypedData_v2",
      "eth_signTypedData_v3",
      "eth_signTypedData_v4",
      "personal_sign",
      ...WALLET_METHODS
    ];
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/constants/mobile.js
var MOBILE_LINK_CHOICE_KEY;
var init_mobile = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/constants/mobile.js"() {
    MOBILE_LINK_CHOICE_KEY = "WALLETCONNECT_DEEPLINK_CHOICE";
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/constants/networks.js
var INFURA_NETWORKS;
var init_networks = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/constants/networks.js"() {
    INFURA_NETWORKS = {
      1: "mainnet",
      3: "ropsten",
      4: "rinkeby",
      5: "goerli",
      42: "kovan"
    };
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/constants/index.js
var init_constants = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/constants/index.js"() {
    init_errors();
    init_events();
    init_jsonrpc();
    init_mobile();
    init_networks();
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/ethereum.js
var init_ethereum = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/ethereum.js"() {
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/events.js
var init_events2 = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/events.js"() {
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/jsonrpc.js
var init_jsonrpc2 = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/jsonrpc.js"() {
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/network.js
var init_network = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/network.js"() {
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/protocol.js
var init_protocol = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/protocol.js"() {
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/qrcode.js
var init_qrcode = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/qrcode.js"() {
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/registry.js
var init_registry = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/registry.js"() {
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/socket.js
var init_socket = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/socket.js"() {
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/storage.js
var init_storage = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/storage.js"() {
  }
});

// node_modules/@walletconnect/legacy-types/dist/esm/index.js
var init_esm3 = __esm({
  "node_modules/@walletconnect/legacy-types/dist/esm/index.js"() {
    init_crypto();
    init_constants();
    init_ethereum();
    init_events2();
    init_jsonrpc2();
    init_network();
    init_protocol();
    init_qrcode();
    init_registry();
    init_socket();
    init_storage();
  }
});

// node_modules/is-typedarray/index.js
var require_is_typedarray = __commonJS({
  "node_modules/is-typedarray/index.js"(exports, module) {
    module.exports = isTypedArray3;
    isTypedArray3.strict = isStrictTypedArray;
    isTypedArray3.loose = isLooseTypedArray;
    var toString = Object.prototype.toString;
    var names = {
      "[object Int8Array]": true,
      "[object Int16Array]": true,
      "[object Int32Array]": true,
      "[object Uint8Array]": true,
      "[object Uint8ClampedArray]": true,
      "[object Uint16Array]": true,
      "[object Uint32Array]": true,
      "[object Float32Array]": true,
      "[object Float64Array]": true
    };
    function isTypedArray3(arr) {
      return isStrictTypedArray(arr) || isLooseTypedArray(arr);
    }
    function isStrictTypedArray(arr) {
      return arr instanceof Int8Array || arr instanceof Int16Array || arr instanceof Int32Array || arr instanceof Uint8Array || arr instanceof Uint8ClampedArray || arr instanceof Uint16Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
    }
    function isLooseTypedArray(arr) {
      return names[toString.call(arr)];
    }
  }
});

// node_modules/typedarray-to-buffer/index.js
var require_typedarray_to_buffer = __commonJS({
  "node_modules/typedarray-to-buffer/index.js"(exports, module) {
    var isTypedArray3 = require_is_typedarray().strict;
    module.exports = function typedarrayToBuffer(arr) {
      if (isTypedArray3(arr)) {
        var buf = Buffer.from(arr.buffer);
        if (arr.byteLength !== arr.buffer.byteLength) {
          buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
        }
        return buf;
      } else {
        return Buffer.from(arr);
      }
    };
  }
});

// node_modules/@walletconnect/encoding/dist/esm/index.js
function bufferToArray(buf) {
  return new Uint8Array(buf);
}
function bufferToHex(buf, prefixed = false) {
  const hex = buf.toString(ENC_HEX);
  return prefixed ? addHexPrefix(hex) : hex;
}
function bufferToUtf8(buf) {
  return buf.toString(ENC_UTF8);
}
function bufferToNumber(buf) {
  return buf.readUIntBE(0, buf.length);
}
function arrayToBuffer(arr) {
  return (0, import_typedarray_to_buffer.default)(arr);
}
function arrayToHex(arr, prefixed = false) {
  return bufferToHex(arrayToBuffer(arr), prefixed);
}
function arrayToUtf8(arr) {
  return bufferToUtf8(arrayToBuffer(arr));
}
function arrayToNumber(arr) {
  return bufferToNumber(arrayToBuffer(arr));
}
function hexToBuffer(hex) {
  return Buffer.from(removeHexPrefix(hex), ENC_HEX);
}
function hexToArray(hex) {
  return bufferToArray(hexToBuffer(hex));
}
function hexToUtf8(hex) {
  return bufferToUtf8(hexToBuffer(hex));
}
function hexToNumber(hex) {
  return arrayToNumber(hexToArray(hex));
}
function utf8ToBuffer(utf8) {
  return Buffer.from(utf8, ENC_UTF8);
}
function utf8ToArray(utf8) {
  return bufferToArray(utf8ToBuffer(utf8));
}
function utf8ToHex(utf8, prefixed = false) {
  return bufferToHex(utf8ToBuffer(utf8), prefixed);
}
function utf8ToNumber(utf8) {
  const num = parseInt(utf8, 10);
  assert(isDefined(num), "Number can only safely store up to 53 bits");
  return num;
}
function numberToBuffer(num) {
  return binaryToBuffer(numberToBinary(num));
}
function numberToArray(num) {
  return binaryToArray(numberToBinary(num));
}
function numberToHex(num, prefixed) {
  return binaryToHex(numberToBinary(num), prefixed);
}
function numberToUtf8(num) {
  return `${num}`;
}
function numberToBinary(num) {
  const bin = (num >>> 0).toString(2);
  return sanitizeBytes(bin);
}
function binaryToBuffer(bin) {
  return arrayToBuffer(binaryToArray(bin));
}
function binaryToArray(bin) {
  return new Uint8Array(splitBytes(bin).map((x4) => parseInt(x4, 2)));
}
function binaryToHex(bin, prefixed) {
  return arrayToHex(binaryToArray(bin), prefixed);
}
function isBinaryString(str) {
  if (typeof str !== "string" || !new RegExp(/^[01]+$/).test(str)) {
    return false;
  }
  if (str.length % 8 !== 0) {
    return false;
  }
  return true;
}
function isHexString(str, length) {
  if (typeof str !== "string" || !str.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }
  if (length && str.length !== 2 + 2 * length) {
    return false;
  }
  return true;
}
function isBuffer(val) {
  return Buffer.isBuffer(val);
}
function isTypedArray(val) {
  return import_is_typedarray.default.strict(val) && !isBuffer(val);
}
function isArrayBuffer(val) {
  return !isTypedArray(val) && !isBuffer(val) && typeof val.byteLength !== "undefined";
}
function getType(val) {
  if (isBuffer(val)) {
    return TYPE_BUFFER;
  } else if (isTypedArray(val)) {
    return TYPE_TYPED_ARRAY;
  } else if (isArrayBuffer(val)) {
    return TYPE_ARRAY_BUFFER;
  } else if (Array.isArray(val)) {
    return TYPE_ARRAY;
  } else {
    return typeof val;
  }
}
function getEncoding(str) {
  if (isBinaryString(str)) {
    return ENC_BIN;
  }
  if (isHexString(str)) {
    return ENC_HEX;
  }
  return ENC_UTF8;
}
function concatBuffers(...args) {
  const result = Buffer.concat(args);
  return result;
}
function concatArrays(...args) {
  let result = [];
  args.forEach((arg) => result = result.concat(Array.from(arg)));
  return new Uint8Array([...result]);
}
function calcByteLength(length, byteSize = 8) {
  const remainder = length % byteSize;
  return remainder ? (length - remainder) / byteSize * byteSize + byteSize : length;
}
function splitBytes(str, byteSize = 8) {
  const bytes = sanitizeBytes(str).match(new RegExp(`.{${byteSize}}`, "gi"));
  return Array.from(bytes || []);
}
function sanitizeBytes(str, byteSize = 8, padding = STRING_ZERO) {
  return padLeft(str, calcByteLength(str.length, byteSize), padding);
}
function padLeft(str, length, padding = STRING_ZERO) {
  return padString(str, length, true, padding);
}
function removeHexPrefix(hex) {
  return hex.replace(/^0x/, "");
}
function addHexPrefix(hex) {
  return hex.startsWith("0x") ? hex : `0x${hex}`;
}
function sanitizeHex(hex) {
  hex = removeHexPrefix(hex);
  hex = sanitizeBytes(hex, 2);
  if (hex) {
    hex = addHexPrefix(hex);
  }
  return hex;
}
function removeHexLeadingZeros(hex) {
  const prefixed = hex.startsWith("0x");
  hex = removeHexPrefix(hex);
  hex = hex.startsWith(STRING_ZERO) ? hex.substring(1) : hex;
  return prefixed ? addHexPrefix(hex) : hex;
}
function isUndefined(value) {
  return typeof value === "undefined";
}
function isDefined(value) {
  return !isUndefined(value);
}
function assert(assertion, errorMessage) {
  if (!assertion) {
    throw new Error(errorMessage);
  }
}
function padString(str, length, left, padding = STRING_ZERO) {
  const diff = length - str.length;
  let result = str;
  if (diff > 0) {
    const pad = padding.repeat(diff);
    result = left ? pad + str : str + pad;
  }
  return result;
}
var import_is_typedarray, import_typedarray_to_buffer, ENC_HEX, ENC_UTF8, ENC_BIN, TYPE_BUFFER, TYPE_ARRAY, TYPE_TYPED_ARRAY, TYPE_ARRAY_BUFFER, STRING_ZERO;
var init_esm4 = __esm({
  "node_modules/@walletconnect/encoding/dist/esm/index.js"() {
    import_is_typedarray = __toESM(require_is_typedarray());
    import_typedarray_to_buffer = __toESM(require_typedarray_to_buffer());
    ENC_HEX = "hex";
    ENC_UTF8 = "utf8";
    ENC_BIN = "binary";
    TYPE_BUFFER = "buffer";
    TYPE_ARRAY = "array";
    TYPE_TYPED_ARRAY = "typed-array";
    TYPE_ARRAY_BUFFER = "array-buffer";
    STRING_ZERO = "0";
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/encoding.js
function convertArrayBufferToBuffer(arrBuf) {
  return arrayToBuffer(new Uint8Array(arrBuf));
}
function convertArrayBufferToUtf8(arrBuf) {
  return arrayToUtf8(new Uint8Array(arrBuf));
}
function convertArrayBufferToHex(arrBuf, noPrefix) {
  return arrayToHex(new Uint8Array(arrBuf), !noPrefix);
}
function convertArrayBufferToNumber(arrBuf) {
  return arrayToNumber(new Uint8Array(arrBuf));
}
function concatArrayBuffers(...args) {
  return hexToArray(args.map((b3) => arrayToHex(new Uint8Array(b3))).join("")).buffer;
}
function convertBufferToArrayBuffer(buf) {
  return bufferToArray(buf).buffer;
}
function convertBufferToUtf8(buf) {
  return bufferToUtf8(buf);
}
function convertBufferToHex(buf, noPrefix) {
  return bufferToHex(buf, !noPrefix);
}
function convertBufferToNumber(buf) {
  return bufferToNumber(buf);
}
function concatBuffers2(...args) {
  return concatBuffers(...args);
}
function convertUtf8ToArrayBuffer(utf8) {
  return utf8ToArray(utf8).buffer;
}
function convertUtf8ToBuffer(utf8) {
  return utf8ToBuffer(utf8);
}
function convertUtf8ToHex(utf8, noPrefix) {
  return utf8ToHex(utf8, !noPrefix);
}
function convertUtf8ToNumber(utf8) {
  return utf8ToNumber(utf8);
}
function convertHexToBuffer(hex) {
  return hexToBuffer(hex);
}
function convertHexToArrayBuffer(hex) {
  return hexToArray(hex).buffer;
}
function convertHexToUtf8(hex) {
  return hexToUtf8(hex);
}
function convertHexToNumber(hex) {
  return hexToNumber(hex);
}
function convertNumberToBuffer(num) {
  return numberToBuffer(num);
}
function convertNumberToArrayBuffer(num) {
  return numberToArray(num).buffer;
}
function convertNumberToUtf8(num) {
  return numberToUtf8(num);
}
function convertNumberToHex(num, noPrefix) {
  return numberToHex(Number(num), !noPrefix);
}
var init_encoding = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/encoding.js"() {
    init_esm4();
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/window.js
var windowGetters, getFromWindow2, getFromWindowOrThrow2, getDocumentOrThrow2, getDocument2, getNavigatorOrThrow2, getNavigator2, getLocationOrThrow2, getLocation2, getCryptoOrThrow2, getCrypto2, getLocalStorageOrThrow2, getLocalStorage2;
var init_window = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/window.js"() {
    windowGetters = __toESM(require_cjs());
    getFromWindow2 = windowGetters.getFromWindow;
    getFromWindowOrThrow2 = windowGetters.getFromWindowOrThrow;
    getDocumentOrThrow2 = windowGetters.getDocumentOrThrow;
    getDocument2 = windowGetters.getDocument;
    getNavigatorOrThrow2 = windowGetters.getNavigatorOrThrow;
    getNavigator2 = windowGetters.getNavigator;
    getLocationOrThrow2 = windowGetters.getLocationOrThrow;
    getLocation2 = windowGetters.getLocation;
    getCryptoOrThrow2 = windowGetters.getCryptoOrThrow;
    getCrypto2 = windowGetters.getCrypto;
    getLocalStorageOrThrow2 = windowGetters.getLocalStorageOrThrow;
    getLocalStorage2 = windowGetters.getLocalStorage;
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/env.js
function detectEnv(userAgent) {
  return detect(userAgent);
}
function detectOS() {
  const env3 = detectEnv();
  return env3 && env3.os ? env3.os : void 0;
}
function isAndroid() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("android") : false;
}
function isIOS() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}
function isMobile() {
  const os = detectOS();
  return os ? isAndroid() || isIOS() : false;
}
function isNode() {
  const env3 = detectEnv();
  const result = env3 && env3.name ? env3.name.toLowerCase() === "node" : false;
  return result;
}
function isBrowser() {
  const result = !isNode() && !!getNavigator2();
  return result;
}
var init_env = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/env.js"() {
    init_es();
    init_window();
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/json.js
var safeJsonParse2, safeJsonStringify2;
var init_json = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/json.js"() {
    init_esm();
    safeJsonParse2 = safeJsonParse;
    safeJsonStringify2 = safeJsonStringify;
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/local.js
function setLocal(key, data) {
  const raw = safeJsonStringify2(data);
  const local = getLocalStorage2();
  if (local) {
    local.setItem(key, raw);
  }
}
function getLocal(key) {
  let data = null;
  let raw = null;
  const local = getLocalStorage2();
  if (local) {
    raw = local.getItem(key);
  }
  data = raw ? safeJsonParse2(raw) : raw;
  return data;
}
function removeLocal(key) {
  const local = getLocalStorage2();
  if (local) {
    local.removeItem(key);
  }
}
var init_local = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/local.js"() {
    init_json();
    init_window();
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/meta.js
function getClientMeta() {
  return windowMetadata.getWindowMetadata();
}
var windowMetadata;
var init_meta = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/meta.js"() {
    windowMetadata = __toESM(require_cjs2());
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/misc.js
function sanitizeHex2(hex) {
  return sanitizeHex(hex);
}
function addHexPrefix2(hex) {
  return addHexPrefix(hex);
}
function removeHexPrefix2(hex) {
  return removeHexPrefix(hex);
}
function removeHexLeadingZeros2(hex) {
  return removeHexLeadingZeros(addHexPrefix(hex));
}
function uuid() {
  const result = ((a, b3) => {
    for (b3 = a = ""; a++ < 36; b3 += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-") {
    }
    return b3;
  })();
  return result;
}
function logDeprecationWarning() {
  console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
}
function getInfuraRpcUrl(chainId, infuraId) {
  let rpcUrl;
  const network = INFURA_NETWORKS[chainId];
  if (network) {
    rpcUrl = `https://${network}.infura.io/v3/${infuraId}`;
  }
  return rpcUrl;
}
function getRpcUrl(chainId, rpc) {
  let rpcUrl;
  const infuraUrl = getInfuraRpcUrl(chainId, rpc.infuraId);
  if (rpc.custom && rpc.custom[chainId]) {
    rpcUrl = rpc.custom[chainId];
  } else if (infuraUrl) {
    rpcUrl = infuraUrl;
  }
  return rpcUrl;
}
var payloadId2;
var init_misc = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/misc.js"() {
    init_esm4();
    init_esm2();
    init_esm3();
    payloadId2 = payloadId;
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/mobile.js
function formatIOSMobile(uri, entry) {
  const encodedUri = encodeURIComponent(uri);
  return entry.universalLink ? `${entry.universalLink}/wc?uri=${encodedUri}` : entry.deepLink ? `${entry.deepLink}${entry.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}` : "";
}
function saveMobileLinkInfo(data) {
  const focusUri = data.href.split("?")[0];
  setLocal(MOBILE_LINK_CHOICE_KEY, Object.assign(Object.assign({}, data), { href: focusUri }));
}
function getMobileRegistryEntry(registry, name) {
  return registry.filter((entry) => entry.name.toLowerCase().includes(name.toLowerCase()))[0];
}
function getMobileLinkRegistry(registry, whitelist) {
  let links = registry;
  if (whitelist) {
    links = whitelist.map((name) => getMobileRegistryEntry(registry, name)).filter(Boolean);
  }
  return links;
}
var init_mobile2 = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/mobile.js"() {
    init_esm3();
    init_local();
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/payload.js
function promisify(originalFn, thisArg) {
  const promisifiedFunction = async (...callArgs) => {
    return new Promise((resolve, reject) => {
      const callback = (err, data) => {
        if (err === null || typeof err === "undefined") {
          reject(err);
        }
        resolve(data);
      };
      originalFn.apply(thisArg, [...callArgs, callback]);
    });
  };
  return promisifiedFunction;
}
function formatRpcError(error) {
  const message = error.message || "Failed or Rejected Request";
  let code = -32e3;
  if (error && !error.code) {
    switch (message) {
      case "Parse error":
        code = -32700;
        break;
      case "Invalid request":
        code = -32600;
        break;
      case "Method not found":
        code = -32601;
        break;
      case "Invalid params":
        code = -32602;
        break;
      case "Internal error":
        code = -32603;
        break;
      default:
        code = -32e3;
        break;
    }
  }
  const result = {
    code,
    message
  };
  if (error.data) {
    result.data = error.data;
  }
  return result;
}
var init_payload = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/payload.js"() {
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/registry.js
function getWalletRegistryUrl() {
  return API_URL + "/api/v2/wallets";
}
function getDappRegistryUrl() {
  return API_URL + "/api/v2/dapps";
}
function formatMobileRegistryEntry(entry, platform = "mobile") {
  var _a;
  return {
    name: entry.name || "",
    shortName: entry.metadata.shortName || "",
    color: entry.metadata.colors.primary || "",
    logo: (_a = entry.image_url.sm) !== null && _a !== void 0 ? _a : "",
    universalLink: entry[platform].universal || "",
    deepLink: entry[platform].native || ""
  };
}
function formatMobileRegistry(registry, platform = "mobile") {
  return Object.values(registry).filter((entry) => !!entry[platform].universal || !!entry[platform].native).map((entry) => formatMobileRegistryEntry(entry, platform));
}
var API_URL;
var init_registry2 = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/registry.js"() {
    API_URL = "https://registry.walletconnect.com";
  }
});

// node_modules/query-string/index.js
var require_query_string = __commonJS({
  "node_modules/query-string/index.js"(exports) {
    "use strict";
    var strictUriEncode = require_strict_uri_encode();
    var decodeComponent = require_decode_uri_component();
    var splitOnFirst = require_split_on_first();
    var filterObject = require_filter_obj();
    var isNullOrUndefined = (value) => value === null || value === void 0;
    function encoderForArrayFormat(options) {
      switch (options.arrayFormat) {
        case "index":
          return (key) => (result, value) => {
            const index = result.length;
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode(key, options), "[", index, "]"].join("")];
            }
            return [
              ...result,
              [encode(key, options), "[", encode(index, options), "]=", encode(value, options)].join("")
            ];
          };
        case "bracket":
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode(key, options), "[]"].join("")];
            }
            return [...result, [encode(key, options), "[]=", encode(value, options)].join("")];
          };
        case "comma":
        case "separator":
          return (key) => (result, value) => {
            if (value === null || value === void 0 || value.length === 0) {
              return result;
            }
            if (result.length === 0) {
              return [[encode(key, options), "=", encode(value, options)].join("")];
            }
            return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
          };
        default:
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, encode(key, options)];
            }
            return [...result, [encode(key, options), "=", encode(value, options)].join("")];
          };
      }
    }
    function parserForArrayFormat(options) {
      let result;
      switch (options.arrayFormat) {
        case "index":
          return (key, value, accumulator) => {
            result = /\[(\d*)\]$/.exec(key);
            key = key.replace(/\[\d*\]$/, "");
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = {};
            }
            accumulator[key][result[1]] = value;
          };
        case "bracket":
          return (key, value, accumulator) => {
            result = /(\[\])$/.exec(key);
            key = key.replace(/\[\]$/, "");
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = [value];
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
        case "comma":
        case "separator":
          return (key, value, accumulator) => {
            const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
            const isEncodedArray = typeof value === "string" && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
            value = isEncodedArray ? decode(value, options) : value;
            const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode(item, options)) : value === null ? value : decode(value, options);
            accumulator[key] = newValue;
          };
        default:
          return (key, value, accumulator) => {
            if (accumulator[key] === void 0) {
              accumulator[key] = value;
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
      }
    }
    function validateArrayFormatSeparator(value) {
      if (typeof value !== "string" || value.length !== 1) {
        throw new TypeError("arrayFormatSeparator must be single character string");
      }
    }
    function encode(value, options) {
      if (options.encode) {
        return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
      }
      return value;
    }
    function decode(value, options) {
      if (options.decode) {
        return decodeComponent(value);
      }
      return value;
    }
    function keysSorter(input) {
      if (Array.isArray(input)) {
        return input.sort();
      }
      if (typeof input === "object") {
        return keysSorter(Object.keys(input)).sort((a, b3) => Number(a) - Number(b3)).map((key) => input[key]);
      }
      return input;
    }
    function removeHash(input) {
      const hashStart = input.indexOf("#");
      if (hashStart !== -1) {
        input = input.slice(0, hashStart);
      }
      return input;
    }
    function getHash(url) {
      let hash = "";
      const hashStart = url.indexOf("#");
      if (hashStart !== -1) {
        hash = url.slice(hashStart);
      }
      return hash;
    }
    function extract(input) {
      input = removeHash(input);
      const queryStart = input.indexOf("?");
      if (queryStart === -1) {
        return "";
      }
      return input.slice(queryStart + 1);
    }
    function parseValue(value, options) {
      if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
        value = Number(value);
      } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
        value = value.toLowerCase() === "true";
      }
      return value;
    }
    function parse2(query, options) {
      options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: false,
        parseBooleans: false
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const formatter = parserForArrayFormat(options);
      const ret = /* @__PURE__ */ Object.create(null);
      if (typeof query !== "string") {
        return ret;
      }
      query = query.trim().replace(/^[?#&]/, "");
      if (!query) {
        return ret;
      }
      for (const param of query.split("&")) {
        if (param === "") {
          continue;
        }
        let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, " ") : param, "=");
        value = value === void 0 ? null : ["comma", "separator"].includes(options.arrayFormat) ? value : decode(value, options);
        formatter(decode(key, options), value, ret);
      }
      for (const key of Object.keys(ret)) {
        const value = ret[key];
        if (typeof value === "object" && value !== null) {
          for (const k3 of Object.keys(value)) {
            value[k3] = parseValue(value[k3], options);
          }
        } else {
          ret[key] = parseValue(value, options);
        }
      }
      if (options.sort === false) {
        return ret;
      }
      return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
        const value = ret[key];
        if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
          result[key] = keysSorter(value);
        } else {
          result[key] = value;
        }
        return result;
      }, /* @__PURE__ */ Object.create(null));
    }
    exports.extract = extract;
    exports.parse = parse2;
    exports.stringify = (object, options) => {
      if (!object) {
        return "";
      }
      options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: "none",
        arrayFormatSeparator: ","
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
      const formatter = encoderForArrayFormat(options);
      const objectCopy = {};
      for (const key of Object.keys(object)) {
        if (!shouldFilter(key)) {
          objectCopy[key] = object[key];
        }
      }
      const keys = Object.keys(objectCopy);
      if (options.sort !== false) {
        keys.sort(options.sort);
      }
      return keys.map((key) => {
        const value = object[key];
        if (value === void 0) {
          return "";
        }
        if (value === null) {
          return encode(key, options);
        }
        if (Array.isArray(value)) {
          return value.reduce(formatter(key), []).join("&");
        }
        return encode(key, options) + "=" + encode(value, options);
      }).filter((x4) => x4.length > 0).join("&");
    };
    exports.parseUrl = (url, options) => {
      options = Object.assign({
        decode: true
      }, options);
      const [url_, hash] = splitOnFirst(url, "#");
      return Object.assign(
        {
          url: url_.split("?")[0] || "",
          query: parse2(extract(url), options)
        },
        options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode(hash, options) } : {}
      );
    };
    exports.stringifyUrl = (object, options) => {
      options = Object.assign({
        encode: true,
        strict: true
      }, options);
      const url = removeHash(object.url).split("?")[0] || "";
      const queryFromUrl = exports.extract(object.url);
      const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
      const query = Object.assign(parsedQueryFromUrl, object.query);
      let queryString = exports.stringify(query, options);
      if (queryString) {
        queryString = `?${queryString}`;
      }
      let hash = getHash(object.url);
      if (object.fragmentIdentifier) {
        hash = `#${encode(object.fragmentIdentifier, options)}`;
      }
      return `${url}${queryString}${hash}`;
    };
    exports.pick = (input, filter, options) => {
      options = Object.assign({
        parseFragmentIdentifier: true
      }, options);
      const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
      return exports.stringifyUrl({
        url,
        query: filterObject(query, filter),
        fragmentIdentifier
      }, options);
    };
    exports.exclude = (input, filter, options) => {
      const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
      return exports.pick(input, exclusionFilter, options);
    };
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/url.js
function getQueryString(url) {
  const pathEnd = url.indexOf("?") !== -1 ? url.indexOf("?") : void 0;
  const queryString = typeof pathEnd !== "undefined" ? url.substr(pathEnd) : "";
  return queryString;
}
function appendToQueryString(queryString, newQueryParams) {
  let queryParams = parseQueryString(queryString);
  queryParams = Object.assign(Object.assign({}, queryParams), newQueryParams);
  queryString = formatQueryString(queryParams);
  return queryString;
}
function parseQueryString(queryString) {
  return queryStringUtils.parse(queryString);
}
function formatQueryString(queryParams) {
  return queryStringUtils.stringify(queryParams);
}
var queryStringUtils;
var init_url = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/url.js"() {
    queryStringUtils = __toESM(require_query_string());
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/session.js
function isWalletConnectSession(object) {
  return typeof object.bridge !== "undefined";
}
function parseWalletConnectUri(str) {
  const pathStart = str.indexOf(":");
  const pathEnd = str.indexOf("?") !== -1 ? str.indexOf("?") : void 0;
  const protocol = str.substring(0, pathStart);
  const path = str.substring(pathStart + 1, pathEnd);
  function parseRequiredParams(path2) {
    const separator = "@";
    const values = path2.split(separator);
    const requiredParams2 = {
      handshakeTopic: values[0],
      version: parseInt(values[1], 10)
    };
    return requiredParams2;
  }
  const requiredParams = parseRequiredParams(path);
  const queryString = typeof pathEnd !== "undefined" ? str.substr(pathEnd) : "";
  function parseQueryParams(queryString2) {
    const result2 = parseQueryString(queryString2);
    const parameters = {
      key: result2.key || "",
      bridge: result2.bridge || ""
    };
    return parameters;
  }
  const queryParams = parseQueryParams(queryString);
  const result = Object.assign(Object.assign({ protocol }, requiredParams), queryParams);
  return result;
}
var init_session = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/session.js"() {
    init_url();
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/validators.js
function isEmptyString(value) {
  return value === "" || typeof value === "string" && value.trim() === "";
}
function isEmptyArray(array) {
  return !(array && array.length);
}
function isBuffer2(val) {
  return isBuffer(val);
}
function isTypedArray2(val) {
  return isTypedArray(val);
}
function isArrayBuffer2(val) {
  return isArrayBuffer(val);
}
function getType2(val) {
  return getType(val);
}
function getEncoding2(val) {
  return getEncoding(val);
}
function isHexString2(value, length) {
  return isHexString(value, length);
}
function isJsonRpcSubscription(object) {
  return typeof object.params === "object";
}
function isJsonRpcRequest(object) {
  return typeof object.method !== "undefined";
}
function isJsonRpcResponseSuccess(object) {
  return typeof object.result !== "undefined";
}
function isJsonRpcResponseError(object) {
  return typeof object.error !== "undefined";
}
function isInternalEvent(object) {
  return typeof object.event !== "undefined";
}
function isReservedEvent(event) {
  return RESERVED_EVENTS.includes(event) || event.startsWith("wc_");
}
function isSilentPayload(request) {
  if (request.method.startsWith("wc_")) {
    return true;
  }
  if (SIGNING_METHODS.includes(request.method)) {
    return false;
  }
  return true;
}
var init_validators = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/validators.js"() {
    init_esm4();
    init_esm3();
  }
});

// node_modules/@walletconnect/legacy-utils/dist/esm/index.js
var esm_exports4 = {};
__export(esm_exports4, {
  addHexPrefix: () => addHexPrefix2,
  appendToQueryString: () => appendToQueryString,
  concatArrayBuffers: () => concatArrayBuffers,
  concatBuffers: () => concatBuffers2,
  convertArrayBufferToBuffer: () => convertArrayBufferToBuffer,
  convertArrayBufferToHex: () => convertArrayBufferToHex,
  convertArrayBufferToNumber: () => convertArrayBufferToNumber,
  convertArrayBufferToUtf8: () => convertArrayBufferToUtf8,
  convertBufferToArrayBuffer: () => convertBufferToArrayBuffer,
  convertBufferToHex: () => convertBufferToHex,
  convertBufferToNumber: () => convertBufferToNumber,
  convertBufferToUtf8: () => convertBufferToUtf8,
  convertHexToArrayBuffer: () => convertHexToArrayBuffer,
  convertHexToBuffer: () => convertHexToBuffer,
  convertHexToNumber: () => convertHexToNumber,
  convertHexToUtf8: () => convertHexToUtf8,
  convertNumberToArrayBuffer: () => convertNumberToArrayBuffer,
  convertNumberToBuffer: () => convertNumberToBuffer,
  convertNumberToHex: () => convertNumberToHex,
  convertNumberToUtf8: () => convertNumberToUtf8,
  convertUtf8ToArrayBuffer: () => convertUtf8ToArrayBuffer,
  convertUtf8ToBuffer: () => convertUtf8ToBuffer,
  convertUtf8ToHex: () => convertUtf8ToHex,
  convertUtf8ToNumber: () => convertUtf8ToNumber,
  detectEnv: () => detectEnv,
  detectOS: () => detectOS,
  formatIOSMobile: () => formatIOSMobile,
  formatMobileRegistry: () => formatMobileRegistry,
  formatMobileRegistryEntry: () => formatMobileRegistryEntry,
  formatQueryString: () => formatQueryString,
  formatRpcError: () => formatRpcError,
  getClientMeta: () => getClientMeta,
  getCrypto: () => getCrypto2,
  getCryptoOrThrow: () => getCryptoOrThrow2,
  getDappRegistryUrl: () => getDappRegistryUrl,
  getDocument: () => getDocument2,
  getDocumentOrThrow: () => getDocumentOrThrow2,
  getEncoding: () => getEncoding2,
  getFromWindow: () => getFromWindow2,
  getFromWindowOrThrow: () => getFromWindowOrThrow2,
  getInfuraRpcUrl: () => getInfuraRpcUrl,
  getLocal: () => getLocal,
  getLocalStorage: () => getLocalStorage2,
  getLocalStorageOrThrow: () => getLocalStorageOrThrow2,
  getLocation: () => getLocation2,
  getLocationOrThrow: () => getLocationOrThrow2,
  getMobileLinkRegistry: () => getMobileLinkRegistry,
  getMobileRegistryEntry: () => getMobileRegistryEntry,
  getNavigator: () => getNavigator2,
  getNavigatorOrThrow: () => getNavigatorOrThrow2,
  getQueryString: () => getQueryString,
  getRpcUrl: () => getRpcUrl,
  getType: () => getType2,
  getWalletRegistryUrl: () => getWalletRegistryUrl,
  isAndroid: () => isAndroid,
  isArrayBuffer: () => isArrayBuffer2,
  isBrowser: () => isBrowser,
  isBuffer: () => isBuffer2,
  isEmptyArray: () => isEmptyArray,
  isEmptyString: () => isEmptyString,
  isHexString: () => isHexString2,
  isIOS: () => isIOS,
  isInternalEvent: () => isInternalEvent,
  isJsonRpcRequest: () => isJsonRpcRequest,
  isJsonRpcResponseError: () => isJsonRpcResponseError,
  isJsonRpcResponseSuccess: () => isJsonRpcResponseSuccess,
  isJsonRpcSubscription: () => isJsonRpcSubscription,
  isMobile: () => isMobile,
  isNode: () => isNode,
  isReservedEvent: () => isReservedEvent,
  isSilentPayload: () => isSilentPayload,
  isTypedArray: () => isTypedArray2,
  isWalletConnectSession: () => isWalletConnectSession,
  logDeprecationWarning: () => logDeprecationWarning,
  parseQueryString: () => parseQueryString,
  parseWalletConnectUri: () => parseWalletConnectUri,
  payloadId: () => payloadId2,
  promisify: () => promisify,
  removeHexLeadingZeros: () => removeHexLeadingZeros2,
  removeHexPrefix: () => removeHexPrefix2,
  removeLocal: () => removeLocal,
  safeJsonParse: () => safeJsonParse2,
  safeJsonStringify: () => safeJsonStringify2,
  sanitizeHex: () => sanitizeHex2,
  saveMobileLinkInfo: () => saveMobileLinkInfo,
  setLocal: () => setLocal,
  uuid: () => uuid
});
var init_esm5 = __esm({
  "node_modules/@walletconnect/legacy-utils/dist/esm/index.js"() {
    init_encoding();
    init_env();
    init_json();
    init_local();
    init_meta();
    init_misc();
    init_mobile2();
    init_payload();
    init_registry2();
    init_session();
    init_url();
    init_validators();
    init_window();
  }
});

// node_modules/ws/browser.js
var require_browser2 = __commonJS({
  "node_modules/ws/browser.js"(exports, module) {
    "use strict";
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active.tagName.toUpperCase()) {
        // .toUpperCase handles XHTML
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy(text, options) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format2, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy;
  }
});

// node_modules/preact/compat/dist/compat.module.js
var compat_module_exports = {};
__export(compat_module_exports, {
  Children: () => O,
  Component: () => x,
  Fragment: () => k,
  PureComponent: () => N,
  StrictMode: () => Cn,
  Suspense: () => P2,
  SuspenseList: () => B,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => hn,
  cloneElement: () => _n,
  createContext: () => K,
  createElement: () => _,
  createFactory: () => dn,
  createPortal: () => $,
  createRef: () => b,
  default: () => Rn,
  findDOMNode: () => Sn,
  flushSync: () => En,
  forwardRef: () => D,
  hydrate: () => tn,
  isElement: () => xn,
  isFragment: () => pn,
  isMemo: () => yn,
  isValidElement: () => mn,
  lazy: () => z,
  memo: () => M,
  render: () => nn,
  startTransition: () => R,
  unmountComponentAtNode: () => bn,
  unstable_batchedUpdates: () => gn,
  useCallback: () => q,
  useContext: () => x2,
  useDebugValue: () => P,
  useDeferredValue: () => w,
  useEffect: () => y,
  useErrorBoundary: () => b2,
  useId: () => g,
  useImperativeHandle: () => F,
  useInsertionEffect: () => I,
  useLayoutEffect: () => _2,
  useMemo: () => T,
  useReducer: () => h,
  useRef: () => A,
  useState: () => d,
  useSyncExternalStore: () => C,
  useTransition: () => k2,
  version: () => vn
});
function g2(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function E2(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return true;
  for (var r2 in t) if ("__source" !== r2 && n[r2] !== t[r2]) return true;
  return false;
}
function C(n, t) {
  var e = t(), r2 = d({ t: { __: e, u: t } }), u = r2[0].t, o3 = r2[1];
  return _2(function() {
    u.__ = e, u.u = t, x3(u) && o3({ t: u });
  }, [n, e, t]), y(function() {
    return x3(u) && o3({ t: u }), n(function() {
      x3(u) && o3({ t: u });
    });
  }, [n]), e;
}
function x3(n) {
  var t, e, r2 = n.u, u = n.__;
  try {
    var o3 = r2();
    return !((t = u) === (e = o3) && (0 !== t || 1 / t == 1 / e) || t != t && e != e);
  } catch (n2) {
    return true;
  }
}
function R(n) {
  n();
}
function w(n) {
  return n;
}
function k2() {
  return [false, R];
}
function N(n, t) {
  this.props = n, this.context = t;
}
function M(n, e) {
  function r2(n2) {
    var t = this.props.ref, r3 = t == n2.ref;
    return !r3 && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n2) || !r3 : E2(this.props, n2);
  }
  function u(e2) {
    return this.shouldComponentUpdate = r2, _(n, e2);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = true, u.__f = true, u;
}
function D(n) {
  function t(t2) {
    var e = g2({}, t2);
    return delete e.ref, n(e, t2.ref || null);
  }
  return t.$$typeof = A2, t.render = t, t.prototype.isReactComponent = t.__f = true, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
function V(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(n2) {
    "function" == typeof n2.__c && n2.__c();
  }), n.__c.__H = null), null != (n = g2({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c.__e = true, n.__c = null), n.__k = n.__k && n.__k.map(function(n2) {
    return V(n2, t, e);
  })), n;
}
function W(n, t, e) {
  return n && e && (n.__v = null, n.__k = n.__k && n.__k.map(function(n2) {
    return W(n2, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.appendChild(n.__e), n.__c.__e = true, n.__c.__P = e)), n;
}
function P2() {
  this.__u = 0, this.o = null, this.__b = null;
}
function j(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function z(n) {
  var e, r2, u;
  function o3(o4) {
    if (e || (e = n()).then(function(n2) {
      r2 = n2.default || n2;
    }, function(n2) {
      u = n2;
    }), u) throw u;
    if (!r2) throw e;
    return _(r2, o4);
  }
  return o3.displayName = "Lazy", o3.__f = true, o3;
}
function B() {
  this.i = null, this.l = null;
}
function Z(n) {
  return this.getChildContext = function() {
    return n.context;
  }, n.children;
}
function Y(n) {
  var e = this, r2 = n.h;
  if (e.componentWillUnmount = function() {
    E(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== r2 && e.componentWillUnmount(), !e.v) {
    for (var u = e.__v; null !== u && !u.__m && null !== u.__; ) u = u.__;
    e.h = r2, e.v = { nodeType: 1, parentNode: r2, childNodes: [], __k: { __m: u.__m }, contains: function() {
      return true;
    }, insertBefore: function(n2, t) {
      this.childNodes.push(n2), e.h.insertBefore(n2, t);
    }, removeChild: function(n2) {
      this.childNodes.splice(this.childNodes.indexOf(n2) >>> 1, 1), e.h.removeChild(n2);
    } };
  }
  E(_(Z, { context: e.context }, n.__v), e.v);
}
function $(n, e) {
  var r2 = _(Y, { __v: n, h: e });
  return r2.containerInfo = e, r2;
}
function nn(n, t, e) {
  return null == t.__k && (t.textContent = ""), E(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function tn(n, t, e) {
  return G(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function rn() {
}
function un() {
  return this.cancelBubble;
}
function on() {
  return this.defaultPrevented;
}
function dn(n) {
  return _.bind(null, n);
}
function mn(n) {
  return !!n && n.$$typeof === q2;
}
function pn(n) {
  return mn(n) && n.type === k;
}
function yn(n) {
  return !!n && !!n.displayName && ("string" == typeof n.displayName || n.displayName instanceof String) && n.displayName.startsWith("Memo(");
}
function _n(n) {
  return mn(n) ? J.apply(null, arguments) : n;
}
function bn(n) {
  return !!n.__k && (E(null, n), true);
}
function Sn(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var I, T2, A2, L, O, F2, U, H2, q2, G2, J2, K2, Q, X, en, ln, cn, fn, an, sn, hn, vn, gn, En, Cn, xn, Rn;
var init_compat_module = __esm({
  "node_modules/preact/compat/dist/compat.module.js"() {
    init_preact_module();
    init_preact_module();
    init_hooks_module();
    init_hooks_module();
    I = _2;
    (N.prototype = new x()).isPureReactComponent = true, N.prototype.shouldComponentUpdate = function(n, t) {
      return E2(this.props, n) || E2(this.state, t);
    };
    T2 = l.__b;
    l.__b = function(n) {
      n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), T2 && T2(n);
    };
    A2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    L = function(n, t) {
      return null == n ? null : H(H(n).map(t));
    };
    O = { map: L, forEach: L, count: function(n) {
      return n ? H(n).length : 0;
    }, only: function(n) {
      var t = H(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    }, toArray: H };
    F2 = l.__e;
    l.__e = function(n, t, e, r2) {
      if (n.then) {
        for (var u, o3 = t; o3 = o3.__; ) if ((u = o3.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
      }
      F2(n, t, e, r2);
    };
    U = l.unmount;
    l.unmount = function(n) {
      var t = n.__c;
      t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), U && U(n);
    }, (P2.prototype = new x()).__c = function(n, t) {
      var e = t.__c, r2 = this;
      null == r2.o && (r2.o = []), r2.o.push(e);
      var u = j(r2.__v), o3 = false, i = function() {
        o3 || (o3 = true, e.__R = null, u ? u(l2) : l2());
      };
      e.__R = i;
      var l2 = function() {
        if (!--r2.__u) {
          if (r2.state.__a) {
            var n2 = r2.state.__a;
            r2.__v.__k[0] = W(n2, n2.__c.__P, n2.__c.__O);
          }
          var t2;
          for (r2.setState({ __a: r2.__b = null }); t2 = r2.o.pop(); ) t2.forceUpdate();
        }
      };
      r2.__u++ || 32 & t.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n.then(i, i);
    }, P2.prototype.componentWillUnmount = function() {
      this.o = [];
    }, P2.prototype.render = function(n, e) {
      if (this.__b) {
        if (this.__v.__k) {
          var r2 = document.createElement("div"), o3 = this.__v.__k[0].__c;
          this.__v.__k[0] = V(this.__b, r2, o3.__O = o3.__P);
        }
        this.__b = null;
      }
      var i = e.__a && _(k, null, n.fallback);
      return i && (i.__u &= -33), [_(k, null, e.__a ? null : n.children), i];
    };
    H2 = function(n, t, e) {
      if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e; ) {
        for (; e.length > 3; ) e.pop()();
        if (e[1] < e[0]) break;
        n.i = e = e[2];
      }
    };
    (B.prototype = new x()).__a = function(n) {
      var t = this, e = j(t.__v), r2 = t.l.get(n);
      return r2[0]++, function(u) {
        var o3 = function() {
          t.props.revealOrder ? (r2.push(u), H2(t, n, r2)) : u();
        };
        e ? e(o3) : o3();
      };
    }, B.prototype.render = function(n) {
      this.i = null, this.l = /* @__PURE__ */ new Map();
      var t = H(n.children);
      n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
      for (var e = t.length; e--; ) this.l.set(t[e], this.i = [1, 0, this.i]);
      return n.children;
    }, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
      var n = this;
      this.l.forEach(function(t, e) {
        H2(n, e, t);
      });
    };
    q2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    G2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
    K2 = /[A-Z0-9]/g;
    Q = "undefined" != typeof document;
    X = function(n) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
    };
    x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
      Object.defineProperty(x.prototype, t, { configurable: true, get: function() {
        return this["UNSAFE_" + t];
      }, set: function(n) {
        Object.defineProperty(this, t, { configurable: true, writable: true, value: n });
      } });
    });
    en = l.event;
    l.event = function(n) {
      return en && (n = en(n)), n.persist = rn, n.isPropagationStopped = un, n.isDefaultPrevented = on, n.nativeEvent = n;
    };
    cn = { enumerable: false, configurable: true, get: function() {
      return this.class;
    } };
    fn = l.vnode;
    l.vnode = function(n) {
      "string" == typeof n.type && function(n2) {
        var t = n2.props, e = n2.type, u = {}, o3 = -1 === e.indexOf("-");
        for (var i in t) {
          var l2 = t[i];
          if (!("value" === i && "defaultValue" in t && null == l2 || Q && "children" === i && "noscript" === e || "class" === i || "className" === i)) {
            var c2 = i.toLowerCase();
            "defaultValue" === i && "value" in t && null == t.value ? i = "value" : "download" === i && true === l2 ? l2 = "" : "translate" === c2 && "no" === l2 ? l2 = false : "o" === c2[0] && "n" === c2[1] ? "ondoubleclick" === c2 ? i = "ondblclick" : "onchange" !== c2 || "input" !== e && "textarea" !== e || X(t.type) ? "onfocus" === c2 ? i = "onfocusin" : "onblur" === c2 ? i = "onfocusout" : J2.test(i) && (i = c2) : c2 = i = "oninput" : o3 && G2.test(i) ? i = i.replace(K2, "-$&").toLowerCase() : null === l2 && (l2 = void 0), "oninput" === c2 && u[i = c2] && (i = "oninputCapture"), u[i] = l2;
          }
        }
        "select" == e && u.multiple && Array.isArray(u.value) && (u.value = H(t.children).forEach(function(n3) {
          n3.props.selected = -1 != u.value.indexOf(n3.props.value);
        })), "select" == e && null != u.defaultValue && (u.value = H(t.children).forEach(function(n3) {
          n3.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n3.props.value) : u.defaultValue == n3.props.value;
        })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", cn)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n2.props = u;
      }(n), n.$$typeof = q2, fn && fn(n);
    };
    an = l.__r;
    l.__r = function(n) {
      an && an(n), ln = n.__c;
    };
    sn = l.diffed;
    l.diffed = function(n) {
      sn && sn(n);
      var t = n.props, e = n.__e;
      null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), ln = null;
    };
    hn = { ReactCurrentDispatcher: { current: { readContext: function(n) {
      return ln.__n[n.__c].props.value;
    }, useCallback: q, useContext: x2, useDebugValue: P, useDeferredValue: w, useEffect: y, useId: g, useImperativeHandle: F, useInsertionEffect: I, useLayoutEffect: _2, useMemo: T, useReducer: h, useRef: A, useState: d, useSyncExternalStore: C, useTransition: k2 } } };
    vn = "18.3.1";
    gn = function(n, t) {
      return n(t);
    };
    En = function(n, t) {
      return n(t);
    };
    Cn = k;
    xn = mn;
    Rn = { useState: d, useId: g, useReducer: h, useEffect: y, useLayoutEffect: _2, useInsertionEffect: I, useTransition: k2, useDeferredValue: w, useSyncExternalStore: C, startTransition: R, useRef: A, useImperativeHandle: F, useMemo: T, useCallback: q, useContext: x2, useDebugValue: P, version: "18.3.1", Children: O, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $, createElement: _, createContext: K, createFactory: dn, cloneElement: _n, createRef: b, Fragment: k, isValidElement: mn, isElement: xn, isFragment: pn, isMemo: yn, findDOMNode: Sn, Component: x, PureComponent: N, memo: M, forwardRef: D, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P2, SuspenseList: B, lazy: z, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };
  }
});

// node_modules/@walletconnect/legacy-modal/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/@walletconnect/legacy-modal/dist/cjs/index.js"(exports, module) {
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var legacyUtils = (init_esm5(), __toCommonJS(esm_exports4));
    var QRCode = _interopDefault(require_browser());
    var copy = _interopDefault(require_copy_to_clipboard());
    var React = (init_compat_module(), __toCommonJS(compat_module_exports));
    function open(uri) {
      QRCode.toString(uri, {
        type: "terminal"
      }).then(console.log);
    }
    var WALLETCONNECT_STYLE_SHEET = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n';
    var _iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
    var _asyncIteratorSymbol = typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")) : "@@asyncIterator";
    function _catch(body, recover) {
      try {
        var result = body();
      } catch (e) {
        return recover(e);
      }
      if (result && result.then) {
        return result.then(void 0, recover);
      }
      return result;
    }
    var WALLETCONNECT_LOGO_SVG_URL = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
    var WALLETCONNECT_HEADER_TEXT = "WalletConnect";
    var ANIMATION_DURATION = 300;
    var DEFAULT_BUTTON_COLOR = "rgb(64, 153, 255)";
    var WALLETCONNECT_WRAPPER_ID = "walletconnect-wrapper";
    var WALLETCONNECT_STYLE_ID = "walletconnect-style-sheet";
    var WALLETCONNECT_MODAL_ID = "walletconnect-qrcode-modal";
    var WALLETCONNECT_CLOSE_BUTTON_ID = "walletconnect-qrcode-close";
    var WALLETCONNECT_CTA_TEXT_ID = "walletconnect-qrcode-text";
    var WALLETCONNECT_CONNECT_BUTTON_ID = "walletconnect-connect-button";
    function Header(props) {
      return React.createElement("div", {
        className: "walletconnect-modal__header"
      }, React.createElement("img", {
        src: WALLETCONNECT_LOGO_SVG_URL,
        className: "walletconnect-modal__headerLogo"
      }), React.createElement("p", null, WALLETCONNECT_HEADER_TEXT), React.createElement("div", {
        className: "walletconnect-modal__close__wrapper",
        onClick: props.onClose
      }, React.createElement("div", {
        id: WALLETCONNECT_CLOSE_BUTTON_ID,
        className: "walletconnect-modal__close__icon"
      }, React.createElement("div", {
        className: "walletconnect-modal__close__line1"
      }), React.createElement("div", {
        className: "walletconnect-modal__close__line2"
      }))));
    }
    function ConnectButton(props) {
      return React.createElement("a", {
        className: "walletconnect-connect__button",
        href: props.href,
        id: WALLETCONNECT_CONNECT_BUTTON_ID + "-" + props.name,
        onClick: props.onClick,
        rel: "noopener noreferrer",
        style: {
          backgroundColor: props.color
        },
        target: "_blank"
      }, props.name);
    }
    var CARET_SVG_URL = "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";
    function WalletButton(props) {
      var color = props.color;
      var href = props.href;
      var name = props.name;
      var logo = props.logo;
      var onClick = props.onClick;
      return React.createElement("a", {
        className: "walletconnect-modal__base__row",
        href,
        onClick,
        rel: "noopener noreferrer",
        target: "_blank"
      }, React.createElement("h3", {
        className: "walletconnect-modal__base__row__h3"
      }, name), React.createElement("div", {
        className: "walletconnect-modal__base__row__right"
      }, React.createElement("div", {
        className: "walletconnect-modal__base__row__right__app-icon",
        style: {
          background: "url('" + logo + "') " + color,
          backgroundSize: "100%"
        }
      }), React.createElement("img", {
        src: CARET_SVG_URL,
        className: "walletconnect-modal__base__row__right__caret"
      })));
    }
    function WalletIcon(props) {
      var color = props.color;
      var href = props.href;
      var name = props.name;
      var logo = props.logo;
      var onClick = props.onClick;
      var fontSize = window.innerWidth < 768 ? (name.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
      return React.createElement("a", {
        className: "walletconnect-connect__button__icon_anchor",
        href,
        onClick,
        rel: "noopener noreferrer",
        target: "_blank"
      }, React.createElement("div", {
        className: "walletconnect-connect__button__icon",
        style: {
          background: "url('" + logo + "') " + color,
          backgroundSize: "100%"
        }
      }), React.createElement("div", {
        style: {
          fontSize
        },
        className: "walletconnect-connect__button__text"
      }, name));
    }
    var GRID_MIN_COUNT = 5;
    var LINKS_PER_PAGE = 12;
    function LinkDisplay(props) {
      var android = legacyUtils.isAndroid();
      var ref = React.useState("");
      var input = ref[0];
      var setInput = ref[1];
      var ref$1 = React.useState("");
      var filter = ref$1[0];
      var setFilter = ref$1[1];
      var ref$2 = React.useState(1);
      var page = ref$2[0];
      var setPage = ref$2[1];
      var links = filter ? props.links.filter(function(link) {
        return link.name.toLowerCase().includes(filter.toLowerCase());
      }) : props.links;
      var errorMessage = props.errorMessage;
      var grid = filter || links.length > GRID_MIN_COUNT;
      var pages = Math.ceil(links.length / LINKS_PER_PAGE);
      var range = [(page - 1) * LINKS_PER_PAGE + 1, page * LINKS_PER_PAGE];
      var pageLinks = links.length ? links.filter(function(_3, index2) {
        return index2 + 1 >= range[0] && index2 + 1 <= range[1];
      }) : [];
      var hasPaging = !!(!android && pages > 1);
      var filterTimeout = void 0;
      function handleInput(e) {
        setInput(e.target.value);
        clearTimeout(filterTimeout);
        if (e.target.value) {
          filterTimeout = setTimeout(function() {
            setFilter(e.target.value);
            setPage(1);
          }, 1e3);
        } else {
          setInput("");
          setFilter("");
          setPage(1);
        }
      }
      return React.createElement("div", null, React.createElement("p", {
        id: WALLETCONNECT_CTA_TEXT_ID,
        className: "walletconnect-qrcode__text"
      }, android ? props.text.connect_mobile_wallet : props.text.choose_preferred_wallet), !android && React.createElement("input", {
        className: "walletconnect-search__input",
        placeholder: "Search",
        value: input,
        onChange: handleInput
      }), React.createElement("div", {
        className: "walletconnect-connect__buttons__wrapper" + (android ? "__android" : grid && links.length ? "__wrap" : "")
      }, !android ? pageLinks.length ? pageLinks.map(function(entry) {
        var color = entry.color;
        var name = entry.name;
        var shortName = entry.shortName;
        var logo = entry.logo;
        var href = legacyUtils.formatIOSMobile(props.uri, entry);
        var handleClickIOS = React.useCallback(function() {
          legacyUtils.saveMobileLinkInfo({
            name,
            href
          });
        }, [pageLinks]);
        return !grid ? React.createElement(WalletButton, {
          color,
          href,
          name,
          logo,
          onClick: handleClickIOS
        }) : React.createElement(WalletIcon, {
          color,
          href,
          name: shortName || name,
          logo,
          onClick: handleClickIOS
        });
      }) : React.createElement(React.Fragment, null, React.createElement("p", null, errorMessage.length ? props.errorMessage : !!props.links.length && !links.length ? props.text.no_wallets_found : props.text.loading)) : React.createElement(ConnectButton, {
        name: props.text.connect,
        color: DEFAULT_BUTTON_COLOR,
        href: props.uri,
        onClick: React.useCallback(function() {
          legacyUtils.saveMobileLinkInfo({
            name: "Unknown",
            href: props.uri
          });
        }, [])
      })), hasPaging && React.createElement("div", {
        className: "walletconnect-modal__footer"
      }, Array(pages).fill(0).map(function(_3, index2) {
        var pageNumber = index2 + 1;
        var selected = page === pageNumber;
        return React.createElement("a", {
          style: {
            margin: "auto 10px",
            fontWeight: selected ? "bold" : "normal"
          },
          onClick: function() {
            return setPage(pageNumber);
          }
        }, pageNumber);
      })));
    }
    function Notification(props) {
      var show = !!props.message.trim();
      return React.createElement("div", {
        className: "walletconnect-qrcode__notification" + (show ? " notification__show" : "")
      }, props.message);
    }
    var formatQRCodeImage = function(data) {
      try {
        var result = "";
        return Promise.resolve(QRCode.toString(data, {
          margin: 0,
          type: "svg"
        })).then(function(dataString) {
          if (typeof dataString === "string") {
            result = dataString.replace("<svg", '<svg class="walletconnect-qrcode__image"');
          }
          return result;
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    function QRCodeDisplay(props) {
      var ref = React.useState("");
      var notification = ref[0];
      var setNotification = ref[1];
      var ref$1 = React.useState("");
      var svg = ref$1[0];
      var setSvg = ref$1[1];
      React.useEffect(function() {
        try {
          return Promise.resolve(formatQRCodeImage(props.uri)).then(function(_formatQRCodeImage) {
            setSvg(_formatQRCodeImage);
          });
        } catch (e) {
          Promise.reject(e);
        }
      }, []);
      var copyToClipboard = function() {
        var success = copy(props.uri);
        if (success) {
          setNotification(props.text.copied_to_clipboard);
          setInterval(function() {
            return setNotification("");
          }, 1200);
        } else {
          setNotification("Error");
          setInterval(function() {
            return setNotification("");
          }, 1200);
        }
      };
      return React.createElement("div", null, React.createElement("p", {
        id: WALLETCONNECT_CTA_TEXT_ID,
        className: "walletconnect-qrcode__text"
      }, props.text.scan_qrcode_with_wallet), React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: svg
        }
      }), React.createElement("div", {
        className: "walletconnect-modal__footer"
      }, React.createElement("a", {
        onClick: copyToClipboard
      }, props.text.copy_to_clipboard)), React.createElement(Notification, {
        message: notification
      }));
    }
    function Modal(props) {
      var android = legacyUtils.isAndroid();
      var mobile = legacyUtils.isMobile();
      var whitelist = mobile ? props.qrcodeModalOptions && props.qrcodeModalOptions.mobileLinks ? props.qrcodeModalOptions.mobileLinks : void 0 : props.qrcodeModalOptions && props.qrcodeModalOptions.desktopLinks ? props.qrcodeModalOptions.desktopLinks : void 0;
      var ref = React.useState(false);
      var loading = ref[0];
      var setLoading = ref[1];
      var ref$1 = React.useState(false);
      var fetched = ref$1[0];
      var setFetched = ref$1[1];
      var ref$2 = React.useState(!mobile);
      var displayQRCode = ref$2[0];
      var setDisplayQRCode = ref$2[1];
      var displayProps = {
        mobile,
        text: props.text,
        uri: props.uri,
        qrcodeModalOptions: props.qrcodeModalOptions
      };
      var ref$3 = React.useState("");
      var singleLinkHref = ref$3[0];
      var setSingleLinkHref = ref$3[1];
      var ref$4 = React.useState(false);
      var hasSingleLink = ref$4[0];
      var setHasSingleLink = ref$4[1];
      var ref$5 = React.useState([]);
      var links = ref$5[0];
      var setLinks = ref$5[1];
      var ref$6 = React.useState("");
      var errorMessage = ref$6[0];
      var setErrorMessage = ref$6[1];
      var getLinksIfNeeded = function() {
        if (fetched || loading || whitelist && !whitelist.length || links.length > 0) {
          return;
        }
        React.useEffect(function() {
          var initLinks = function() {
            try {
              if (android) {
                return Promise.resolve();
              }
              setLoading(true);
              var _temp = _catch(function() {
                var url = props.qrcodeModalOptions && props.qrcodeModalOptions.registryUrl ? props.qrcodeModalOptions.registryUrl : legacyUtils.getWalletRegistryUrl();
                return Promise.resolve(fetch(url)).then(function(registryResponse) {
                  return Promise.resolve(registryResponse.json()).then(function(_registryResponse$jso) {
                    var registry = _registryResponse$jso.listings;
                    var platform = mobile ? "mobile" : "desktop";
                    var _links = legacyUtils.getMobileLinkRegistry(legacyUtils.formatMobileRegistry(registry, platform), whitelist);
                    setLoading(false);
                    setFetched(true);
                    setErrorMessage(!_links.length ? props.text.no_supported_wallets : "");
                    setLinks(_links);
                    var hasSingleLink2 = _links.length === 1;
                    if (hasSingleLink2) {
                      setSingleLinkHref(legacyUtils.formatIOSMobile(props.uri, _links[0]));
                      setDisplayQRCode(true);
                    }
                    setHasSingleLink(hasSingleLink2);
                  });
                });
              }, function(e) {
                setLoading(false);
                setFetched(true);
                setErrorMessage(props.text.something_went_wrong);
                console.error(e);
              });
              return Promise.resolve(_temp && _temp.then ? _temp.then(function() {
              }) : void 0);
            } catch (e) {
              return Promise.reject(e);
            }
          };
          initLinks();
        });
      };
      getLinksIfNeeded();
      var rightSelected = mobile ? displayQRCode : !displayQRCode;
      return React.createElement("div", {
        id: WALLETCONNECT_MODAL_ID,
        className: "walletconnect-qrcode__base animated fadeIn"
      }, React.createElement("div", {
        className: "walletconnect-modal__base"
      }, React.createElement(Header, {
        onClose: props.onClose
      }), hasSingleLink && displayQRCode ? React.createElement("div", {
        className: "walletconnect-modal__single_wallet"
      }, React.createElement("a", {
        onClick: function() {
          return legacyUtils.saveMobileLinkInfo({
            name: links[0].name,
            href: singleLinkHref
          });
        },
        href: singleLinkHref,
        rel: "noopener noreferrer",
        target: "_blank"
      }, props.text.connect_with + " " + (hasSingleLink ? links[0].name : "") + " ›")) : android || loading || !loading && links.length ? React.createElement("div", {
        className: "walletconnect-modal__mobile__toggle" + (rightSelected ? " right__selected" : "")
      }, React.createElement("div", {
        className: "walletconnect-modal__mobile__toggle_selector"
      }), mobile ? React.createElement(React.Fragment, null, React.createElement("a", {
        onClick: function() {
          return setDisplayQRCode(false), getLinksIfNeeded();
        }
      }, props.text.mobile), React.createElement("a", {
        onClick: function() {
          return setDisplayQRCode(true);
        }
      }, props.text.qrcode)) : React.createElement(React.Fragment, null, React.createElement("a", {
        onClick: function() {
          return setDisplayQRCode(true);
        }
      }, props.text.qrcode), React.createElement("a", {
        onClick: function() {
          return setDisplayQRCode(false), getLinksIfNeeded();
        }
      }, props.text.desktop))) : null, React.createElement("div", null, displayQRCode || !android && !loading && !links.length ? React.createElement(QRCodeDisplay, Object.assign({}, displayProps)) : React.createElement(LinkDisplay, Object.assign({}, displayProps, {
        links,
        errorMessage
      })))));
    }
    var de = {
      choose_preferred_wallet: "Wähle bevorzugte Wallet",
      connect_mobile_wallet: "Verbinde mit Mobile Wallet",
      scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
      connect: "Verbinden",
      qrcode: "QR-Code",
      mobile: "Mobile",
      desktop: "Desktop",
      copy_to_clipboard: "In die Zwischenablage kopieren",
      copied_to_clipboard: "In die Zwischenablage kopiert!",
      connect_with: "Verbinden mit Hilfe von",
      loading: "Laden...",
      something_went_wrong: "Etwas ist schief gelaufen",
      no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
      no_wallets_found: "keine Wallet gefunden"
    };
    var en2 = {
      choose_preferred_wallet: "Choose your preferred wallet",
      connect_mobile_wallet: "Connect to Mobile Wallet",
      scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
      connect: "Connect",
      qrcode: "QR Code",
      mobile: "Mobile",
      desktop: "Desktop",
      copy_to_clipboard: "Copy to clipboard",
      copied_to_clipboard: "Copied to clipboard!",
      connect_with: "Connect with",
      loading: "Loading...",
      something_went_wrong: "Something went wrong",
      no_supported_wallets: "There are no supported wallets yet",
      no_wallets_found: "No wallets found"
    };
    var es = {
      choose_preferred_wallet: "Elige tu billetera preferida",
      connect_mobile_wallet: "Conectar a billetera móvil",
      scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
      connect: "Conectar",
      qrcode: "Código QR",
      mobile: "Móvil",
      desktop: "Desktop",
      copy_to_clipboard: "Copiar",
      copied_to_clipboard: "Copiado!",
      connect_with: "Conectar mediante",
      loading: "Cargando...",
      something_went_wrong: "Algo salió mal",
      no_supported_wallets: "Todavía no hay billeteras compatibles",
      no_wallets_found: "No se encontraron billeteras"
    };
    var fr = {
      choose_preferred_wallet: "Choisissez votre portefeuille préféré",
      connect_mobile_wallet: "Se connecter au portefeuille mobile",
      scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
      connect: "Se connecter",
      qrcode: "QR Code",
      mobile: "Mobile",
      desktop: "Desktop",
      copy_to_clipboard: "Copier",
      copied_to_clipboard: "Copié!",
      connect_with: "Connectez-vous à l'aide de",
      loading: "Chargement...",
      something_went_wrong: "Quelque chose a mal tourné",
      no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
      no_wallets_found: "Aucun portefeuille trouvé"
    };
    var ko = {
      choose_preferred_wallet: "원하는 지갑을 선택하세요",
      connect_mobile_wallet: "모바일 지갑과 연결",
      scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
      connect: "연결",
      qrcode: "QR 코드",
      mobile: "모바일",
      desktop: "데스크탑",
      copy_to_clipboard: "클립보드에 복사",
      copied_to_clipboard: "클립보드에 복사되었습니다!",
      connect_with: "와 연결하다",
      loading: "로드 중...",
      something_went_wrong: "문제가 발생했습니다.",
      no_supported_wallets: "아직 지원되는 지갑이 없습니다",
      no_wallets_found: "지갑을 찾을 수 없습니다"
    };
    var pt = {
      choose_preferred_wallet: "Escolha sua carteira preferida",
      connect_mobile_wallet: "Conectar-se à carteira móvel",
      scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
      connect: "Conectar",
      qrcode: "Código QR",
      mobile: "Móvel",
      desktop: "Desktop",
      copy_to_clipboard: "Copiar",
      copied_to_clipboard: "Copiado!",
      connect_with: "Ligar por meio de",
      loading: "Carregamento...",
      something_went_wrong: "Algo correu mal",
      no_supported_wallets: "Ainda não há carteiras suportadas",
      no_wallets_found: "Nenhuma carteira encontrada"
    };
    var zh = {
      choose_preferred_wallet: "选择你的钱包",
      connect_mobile_wallet: "连接至移动端钱包",
      scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
      connect: "连接",
      qrcode: "二维码",
      mobile: "移动",
      desktop: "桌面",
      copy_to_clipboard: "复制到剪贴板",
      copied_to_clipboard: "复制到剪贴板成功！",
      connect_with: "通过以下方式连接",
      loading: "正在加载...",
      something_went_wrong: "出了问题",
      no_supported_wallets: "目前还没有支持的钱包",
      no_wallets_found: "没有找到钱包"
    };
    var fa = {
      choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
      connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
      scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
      connect: "اتصال",
      qrcode: "کد QR",
      mobile: "سیار",
      desktop: "دسکتاپ",
      copy_to_clipboard: "کپی به کلیپ بورد",
      copied_to_clipboard: "در کلیپ بورد کپی شد!",
      connect_with: "ارتباط با",
      loading: "...بارگذاری",
      something_went_wrong: "مشکلی پیش آمد",
      no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
      no_wallets_found: "هیچ کیف پولی پیدا نشد"
    };
    var languages = {
      de,
      en: en2,
      es,
      fr,
      ko,
      pt,
      zh,
      fa
    };
    function injectStyleSheet() {
      var doc = legacyUtils.getDocumentOrThrow();
      var prev = doc.getElementById(WALLETCONNECT_STYLE_ID);
      if (prev) {
        doc.head.removeChild(prev);
      }
      var style = doc.createElement("style");
      style.setAttribute("id", WALLETCONNECT_STYLE_ID);
      style.innerText = WALLETCONNECT_STYLE_SHEET;
      doc.head.appendChild(style);
    }
    function renderWrapper() {
      var doc = legacyUtils.getDocumentOrThrow();
      var wrapper = doc.createElement("div");
      wrapper.setAttribute("id", WALLETCONNECT_WRAPPER_ID);
      doc.body.appendChild(wrapper);
      return wrapper;
    }
    function triggerCloseAnimation() {
      var doc = legacyUtils.getDocumentOrThrow();
      var modal = doc.getElementById(WALLETCONNECT_MODAL_ID);
      if (modal) {
        modal.className = modal.className.replace("fadeIn", "fadeOut");
        setTimeout(function() {
          var wrapper = doc.getElementById(WALLETCONNECT_WRAPPER_ID);
          if (wrapper) {
            doc.body.removeChild(wrapper);
          }
        }, ANIMATION_DURATION);
      }
    }
    function getWrappedCallback(cb) {
      return function() {
        triggerCloseAnimation();
        if (cb) {
          cb();
        }
      };
    }
    function getText() {
      var lang = legacyUtils.getNavigatorOrThrow().language.split("-")[0] || "en";
      return languages[lang] || languages["en"];
    }
    function open$1(uri, cb, qrcodeModalOptions) {
      injectStyleSheet();
      var wrapper = renderWrapper();
      React.render(React.createElement(Modal, {
        text: getText(),
        uri,
        onClose: getWrappedCallback(cb),
        qrcodeModalOptions
      }), wrapper);
    }
    function close$1() {
      triggerCloseAnimation();
    }
    var isNode2 = function() {
      return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
    };
    function open$2(uri, cb, qrcodeModalOptions) {
      console.log(uri);
      if (isNode2()) {
        open(uri);
      } else {
        open$1(uri, cb, qrcodeModalOptions);
      }
    }
    function close$2() {
      if (isNode2()) ;
      else {
        close$1();
      }
    }
    var index = {
      open: open$2,
      close: close$2
    };
    module.exports = index;
  }
});

// node_modules/@walletconnect/legacy-provider/dist/esm/index.js
var import_events4 = __toESM(require_events());

// node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
var import_events = __toESM(require_events());
init_esm2();
var o2 = class extends r {
  constructor(t) {
    super(t), this.events = new import_events.EventEmitter(), this.hasRegisteredEventListeners = false, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, e) {
    this.events.on(t, e);
  }
  once(t, e) {
    this.events.once(t, e);
  }
  off(t, e) {
    this.events.off(t, e);
  }
  removeListener(t, e) {
    this.events.removeListener(t, e);
  }
  async request(t, e) {
    return this.requestStrict(formatJsonRpcRequest(t.method, t.params || [], t.id || getBigIntRpcId().toString()), e);
  }
  async requestStrict(t, e) {
    return new Promise(async (i, s) => {
      if (!this.connection.connected) try {
        await this.open();
      } catch (n) {
        s(n);
      }
      this.events.on(`${t.id}`, (n) => {
        isJsonRpcError(n) ? s(n.error) : i(n.result);
      });
      try {
        await this.connection.send(t, e);
      } catch (n) {
        s(n);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), isJsonRpcResponse(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = true);
  }
};

// node_modules/@walletconnect/legacy-provider/dist/esm/index.js
init_esm3();
init_esm5();

// node_modules/@walletconnect/legacy-provider/dist/esm/signer.js
var import_events3 = __toESM(require_events());

// node_modules/@walletconnect/legacy-client/dist/esm/core.js
init_esm3();
init_esm5();

// node_modules/@walletconnect/legacy-client/dist/esm/socket.js
init_esm5();

// node_modules/@walletconnect/legacy-client/dist/esm/network.js
var NetworkMonitor = class {
  constructor() {
    this._eventEmitters = [];
    if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
      window.addEventListener("online", () => this.trigger("online"));
      window.addEventListener("offline", () => this.trigger("offline"));
    }
  }
  on(event, callback) {
    this._eventEmitters.push({
      event,
      callback
    });
  }
  trigger(event) {
    let eventEmitters = [];
    if (event) {
      eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
    }
    eventEmitters.forEach((eventEmitter) => {
      eventEmitter.callback();
    });
  }
};
var network_default = NetworkMonitor;

// node_modules/@walletconnect/legacy-client/dist/esm/socket.js
var WS = typeof global.WebSocket !== "undefined" ? global.WebSocket : require_browser2();
var SocketTransport = class {
  constructor(opts) {
    this.opts = opts;
    this._queue = [];
    this._events = [];
    this._subscriptions = [];
    this._protocol = opts.protocol;
    this._version = opts.version;
    this._url = "";
    this._netMonitor = null;
    this._socket = null;
    this._nextSocket = null;
    this._subscriptions = opts.subscriptions || [];
    this._netMonitor = opts.netMonitor || new network_default();
    if (!opts.url || typeof opts.url !== "string") {
      throw new Error("Missing or invalid WebSocket url");
    }
    this._url = opts.url;
    this._netMonitor.on("online", () => this._socketCreate());
  }
  set readyState(value) {
  }
  get readyState() {
    return this._socket ? this._socket.readyState : -1;
  }
  set connecting(value) {
  }
  get connecting() {
    return this.readyState === 0;
  }
  set connected(value) {
  }
  get connected() {
    return this.readyState === 1;
  }
  set closing(value) {
  }
  get closing() {
    return this.readyState === 2;
  }
  set closed(value) {
  }
  get closed() {
    return this.readyState === 3;
  }
  open() {
    this._socketCreate();
  }
  close() {
    this._socketClose();
  }
  send(message, topic, silent) {
    if (!topic || typeof topic !== "string") {
      throw new Error("Missing or invalid topic field");
    }
    this._socketSend({
      topic,
      type: "pub",
      payload: message,
      silent: !!silent
    });
  }
  subscribe(topic) {
    this._socketSend({
      topic,
      type: "sub",
      payload: "",
      silent: true
    });
  }
  on(event, callback) {
    this._events.push({ event, callback });
  }
  _socketCreate() {
    if (this._nextSocket) {
      return;
    }
    const url = getWebSocketUrl(this._url, this._protocol, this._version);
    this._nextSocket = new WS(url);
    if (!this._nextSocket) {
      throw new Error("Failed to create socket");
    }
    this._nextSocket.onmessage = (event) => this._socketReceive(event);
    this._nextSocket.onopen = () => this._socketOpen();
    this._nextSocket.onerror = (event) => this._socketError(event);
    this._nextSocket.onclose = () => {
      setTimeout(() => {
        this._nextSocket = null;
        this._socketCreate();
      }, 1e3);
    };
  }
  _socketOpen() {
    this._socketClose();
    this._socket = this._nextSocket;
    this._nextSocket = null;
    this._queueSubscriptions();
    this._pushQueue();
  }
  _socketClose() {
    if (this._socket) {
      this._socket.onclose = () => {
      };
      this._socket.close();
    }
  }
  _socketSend(socketMessage) {
    const message = JSON.stringify(socketMessage);
    if (this._socket && this._socket.readyState === 1) {
      this._socket.send(message);
    } else {
      this._setToQueue(socketMessage);
      this._socketCreate();
    }
  }
  async _socketReceive(event) {
    let socketMessage;
    try {
      socketMessage = JSON.parse(event.data);
    } catch (error) {
      return;
    }
    this._socketSend({
      topic: socketMessage.topic,
      type: "ack",
      payload: "",
      silent: true
    });
    if (this._socket && this._socket.readyState === 1) {
      const events = this._events.filter((event2) => event2.event === "message");
      if (events && events.length) {
        events.forEach((event2) => event2.callback(socketMessage));
      }
    }
  }
  _socketError(e) {
    const events = this._events.filter((event) => event.event === "error");
    if (events && events.length) {
      events.forEach((event) => event.callback(e));
    }
  }
  _queueSubscriptions() {
    const subscriptions = this._subscriptions;
    subscriptions.forEach((topic) => this._queue.push({
      topic,
      type: "sub",
      payload: "",
      silent: true
    }));
    this._subscriptions = this.opts.subscriptions || [];
  }
  _setToQueue(socketMessage) {
    this._queue.push(socketMessage);
  }
  _pushQueue() {
    const queue = this._queue;
    queue.forEach((socketMessage) => this._socketSend(socketMessage));
    this._queue = [];
  }
};
function getWebSocketUrl(_url, protocol, version) {
  var _a, _b;
  const url = _url.startsWith("https") ? _url.replace("https", "wss") : _url.startsWith("http") ? _url.replace("http", "ws") : _url;
  const splitUrl = url.split("?");
  const params = isBrowser() ? {
    protocol,
    version,
    env: "browser",
    host: ((_a = getLocation2()) === null || _a === void 0 ? void 0 : _a.host) || ""
  } : {
    protocol,
    version,
    env: ((_b = detectEnv()) === null || _b === void 0 ? void 0 : _b.name) || ""
  };
  const queryString = appendToQueryString(getQueryString(splitUrl[1] || ""), params);
  return splitUrl[0] + "?" + queryString;
}
var socket_default = SocketTransport;

// node_modules/@walletconnect/legacy-client/dist/esm/events.js
init_esm5();
var EventManager = class {
  constructor() {
    this._eventEmitters = [];
  }
  subscribe(eventEmitter) {
    this._eventEmitters.push(eventEmitter);
  }
  unsubscribe(event) {
    this._eventEmitters = this._eventEmitters.filter((x4) => x4.event !== event);
  }
  trigger(payload) {
    let eventEmitters = [];
    let event;
    if (isJsonRpcRequest(payload)) {
      event = payload.method;
    } else if (isJsonRpcResponseSuccess(payload) || isJsonRpcResponseError(payload)) {
      event = `response:${payload.id}`;
    } else if (isInternalEvent(payload)) {
      event = payload.event;
    } else {
      event = "";
    }
    if (event) {
      eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
    }
    if ((!eventEmitters || !eventEmitters.length) && !isReservedEvent(event) && !isInternalEvent(event)) {
      eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === "call_request");
    }
    eventEmitters.forEach((eventEmitter) => {
      if (isJsonRpcResponseError(payload)) {
        const error = new Error(payload.error.message);
        eventEmitter.callback(error, null);
      } else {
        eventEmitter.callback(null, payload);
      }
    });
  }
};
var events_default = EventManager;

// node_modules/@walletconnect/legacy-client/dist/esm/storage.js
init_esm5();
var SessionStorage = class {
  constructor(storageId = "walletconnect") {
    this.storageId = storageId;
  }
  getSession() {
    let session = null;
    const json = getLocal(this.storageId);
    if (json && isWalletConnectSession(json)) {
      session = json;
    }
    return session;
  }
  setSession(session) {
    setLocal(this.storageId, session);
    return session;
  }
  removeSession() {
    removeLocal(this.storageId);
  }
};
var storage_default = SessionStorage;

// node_modules/@walletconnect/legacy-client/dist/esm/url.js
var domain = "walletconnect.org";
var alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
var bridges = alphanumerical.split("").map((char) => `https://${char}.bridge.walletconnect.org`);
function extractHostname(url) {
  let hostname = url.indexOf("//") > -1 ? url.split("/")[2] : url.split("/")[0];
  hostname = hostname.split(":")[0];
  hostname = hostname.split("?")[0];
  return hostname;
}
function extractRootDomain(url) {
  return extractHostname(url).split(".").slice(-2).join(".");
}
function randomBridgeIndex() {
  return Math.floor(Math.random() * bridges.length);
}
function selectRandomBridgeUrl() {
  return bridges[randomBridgeIndex()];
}
function shouldSelectRandomly(url) {
  return extractRootDomain(url) === domain;
}
function getBridgeUrl(url) {
  if (shouldSelectRandomly(url)) {
    return selectRandomBridgeUrl();
  }
  return url;
}

// node_modules/@walletconnect/legacy-client/dist/esm/core.js
var Connector = class {
  constructor(opts) {
    this.protocol = "wc";
    this.version = 1;
    this._bridge = "";
    this._key = null;
    this._clientId = "";
    this._clientMeta = null;
    this._peerId = "";
    this._peerMeta = null;
    this._handshakeId = 0;
    this._handshakeTopic = "";
    this._connected = false;
    this._accounts = [];
    this._chainId = 0;
    this._networkId = 0;
    this._rpcUrl = "";
    this._eventManager = new events_default();
    this._clientMeta = getClientMeta() || opts.connectorOpts.clientMeta || null;
    this._cryptoLib = opts.cryptoLib;
    this._sessionStorage = opts.sessionStorage || new storage_default(opts.connectorOpts.storageId);
    this._qrcodeModal = opts.connectorOpts.qrcodeModal;
    this._qrcodeModalOptions = opts.connectorOpts.qrcodeModalOptions;
    this._signingMethods = [...SIGNING_METHODS, ...opts.connectorOpts.signingMethods || []];
    if (!opts.connectorOpts.bridge && !opts.connectorOpts.uri && !opts.connectorOpts.session) {
      throw new Error(ERROR_MISSING_REQUIRED);
    }
    if (opts.connectorOpts.bridge) {
      this.bridge = getBridgeUrl(opts.connectorOpts.bridge);
    }
    if (opts.connectorOpts.uri) {
      this.uri = opts.connectorOpts.uri;
    }
    const session = opts.connectorOpts.session || this._getStorageSession();
    if (session) {
      this.session = session;
    }
    if (this.handshakeId) {
      this._subscribeToSessionResponse(this.handshakeId, "Session request rejected");
    }
    this._transport = opts.transport || new socket_default({
      protocol: this.protocol,
      version: this.version,
      url: this.bridge,
      subscriptions: [this.clientId]
    });
    this._subscribeToInternalEvents();
    this._initTransport();
    if (opts.connectorOpts.uri) {
      this._subscribeToSessionRequest();
    }
    if (opts.pushServerOpts) {
      this._registerPushServer(opts.pushServerOpts);
    }
  }
  set bridge(value) {
    if (!value) {
      return;
    }
    this._bridge = value;
  }
  get bridge() {
    return this._bridge;
  }
  set key(value) {
    if (!value) {
      return;
    }
    const key = convertHexToArrayBuffer(value);
    this._key = key;
  }
  get key() {
    if (this._key) {
      const key = convertArrayBufferToHex(this._key, true);
      return key;
    }
    return "";
  }
  set clientId(value) {
    if (!value) {
      return;
    }
    this._clientId = value;
  }
  get clientId() {
    let clientId = this._clientId;
    if (!clientId) {
      clientId = this._clientId = uuid();
    }
    return this._clientId;
  }
  set peerId(value) {
    if (!value) {
      return;
    }
    this._peerId = value;
  }
  get peerId() {
    return this._peerId;
  }
  set clientMeta(value) {
  }
  get clientMeta() {
    let clientMeta = this._clientMeta;
    if (!clientMeta) {
      clientMeta = this._clientMeta = getClientMeta();
    }
    return clientMeta;
  }
  set peerMeta(value) {
    this._peerMeta = value;
  }
  get peerMeta() {
    const peerMeta = this._peerMeta;
    return peerMeta;
  }
  set handshakeTopic(value) {
    if (!value) {
      return;
    }
    this._handshakeTopic = value;
  }
  get handshakeTopic() {
    return this._handshakeTopic;
  }
  set handshakeId(value) {
    if (!value) {
      return;
    }
    this._handshakeId = value;
  }
  get handshakeId() {
    return this._handshakeId;
  }
  get uri() {
    const _uri = this._formatUri();
    return _uri;
  }
  set uri(value) {
    if (!value) {
      return;
    }
    const { handshakeTopic, bridge, key } = this._parseUri(value);
    this.handshakeTopic = handshakeTopic;
    this.bridge = bridge;
    this.key = key;
  }
  set chainId(value) {
    this._chainId = value;
  }
  get chainId() {
    const chainId = this._chainId;
    return chainId;
  }
  set networkId(value) {
    this._networkId = value;
  }
  get networkId() {
    const networkId = this._networkId;
    return networkId;
  }
  set accounts(value) {
    this._accounts = value;
  }
  get accounts() {
    const accounts = this._accounts;
    return accounts;
  }
  set rpcUrl(value) {
    this._rpcUrl = value;
  }
  get rpcUrl() {
    const rpcUrl = this._rpcUrl;
    return rpcUrl;
  }
  set connected(value) {
  }
  get connected() {
    return this._connected;
  }
  set pending(value) {
  }
  get pending() {
    return !!this._handshakeTopic;
  }
  get session() {
    return {
      connected: this.connected,
      accounts: this.accounts,
      chainId: this.chainId,
      bridge: this.bridge,
      key: this.key,
      clientId: this.clientId,
      clientMeta: this.clientMeta,
      peerId: this.peerId,
      peerMeta: this.peerMeta,
      handshakeId: this.handshakeId,
      handshakeTopic: this.handshakeTopic
    };
  }
  set session(value) {
    if (!value) {
      return;
    }
    this._connected = value.connected;
    this.accounts = value.accounts;
    this.chainId = value.chainId;
    this.bridge = value.bridge;
    this.key = value.key;
    this.clientId = value.clientId;
    this.clientMeta = value.clientMeta;
    this.peerId = value.peerId;
    this.peerMeta = value.peerMeta;
    this.handshakeId = value.handshakeId;
    this.handshakeTopic = value.handshakeTopic;
  }
  on(event, callback) {
    const eventEmitter = {
      event,
      callback
    };
    this._eventManager.subscribe(eventEmitter);
  }
  off(event) {
    this._eventManager.unsubscribe(event);
  }
  async createInstantRequest(instantRequest) {
    this._key = await this._generateKey();
    const request = this._formatRequest({
      method: "wc_instantRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          request: this._formatRequest(instantRequest)
        }
      ]
    });
    this.handshakeId = request.id;
    this.handshakeTopic = uuid();
    this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });
    this.on("modal_closed", () => {
      throw new Error(ERROR_QRCODE_MODAL_USER_CLOSED);
    });
    const endInstantRequest = () => {
      this.killSession();
    };
    try {
      const result = await this._sendCallRequest(request);
      if (result) {
        endInstantRequest();
      }
      return result;
    } catch (error) {
      endInstantRequest();
      throw error;
    }
  }
  async connect(opts) {
    if (!this._qrcodeModal) {
      throw new Error(ERROR_QRCODE_MODAL_NOT_PROVIDED);
    }
    if (this.connected) {
      return {
        chainId: this.chainId,
        accounts: this.accounts
      };
    }
    await this.createSession(opts);
    return new Promise(async (resolve, reject) => {
      this.on("modal_closed", () => reject(new Error(ERROR_QRCODE_MODAL_USER_CLOSED)));
      this.on("connect", (error, payload) => {
        if (error) {
          return reject(error);
        }
        resolve(payload.params[0]);
      });
    });
  }
  async createSession(opts) {
    if (this._connected) {
      throw new Error(ERROR_SESSION_CONNECTED);
    }
    if (this.pending) {
      return;
    }
    this._key = await this._generateKey();
    const request = this._formatRequest({
      method: "wc_sessionRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          chainId: opts && opts.chainId ? opts.chainId : null
        }
      ]
    });
    this.handshakeId = request.id;
    this.handshakeTopic = uuid();
    this._sendSessionRequest(request, "Session update rejected", {
      topic: this.handshakeTopic
    });
    this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });
  }
  approveSession(sessionStatus) {
    if (this._connected) {
      throw new Error(ERROR_SESSION_CONNECTED);
    }
    this.chainId = sessionStatus.chainId;
    this.accounts = sessionStatus.accounts;
    this.networkId = sessionStatus.networkId || 0;
    this.rpcUrl = sessionStatus.rpcUrl || "";
    const sessionParams = {
      approved: true,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl,
      peerId: this.clientId,
      peerMeta: this.clientMeta
    };
    const response = {
      id: this.handshakeId,
      jsonrpc: "2.0",
      result: sessionParams
    };
    this._sendResponse(response);
    this._connected = true;
    this._setStorageSession();
    this._eventManager.trigger({
      event: "connect",
      params: [
        {
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    });
  }
  rejectSession(sessionError) {
    if (this._connected) {
      throw new Error(ERROR_SESSION_CONNECTED);
    }
    const message = sessionError && sessionError.message ? sessionError.message : ERROR_SESSION_REJECTED;
    const response = this._formatResponse({
      id: this.handshakeId,
      error: { message }
    });
    this._sendResponse(response);
    this._connected = false;
    this._eventManager.trigger({
      event: "disconnect",
      params: [{ message }]
    });
    this._removeStorageSession();
  }
  updateSession(sessionStatus) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    this.chainId = sessionStatus.chainId;
    this.accounts = sessionStatus.accounts;
    this.networkId = sessionStatus.networkId || 0;
    this.rpcUrl = sessionStatus.rpcUrl || "";
    const sessionParams = {
      approved: true,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl
    };
    const request = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [sessionParams]
    });
    this._sendSessionRequest(request, "Session update rejected");
    this._eventManager.trigger({
      event: "session_update",
      params: [
        {
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    });
    this._manageStorageSession();
  }
  async killSession(sessionError) {
    const message = sessionError ? sessionError.message : "Session Disconnected";
    const sessionParams = {
      approved: false,
      chainId: null,
      networkId: null,
      accounts: null
    };
    const request = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [sessionParams]
    });
    await this._sendRequest(request);
    this._handleSessionDisconnect(message);
  }
  async sendTransaction(tx) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const parsedTx = tx;
    const request = this._formatRequest({
      method: "eth_sendTransaction",
      params: [parsedTx]
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signTransaction(tx) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const parsedTx = tx;
    const request = this._formatRequest({
      method: "eth_signTransaction",
      params: [parsedTx]
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signMessage(params) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const request = this._formatRequest({
      method: "eth_sign",
      params
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signPersonalMessage(params) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const request = this._formatRequest({
      method: "personal_sign",
      params
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signTypedData(params) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const request = this._formatRequest({
      method: "eth_signTypedData",
      params
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async updateChain(chainParams) {
    if (!this._connected) {
      throw new Error("Session currently disconnected");
    }
    const request = this._formatRequest({
      method: "wallet_updateChain",
      params: [chainParams]
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  unsafeSend(request, options) {
    this._sendRequest(request, options);
    this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request, options }]
    });
    return new Promise((resolve, reject) => {
      this._subscribeToResponse(request.id, (error, payload) => {
        if (error) {
          reject(error);
          return;
        }
        if (!payload) {
          throw new Error(ERROR_MISSING_JSON_RPC);
        }
        resolve(payload);
      });
    });
  }
  async sendCustomRequest(request, options) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    switch (request.method) {
      case "eth_accounts":
        return this.accounts;
      case "eth_chainId":
        return convertNumberToHex(this.chainId);
      case "eth_sendTransaction":
      case "eth_signTransaction":
        if (request.params) {
        }
        break;
      case "personal_sign":
        if (request.params) {
        }
        break;
      default:
        break;
    }
    const formattedRequest = this._formatRequest(request);
    const result = await this._sendCallRequest(formattedRequest, options);
    return result;
  }
  approveRequest(response) {
    if (isJsonRpcResponseSuccess(response)) {
      const formattedResponse = this._formatResponse(response);
      this._sendResponse(formattedResponse);
    } else {
      throw new Error(ERROR_MISSING_RESULT);
    }
  }
  rejectRequest(response) {
    if (isJsonRpcResponseError(response)) {
      const formattedResponse = this._formatResponse(response);
      this._sendResponse(formattedResponse);
    } else {
      throw new Error(ERROR_MISSING_ERROR);
    }
  }
  transportClose() {
    this._transport.close();
  }
  async _sendRequest(request, options) {
    const callRequest = this._formatRequest(request);
    const encryptionPayload = await this._encrypt(callRequest);
    const topic = typeof (options === null || options === void 0 ? void 0 : options.topic) !== "undefined" ? options.topic : this.peerId;
    const payload = JSON.stringify(encryptionPayload);
    const silent = typeof (options === null || options === void 0 ? void 0 : options.forcePushNotification) !== "undefined" ? !options.forcePushNotification : isSilentPayload(callRequest);
    this._transport.send(payload, topic, silent);
  }
  async _sendResponse(response) {
    const encryptionPayload = await this._encrypt(response);
    const topic = this.peerId;
    const payload = JSON.stringify(encryptionPayload);
    const silent = true;
    this._transport.send(payload, topic, silent);
  }
  async _sendSessionRequest(request, errorMsg, options) {
    this._sendRequest(request, options);
    this._subscribeToSessionResponse(request.id, errorMsg);
  }
  _sendCallRequest(request, options) {
    this._sendRequest(request, options);
    this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request, options }]
    });
    return this._subscribeToCallResponse(request.id);
  }
  _formatRequest(request) {
    if (typeof request.method === "undefined") {
      throw new Error(ERROR_MISSING_METHOD);
    }
    const formattedRequest = {
      id: typeof request.id === "undefined" ? payloadId2() : request.id,
      jsonrpc: "2.0",
      method: request.method,
      params: typeof request.params === "undefined" ? [] : request.params
    };
    return formattedRequest;
  }
  _formatResponse(response) {
    if (typeof response.id === "undefined") {
      throw new Error(ERROR_MISSING_ID);
    }
    const baseResponse = { id: response.id, jsonrpc: "2.0" };
    if (isJsonRpcResponseError(response)) {
      const error = formatRpcError(response.error);
      const errorResponse = Object.assign(Object.assign(Object.assign({}, baseResponse), response), { error });
      return errorResponse;
    } else if (isJsonRpcResponseSuccess(response)) {
      const successResponse = Object.assign(Object.assign({}, baseResponse), response);
      return successResponse;
    }
    throw new Error(ERROR_INVALID_RESPONSE);
  }
  _handleSessionDisconnect(errorMsg) {
    const message = errorMsg || "Session Disconnected";
    if (!this._connected) {
      if (this._qrcodeModal) {
        this._qrcodeModal.close();
      }
      removeLocal(MOBILE_LINK_CHOICE_KEY);
    }
    if (this._connected) {
      this._connected = false;
    }
    if (this._handshakeId) {
      this._handshakeId = 0;
    }
    if (this._handshakeTopic) {
      this._handshakeTopic = "";
    }
    if (this._peerId) {
      this._peerId = "";
    }
    this._eventManager.trigger({
      event: "disconnect",
      params: [{ message }]
    });
    this._removeStorageSession();
    this.transportClose();
  }
  _handleSessionResponse(errorMsg, sessionParams) {
    if (sessionParams) {
      if (sessionParams.approved) {
        if (!this._connected) {
          this._connected = true;
          if (sessionParams.chainId) {
            this.chainId = sessionParams.chainId;
          }
          if (sessionParams.accounts) {
            this.accounts = sessionParams.accounts;
          }
          if (sessionParams.peerId && !this.peerId) {
            this.peerId = sessionParams.peerId;
          }
          if (sessionParams.peerMeta && !this.peerMeta) {
            this.peerMeta = sessionParams.peerMeta;
          }
          this._eventManager.trigger({
            event: "connect",
            params: [
              {
                peerId: this.peerId,
                peerMeta: this.peerMeta,
                chainId: this.chainId,
                accounts: this.accounts
              }
            ]
          });
        } else {
          if (sessionParams.chainId) {
            this.chainId = sessionParams.chainId;
          }
          if (sessionParams.accounts) {
            this.accounts = sessionParams.accounts;
          }
          this._eventManager.trigger({
            event: "session_update",
            params: [
              {
                chainId: this.chainId,
                accounts: this.accounts
              }
            ]
          });
        }
        this._manageStorageSession();
      } else {
        this._handleSessionDisconnect(errorMsg);
      }
    } else {
      this._handleSessionDisconnect(errorMsg);
    }
  }
  async _handleIncomingMessages(socketMessage) {
    const activeTopics = [this.clientId, this.handshakeTopic];
    if (!activeTopics.includes(socketMessage.topic)) {
      return;
    }
    let encryptionPayload;
    try {
      encryptionPayload = JSON.parse(socketMessage.payload);
    } catch (error) {
      return;
    }
    const payload = await this._decrypt(encryptionPayload);
    if (payload) {
      this._eventManager.trigger(payload);
    }
  }
  _subscribeToSessionRequest() {
    this._transport.subscribe(this.handshakeTopic);
  }
  _subscribeToResponse(id, callback) {
    this.on(`response:${id}`, callback);
  }
  _subscribeToSessionResponse(id, errorMsg) {
    this._subscribeToResponse(id, (error, payload) => {
      if (error) {
        this._handleSessionResponse(error.message);
        return;
      }
      if (isJsonRpcResponseSuccess(payload)) {
        this._handleSessionResponse(errorMsg, payload.result);
      } else if (payload.error && payload.error.message) {
        this._handleSessionResponse(payload.error.message);
      } else {
        this._handleSessionResponse(errorMsg);
      }
    });
  }
  _subscribeToCallResponse(id) {
    return new Promise((resolve, reject) => {
      this._subscribeToResponse(id, (error, payload) => {
        if (error) {
          reject(error);
          return;
        }
        if (isJsonRpcResponseSuccess(payload)) {
          resolve(payload.result);
        } else if (payload.error && payload.error.message) {
          reject(payload.error);
        } else {
          reject(new Error(ERROR_INVALID_RESPONSE));
        }
      });
    });
  }
  _subscribeToInternalEvents() {
    this.on("display_uri", () => {
      if (this._qrcodeModal) {
        this._qrcodeModal.open(this.uri, () => {
          this._eventManager.trigger({
            event: "modal_closed",
            params: []
          });
        }, this._qrcodeModalOptions);
      }
    });
    this.on("connect", () => {
      if (this._qrcodeModal) {
        this._qrcodeModal.close();
      }
    });
    this.on("call_request_sent", (error, payload) => {
      const { request } = payload.params[0];
      if (isMobile() && this._signingMethods.includes(request.method)) {
        const mobileLinkUrl = getLocal(MOBILE_LINK_CHOICE_KEY);
        if (mobileLinkUrl) {
          window.location.href = mobileLinkUrl.href;
        }
      }
    });
    this.on("wc_sessionRequest", (error, payload) => {
      if (error) {
        this._eventManager.trigger({
          event: "error",
          params: [
            {
              code: "SESSION_REQUEST_ERROR",
              message: error.toString()
            }
          ]
        });
      }
      this.handshakeId = payload.id;
      this.peerId = payload.params[0].peerId;
      this.peerMeta = payload.params[0].peerMeta;
      const internalPayload = Object.assign(Object.assign({}, payload), { method: "session_request" });
      this._eventManager.trigger(internalPayload);
    });
    this.on("wc_sessionUpdate", (error, payload) => {
      if (error) {
        this._handleSessionResponse(error.message);
      }
      this._handleSessionResponse("Session disconnected", payload.params[0]);
    });
  }
  _initTransport() {
    this._transport.on("message", (socketMessage) => this._handleIncomingMessages(socketMessage));
    this._transport.on("open", () => this._eventManager.trigger({ event: "transport_open", params: [] }));
    this._transport.on("close", () => this._eventManager.trigger({ event: "transport_close", params: [] }));
    this._transport.on("error", () => this._eventManager.trigger({
      event: "transport_error",
      params: ["Websocket connection failed"]
    }));
    this._transport.open();
  }
  _formatUri() {
    const protocol = this.protocol;
    const handshakeTopic = this.handshakeTopic;
    const version = this.version;
    const bridge = encodeURIComponent(this.bridge);
    const key = this.key;
    const uri = `${protocol}:${handshakeTopic}@${version}?bridge=${bridge}&key=${key}`;
    return uri;
  }
  _parseUri(uri) {
    const result = parseWalletConnectUri(uri);
    if (result.protocol === this.protocol) {
      if (!result.handshakeTopic) {
        throw Error("Invalid or missing handshakeTopic parameter value");
      }
      const handshakeTopic = result.handshakeTopic;
      if (!result.bridge) {
        throw Error("Invalid or missing bridge url parameter value");
      }
      const bridge = decodeURIComponent(result.bridge);
      if (!result.key) {
        throw Error("Invalid or missing key parameter value");
      }
      const key = result.key;
      return { handshakeTopic, bridge, key };
    } else {
      throw new Error(ERROR_INVALID_URI);
    }
  }
  async _generateKey() {
    if (this._cryptoLib) {
      const result = await this._cryptoLib.generateKey();
      return result;
    }
    return null;
  }
  async _encrypt(data) {
    const key = this._key;
    if (this._cryptoLib && key) {
      const result = await this._cryptoLib.encrypt(data, key);
      return result;
    }
    return null;
  }
  async _decrypt(payload) {
    const key = this._key;
    if (this._cryptoLib && key) {
      const result = await this._cryptoLib.decrypt(payload, key);
      return result;
    }
    return null;
  }
  _getStorageSession() {
    let result = null;
    if (this._sessionStorage) {
      result = this._sessionStorage.getSession();
    }
    return result;
  }
  _setStorageSession() {
    if (this._sessionStorage) {
      this._sessionStorage.setSession(this.session);
    }
  }
  _removeStorageSession() {
    if (this._sessionStorage) {
      this._sessionStorage.removeSession();
    }
  }
  _manageStorageSession() {
    if (this._connected) {
      this._setStorageSession();
    } else {
      this._removeStorageSession();
    }
  }
  _registerPushServer(pushServerOpts) {
    if (!pushServerOpts.url || typeof pushServerOpts.url !== "string") {
      throw Error("Invalid or missing pushServerOpts.url parameter value");
    }
    if (!pushServerOpts.type || typeof pushServerOpts.type !== "string") {
      throw Error("Invalid or missing pushServerOpts.type parameter value");
    }
    if (!pushServerOpts.token || typeof pushServerOpts.token !== "string") {
      throw Error("Invalid or missing pushServerOpts.token parameter value");
    }
    const pushSubscription = {
      bridge: this.bridge,
      topic: this.clientId,
      type: pushServerOpts.type,
      token: pushServerOpts.token,
      peerName: "",
      language: pushServerOpts.language || ""
    };
    this.on("connect", async (error, payload) => {
      if (error) {
        throw error;
      }
      if (pushServerOpts.peerMeta) {
        const peerName = payload.params[0].peerMeta.name;
        pushSubscription.peerName = peerName;
      }
      try {
        const response = await fetch(`${pushServerOpts.url}/new`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(pushSubscription)
        });
        const json = await response.json();
        if (!json.success) {
          throw Error("Failed to register in Push Server");
        }
      } catch (error2) {
        throw Error("Failed to register in Push Server");
      }
    });
  }
};
var core_default = Connector;

// node_modules/@walletconnect/legacy-client/dist/esm/crypto.js
var crypto_exports = {};
__export(crypto_exports, {
  decrypt: () => decrypt,
  encrypt: () => encrypt,
  generateKey: () => generateKey,
  verifyHmac: () => verifyHmac
});

// node_modules/@walletconnect/crypto/dist/esm/browser/index.js
var browser_exports = {};
__export(browser_exports, {
  AES_BROWSER_ALGO: () => AES_BROWSER_ALGO,
  AES_LENGTH: () => AES_LENGTH,
  AES_NODE_ALGO: () => AES_NODE_ALGO,
  DECRYPT_OP: () => DECRYPT_OP,
  ENCRYPT_OP: () => ENCRYPT_OP,
  ERROR_BAD_MAC: () => ERROR_BAD_MAC,
  HEX_ENC: () => HEX_ENC,
  HMAC_BROWSER: () => HMAC_BROWSER,
  HMAC_BROWSER_ALGO: () => HMAC_BROWSER_ALGO,
  HMAC_LENGTH: () => HMAC_LENGTH,
  HMAC_NODE_ALGO: () => HMAC_NODE_ALGO,
  IV_LENGTH: () => IV_LENGTH,
  KEY_LENGTH: () => KEY_LENGTH,
  LENGTH_0: () => LENGTH_0,
  LENGTH_1: () => LENGTH_1,
  LENGTH_1024: () => LENGTH_1024,
  LENGTH_128: () => LENGTH_128,
  LENGTH_16: () => LENGTH_16,
  LENGTH_256: () => LENGTH_256,
  LENGTH_32: () => LENGTH_32,
  LENGTH_512: () => LENGTH_512,
  LENGTH_64: () => LENGTH_64,
  MAC_LENGTH: () => MAC_LENGTH,
  PREFIX_LENGTH: () => PREFIX_LENGTH,
  RIPEMD160_NODE_ALGO: () => RIPEMD160_NODE_ALGO,
  SHA256_BROWSER_ALGO: () => SHA256_BROWSER_ALGO,
  SHA256_NODE_ALGO: () => SHA256_NODE_ALGO,
  SHA512_BROWSER_ALGO: () => SHA512_BROWSER_ALGO,
  SHA512_NODE_ALGO: () => SHA512_NODE_ALGO,
  SIGN_OP: () => SIGN_OP,
  UTF8_ENC: () => UTF8_ENC,
  VERIFY_OP: () => VERIFY_OP,
  aesCbcDecrypt: () => aesCbcDecrypt,
  aesCbcEncrypt: () => aesCbcEncrypt,
  assert: () => assert2,
  hmacSha256Sign: () => hmacSha256Sign,
  hmacSha256Verify: () => hmacSha256Verify,
  hmacSha512Sign: () => hmacSha512Sign,
  hmacSha512Verify: () => hmacSha512Verify,
  isConstantTime: () => isConstantTime,
  pkcs7: () => pkcs7,
  randomBytes: () => randomBytes,
  ripemd160: () => ripemd160,
  sha256: () => sha256,
  sha512: () => sha512
});

// node_modules/@walletconnect/randombytes/dist/esm/browser/index.js
var env = __toESM(require_cjs3());
function randomBytes(length) {
  const browserCrypto = env.getBrowerCrypto();
  return browserCrypto.getRandomValues(new Uint8Array(length));
}

// node_modules/@walletconnect/crypto/dist/esm/lib/browser.js
var env2 = __toESM(require_cjs3());

// node_modules/@walletconnect/crypto/dist/esm/constants/length.js
var LENGTH_0 = 0;
var LENGTH_1 = 1;
var LENGTH_16 = 16;
var LENGTH_32 = 32;
var LENGTH_64 = 64;
var LENGTH_128 = 128;
var LENGTH_256 = 256;
var LENGTH_512 = 512;
var LENGTH_1024 = 1024;

// node_modules/@walletconnect/crypto/dist/esm/constants/default.js
var AES_LENGTH = LENGTH_256;
var HMAC_LENGTH = LENGTH_256;
var AES_BROWSER_ALGO = "AES-CBC";
var HMAC_BROWSER_ALGO = `SHA-${AES_LENGTH}`;
var HMAC_BROWSER = "HMAC";
var SHA256_BROWSER_ALGO = "SHA-256";
var SHA512_BROWSER_ALGO = "SHA-512";
var AES_NODE_ALGO = `aes-${AES_LENGTH}-cbc`;
var HMAC_NODE_ALGO = `sha${HMAC_LENGTH}`;
var SHA256_NODE_ALGO = "sha256";
var SHA512_NODE_ALGO = "sha512";
var RIPEMD160_NODE_ALGO = "ripemd160";
var PREFIX_LENGTH = LENGTH_1;
var KEY_LENGTH = LENGTH_32;
var IV_LENGTH = LENGTH_16;
var MAC_LENGTH = LENGTH_32;

// node_modules/@walletconnect/crypto/dist/esm/constants/encoding.js
var HEX_ENC = "hex";
var UTF8_ENC = "utf8";

// node_modules/@walletconnect/crypto/dist/esm/constants/error.js
var ERROR_BAD_MAC = "Bad MAC";

// node_modules/@walletconnect/crypto/dist/esm/constants/operations.js
var ENCRYPT_OP = "encrypt";
var DECRYPT_OP = "decrypt";
var SIGN_OP = "sign";
var VERIFY_OP = "verify";

// node_modules/@walletconnect/crypto/dist/esm/lib/browser.js
function getAlgo(type) {
  return type === AES_BROWSER_ALGO ? { length: AES_LENGTH, name: AES_BROWSER_ALGO } : {
    hash: { name: HMAC_BROWSER_ALGO },
    name: HMAC_BROWSER
  };
}
function getOps(type) {
  return type === AES_BROWSER_ALGO ? [ENCRYPT_OP, DECRYPT_OP] : [SIGN_OP, VERIFY_OP];
}
async function browserImportKey(buffer, type = AES_BROWSER_ALGO) {
  return env2.getSubtleCrypto().importKey("raw", buffer, getAlgo(type), true, getOps(type));
}
async function browserAesEncrypt(iv, key, data) {
  const subtle = env2.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, AES_BROWSER_ALGO);
  const result = await subtle.encrypt({
    iv,
    name: AES_BROWSER_ALGO
  }, cryptoKey, data);
  return new Uint8Array(result);
}
async function browserAesDecrypt(iv, key, data) {
  const subtle = env2.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, AES_BROWSER_ALGO);
  const result = await subtle.decrypt({
    iv,
    name: AES_BROWSER_ALGO
  }, cryptoKey, data);
  return new Uint8Array(result);
}
async function browserHmacSha256Sign(key, data) {
  const subtle = env2.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, HMAC_BROWSER);
  const signature = await subtle.sign({
    length: HMAC_LENGTH,
    name: HMAC_BROWSER
  }, cryptoKey, data);
  return new Uint8Array(signature);
}
async function browserHmacSha512Sign(key, data) {
  const subtle = env2.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, HMAC_BROWSER);
  const signature = await subtle.sign({
    length: LENGTH_512,
    name: HMAC_BROWSER
  }, cryptoKey, data);
  return new Uint8Array(signature);
}
async function browserSha256(data) {
  const subtle = env2.getSubtleCrypto();
  const result = await subtle.digest({
    name: SHA256_BROWSER_ALGO
  }, data);
  return new Uint8Array(result);
}
async function browserSha512(data) {
  const subtle = env2.getSubtleCrypto();
  const result = await subtle.digest({
    name: SHA512_BROWSER_ALGO
  }, data);
  return new Uint8Array(result);
}

// node_modules/@walletconnect/crypto/dist/esm/browser/aes.js
function aesCbcEncrypt(iv, key, data) {
  return browserAesEncrypt(iv, key, data);
}
function aesCbcDecrypt(iv, key, data) {
  return browserAesDecrypt(iv, key, data);
}

// node_modules/@walletconnect/crypto/dist/esm/helpers/index.js
var helpers_exports = {};
__export(helpers_exports, {
  assert: () => assert2,
  isConstantTime: () => isConstantTime,
  pkcs7: () => pkcs7
});

// node_modules/@walletconnect/crypto/dist/esm/helpers/env.js
var env_exports = {};
__reExport(env_exports, __toESM(require_cjs3()));

// node_modules/@walletconnect/crypto/dist/esm/helpers/index.js
__reExport(helpers_exports, env_exports);

// node_modules/@walletconnect/crypto/dist/esm/helpers/pkcs7.js
var PADDING = [
  [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
  [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
  [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
  [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [8, 8, 8, 8, 8, 8, 8, 8],
  [7, 7, 7, 7, 7, 7, 7],
  [6, 6, 6, 6, 6, 6],
  [5, 5, 5, 5, 5],
  [4, 4, 4, 4],
  [3, 3, 3],
  [2, 2],
  [1]
];
var pkcs7 = {
  pad(plaintext) {
    const padding = PADDING[plaintext.byteLength % 16 || 0];
    const result = new Uint8Array(plaintext.byteLength + padding.length);
    result.set(plaintext);
    result.set(padding, plaintext.byteLength);
    return result;
  },
  unpad(padded) {
    return padded.subarray(0, padded.byteLength - padded[padded.byteLength - 1]);
  }
};

// node_modules/@walletconnect/crypto/dist/esm/helpers/validators.js
function assert2(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}
function isConstantTime(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let res = 0;
  for (let i = 0; i < arr1.length; i++) {
    res |= arr1[i] ^ arr2[i];
  }
  return res === 0;
}

// node_modules/@walletconnect/crypto/dist/esm/browser/hmac.js
async function hmacSha256Sign(key, msg) {
  const result = await browserHmacSha256Sign(key, msg);
  return result;
}
async function hmacSha256Verify(key, msg, sig) {
  const expectedSig = await browserHmacSha256Sign(key, msg);
  const result = isConstantTime(expectedSig, sig);
  return result;
}
async function hmacSha512Sign(key, msg) {
  const result = await browserHmacSha512Sign(key, msg);
  return result;
}
async function hmacSha512Verify(key, msg, sig) {
  const expectedSig = await browserHmacSha512Sign(key, msg);
  const result = isConstantTime(expectedSig, sig);
  return result;
}

// node_modules/@walletconnect/crypto/dist/esm/browser/sha2.js
async function sha256(msg) {
  const result = await browserSha256(msg);
  return result;
}
async function sha512(msg) {
  const result = await browserSha512(msg);
  return result;
}
async function ripemd160(_msg) {
  throw new Error("Not supported for Browser async methods, use sync instead!");
}

// node_modules/@walletconnect/crypto/dist/esm/browser/index.js
__reExport(browser_exports, helpers_exports);

// node_modules/@walletconnect/legacy-client/dist/esm/crypto.js
init_esm4();
init_esm5();
async function generateKey(length) {
  const _length = (length || 256) / 8;
  const bytes = randomBytes(_length);
  const result = convertBufferToArrayBuffer(arrayToBuffer(bytes));
  return result;
}
async function verifyHmac(payload, key) {
  const cipherText = hexToArray(payload.data);
  const iv = hexToArray(payload.iv);
  const hmac = hexToArray(payload.hmac);
  const hmacHex = arrayToHex(hmac, false);
  const unsigned = concatArrays(cipherText, iv);
  const chmac = await hmacSha256Sign(key, unsigned);
  const chmacHex = arrayToHex(chmac, false);
  if (removeHexPrefix(hmacHex) === removeHexPrefix(chmacHex)) {
    return true;
  }
  return false;
}
async function encrypt(data, key, providedIv) {
  const _key = bufferToArray(convertArrayBufferToBuffer(key));
  const ivArrayBuffer = providedIv || await generateKey(128);
  const iv = bufferToArray(convertArrayBufferToBuffer(ivArrayBuffer));
  const ivHex = arrayToHex(iv, false);
  const contentString = JSON.stringify(data);
  const content = utf8ToArray(contentString);
  const cipherText = await aesCbcEncrypt(iv, _key, content);
  const cipherTextHex = arrayToHex(cipherText, false);
  const unsigned = concatArrays(cipherText, iv);
  const hmac = await hmacSha256Sign(_key, unsigned);
  const hmacHex = arrayToHex(hmac, false);
  return {
    data: cipherTextHex,
    hmac: hmacHex,
    iv: ivHex
  };
}
async function decrypt(payload, key) {
  const _key = bufferToArray(convertArrayBufferToBuffer(key));
  if (!_key) {
    throw new Error("Missing key: required for decryption");
  }
  const verified = await verifyHmac(payload, _key);
  if (!verified) {
    return null;
  }
  const cipherText = hexToArray(payload.data);
  const iv = hexToArray(payload.iv);
  const buffer = await aesCbcDecrypt(iv, _key, cipherText);
  const utf8 = arrayToUtf8(buffer);
  let data;
  try {
    data = JSON.parse(utf8);
  } catch (error) {
    return null;
  }
  return data;
}

// node_modules/@walletconnect/legacy-client/dist/esm/index.js
var WalletConnect = class extends core_default {
  constructor(connectorOpts, pushServerOpts) {
    super({
      cryptoLib: crypto_exports,
      connectorOpts,
      pushServerOpts
    });
  }
};
var esm_default = WalletConnect;

// node_modules/@walletconnect/legacy-provider/dist/esm/signer.js
var import_legacy_modal = __toESM(require_cjs4());
init_index_es();
init_esm2();
var SignerConnection = class extends o {
  constructor(opts) {
    super();
    this.events = new import_events3.default();
    this.accounts = [];
    this.chainId = 1;
    this.pending = false;
    this.bridge = "https://bridge.walletconnect.org";
    this.qrcode = true;
    this.qrcodeModalOptions = void 0;
    this.opts = opts;
    this.chainId = (opts === null || opts === void 0 ? void 0 : opts.chainId) || this.chainId;
    this.wc = this.register(opts);
  }
  get connected() {
    return typeof this.wc !== "undefined" && this.wc.connected;
  }
  get connecting() {
    return this.pending;
  }
  get connector() {
    this.wc = this.register(this.opts);
    return this.wc;
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
  async open(chainId) {
    if (this.connected) {
      this.onOpen();
      return;
    }
    return new Promise((resolve, reject) => {
      this.on("error", (err) => {
        reject(err);
      });
      this.on("open", () => {
        resolve();
      });
      this.create(chainId);
    });
  }
  async close() {
    if (typeof this.wc === "undefined")
      return;
    if (this.wc.connected) {
      this.wc.killSession();
    }
    this.onClose();
  }
  async send(payload) {
    this.wc = this.register(this.opts);
    if (!this.connected)
      await this.open();
    this.sendPayload(payload).then((res) => this.events.emit("payload", res)).catch((e) => this.events.emit("payload", formatJsonRpcError(payload.id, e.message)));
  }
  register(opts) {
    if (this.wc)
      return this.wc;
    this.opts = opts || this.opts;
    this.bridge = (opts === null || opts === void 0 ? void 0 : opts.connector) ? opts.connector.bridge : (opts === null || opts === void 0 ? void 0 : opts.bridge) || "https://bridge.walletconnect.org";
    this.qrcode = typeof (opts === null || opts === void 0 ? void 0 : opts.qrcode) === "undefined" || opts.qrcode !== false;
    this.chainId = typeof (opts === null || opts === void 0 ? void 0 : opts.chainId) !== "undefined" ? opts.chainId : this.chainId;
    this.qrcodeModalOptions = opts === null || opts === void 0 ? void 0 : opts.qrcodeModalOptions;
    const connectorOpts = {
      bridge: this.bridge,
      qrcodeModal: this.qrcode ? import_legacy_modal.default : void 0,
      qrcodeModalOptions: this.qrcodeModalOptions,
      storageId: opts === null || opts === void 0 ? void 0 : opts.storageId,
      signingMethods: opts === null || opts === void 0 ? void 0 : opts.signingMethods,
      clientMeta: opts === null || opts === void 0 ? void 0 : opts.clientMeta
    };
    this.wc = typeof (opts === null || opts === void 0 ? void 0 : opts.connector) !== "undefined" ? opts.connector : new esm_default(connectorOpts);
    if (typeof this.wc === "undefined") {
      throw new Error("Failed to register WalletConnect connector");
    }
    if (this.wc.accounts.length) {
      this.accounts = this.wc.accounts;
    }
    if (this.wc.chainId) {
      this.chainId = this.wc.chainId;
    }
    this.registerConnectorEvents();
    return this.wc;
  }
  onOpen(wc) {
    this.pending = false;
    if (wc) {
      this.wc = wc;
    }
    this.events.emit("open");
  }
  onClose() {
    this.pending = false;
    if (this.wc) {
      this.wc = void 0;
    }
    this.events.emit("close");
  }
  onError(payload, message = "Failed or Rejected Request", code = -32e3) {
    const errorPayload = {
      id: payload.id,
      jsonrpc: payload.jsonrpc,
      error: { code, message }
    };
    this.events.emit("payload", errorPayload);
    return errorPayload;
  }
  create(chainId) {
    this.wc = this.register(this.opts);
    this.chainId = chainId || this.chainId;
    if (this.connected || this.pending)
      return;
    this.pending = true;
    this.registerConnectorEvents();
    this.wc.createSession({ chainId: this.chainId }).then(() => this.events.emit("created")).catch((e) => this.events.emit("error", e));
  }
  registerConnectorEvents() {
    this.wc = this.register(this.opts);
    this.wc.on("connect", (err) => {
      var _a, _b;
      if (err) {
        this.events.emit("error", err);
        return;
      }
      this.accounts = ((_a = this.wc) === null || _a === void 0 ? void 0 : _a.accounts) || [];
      this.chainId = ((_b = this.wc) === null || _b === void 0 ? void 0 : _b.chainId) || this.chainId;
      this.onOpen();
    });
    this.wc.on("disconnect", (err) => {
      if (err) {
        this.events.emit("error", err);
        return;
      }
      this.onClose();
    });
    this.wc.on("modal_closed", () => {
      this.events.emit("error", new Error("User closed modal"));
    });
    this.wc.on("session_update", (error, payload) => {
      const { accounts, chainId } = payload.params[0];
      if (!this.accounts || accounts && this.accounts !== accounts) {
        this.accounts = accounts;
        this.events.emit("accountsChanged", accounts);
      }
      if (!this.chainId || chainId && this.chainId !== chainId) {
        this.chainId = chainId;
        this.events.emit("chainChanged", chainId);
      }
    });
  }
  async sendPayload(payload) {
    this.wc = this.register(this.opts);
    try {
      const response = await this.wc.unsafeSend(payload);
      return this.sanitizeResponse(response);
    } catch (error) {
      return this.onError(payload, error.message);
    }
  }
  sanitizeResponse(response) {
    return typeof response.error !== "undefined" && typeof response.error.code === "undefined" ? formatJsonRpcError(response.id, response.error.message, response.error.data) : response;
  }
};

// node_modules/@walletconnect/legacy-provider/dist/esm/index.js
var WalletConnectProvider = class {
  constructor(opts) {
    this.events = new import_events4.default();
    this.rpc = { infuraId: opts === null || opts === void 0 ? void 0 : opts.infuraId, custom: opts === null || opts === void 0 ? void 0 : opts.rpc };
    this.signer = new o2(new SignerConnection(opts));
    const chainId = this.signer.connection.chainId || (opts === null || opts === void 0 ? void 0 : opts.chainId) || 1;
    this.http = this.setHttpProvider(chainId);
    this.registerEventListeners();
  }
  get connected() {
    return this.signer.connection.connected;
  }
  get connector() {
    return this.signer.connection.connector;
  }
  get accounts() {
    return this.signer.connection.accounts;
  }
  get chainId() {
    return this.signer.connection.chainId;
  }
  get rpcUrl() {
    var _a;
    return ((_a = this.http) === null || _a === void 0 ? void 0 : _a.connection).url || "";
  }
  async request(args) {
    switch (args.method) {
      case "eth_requestAccounts":
        await this.connect();
        return this.signer.connection.accounts;
      case "eth_accounts":
        return this.signer.connection.accounts;
      case "eth_chainId":
        return this.signer.connection.chainId;
      default:
        break;
    }
    if (SIGNING_METHODS.includes(args.method)) {
      return this.signer.request(args);
    }
    if (typeof this.http === "undefined") {
      throw new Error(`Cannot request JSON-RPC method (${args.method}) without provided rpc url`);
    }
    return this.http.request(args);
  }
  sendAsync(args, callback) {
    this.request(args).then((response) => callback(null, response)).catch((error) => callback(error, void 0));
  }
  async enable() {
    const accounts = await this.request({ method: "eth_requestAccounts" });
    return accounts;
  }
  async connect() {
    if (!this.signer.connection.connected) {
      await this.signer.connect();
    }
  }
  async disconnect() {
    if (this.signer.connection.connected) {
      await this.signer.disconnect();
    }
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  get isWalletConnect() {
    return true;
  }
  registerEventListeners() {
    this.signer.connection.on("accountsChanged", (accounts) => {
      this.events.emit("accountsChanged", accounts);
    });
    this.signer.connection.on("chainChanged", (chainId) => {
      this.http = this.setHttpProvider(chainId);
      this.events.emit("chainChanged", chainId);
    });
    this.signer.on("disconnect", () => {
      this.events.emit("disconnect");
    });
  }
  setHttpProvider(chainId) {
    const rpcUrl = getRpcUrl(chainId, this.rpc);
    if (typeof rpcUrl === "undefined")
      return void 0;
    const http = new o2(new f(rpcUrl));
    return http;
  }
};
var esm_default2 = WalletConnectProvider;
export {
  esm_default2 as default
};
//# sourceMappingURL=esm-GCZKGZDH.js.map
