import type { ClerkProviderProps } from '@clerk/clerk-react';
import React from 'react';
declare global {
    export interface Window {
        __clerk_nav_await: Array<(value: void) => void>;
        __clerk_nav: (to: string) => Promise<void>;
    }
}
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const useAwaitableNavigate: () => (to: string) => Promise<void>;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare function ClerkProvider(props: ClerkProviderProps): React.JSX.Element;
//# sourceMappingURL=ClerkProvider.d.ts.map