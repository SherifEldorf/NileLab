import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { logOut } from '../helper/helper';
import { LoaderService } from '../service/loader.service';
import { SessionService } from '../service/session-service';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  constructor(
    private loaderService: LoaderService,
    private toastr: ToastrService,
    private sessionService: SessionService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleException(error);
        return throwError(error);
      })
    );
  }

  handleException(error: HttpErrorResponse) {
    this.loaderService.hide();
    console.log(error);
    switch (error.status) {
      case 401: {
        this.toastr.error(error.statusText);
        logOut(this.sessionService);
        break;
      }
      case 404: {
        this.toastr.error(error.statusText);
        break;
      }
      case 500: {
        this.toastr.error(error.error);
        break;
      }
      default: {
        return throwError(error);
      }
    }
  }
}
