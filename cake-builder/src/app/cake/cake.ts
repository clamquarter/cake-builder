import { Component } from '@angular/core';
import { LayerService } from '../layer.service';
import { Layer } from '../layer';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-cake',
  imports: [CommonModule],
  templateUrl: './cake.html',
  styleUrl: './cake.css'
})
export class Cake {
  layersArray: Layer[] = []

constructor(private layerservice: LayerService) {
  this.layersArray = this.layerservice.getArray();
}


}
