import {Component} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {MediatorApiService} from "../../common/mediator-api.service";
import {catchError, EMPTY, tap} from "rxjs";
import {MatSnackBarActions} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-connect-to-mediator',
  standalone: true,
  imports: [HttpClientModule, MatButtonModule, MatSnackBarActions],
  providers: [MediatorApiService],
  templateUrl: './connect-to-mediator.component.html',
  styleUrl: './connect-to-mediator.component.scss'
})
export class ConnectToMediatorComponent {

  answerFromMediator: string = "???";

  constructor(private mediatorApiService: MediatorApiService) {
  }

  getDataFromMediator() {
    this.mediatorApiService.getDataFromMediator().pipe(
      tap(data => {
          this.answerFromMediator = data.message;
          console.log('Data:', data)
        }
      ),
      catchError(error => {
        console.error('Error:', error);
        return EMPTY;
      })
    ).subscribe();
  }

}
