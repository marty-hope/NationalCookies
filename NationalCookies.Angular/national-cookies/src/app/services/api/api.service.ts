import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cookies } from './cookie';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly configService : ConfigService,
    private readonly http: HttpClient) { }

    httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    getCookies(sessionId: string) {
      return this.http.get<Cookies>(`${this.configService.config.apiUrl}cookies/${sessionId}`)
      .pipe(
        retry(1),
        catchError(this.processError)
      );
    }

    processError(err: any) {
      let message = '';
      if(err.error instanceof ErrorEvent) {
       message = err.error.message;
      } else {
       message = `Error Code: ${err.status}\nMessage: ${err.message}`;
      }
      console.log(message);
      return throwError(message);
   }

}
