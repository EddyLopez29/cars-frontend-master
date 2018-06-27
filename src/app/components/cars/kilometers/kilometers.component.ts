import { Component, OnInit } from '@angular/core';
import { CatalogsService } from '../../../services/catalogs.service';
import { Car } from '../car/car';

@Component({
  selector: 'app-kilometers',
  templateUrl: './kilometers.component.html',
  styleUrls: ['./kilometers.component.css']
})
export class KilometersComponent implements OnInit {
  private title: string = "Graficas de Kilometrage"
  cars: any
  carDetails: any
  constructor(
    private catalogsService: CatalogsService
  ) {}

  ngOnInit() {
    this.catalogsService.getCarKilometers().subscribe(
      carDetails => {
        this.carDetails = carDetails
        console.log(this.carDetails);
        this.doughnutChartData = this.carDetails
      }
    )
    this.catalogsService.getCarModel().subscribe(
      cars => {
        this.cars = cars
        console.log(this.cars);
        this.doughnutChartLabels = this.cars
      }
    )
  }

    // Doughnut
  public doughnutChartLabels:string[] = [];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
