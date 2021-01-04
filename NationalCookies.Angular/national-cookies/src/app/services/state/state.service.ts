import { Injectable } from '@angular/core';
import { State } from './state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly internalState : State;

  constructor() {
    this.internalState = new State();
   }

   get state(): State {
     return this.internalState;
   }
}
