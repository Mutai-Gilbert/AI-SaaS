import type { Organization, Session, User } from '@clerk/backend';
import type { RequestLike } from './types';
type BuildClerkPropsInitState = {
    user?: User | null;
    session?: Session | null;
    organization?: Organization | null;
};
/**
 * To enable Clerk SSR support, include this object to the `props`
 * returned from `getServerSideProps`. This will automatically make the auth state available to
 * the Clerk components and hooks during SSR, the hydration phase and CSR.
 * @example
 * import { getAuth } from '@clerk/nextjs/server';
 *
 * export const getServerSideProps = ({ req }) => {
 *   const { authServerSideProps } = getAuth(req);
 *   const myData = getMyData();
 *
 *   return {
 *     props: { myData, authServerSideProps },
 *   };
 * };
 */
type BuildClerkProps = (req: RequestLike, authState?: BuildClerkPropsInitState) => Record<string, unknown>;
export declare const buildClerkProps: BuildClerkProps;
export {};
//# sourceMappingURL=buildClerkProps.d.ts.map