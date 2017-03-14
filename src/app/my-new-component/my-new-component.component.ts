import { Component, OnInit } from '@angular/core';
import {PriceUtilsService} from '../price-utils.service'

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {
  str = 'khalid';
  talks = [ {title: 't1', speaker: 'Brian', description: 'talk 1'},
            {title: 't2', speaker: 'Julie', description: 'talk 2'}];

  constructor() { }

  ngOnInit() {
  }
  
  handleClick() {
    alert(PriceUtilsService.reduce(900));
    this.str = 'benrafik';
  }
}
