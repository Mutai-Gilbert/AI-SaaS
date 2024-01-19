"use client";
import { ClerkProvider as ReactClerkProvider } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import React from "react";
import { ClerkNextOptionsProvider } from "../../client-boundary/NextOptionsContext";
import { useSafeLayoutEffect } from "../../client-boundary/useSafeLayoutEffect";
import { mergeNextClerkPropsWithEnv } from "../../utils/mergeNextClerkPropsWithEnv";
import { useAwaitableNavigate } from "./useAwaitableNavigate";
const ClientClerkProvider = (props) => {
  const { __unstable_invokeMiddlewareOnAuthStateChange = true } = props;
  const router = useRouter();
  const navigate = useAwaitableNavigate();
  useSafeLayoutEffect(() => {
    window.__unstable__onBeforeSetActive = () => {
      if (__unstable_invokeMiddlewareOnAuthStateChange) {
        router.refresh();
        router.push(window.location.href);
      }
    };
    window.__unstable__onAfterSetActive = () => {
      router.refresh();
    };
  }, []);
  const mergedProps = mergeNextClerkPropsWithEnv({ ...props, navigate });
  return /* @__PURE__ */ React.createElement(ClerkNextOptionsProvider, { options: mergedProps }, /* @__PURE__ */ React.createElement(ReactClerkProvider, { ...mergedProps }));
};
export {
  ClientClerkProvider
};
//# sourceMappingURL=ClerkProvider.js.map