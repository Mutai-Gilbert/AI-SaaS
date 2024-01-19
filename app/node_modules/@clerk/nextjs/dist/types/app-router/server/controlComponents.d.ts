import type { Protect as ProtectClientComponent } from '@clerk/clerk-react';
import React from 'react';
export declare function SignedIn(props: React.PropsWithChildren): React.JSX.Element | null;
export declare function SignedOut(props: React.PropsWithChildren): React.JSX.Element | null;
type ProtectServerComponentProps = React.ComponentProps<typeof ProtectClientComponent>;
/**
 * Use `<Protect/>` in order to prevent unauthenticated or unauthorized users from accessing the children passed to the component.
 *
 * Examples:
 * ```
 * <Protect permission="a_permission_key" />
 * <Protect role="a_role_key" />
 * <Protect condition={(has) => has({permission:"a_permission_key"})} />
 * <Protect condition={(has) => has({role:"a_role_key"})} />
 * <Protect fallback={<p>Unauthorized</p>} />
 * ```
 */
export declare function Protect(props: ProtectServerComponentProps): React.JSX.Element;
export {};
//# sourceMappingURL=controlComponents.d.ts.map