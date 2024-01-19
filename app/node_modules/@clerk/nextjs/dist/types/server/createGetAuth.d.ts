import type { SignedInAuthObject, SignedOutAuthObject } from '@clerk/backend';
import type { SecretKeyOrApiKey } from '@clerk/types';
import type { AuthObjectWithDeprecatedResources, RequestLike } from './types';
type GetAuthOpts = Partial<SecretKeyOrApiKey>;
export declare const createGetAuth: ({ debugLoggerName, noAuthStatusMessage, }: {
    noAuthStatusMessage: string;
    debugLoggerName: string;
}) => (req: RequestLike, opts?: GetAuthOpts) => AuthObjectWithDeprecatedResources<SignedInAuthObject> | AuthObjectWithDeprecatedResources<SignedOutAuthObject>;
export declare const parseJwt: (req: RequestLike) => import("@clerk/types").Jwt;
export declare const getAuth: (req: RequestLike, opts?: GetAuthOpts) => AuthObjectWithDeprecatedResources<SignedInAuthObject> | AuthObjectWithDeprecatedResources<SignedOutAuthObject>;
export {};
//# sourceMappingURL=createGetAuth.d.ts.map