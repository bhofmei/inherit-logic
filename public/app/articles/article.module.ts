import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ArticleRoutes } from './article.routes';
import { ArticleComponent } from './article.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

import { ArticleService } from './article.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ArticleRoutes)
  ],
  declarations: [
    ArticleComponent,
    CreateComponent,
    ListComponent,
    ViewComponent,
    EditComponent
  ]
})
export class ArticleModule{}
