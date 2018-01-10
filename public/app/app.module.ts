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
import { CourseService } from './admin/course/course.service';
import { ScenarioResolver } from './scenario/scenario.resolver';

import { AdminModule } from './admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ArticleModule } from './articles/article.module';
import { HelpModule } from './help/help.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { ScenarioModule } from './scenario/scenario.module';

import { NavComponent } from './nav/nav.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
      HomeModule,
      HelpModule,
      AdminModule,
      ProfileModule,
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
export class AppModule { }
