import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CricketRoutes } from './cricket.routes';
import { CricketComponent } from './cricket.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(CricketRoutes),
    ],
    declarations: [
        CricketComponent,
    ]
})
export class CricketModule { }
