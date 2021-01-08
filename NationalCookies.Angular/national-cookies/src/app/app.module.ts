import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookiesComponent } from './pages/cookies/cookies/cookies.component';
import { ApiService } from './services/api/api.service';
import { ConfigService } from './services/config/config.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieComponent } from './components/cookie/cookie.component';
import { MainComponent } from './pages/main/main.component';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionExpiredComponent } from './pages/session-expired/session-expired.component';

@NgModule({
  declarations: [
    AppComponent,
    CookiesComponent,
    CookieComponent,
    MainComponent,
    SessionExpiredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [ApiService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
