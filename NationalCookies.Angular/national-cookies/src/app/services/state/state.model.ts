import { v4 as uuidv4 } from 'uuid';

export class State {
    sessionId: string;
    constructor(){
        this.sessionId = uuidv4();
    }
}