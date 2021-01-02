import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { CONFIG } from './app/services/config/constants';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

fetch ('config.json')
  .then(response => response.json())
  .then(json => {
    platformBrowserDynamic([
      {provide: CONFIG, useValue: json}
    ])
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
  }) ;
