import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { GetResponseModel } from '../models/getResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:44371/api/';
  constructor(private httpClient:HttpClient) { }

  getCarImages(Id:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + 'carimages/getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getImagesByCarId(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getimagesbycarid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getImageByCarId(id: number): Observable<GetResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getimagesbycarid?id=' + id;
    return this.httpClient.get<GetResponseModel<CarImage>>(newPath);
  }
}
