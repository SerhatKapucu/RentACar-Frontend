import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44371/api/colors/';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath="getall";
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl + newPath);
  }

  add(color: Color):Observable<ResponseModel> {
    let newPath = 'add';
    return this.httpClient.post<ResponseModel>(this.apiUrl + newPath, color);
  }
}
