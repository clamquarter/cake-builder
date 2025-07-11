import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cake } from './cake/cake';
import { LayerBuilder } from './cake-builder/layer-builder/layer-builder';

// The App component gets the array of layers from the Layer service and includes a CakeBuilder and a Cake.
@Component({  
  selector: 'app-root',
  imports: [RouterOutlet, Cake, LayerBuilder],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cake-builder';
}
