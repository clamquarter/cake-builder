import { Component } from '@angular/core';
import { LayerService }  from '../../layer.service';
@Component({
  selector: 'app-layer-add',
  imports: [],
  templateUrl: './layer-add.html',
  styleUrl: './layer-add.css'
})
export class LayerAdd {

 handleClick(): void {
//    LayerService.addLayer()
//button should display a form to collect user input
  //input to be used as cake layer parameters
 console.log('The Button Works');    
 }
}
