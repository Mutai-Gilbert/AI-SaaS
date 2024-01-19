"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var constants_exports = {};
__export(constants_exports, {
  API_KEY: () => API_KEY,
  API_URL: () => API_URL,
  API_VERSION: () => API_VERSION,
  CLERK_JS_URL: () => CLERK_JS_URL,
  CLERK_JS_VERSION: () => CLERK_JS_VERSION,
  DOMAIN: () => DOMAIN,
  FRONTEND_API: () => FRONTEND_API,
  IS_SATELLITE: () => IS_SATELLITE,
  JS_VERSION: () => JS_VERSION,
  PROXY_URL: () => PROXY_URL,
  PUBLISHABLE_KEY: () => PUBLISHABLE_KEY,
  SECRET_KEY: () => SECRET_KEY,
  SIGN_IN_URL: () => SIGN_IN_URL,
  SIGN_UP_URL: () => SIGN_UP_URL
});
module.exports = __toCommonJS(constants_exports);
var import_deprecated = require("@clerk/shared/deprecated");
const JS_VERSION = process.env.CLERK_JS_VERSION || "";
if (JS_VERSION) {
  (0, import_deprecated.deprecated)("CLERK_JS_VERSION", "Use `NEXT_PUBLIC_CLERK_JS_VERSION` environment variable instead.");
}
const CLERK_JS_VERSION = process.env.NEXT_PUBLIC_CLERK_JS_VERSION || "";
const CLERK_JS_URL = process.env.NEXT_PUBLIC_CLERK_JS || "";
const API_URL = process.env.CLERK_API_URL || "https://api.clerk.dev";
const API_VERSION = process.env.CLERK_API_VERSION || "v1";
const API_KEY = process.env.CLERK_API_KEY || "";
if (API_KEY) {
  (0, import_deprecated.deprecated)("CLERK_API_KEY", "Use `CLERK_SECRET_KEY` environment variable instead.");
}
const SECRET_KEY = process.env.CLERK_SECRET_KEY || "";
const FRONTEND_API = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API || "";
if (FRONTEND_API) {
  (0, import_deprecated.deprecated)("NEXT_PUBLIC_CLERK_FRONTEND_API", "Use `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` environment variable instead.");
}
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
const DOMAIN = process.env.NEXT_PUBLIC_CLERK_DOMAIN || "";
const PROXY_URL = process.env.NEXT_PUBLIC_CLERK_PROXY_URL || "";
const IS_SATELLITE = process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE === "true" || false;
const SIGN_IN_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "";
const SIGN_UP_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  API_KEY,
  API_URL,
  API_VERSION,
  CLERK_JS_URL,
  CLERK_JS_VERSION,
  DOMAIN,
  FRONTEND_API,
  IS_SATELLITE,
  JS_VERSION,
  PROXY_URL,
  PUBLISHABLE_KEY,
  SECRET_KEY,
  SIGN_IN_URL,
  SIGN_UP_URL
});
//# sourceMappingURL=constants.js.map