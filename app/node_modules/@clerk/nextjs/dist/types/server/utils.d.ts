import type { RequestState } from '@clerk/backend';
import { constants } from '@clerk/backend';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import type { NextMiddlewareResult, RequestLike, WithAuthOptions } from './types';
export declare function setCustomAttributeOnRequest(req: RequestLike, key: string, value: string): void;
export declare function getCustomAttributeFromRequest(req: RequestLike, key: string): string | null | undefined;
export declare function getAuthKeyFromRequest(req: RequestLike, key: keyof typeof constants.Attributes): string | null | undefined;
export declare function getAuthStatusFromRequest(req: RequestLike): string | null | undefined;
export declare function getHeader(req: RequestLike, name: string): string | null | undefined;
export declare function getCookie(req: RequestLike, name: string): string | undefined;
export declare const setRequestHeadersOnNextResponse: (res: NextResponse | Response, req: NextRequest, newHeaders: Record<string, string>) => void;
/**
 * Test whether the currently installed nextjs version supports overriding the request headers.
 * This feature was added in nextjs v13.0.1
 * https://github.com/vercel/next.js/pull/41380
 */
export declare const nextJsVersionCanOverrideRequestHeaders: () => boolean;
export declare const injectSSRStateIntoObject: <O, T>(obj: O, authObject: T) => O & {
    __clerk_ssr_state: T;
};
export declare function isDevelopmentFromApiKey(apiKey: string): boolean;
export declare function decorateRequest(req: NextRequest, res: NextMiddlewareResult, requestState: RequestState): NextMiddlewareResult;
export declare const apiEndpointUnauthorizedNextResponse: () => NextResponse<null>;
export declare const isCrossOrigin: (from: string | URL, to: string | URL) => boolean;
export declare const handleMultiDomainAndProxy: (req: NextRequest, opts: WithAuthOptions) => {
    proxyUrl: string;
    isSatellite: boolean;
    domain: string;
    signInUrl: string;
};
//# sourceMappingURL=utils.d.ts.map