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
var clerk_react_exports = {};
__export(clerk_react_exports, {
  AuthenticateWithRedirectCallback: () => AuthenticateWithRedirectCallback,
  ClerkLoaded: () => ClerkLoaded,
  ClerkLoading: () => ClerkLoading,
  RedirectToCreateOrganization: () => RedirectToCreateOrganization,
  RedirectToOrganizationProfile: () => RedirectToOrganizationProfile,
  RedirectToSignIn: () => RedirectToSignIn,
  RedirectToSignUp: () => RedirectToSignUp,
  RedirectToUserProfile: () => RedirectToUserProfile,
  SignedIn: () => SignedIn,
  SignedOut: () => SignedOut,
  useAuth: () => useAuth,
  useClerk: () => useClerk,
  useEmailLink: () => useEmailLink,
  useMagicLink: () => useMagicLink,
  useOrganization: () => useOrganization,
  useOrganizationList: () => useOrganizationList,
  useOrganizations: () => useOrganizations,
  useSession: () => useSession,
  useSessionList: () => useSessionList,
  useSignIn: () => useSignIn,
  useSignUp: () => useSignUp,
  useUser: () => useUser
});
module.exports = __toCommonJS(clerk_react_exports);
var import_clerk_react = require("@clerk/clerk-react");
const useUser = import_clerk_react.useUser;
const useAuth = import_clerk_react.useAuth;
const useClerk = import_clerk_react.useClerk;
const useMagicLink = import_clerk_react.useMagicLink;
const useEmailLink = import_clerk_react.useEmailLink;
const useOrganization = import_clerk_react.useOrganization;
const useOrganizationList = import_clerk_react.useOrganizationList;
const useOrganizations = import_clerk_react.useOrganizations;
const useSession = import_clerk_react.useSession;
const useSessionList = import_clerk_react.useSessionList;
const useSignIn = import_clerk_react.useSignIn;
const useSignUp = import_clerk_react.useSignUp;
const SignedIn = import_clerk_react.SignedIn;
const SignedOut = import_clerk_react.SignedOut;
const ClerkLoaded = import_clerk_react.ClerkLoaded;
const ClerkLoading = import_clerk_react.ClerkLoading;
const RedirectToUserProfile = import_clerk_react.RedirectToUserProfile;
const RedirectToSignIn = import_clerk_react.RedirectToSignIn;
const RedirectToSignUp = import_clerk_react.RedirectToSignUp;
const RedirectToCreateOrganization = import_clerk_react.RedirectToCreateOrganization;
const RedirectToOrganizationProfile = import_clerk_react.RedirectToOrganizationProfile;
const AuthenticateWithRedirectCallback = import_clerk_react.AuthenticateWithRedirectCallback;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthenticateWithRedirectCallback,
  ClerkLoaded,
  ClerkLoading,
  RedirectToCreateOrganization,
  RedirectToOrganizationProfile,
  RedirectToSignIn,
  RedirectToSignUp,
  RedirectToUserProfile,
  SignedIn,
  SignedOut,
  useAuth,
  useClerk,
  useEmailLink,
  useMagicLink,
  useOrganization,
  useOrganizationList,
  useOrganizations,
  useSession,
  useSessionList,
  useSignIn,
  useSignUp,
  useUser
});
//# sourceMappingURL=clerk-react.js.map