import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Legume } from './legume/Legume';

@Injectable()
export class TajineService {
  legumes: Legume[] = []
  
  constructor(private http: Http) { }

  getPrice(legumes: Legume[]) {
    
    return legumes.reduce(
      (prevPrice, legume) => prevPrice  + (legume.isDisplay ? legume.price : 0) 
      , 0)
  }

parse(json: any[]) : Legume[]{
    return json.map(item => new Legume(item.name, item.color, item.price, item.isDisplay))
}

getLegumesPromise() {
  return this.http.get("http://localhost:4200/test.json");
}

  getLegumes(): Legume[] {

    return this.legumes
  }
}
