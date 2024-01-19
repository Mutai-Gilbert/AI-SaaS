import { deprecated } from "@clerk/shared/deprecated";
deprecated(
  "@clerk/nextjs/app-beta",
  "Use imports from `@clerk/nextjs` instead.\nFor more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware"
);
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { buildClerkProps, getAuth } from "../server";
const buildRequestLike = () => {
  return new NextRequest("https://placeholder.com", { headers: headers() });
};
const auth = () => {
  return getAuth(buildRequestLike());
};
const initialState = () => {
  return buildClerkProps(buildRequestLike());
};
export {
  auth,
  initialState
};
//# sourceMappingURL=auth.js.map