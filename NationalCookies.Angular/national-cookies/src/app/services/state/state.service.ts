import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { State } from './state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly internalState : State;

  constructor(service: ApiService) {
    let 
    sessionId : string;
    this.internalState = new State();
    service.getSessionId().subscribe(
      data => {
        sessionId = data;
        this.internalState.sessionId = sessionId;
      }
    );
   }

   get state(): State {
     return this.internalState;
   }
}
