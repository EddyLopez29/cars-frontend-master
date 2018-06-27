import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from'@angular/router';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { routes } from './app.routes';
import { CarComponent } from './components/cars/car/car.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { CatalogsService } from './services/catalogs.service';
import { FormCarComponent } from './components/cars/forms/form-car/form-car.component';
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';
import { KilometersComponent } from './components/cars/kilometers/kilometers.component';
import { ChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    FormCarComponent,
    CarDetailsComponent,
    KilometersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    ChartsModule
  ],
  providers: [CatalogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
