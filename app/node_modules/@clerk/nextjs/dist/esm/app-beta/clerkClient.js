import { deprecated } from "@clerk/shared/deprecated";
deprecated(
  "@clerk/nextjs/app-beta",
  "Use imports from `@clerk/nextjs` instead.\nFor more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware"
);
import { clerkClient as _clerkClient } from "../server/clerkClient";
const clerkClient = _clerkClient;
export {
  clerkClient
};
//# sourceMappingURL=clerkClient.js.map