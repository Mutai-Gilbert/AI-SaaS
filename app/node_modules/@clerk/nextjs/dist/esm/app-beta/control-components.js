import { deprecated } from "@clerk/shared/deprecated";
import React from "react";
deprecated(
  "@clerk/nextjs/app-beta",
  "Use imports from `@clerk/nextjs` instead.\nFor more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware"
);
import { auth } from "./auth";
function SignedIn(props) {
  const { children } = props;
  const { userId } = auth();
  return userId ? /* @__PURE__ */ React.createElement(React.Fragment, null, children) : null;
}
function SignedOut(props) {
  const { children } = props;
  const { userId } = auth();
  return userId ? null : /* @__PURE__ */ React.createElement(React.Fragment, null, children);
}
export {
  SignedIn,
  SignedOut
};
//# sourceMappingURL=control-components.js.map