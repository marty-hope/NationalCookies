import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookiesComponent } from './pages/cookies/cookies/cookies.component';
import { ApiService } from './services/api/api.service';
import { ConfigService } from './services/config/config.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieComponent } from './components/cookie/cookie.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CookiesComponent,
    CookieComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
