import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

//import { HomeModule } from './home/home.module';
import { AuthenticationService } from './authentication/authentication.service';
import { ScenarioService } from './scenario/scenario.service';

import { AuthenticationModule } from './authentication/authentication.module';
import { ArticleModule } from './articles/article.module';
import { ScenarioModule } from './scenario/scenario.module';
import { AdminModule } from './admin/admin.module';
import { NavComponent } from './nav/nav.component';
import { LocationModule } from './scenario/location/location.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
      AdminModule,
        AuthenticationModule,
        ArticleModule,
      ScenarioModule,
      LocationModule,
      //  RouterModule.forRoot(AppRoutes,{ enableTracing: true }),
      RouterModule.forRoot(AppRoutes),
      //DndModule.forRoot()
    ],
    declarations: [
        AppComponent,
        NavComponent
    ],
    providers: [
        AuthenticationService,
        ScenarioService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
