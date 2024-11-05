import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AlertService } from '../../shared/service/alert-service';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from '../../shared/service/user-service';
import { LanguageService } from '../../shared/service/language.service';
import { HeaderComponent } from './components/header/header.component';
import { CustomLabelService } from 'src/app/shared/service/customLabel.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoaderComponent],
  imports: [FormsModule, DropDownsModule, CommonModule, TranslateModule],
  providers: [AlertService, UserService, LanguageService, CustomLabelService],
  exports: [FooterComponent, HeaderComponent, LoaderComponent],
})
export class CommonComponents {}
