import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuPanelComponent} from "./menu/menu-panel/menu-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bazaFront';
}
