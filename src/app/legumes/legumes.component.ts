import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { Legume } from '../legume/Legume';
import { TajineService } from '../tajine.service';

@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.component.html',
  styleUrls: ['./legumes.component.css']
})
export class LegumesComponent implements OnInit {
  price: number
  listOfLegume: Legume[] = []


  constructor(private _tajineService: TajineService, private http: Http){}
  
  ngOnInit() {
    this.getLegumes()
    this.price = this._tajineService.getPrice(this.listOfLegume)
  }

getLegumes() {
  return this._tajineService.getLegumesPromise()
    .subscribe(
        data => this.listOfLegume = this._tajineService.parse(data.json()),
        err => console.log(err)
      )
}

  showPrice(legume: Legume) {
    alert(legume.price)
  }
}
