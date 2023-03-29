import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SergioRoutingModule } from './sergio-routing.module';
import { SergioComponent } from './sergio.component';


@NgModule({
  declarations: [
    SergioComponent
  ],
  imports: [
    CommonModule,
    SergioRoutingModule
  ]
})
export class SergioModule { }
