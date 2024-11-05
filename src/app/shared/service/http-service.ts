import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedValueService } from './shared-value-service';

@Injectable()
export class HttpService {
  private baseUrl: string;
  constructor(
    private http: HttpClient,
    sharedValueService: SharedValueService
  ) {
    this.baseUrl = sharedValueService.configuration.apiURL;
  }
  public httpGet(
    object: any,
    url: string,
    queryStringQuestionMark: boolean = true,
    responseType: any = 'json'
  ) {
    url = this.setUrl(url, { postRequest: false, queryStringQuestionMark });
    return this.http.get(url + object, { responseType });
  }

  public httpDelete(
    object: any,
    url: string,
    queryStringQuestionMark: boolean = true,
    responseType: any = 'json'
  ) {
    url = this.setUrl(url, { postRequest: false, queryStringQuestionMark });
    return this.http.delete(url + object, { responseType });
  }

  public httpPost(object: any, url: string, responseType: any = 'json') {
    url = this.setUrl(url, { postRequest: true });
    return this.http.post(url, object, { responseType });
  }

  setUrl(actionUrl: string, setting: ISetting = null) {
    let url = this.baseUrl + actionUrl;
    if (setting && !setting.postRequest) {
      url += setting.queryStringQuestionMark ? '?' : '/';
    }
    return url;
  }
}

export interface ISetting {
  postRequest?: boolean;
  queryStringQuestionMark?: boolean;
}
