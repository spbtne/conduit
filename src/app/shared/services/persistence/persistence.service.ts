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
  get(key: string): Promise<any> {
    return Promise.resolve()
      .then(() => localStorage.getItem(key))
      .then((token) => {
        if (token) {
          return JSON.parse(token);
        } else {
          console.info('Key not found');
          return null;
        }
      })
      .catch((e) => console.info('Error getting data from local storage', e));
  }
  constructor() {}
}
