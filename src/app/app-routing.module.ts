import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { CourseDetailComponent } from './features/courses/course-detail/course-detail.component';
import { LessonViewerComponent } from './features/lessons/lesson-viewer/lesson-viewer.component';
import { AboutComponent } from './features/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'courses/:courseId/lessons/:lessonId', component: LessonViewerComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
