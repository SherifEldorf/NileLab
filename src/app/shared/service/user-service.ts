import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { UserDTO } from '../model/UserDTO';
import { responseType } from '../class/responseType';
@Injectable()
export class UserService {
  private API_URL = '/Api/ApiUser/';
  constructor(private httpService: HttpService) {}

  public Login(userDTO: UserDTO) {
    return this.httpService.httpPost(
      userDTO,
      this.API_URL + 'Login',
      responseType.text
    );
  }
}
