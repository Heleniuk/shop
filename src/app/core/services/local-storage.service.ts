import { Injectable } from '@angular/core';
import { WindowRef } from './window-ref';

@Injectable()
export class LocalStorageService {
  private localStorage: any;

  constructor(private winRef: WindowRef) {
    this.localStorage = winRef.nativeWindow.localStorage;
  }

  getItem(key: string): any {
    return JSON.parse(this.localStorage.getItem(key));
  }

  setItem(key: string, value: any): void {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }

}
