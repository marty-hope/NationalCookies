import { Component, Input, OnInit } from '@angular/core';
import { Cookie } from 'src/app/services/api/cookie';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {

  @Input() cookie!: Cookie;

  constructor() { }

  ngOnInit(): void {
  }

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

}
