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
    this.layersArray.push({height: 100, width: 100, backgroundColor: 'pink'})
    this.layersArray.push({height: 200, width: 300, backgroundColor: 'blue'})
    this.layersArray.push({height: 200, width: 500, backgroundColor: 'green'})

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

