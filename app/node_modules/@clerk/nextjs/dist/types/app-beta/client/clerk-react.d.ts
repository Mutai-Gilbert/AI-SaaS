/// <reference types="react" />
import { useEmailLink as _useEmailLink, useMagicLink as _useMagicLink, useOrganization as _useOrganization, useOrganizationList as _useOrganizationList, useUser as _useUser } from '@clerk/clerk-react';
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useUser: typeof _useUser;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useAuth: () => {
    isLoaded: false;
    isSignedIn: undefined;
    userId: undefined;
    sessionId: undefined;
    actor: undefined;
    orgId: undefined;
    orgRole: undefined;
    orgSlug: undefined;
    has: undefined;
    signOut: import("@clerk/types").SignOut;
    getToken: import("@clerk/types").GetToken;
} | {
    isLoaded: true;
    isSignedIn: false;
    userId: null;
    sessionId: null;
    actor: null;
    orgId: null;
    orgRole: null;
    orgSlug: null;
    has: (params?: import("@clerk/types").CheckAuthorizationParamsWithCustomPermissions | undefined) => false;
    signOut: import("@clerk/types").SignOut;
    getToken: import("@clerk/types").GetToken;
} | {
    isLoaded: true;
    isSignedIn: true;
    userId: string;
    sessionId: string;
    actor: import("@clerk/types").ActJWTClaim | null;
    orgId: null;
    orgRole: null;
    orgSlug: null;
    has: (params?: import("@clerk/types").CheckAuthorizationParamsWithCustomPermissions | undefined) => false;
    signOut: import("@clerk/types").SignOut;
    getToken: import("@clerk/types").GetToken;
} | {
    isLoaded: true;
    isSignedIn: true;
    userId: string;
    sessionId: string;
    actor: import("@clerk/types").ActJWTClaim | null;
    orgId: string;
    orgRole: import("@clerk/types").Autocomplete<"admin" | "basic_member" | "guest_member">;
    orgSlug: string | null;
    has: import("@clerk/types").CheckAuthorizationWithCustomPermissions;
    signOut: import("@clerk/types").SignOut;
    getToken: import("@clerk/types").GetToken;
};
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useClerk: () => import("@clerk/types").LoadedClerk;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useMagicLink: typeof _useMagicLink;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useEmailLink: typeof _useEmailLink;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useOrganization: typeof _useOrganization;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useOrganizationList: typeof _useOrganizationList;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useOrganizations: () => {
    isLoaded: false;
    createOrganization: undefined;
    getOrganizationMemberships: undefined;
    getOrganization: undefined;
} | {
    isLoaded: true;
    createOrganization: (params: import("@clerk/types").CreateOrganizationParams) => Promise<import("@clerk/types").OrganizationResource>;
    getOrganizationMemberships: () => Promise<import("@clerk/types").OrganizationMembershipResource[]>;
    getOrganization: (organizationId: string) => Promise<import("@clerk/types").OrganizationResource | undefined>;
};
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useSession: () => {
    isLoaded: false;
    isSignedIn: undefined;
    session: undefined;
} | {
    isLoaded: true;
    isSignedIn: false;
    session: null;
} | {
    isLoaded: true;
    isSignedIn: true;
    session: import("@clerk/types").ActiveSessionResource;
};
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useSessionList: () => {
    isLoaded: false;
    sessions: undefined;
    setSession: undefined;
    setActive: undefined;
} | {
    isLoaded: true;
    sessions: import("@clerk/types").SessionResource[];
    setSession: import("@clerk/types").SetSession;
    setActive: import("@clerk/types").SetActive;
};
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useSignIn: () => {
    isLoaded: false;
    signIn: undefined;
    setSession: undefined;
    setActive: undefined;
} | {
    isLoaded: true;
    signIn: import("@clerk/types").SignInResource;
    setSession: import("@clerk/types").SetSession;
    setActive: import("@clerk/types").SetActive;
};
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useSignUp: () => {
    isLoaded: false;
    signUp: undefined;
    setSession: undefined;
    setActive: undefined;
} | {
    isLoaded: true;
    signUp: import("@clerk/types").SignUpResource;
    setSession: import("@clerk/types").SetSession;
    setActive: import("@clerk/types").SetActive;
};
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const SignedIn: ({ children }: {
    children?: import("react").ReactNode;
}) => JSX.Element | null;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const SignedOut: ({ children }: {
    children?: import("react").ReactNode;
}) => JSX.Element | null;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const ClerkLoaded: ({ children }: {
    children?: import("react").ReactNode;
}) => JSX.Element | null;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const ClerkLoading: ({ children }: {
    children?: import("react").ReactNode;
}) => JSX.Element | null;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const RedirectToUserProfile: {
    (props: Omit<{
        clerk: import("@clerk/types").LoadedClerk;
    }, "clerk">): import("react").JSX.Element | null;
    displayName: string;
};
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const RedirectToSignIn: {
    (props: Omit<import("@clerk/clerk-react").WithClerkProp<import("@clerk/types").SignInRedirectOptions>, "clerk">): import("react").JSX.Element | null;
    displayName: string;
};
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const RedirectToSignUp: {
    (props: Omit<import("@clerk/clerk-react").WithClerkProp<import("@clerk/types").SignUpRedirectOptions>, "clerk">): import("react").JSX.Element | null;
    displayName: string;
};
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const RedirectToCreateOrganization: {
    (props: Omit<{
        clerk: import("@clerk/types").LoadedClerk;
    }, "clerk">): import("react").JSX.Element | null;
    displayName: string;
};
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const RedirectToOrganizationProfile: {
    (props: Omit<{
        clerk: import("@clerk/types").LoadedClerk;
    }, "clerk">): import("react").JSX.Element | null;
    displayName: string;
};
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const AuthenticateWithRedirectCallback: {
    (props: Omit<import("@clerk/clerk-react").WithClerkProp<import("@clerk/types").HandleOAuthCallbackParams>, "clerk">): import("react").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=clerk-react.d.ts.map