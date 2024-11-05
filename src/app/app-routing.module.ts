import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
     loadChildren: () => import('./modules/autoWrap/autoWrap.module').then(m => m.autoWrapModule)
    },
     
   
    
  //   {
  //     path: 'adminLogin',
  //     loadChildren: () => import('./modules/adminLogin/adminLogin.module').then(m => m.AdminLoginModule)
  // },
  //   {
  //     path: 'Login/adminLogin',
  //     loadChildren: () => import('./modules/adminLogin/adminLogin.module').then(m => m.AdminLoginModule)
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
