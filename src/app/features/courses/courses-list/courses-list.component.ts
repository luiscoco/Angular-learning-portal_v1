import { Component } from '@angular/core';
import { Course, CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  courses: Course[] = [];
  levelFilter: 'all' | 'beginner' | 'intermediate' | 'advanced' = 'all';
  searchTerm = '';

  constructor(private readonly courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }

  get filteredCourses(): Course[] {
    return this.courses.filter(course => {
      const matchesLevel =
        this.levelFilter === 'all' || course.level === this.levelFilter;
      const term = this.searchTerm.trim().toLowerCase();
      const matchesSearch =
        !term ||
        course.title.toLowerCase().includes(term) ||
        course.description.toLowerCase().includes(term);
      return matchesLevel && matchesSearch;
    });
  }
}
