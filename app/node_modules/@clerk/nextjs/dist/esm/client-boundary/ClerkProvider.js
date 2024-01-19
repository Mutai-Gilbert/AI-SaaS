"use client";
import React from "react";
import { ClerkProvider as PageClerkProvider } from "../pages/ClerkProvider";
function ClerkProvider(props) {
  try {
    const { useRouter } = require("next/compat/router");
    const router = useRouter();
    return router ? /* @__PURE__ */ React.createElement(PageClerkProvider, { ...props }) : /* @__PURE__ */ React.createElement(AppClerkProvider, { ...props });
  } catch (error) {
    return /* @__PURE__ */ React.createElement(PageClerkProvider, { ...props });
  }
}
function AppClerkProvider(props) {
  const { ClientClerkProvider } = require("../app-router/client/ClerkProvider");
  return /* @__PURE__ */ React.createElement(ClientClerkProvider, { ...props });
}
export {
  ClerkProvider
};
//# sourceMappingURL=ClerkProvider.js.map