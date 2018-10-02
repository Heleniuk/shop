import randomString from 'random-string';

export class GeneratorService {
  constructor(private n: number) {
    this.n = n;
  }

  generateRandomString(): string {
    // var randomString = require('random-string');
    return randomString({
      length: this.n,
      numeric: true,
      letters: true,
      special: false
    });
  }

}
