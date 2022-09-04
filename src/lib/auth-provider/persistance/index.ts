import * as storage from '../../storage';

import {TOKEN_STORAGE_KEY} from '../constants';

type tokenType = [(token: string) => void, () => string, () => void];

export function tokenPersistance(): tokenType {
  function set(token: string): void {
    return storage.setStorage(TOKEN_STORAGE_KEY, token);
  }

  function get(): string {
    return storage.getStorage(TOKEN_STORAGE_KEY);
  }

  function remove(): void {
    storage.removeItemStorage(TOKEN_STORAGE_KEY);
  }

  return [set, get, remove];
}