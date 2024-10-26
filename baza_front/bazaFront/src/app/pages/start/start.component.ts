import {Component} from '@angular/core';
import {
  MatSnackBar, MatSnackBarModule,
  MatSnackBarRef
} from "@angular/material/snack-bar";


@Component({
  selector: 'app-start',
  standalone: true,
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  snackBarRef: MatSnackBarRef<any> | undefined;

  constructor(private snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string) {
    this.snackBarRef = this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
