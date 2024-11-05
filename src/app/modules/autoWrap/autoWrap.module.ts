import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { CustomLabelService } from 'src/app/shared/service/customLabel.service';
import { home_AutowrapComponent } from './components/Home_Autowrap/home_Autowrap.component';
import { productsComponent } from './components/Products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { gallaryComponent } from './components/Gallary/gallary.component';
import { ContactComponent } from './components/contact/contact.component';
import { autoWrapRoutingModule } from './autoWrap-routing.module';

@NgModule({
  declarations: [home_AutowrapComponent,gallaryComponent, productsComponent, ServicesComponent, ContactComponent],
  imports: [autoWrapRoutingModule,
    DropDownsModule,    
    FormsModule,
    TranslateModule,
  ],
  providers: [CustomLabelService],
})
export class autoWrapModule {}
