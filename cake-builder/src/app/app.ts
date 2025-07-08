import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// The App component gets the array of layers from the Layer service and includes a CakeBuilder and a Cake.
@Component({  
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cake-builder';
}
