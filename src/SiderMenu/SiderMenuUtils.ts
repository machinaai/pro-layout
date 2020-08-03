import { getMatchMenu, MenuDataItem } from '@umijs/route-utils';

// Obtener el Menú seleccionado actualmente
export const getSelectedMenuKeys = (
  pathname: string,
  menuData: MenuDataItem[],
): string[] => {
  const menus = getMatchMenu(pathname, menuData);
  return menus.map((item) => item.key || item.path || '');
};
