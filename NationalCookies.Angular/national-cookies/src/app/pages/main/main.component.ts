import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(stateService: StateService) { }

  ngOnInit(): void {
    
  }

}
