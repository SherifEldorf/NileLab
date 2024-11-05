import { NgModule } from '@angular/core';
import { AdminLoginRoutingModule } from './adminLogin-routing.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoginModule } from 'src/app/shared/module/login/login.module';
import { AdminLoginComponent } from './components/adminLogin/AdminLogin.component';
import { CustomLabelService } from 'src/app/shared/service/customLabel.service';

@NgModule(
    {
        declarations: [
            AdminLoginComponent
        ],
        imports: [
            AdminLoginRoutingModule,
            LoginModule,
            TranslateModule
        ],
        providers: [CustomLabelService,TranslateService]
    }
)

export class AdminLoginModule {

}
