import { Injectable } from '@angular/core';
import { LocalStorage } from '../models/local-storage.model';

//@Injectable({providedIn: CoreModule})
@Injectable()
export class LocalStorageService {
  private localStorage: LocalStorage = new LocalStorage('whatever');

  constructor() { }

  getItem(): string {
    return this.localStorage.item;
  }

  setItem(item: string): void {
    this.localStorage.item = item;
  }

  removeItem(): void {
    this.localStorage.item = null;
  }
}
