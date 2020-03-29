import {hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { APP_ROUTE_NAMES } from '@app/app.routes.names';
import { AUTH_ROUTE_NAMES } from '../routes/auth.routes.names';

export const GUARD_PIPES = {
  none: () => { return true; },
  restrictToAdmin: () => hasCustomClaim('ADMIN'),
  restrictToRole: (roleName) => hasCustomClaim(roleName),
  redirectUnauthorizedToLogin: () => redirectUnauthorizedTo(['/', APP_ROUTE_NAMES.AUTH, AUTH_ROUTE_NAMES.LOGIN]),
  redirectAuthorizedToHome: () => redirectLoggedInTo(['/']),
  belongsToAccount: (next) => hasCustomClaim(`account-${next.params.id}`),
  customClaimCheck: (claim) => hasCustomClaim(claim)
};
