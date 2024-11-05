import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { home_AutowrapComponent } from './components/Home_Autowrap/home_Autowrap.component';
import { productsComponent } from './components/Products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { gallaryComponent } from './components/Gallary/gallary.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  {
    path: '',
    component: home_AutowrapComponent,
  
  },{
    path: 'products',
    component: productsComponent,
  },{
    path: 'services',
    component: ServicesComponent,
  }
  ,{
    path :'contact',
    component:ContactComponent
  },{
    path :'gallary',
    component:gallaryComponent
  }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class autoWrapRoutingModule {}
