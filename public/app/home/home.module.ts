import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { NavComponent } from '../nav/nav.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(HomeRoutes),
  ],
  declarations: [
    HomeComponent,
    NavComponent
  ]
})
export class HomeModule {}
