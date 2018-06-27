import {Routes, RouterModule} from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { FormCarComponent } from './components/cars/forms/form-car/form-car.component';
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';
import { KilometersComponent } from './components/cars/kilometers/kilometers.component';

export const routes: Routes = [
    { path: '', redirectTo: '/cars', pathMatch: 'full'},
    { path: 'cars', component:CarsComponent},
    { path: 'form-cars/:id', component:FormCarComponent},
    { path: 'carDetails/:id', component:CarDetailsComponent},
    { path: 'cars-kilometers', component:KilometersComponent}
]