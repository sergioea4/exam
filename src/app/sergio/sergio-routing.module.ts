import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SergioComponent } from './sergio.component';

const routes: Routes = [{ path: '', component: SergioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SergioRoutingModule { }
