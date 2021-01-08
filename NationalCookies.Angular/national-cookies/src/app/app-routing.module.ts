import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CookiesComponent } from './pages/cookies/cookies/cookies.component';
import { MainComponent } from './pages/main/main.component';
import { SessionExpiredComponent } from './pages/session-expired/session-expired.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'sessionExpired', component: SessionExpiredComponent},
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' }

];

const config: ExtraOptions = {
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
