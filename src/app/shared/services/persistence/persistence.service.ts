import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to local storage', error);
    }
  }
  get(key: string): string | null {
    try {
      const storageItem = localStorage.getItem(key);
      if (storageItem?.length) {
        return JSON.parse(storageItem);
      } else {
        console.info('Key not found');
        return null;
      }
    } catch (error) {
      console.error('Something get wrong in local storage', error);
      return null;
    }
  }
  constructor() {}
}
