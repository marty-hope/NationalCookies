import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Cookie } from 'src/app/services/api/cookie';
import { StateService } from 'src/app/services/state/state.service';


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

   cookies!: Cookie[];

  constructor(private apiService: ApiService, private stateService: StateService) {
   }

  ngOnInit(): void {
    this.apiService.getCookies(this.stateService.state.sessionId).subscribe(
      data => {
        this.cookies = data;
      }
    )
  }

}
