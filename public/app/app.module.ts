import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { McBreadcrumbsConfig } from 'ngx-breadcrumbs';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { SharedModule } from './shared/shared.module';

//import { HomeModule } from './home/home.module';
import { AuthenticationService } from './authentication/authentication.service';
import { ScenarioService } from './scenario/scenario.service';
import { CourseService } from './admin/course/course.service';
import { ScenarioResolver } from './scenario/scenario.resolver';

import { AdminModule } from './admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ArticleModule } from './articles/article.module';
import { HelpModule } from './help/help.module';
import { HomeModule } from './home/home.module';
//import { ProfileModule } from './profile/profile.module';
import { ScenarioModule } from './scenario/scenario.module';

import { NavComponent } from './nav/nav.component';

@NgModule({
    imports: [
        BrowserModule,
      SharedModule,
        HttpClientModule,
      HomeModule,
      HelpModule,
      AdminModule,
      //ProfileModule,
        AuthenticationModule,
        ArticleModule,
      ScenarioModule,
      RouterModule.forRoot(AppRoutes)
    ],
    declarations: [
        AppComponent,
        NavComponent
    ],
    providers: [
        AuthenticationService,
        ScenarioService,
      CourseService,
    ScenarioResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
constructor(breadcrumbsConfig: McBreadcrumbsConfig) {

    breadcrumbsConfig.postProcess = (x) => {

      // Ensure that the first breadcrumb always points to home

      let y = x;

      if(x.length && x[0].text !== 'Home') {
        y = [
          {
            text: 'Home',
            path: ''
          }
        ].concat(x);
      }

      return y;
    };
  }
}
