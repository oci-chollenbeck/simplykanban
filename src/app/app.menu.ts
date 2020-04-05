import { CLAIMS } from './+auth/claims.enum';
import { APP_ROUTE_NAMES } from './app.routes.names';
import { SETTINGS_ROUTE_NAMES } from './+settings/routes/settings.routes.names';

const MENU_ITEM_TYPES = {
  HEADER: 'header',
  ROUTE: 'route',
  DIVIDER: 'divider',
  SUBMENU: 'submenu'
};

class MenuItemVM {
  type: string;
  text: string;
  uri?: string;
  icon?: string;
  activeUriSegment?: string;
  exact?: boolean;

  claims?: CLAIMS[];

}

// Route Constants
const settingsRoute = '/' + APP_ROUTE_NAMES.SETTINGS + '/' + SETTINGS_ROUTE_NAMES.APPSETTINGS;


/**
 * MENU
 */
export const APP_MENU: MenuItemVM[] = [
  // { type: MENU_ITEM_TYPES.HEADER, text: 'NAVIGATION', restricted: false },

  // HOME
  { type: MENU_ITEM_TYPES.ROUTE, text: 'Home', uri: '/', icon: 'fas fa-home', activeUriSegment: '/', exact: true },

  // Settings
  { type: MENU_ITEM_TYPES.ROUTE, text: 'Settings', uri: settingsRoute, icon: 'fas fa-cogs', activeUriSegment: settingsRoute, exact: true, claims: [] }

];
