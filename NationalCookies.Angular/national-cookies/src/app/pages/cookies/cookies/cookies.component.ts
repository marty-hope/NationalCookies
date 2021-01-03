import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

   cookies: any;

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
