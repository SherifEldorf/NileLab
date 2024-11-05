import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  imports: [FormsModule, CommonModule, TranslateModule],
  providers:[TranslateService],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {

}
