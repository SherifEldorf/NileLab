import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HandleErrorInterceptor } from './errorhandle.interceptor';
import { HeaderInterceptor } from './headers.interceptors';
import { LoaderInterceptor } from './loader.interceptors';

export const Interceptoers = [
  {
    useClass: HeaderInterceptor,
    provide: HTTP_INTERCEPTORS,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: LoaderInterceptor,
  },
  {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: HandleErrorInterceptor,
  }
];
