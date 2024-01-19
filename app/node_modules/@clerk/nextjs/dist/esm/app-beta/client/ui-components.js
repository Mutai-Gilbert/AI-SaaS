"use client";
import {
  CreateOrganization as _CreateOrganization,
  OrganizationProfile as _OrganizationProfile,
  OrganizationSwitcher as _OrganizationSwitcher,
  SignIn as _SignIn,
  SignUp as _SignUp,
  UserButton as _UserButton,
  UserProfile as _UserProfile
} from "@clerk/clerk-react";
import { deprecated } from "@clerk/shared/deprecated";
deprecated(
  "@clerk/nextjs/app-beta",
  "Use imports from `@clerk/nextjs` instead.\nFor more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware"
);
const CreateOrganization = _CreateOrganization;
const OrganizationProfile = _OrganizationProfile;
const OrganizationSwitcher = _OrganizationSwitcher;
const SignIn = _SignIn;
const SignUp = _SignUp;
const UserButton = _UserButton;
const UserProfile = _UserProfile;
export {
  CreateOrganization,
  OrganizationProfile,
  OrganizationSwitcher,
  SignIn,
  SignUp,
  UserButton,
  UserProfile
};
//# sourceMappingURL=ui-components.js.map