import Cookie from 'universal-cookie';

const cookie = new Cookie();

export const getStorage = (key: string): any => {
  return cookie.get(key);
};

export const getAllStorage = (): Record<string, unknown> => {
  return cookie.getAll();
};

export const setStorage = (key: string, value: any): void => {
  cookie.set(key, value, {path: '/'});
};

export const removeItemStorage = (key: string): void => {
  cookie.remove(key, {path: '/'});
};

export const clearStorage = (): void => {
  const cookieNames = Object.keys(cookie.getAll());
  cookieNames.forEach(cookieName => cookie.remove(cookieName, {path: '/'}));
};