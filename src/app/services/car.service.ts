import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';
import { GetResponseModel } from '../models/getResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44371/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getallcardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(id: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcarsbybrand?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColor(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarsbycolor?id="+id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsById(carId: number): Observable<GetResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbyid?id=' + carId;
    return this.httpClient.get<GetResponseModel<Car>>(newPath);
  }

  getImagesByCarId(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getimagesbycarid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarsByFilter(brandId:Number,colorId:Number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + `cars/getcarsbyfilter?brandid=${brandId}&colorid=${colorId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  add(car:Car){
    return this.httpClient.post(this.apiUrl+"cars/add",car)
  }
  update(car:Car){
    return this.httpClient.post(this.apiUrl+"cars/update",car)
  }
}
