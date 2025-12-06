import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';

import { HomeComponent } from './features/home/home.component';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { CourseDetailComponent } from './features/courses/course-detail/course-detail.component';
import { LessonViewerComponent } from './features/lessons/lesson-viewer/lesson-viewer.component';
import { AboutComponent } from './features/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CoursesListComponent,
    CourseDetailComponent,
    LessonViewerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
