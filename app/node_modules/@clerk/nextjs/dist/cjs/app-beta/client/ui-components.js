"use strict";
"use client";
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
var ui_components_exports = {};
__export(ui_components_exports, {
  CreateOrganization: () => CreateOrganization,
  OrganizationProfile: () => OrganizationProfile,
  OrganizationSwitcher: () => OrganizationSwitcher,
  SignIn: () => SignIn,
  SignUp: () => SignUp,
  UserButton: () => UserButton,
  UserProfile: () => UserProfile
});
module.exports = __toCommonJS(ui_components_exports);
var import_clerk_react = require("@clerk/clerk-react");
var import_deprecated = require("@clerk/shared/deprecated");
(0, import_deprecated.deprecated)(
  "@clerk/nextjs/app-beta",
  "Use imports from `@clerk/nextjs` instead.\nFor more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware"
);
const CreateOrganization = import_clerk_react.CreateOrganization;
const OrganizationProfile = import_clerk_react.OrganizationProfile;
const OrganizationSwitcher = import_clerk_react.OrganizationSwitcher;
const SignIn = import_clerk_react.SignIn;
const SignUp = import_clerk_react.SignUp;
const UserButton = import_clerk_react.UserButton;
const UserProfile = import_clerk_react.UserProfile;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateOrganization,
  OrganizationProfile,
  OrganizationSwitcher,
  SignIn,
  SignUp,
  UserButton,
  UserProfile
});
//# sourceMappingURL=ui-components.js.map