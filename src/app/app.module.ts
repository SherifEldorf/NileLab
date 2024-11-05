import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedValueService } from './shared/service/shared-value-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { setConfig } from './shared/helper/methodsHelper';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpService } from './shared/service/http-service';

////////////////////////////
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SessionService } from './shared/service/session-service';
import { EncryptionDecryptionService } from './shared/service/encypt-decrypt-service';
import { CommonComponents } from './modules/common-components/common-components.module';
import { Interceptoers } from './shared/interceptors/index.interceptor';
import { LoaderService } from './shared/service/loader.service';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './shared/helper/LowerCaseUrlSerializer';
///////////////////////////////

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropDownsModule,
    HttpClientModule,
    CommonComponents,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      maxOpened: 1,
      closeButton: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    SharedValueService,
    HttpClient,
    HttpService,
    Interceptoers,
    SessionService,
    TranslateService,
    LoaderService,
    EncryptionDecryptionService,
    {
      provide: APP_INITIALIZER,
      useFactory: setConfig,
      multi: true,
      deps: [HttpClient, SharedValueService],
    },
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
  },
  ],
  exports: [TranslateModule, CommonComponents],
  bootstrap: [AppComponent],
})
export class AppModule {}


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
