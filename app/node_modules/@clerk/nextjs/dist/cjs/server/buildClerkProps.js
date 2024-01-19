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
var buildClerkProps_exports = {};
__export(buildClerkProps_exports, {
  buildClerkProps: () => buildClerkProps
});
module.exports = __toCommonJS(buildClerkProps_exports);
var import_backend = require("@clerk/backend");
var import_clerkClient = require("./clerkClient");
var import_utils = require("./utils");
const buildClerkProps = (req, initState = {}) => {
  const authToken = (0, import_utils.getAuthKeyFromRequest)(req, "AuthToken");
  const authStatus = (0, import_utils.getAuthKeyFromRequest)(req, "AuthStatus");
  const authMessage = (0, import_utils.getAuthKeyFromRequest)(req, "AuthMessage");
  const authReason = (0, import_utils.getAuthKeyFromRequest)(req, "AuthReason");
  const options = {
    apiKey: import_clerkClient.API_KEY,
    secretKey: import_clerkClient.SECRET_KEY,
    apiUrl: import_clerkClient.API_URL,
    apiVersion: import_clerkClient.API_VERSION,
    authStatus,
    authMessage,
    authReason
  };
  let authObject;
  if (!authStatus || authStatus !== import_backend.AuthStatus.SignedIn) {
    authObject = (0, import_backend.signedOutAuthObject)(options);
  } else {
    const { payload, raw } = (0, import_backend.decodeJwt)(authToken);
    authObject = (0, import_backend.signedInAuthObject)(payload, { ...options, token: raw.text });
  }
  const sanitizedAuthObject = (0, import_backend.makeAuthObjectSerializable)((0, import_backend.sanitizeAuthObject)({ ...authObject, ...initState }));
  return (0, import_utils.injectSSRStateIntoObject)({}, sanitizedAuthObject);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  buildClerkProps
});
//# sourceMappingURL=buildClerkProps.js.map