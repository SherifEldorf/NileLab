import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedValueService } from '../service/shared-value-service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  urls = ['config', 'assets'];
  constructor(private sharedValueService: SharedValueService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.urls.some((method) => req.url.indexOf(method) > -1)) {
      const newReq = req.clone({
        headers: new HttpHeaders({
          'Client-Id': this.sharedValueService.configuration.clientId,
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'q=0.8;application/json;q=0.9',
        }),
      });
      return next.handle(newReq);
    }

    return next.handle(req);
  }
}
