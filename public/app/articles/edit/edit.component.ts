import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ArticleService } from '../article.service';


@Component({
  selector: 'edit',
  templateUrl: 'app/articles/edit/edit.template.html'
})
export class EditComponent {
	article: any = {};
	errorMessage: string;
	paramsObserver: any;

	constructor(private _router:Router,
				private _route: ActivatedRoute,
				private _articleService: ArticleService) {}

	ngOnInit() {
		this.paramsObserver = this._route.params.subscribe(params => {
			let articleId = params['articleId'];

			this._articleService.read(articleId).subscribe(article => {
																this.article = article;
													 		},
															error => this._router.navigate(['/articles']));
		});
	}

	ngOnDestroy() {
		this.paramsObserver.unsubscribe();
	}

	update() {
		this._articleService.update(this.article).subscribe(savedArticle => this._router.navigate(['/articles', savedArticle._id]),
							 				  				 error =>  this.errorMessage = error);
	}
}
