import { CLAIMS } from './+auth/claims.enum';

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




/**
 * MENU
 */
export const APP_MENU: MenuItemVM[] = [
  // { type: MENU_ITEM_TYPES.HEADER, text: 'NAVIGATION', restricted: false },

  // HOME
  { type: MENU_ITEM_TYPES.ROUTE, text: 'Home', uri: '/', icon: 'fas fa-home', activeUriSegment: '/', exact: true },

];
