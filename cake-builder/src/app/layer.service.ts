//import { Injectable } from '@angular/core';
import { Layer } from "./layer";
/*@Injectable({
  providedIn: 'root'
})
*/
export class LayerService {   // Includes add layer and delete layer
// Unsure if it belongs in a class
  layersArray: Layer[] = [];
  constructor() { }

  addLayer (layer: Layer) {
    this.layersArray.push(layer) 
}

removeLayer (layer: Layer) {
    this.layersArray.pop ()
}
}

