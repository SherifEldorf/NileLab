import { Injectable } from '@angular/core';
import { HttpService } from './http-service';

@Injectable()
export class LanguageService {
  private API_URL = '/Api/ApiLanguage/';
  constructor(private httpService: HttpService) {}

  public SelectActive() {
    return this.httpService.httpGet(null, this.API_URL + 'SelectActive');
  }
}
