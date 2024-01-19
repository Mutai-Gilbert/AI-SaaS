import { deprecated } from "@clerk/shared/deprecated";
deprecated(
  "@clerk/nextjs/app-beta",
  "Use imports from `@clerk/nextjs` instead.\nFor more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware"
);
import { auth } from "./auth";
import { clerkClient } from "./clerkClient";
async function currentUser() {
  const { userId } = auth();
  return userId ? clerkClient.users.getUser(userId) : null;
}
export {
  currentUser
};
//# sourceMappingURL=currentUser.js.map