import {Component} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "../../common/api.service";
import {catchError, EMPTY, of, tap, throwError} from "rxjs";

@Component({
  selector: 'app-connect-to-mediator',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ApiService],
  templateUrl: './connect-to-mediator.component.html',
  styleUrl: './connect-to-mediator.component.scss'
})
export class ConnectToMediatorComponent {

  constructor(private apiService: ApiService) {
  }

  onButtonClick() {
    console.log('Button clicked!');
    this.apiService.getData().pipe(
      tap(data => console.log('Data:', data)),  // tap is used to log the data without modifying it
      catchError(error => {
        console.error('Error:', error);
        return EMPTY;
      })
    ).subscribe();
  }

}
