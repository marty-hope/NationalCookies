import { Inject, Injectable } from '@angular/core';
import { Config } from './config.model';
import { CONFIG } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(@Inject(CONFIG) private configuration : Config) { }

  public get config(): Config {
    return this.configuration;
  }
}
