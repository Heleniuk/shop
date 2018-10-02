import { Injectable } from '@angular/core';
import { ConfigOptions } from '../models/config-options.model';

// @Injectable({providedIn: CoreModule})
@Injectable()
export class ConfigOptionsService {
  private configOptions: ConfigOptions;

  constructor() {
    this.configOptions = new ConfigOptions('id', 'login', 'email');
  }

  getOptions(): ConfigOptions {
    return this.configOptions;
  }

  setOptions(configOptions: ConfigOptions) {
    this.configOptions = configOptions;
  }
}
