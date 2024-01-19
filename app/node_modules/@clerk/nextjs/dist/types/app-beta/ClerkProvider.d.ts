import type { IsomorphicClerkOptions } from '@clerk/clerk-react';
import type { PublishableKeyOrFrontendApi } from '@clerk/types';
import React from 'react';
type NextAppClerkProviderProps = {
    children: React.ReactNode;
} & Omit<IsomorphicClerkOptions, keyof PublishableKeyOrFrontendApi> & Partial<PublishableKeyOrFrontendApi>;
/**
 * @deprecated Use imports from `@clerk/nextjs` instead.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare function ClerkProvider(props: NextAppClerkProviderProps): React.JSX.Element;
export {};
//# sourceMappingURL=ClerkProvider.d.ts.map