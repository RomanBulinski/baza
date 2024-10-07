import { Routes } from '@angular/router';
import {AdministrationComponent} from "./pages/administration/administration.component";
import {StartComponent} from "./pages/start/start.component";
import {ConnectToMediatorComponent} from "./pages/connect-to-mediator/connect-to-mediator.component";

export const routes: Routes = [
  { path: 'start-component', component: StartComponent },
  { path: 'connect-to-mediator-component', component: ConnectToMediatorComponent },
  { path: 'administration-component', component: AdministrationComponent },
];
