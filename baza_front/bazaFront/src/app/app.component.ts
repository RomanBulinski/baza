import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MenuPanelComponent} from "./menu/menu-panel/menu-panel.component";
import {CommonModule} from "@angular/common";
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MenuPanelComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bazaFront';

  snackBarRef: MatSnackBarRef<any> | undefined;

  constructor(private snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string) {
    this.snackBarRef = this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
