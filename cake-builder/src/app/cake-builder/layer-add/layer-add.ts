import { Component } from '@angular/core';
import { LayerService }  from '../../layer.service';
@Component({
  selector: 'app-layer-add',
  imports: [],
  templateUrl: './layer-add.html',
  styleUrl: './layer-add.css'
})
export class LayerAdd {

 handleClick() {
//    LayerService.addLayer()
 console.log('The Button Works')    
 }
}
