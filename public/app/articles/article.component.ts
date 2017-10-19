import { Component } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'articles',
  template: '<router-outlet></router-outlet>',
  providers: [ArticleService]
})
export class ArticleComponent { }
