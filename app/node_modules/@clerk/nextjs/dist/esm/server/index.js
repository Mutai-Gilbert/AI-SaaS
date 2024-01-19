export * from "./clerkClient";
import { getAuth } from "./createGetAuth";
import { buildClerkProps } from "./buildClerkProps";
export * from "./withClerkMiddleware";
import { redirectToSignUp, redirectToSignIn } from "./redirect";
import { auth } from "../app-router/server/auth";
import { currentUser } from "../app-router/server/currentUser";
import { authMiddleware } from "./authMiddleware";
export {
  auth,
  authMiddleware,
  buildClerkProps,
  currentUser,
  getAuth,
  redirectToSignIn,
  redirectToSignUp
};
//# sourceMappingURL=index.js.map