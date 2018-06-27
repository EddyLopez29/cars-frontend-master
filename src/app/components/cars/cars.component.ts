import { Component, OnInit } from '@angular/core';
import { CatalogsService } from '../../services/catalogs.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CatalogsService]
})
export class CarsComponent implements OnInit {

  cars: any;

  constructor(private catalogsService: CatalogsService) {}

  ngOnInit() {
    this.catalogsService.getCars()
    .subscribe(cars => {
      this.cars = cars})
  }

}
