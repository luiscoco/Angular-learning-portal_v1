import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, CourseService, Lesson } from '../../../core/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  course: Course | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly courseService: CourseService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.course = this.courseService.getCourseById(id);
    }
  }

  openLesson(lesson: Lesson) {
    if (!this.course) return;
    this.router.navigate(['/courses', this.course.id, 'lessons', lesson.id]);
  }
}
