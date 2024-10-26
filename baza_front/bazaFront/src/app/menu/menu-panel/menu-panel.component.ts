import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-menu-panel',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './menu-panel.component.html',
  styleUrl: './menu-panel.component.scss'
})

export class MenuPanelComponent {

}
