import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Cookie } from 'src/app/services/api/cookie';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

   cookies!: Cookie[];

  constructor(private apiService: ApiService) {
   }

  ngOnInit(): void {
    this.apiService.getCookies(uuidv4()).subscribe(
      data => {
        this.cookies = data;
      }
    )
  }

}
