import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayerService } from '../../layer.service';
import { Layer } from '../../layer';

@Component({
  selector: 'app-layer-builder',
  imports: [CommonModule],
  templateUrl: './layer-builder.html',
  styleUrl: './layer-builder.css'
})
export class LayerBuilder {
layersArray: Layer[] = []

constructor(private layerservice: LayerService) {
  this.layersArray = this.layerservice.getArray();
}
}
