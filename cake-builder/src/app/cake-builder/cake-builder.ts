import { Component } from '@angular/core';
import { Layer } from '../layer';
import { LayerService } from '../layer.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cake-builder',
  imports: [CommonModule],
  templateUrl: './cake-builder.html',
  styleUrl: './cake-builder.css'
})
export class CakeBuilder {


  constructor(private layerServices : LayerService){}

  public newLayer : Layer = {
    height : 0.5,
    width : 1,
    backgroundColor : "Please Enter Color"
  };

  addLayer(newLayer : Layer){
this.layerServices
  }
}
