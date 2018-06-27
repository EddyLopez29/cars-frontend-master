import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Car } from '../components/cars/car/car'
import { Observable } from "rxjs";
import { CarDetails } from "../components/cars/car-details/car-details";

@Injectable()
export class CatalogsService {
    
    private httpHeaders = new HttpHeaders({'content-type': 'appication/json'})
    url: String;

    constructor(private http: HttpClient) {
        this.url = '/cars_admin'
    }

    getCars(): Observable<Car[]>{
        return this.http.get<Car[]>(this.url + '/cars');
    }

    getCar(id: number): Observable<Car>{
        return this.http.get<Car>(this.url + '/cars/' + id)
    }

    getCarDetails(id: number):Observable<CarDetails>{
        return this.http.get<CarDetails>(this.url + '/carDetails/' +id)
    }

    getCarKilometers(){
        return this.http.get(this.url + '/carKilometers')
    }

    getCarModel(){
        return this.http.get(this.url + '/carModels')
    }
}