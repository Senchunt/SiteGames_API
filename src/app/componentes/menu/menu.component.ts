import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RodapeComponent } from '../rodape/rodape.component'; // Adjust the path if necessary

@Component({
  selector: 'app-menu',
  imports: [RouterModule, RodapeComponent], // Add RodapeComponent here
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}