import { Component } from '@angular/core';
import { Course, CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredCourses: Course[] = [];

  constructor(private readonly courseService: CourseService) {
    this.featuredCourses = this.courseService.getCourses();
  }
}
