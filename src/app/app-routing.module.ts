import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsergioComponent } from './layouts/layoutsergio/layoutsergio.component';


const routes: Routes = [
  
  {path:'', redirectTo:'sergio', pathMatch:"full"},
  {
    path:'',
  component:LayoutsergioComponent,
  children:[ 
    {
      path: 'sergio', loadChildren: () => import('./sergio/sergio.module').then(m => m.SergioModule) 
    }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
