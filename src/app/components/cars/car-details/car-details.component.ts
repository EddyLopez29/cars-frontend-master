import { Component, OnInit, Input } from '@angular/core';
import { CatalogsService } from '../../../services/catalogs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CarDetails } from './car-details';
import { Car } from '../car/car';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
  providers: [CatalogsService]
})
export class CarDetailsComponent implements OnInit {

  carId: number;
  carDetails: CarDetails = new CarDetails();
  car: Car = new Car();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private catalogsService: CatalogsService
  ) { }


  ngOnInit() {
    this.loadCar();
    this.loadCarDetail();
  }
  loadCar(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if (id){
        this.catalogsService.getCar(id).subscribe((car) => this.car = car)
      }
    })
  }

  loadCarDetail(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if (id){
        this.catalogsService.getCarDetails(id).subscribe((carDetails) => this.carDetails = carDetails)
      }
    })
  }
}
