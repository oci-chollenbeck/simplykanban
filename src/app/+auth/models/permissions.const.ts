export const PERMISSIONS = {
  none: () => { return true; },
  authenticated: (data) => { return !!data; },
  active: (data) => { return data.isActive; }
};
