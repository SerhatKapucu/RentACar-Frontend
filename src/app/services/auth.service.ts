import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/register';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44371/api/auth/';
  token: string = 'token';
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService
  ) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'login',
      loginModel
    );
  }

  register(
    userRegister: RegisterModel
  ): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'register',
      userRegister
    );
  }
  logOut() {
    this.localStorageService.removeToken();
    this.toastrService.success('Çıkış Yapıldı.');
  }
  isAuthenticated() {
    return localStorage.getItem(this.token);
  }
}
