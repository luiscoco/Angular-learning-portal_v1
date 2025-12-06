import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-lesson-viewer',
  templateUrl: './lesson-viewer.component.html',
  styleUrls: ['./lesson-viewer.component.css']
})
export class LessonViewerComponent {
  courseTitle = '';
  lessonTitle = '';
  meta = '';
  markdownSample = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly courseService: CourseService
  ) {
    const courseId = this.route.snapshot.paramMap.get('courseId');
    const lessonId = this.route.snapshot.paramMap.get('lessonId');

    if (!courseId || !lessonId) {
      return;
    }

    const result = this.courseService.getLesson(courseId, lessonId);
    if (!result) {
      return;
    }

    const { course, lesson } = result;
    this.courseTitle = course.title;
    this.lessonTitle = lesson.title;
    this.meta = `${lesson.level.toUpperCase()} · ${lesson.duration}`;

    this.markdownSample = [
      '# ' + lesson.title,
      '',
      '> Tip: Replace this placeholder with real markdown rendered from a CMS,',
      '> a JSON file, or even a GitHub README.md.',
      '',
      '```ts',
      "import { Component } from '@angular/core';",
      '',
      '@Component({',
      "  selector: 'app-hello',",
      "  template: `<h1>Hello Angular!</h1>`",
      '})',
      'export class HelloComponent {}',
      '```'
    ].join('\n');
  }

  goBackToCourse() {
    const courseId = this.route.snapshot.paramMap.get('courseId');
    if (!courseId) {
      this.router.navigate(['/courses']);
      return;
    }
    this.router.navigate(['/courses', courseId]);
  }
}
