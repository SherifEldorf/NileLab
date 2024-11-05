import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpService } from 'src/app/shared/service/http-service';
@Injectable()
export class CustomLabelService {
    private API_URL = '/Api/ApiCustomLabel/';
    constructor(private httpService: HttpService) {

    }

    selectLabelLanguage(languageId: number) {
        const httpParams = new HttpParams().set('languageId', languageId.toString());
        return this.httpService.httpGet(httpParams, (this.API_URL + 'SelectLabelLangauge'));
    }
    UpdateList(object: any) {
        return this.httpService.httpPost(object, (this.API_URL + 'UpdateList'));
    }
    SetDfaultLabelLanguage(languageId: number) {
        const httpParams = new HttpParams().set('languageId', languageId.toString());
        return this.httpService.httpGet(httpParams, (this.API_URL + 'SetDefaultLabelLanguage'));
    }
}
