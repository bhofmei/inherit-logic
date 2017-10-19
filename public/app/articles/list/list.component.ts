import { Component } from '@angular/core';

import { ArticleService } from '../article.service';

@Component({
    selector: 'list',
    templateUrl: 'app/articles/list/list.template.html'
})
export class ListComponent {
    articles: any;
    errorMessage: string;

    constructor(private _articleService: ArticleService) { }

    ngOnInit() {
        this._articleService.list().subscribe(articles => this.articles = articles);
    }
}
