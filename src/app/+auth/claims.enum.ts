// Used to check the currently logged in user for any claims flags
// associated with their account. Can be used for roles, permissions, preferences, etc.
// *: Keep these to a minimum as they get loaded EVERY time the user is authenticated! Also restricted to 1000 byte limit.

export enum CLAIMS {
  ADMIN = 'ADMIN',
  NOTIFICATIONS = 'NOTIFICATIONS'
}
