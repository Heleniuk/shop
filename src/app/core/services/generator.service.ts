import randomString from 'random-string';
import { Injectable } from '@angular/core';

//@Injectable({providedIn: CoreModule})
@Injectable()
export class GeneratorService {
  constructor() {}

  generateRandomString(n: number): string {
    return randomString({
      length: n,
      numeric: true,
      letters: true,
      special: false
    });
  }

}
