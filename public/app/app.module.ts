import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { McBreadcrumbsConfig } from 'ngx-breadcrumbs';

import { AppRoutes } from './app.routes';

import { AuthenticationService } from './authentication/authentication.service';
import { LoggedInGuard } from './authentication/logged-in.guard.service';
import { ScenarioService } from './scenario/scenario.service';
import { CourseService } from './admin/course/course.service';
import { ScenarioResolver } from './scenario/scenario.resolver';

import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HelpModule } from './help/help.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { ScenarioModule } from './scenario/scenario.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

/**
 * The main bootstrapped module
 */
@NgModule({
    imports: [
        BrowserModule,
      SharedModule,
        HttpClientModule,
      //HomeModule,
      HelpModule,
      AdminModule,
      ProfileModule,
        AuthenticationModule,
        //ArticleModule,
      ScenarioModule,
      RouterModule.forRoot(AppRoutes)
    ],
    declarations: [
        AppComponent,
        NavComponent,
      HomeComponent,
      PageNotFoundComponent
    ],
    providers: [
      AuthenticationService,
      LoggedInGuard,
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
