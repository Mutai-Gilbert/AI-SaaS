import {
  AuthStatus,
  decodeJwt,
  makeAuthObjectSerializable,
  sanitizeAuthObject,
  signedInAuthObject,
  signedOutAuthObject
} from "@clerk/backend";
import { API_KEY, API_URL, API_VERSION, SECRET_KEY } from "./clerkClient";
import { getAuthKeyFromRequest, injectSSRStateIntoObject } from "./utils";
const buildClerkProps = (req, initState = {}) => {
  const authToken = getAuthKeyFromRequest(req, "AuthToken");
  const authStatus = getAuthKeyFromRequest(req, "AuthStatus");
  const authMessage = getAuthKeyFromRequest(req, "AuthMessage");
  const authReason = getAuthKeyFromRequest(req, "AuthReason");
  const options = {
    apiKey: API_KEY,
    secretKey: SECRET_KEY,
    apiUrl: API_URL,
    apiVersion: API_VERSION,
    authStatus,
    authMessage,
    authReason
  };
  let authObject;
  if (!authStatus || authStatus !== AuthStatus.SignedIn) {
    authObject = signedOutAuthObject(options);
  } else {
    const { payload, raw } = decodeJwt(authToken);
    authObject = signedInAuthObject(payload, { ...options, token: raw.text });
  }
  const sanitizedAuthObject = makeAuthObjectSerializable(sanitizeAuthObject({ ...authObject, ...initState }));
  return injectSSRStateIntoObject({}, sanitizedAuthObject);
};
export {
  buildClerkProps
};
//# sourceMappingURL=buildClerkProps.js.map