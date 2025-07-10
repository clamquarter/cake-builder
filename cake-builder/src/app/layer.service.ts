import { Injectable } from '@angular/core';
import { Layer } from "./layer";
@Injectable({
  providedIn: 'root'
})

export class LayerService {
  static getArray() {
    throw new Error('Method not implemented.');
  }

  layersArray: Layer[] = [];

  constructor() { 
    //dummy layers *remove later
    this.layersArray.push({height: 2, width: 5, color: 'pink'})
    this.layersArray.push({height: 2, width: 3, color: 'pink'})
    this.layersArray.push({height: 2, width: 1, color: 'pink'})

  }

  addLayer (layer: Layer) {
    this.layersArray.push(layer) 
}

removeLayer (layer: Layer) {
    this.layersArray.pop ()
}

getArray() {
  return this.layersArray;
}

}

