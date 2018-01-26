import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ArticleService } from '../article.service';

@Component({
    selector: 'view',
    templateUrl: 'app/articles/view/view.template.html',
})
export class ViewComponent {
    user: any;
    article: any;
    routingObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;

    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _articleService: ArticleService) { }

    ngOnInit() {
        this.user = this._authenticationService.getUser();

        this.routingObserver = this._route.params.subscribe(params => {
            let articleId = params['articleId'];

            this._articleService
                .read(articleId)
                .subscribe(
                article => {
                    this.article = article;
                    this.allowEdit = (this.user && this.user._id === this.article.creator._id);
                },
                error => this._router.navigate(['/articles'])
                );
        });
    }

    ngOnDestroy() {
        this.routingObserver.unsubscribe();
    }

    delete() {
        this._articleService.delete(this.article._id).subscribe(deletedArticle => this._router.navigate(['/articles']),
            error => this.errorMessage = error);
    }
}
