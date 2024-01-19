import type { SignedInAuthObject, SignedOutAuthObject } from '@clerk/backend';
import type { CheckAuthorizationParamsWithCustomPermissions, CheckAuthorizationWithCustomPermissions } from '@clerk/types';
import type { AuthObjectWithDeprecatedResources } from '../../server/types';
type AuthSignedIn = AuthObjectWithDeprecatedResources<SignedInAuthObject & {
    /**
     * @experimental
     * This function is experimental as it throws a Nextjs notFound error if user is not authenticated or authorized.
     * In the future we would investigate a way to throw a more appropriate error that clearly describes the not authorized of authenticated status.
     */
    protect: {
        (params?: CheckAuthorizationParamsWithCustomPermissions | ((has: CheckAuthorizationWithCustomPermissions) => boolean), options?: {
            redirectUrl: string;
        }): AuthObjectWithDeprecatedResources<SignedInAuthObject>;
        (params?: {
            redirectUrl: string;
        }): AuthObjectWithDeprecatedResources<SignedInAuthObject>;
    };
}>;
type AuthSignedOut = AuthObjectWithDeprecatedResources<SignedOutAuthObject & {
    /**
     * @experimental
     * This function is experimental as it throws a Nextjs notFound error if user is not authenticated or authorized.
     * In the future we would investigate a way to throw a more appropriate error that clearly describes the not authorized of authenticated status.
     */
    protect: never;
}>;
export declare const auth: () => AuthSignedIn | AuthSignedOut;
export declare const initialState: () => Record<string, unknown>;
export {};
//# sourceMappingURL=auth.d.ts.map