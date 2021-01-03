import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'national-cookies';

  constructor(private router: Router){
    
  }

  goToPage(page: string){
    if(page === 'home'){
    this.router.navigate(['/main']);
    }
    else if(page === 'cookies'){
      this.router.navigate(['/cookies']);
    }
  }
}
