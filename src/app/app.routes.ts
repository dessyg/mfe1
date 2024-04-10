import { Routes } from '@angular/router';
import {NewFlightComponent} from "./new-flight/new-flight.component";
import {HolidayPackagesComponent} from "./holiday-packages/holiday-packages.component";
import {WebComponentsComponent} from "./web-components/web-components.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'flights',
    pathMatch: 'full'
  },
  {
    path: 'new-flight',
    component: NewFlightComponent
  },
  {
    path: 'holiday-packages',
    component: HolidayPackagesComponent
  }
];
