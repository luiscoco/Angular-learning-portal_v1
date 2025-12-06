import { Injectable } from '@angular/core';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Course {
  id: string;
  title: string;
  tagLine: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
  estimatedWeeks: number;
  description: string;
  topics: string[];
  lessons: Lesson[];
}

const COURSES: Course[] = [
  {
    id: 'angular-essentials',
    title: 'Angular Essentials',
    tagLine: 'From components to dependency injection',
    level: 'beginner',
    estimatedWeeks: 4,
    description:
      'Build a solid foundation: TypeScript basics, components, templates, data-binding, services and dependency injection.',
    topics: [
      'TypeScript refresher',
      'Creating components',
      'One-way and two-way binding',
      'Services and dependency injection',
      'Input & Output communication',
      'Basic routing'
    ],
    lessons: [
      { id: 'intro', title: 'Course overview & goals', duration: '10 min', level: 'beginner' },
      { id: 'workspace', title: 'Setting up your Angular workspace', duration: '25 min', level: 'beginner' },
      { id: 'components-101', title: 'Thinking in components', duration: '35 min', level: 'beginner' }
    ]
  },
  {
    id: 'router-deep-dive',
    title: 'Router Deep Dive',
    tagLine: 'Navigation, route data and guards',
    level: 'intermediate',
    estimatedWeeks: 3,
    description:
      'Master Angular Router: nested routes, route parameters, guards, lazy loading and UX patterns for navigation.',
    topics: [
      'Router basics and configuration',
      'Route parameters and query params',
      'Child routes and layout routes',
      'Route guards and auth flows',
      'Lazy loading and performance'
    ],
    lessons: [
      { id: 'router-basics', title: 'Router basics', duration: '30 min', level: 'intermediate' },
      { id: 'params', title: 'Route parameters in practice', duration: '30 min', level: 'intermediate' }
    ]
  },
  {
    id: 'state-management',
    title: 'State Management in Angular',
    tagLine: 'From services to signals & stores',
    level: 'advanced',
    estimatedWeeks: 4,
    description:
      'Explore different approaches for managing complex UI state: services, RxJS and signals-based patterns.',
    topics: [
      'Smart vs presentational components',
      'Service-based state',
      'Signals & computed values',
      'Async data and RxJS streams'
    ],
    lessons: [
      { id: 'state-intro', title: 'Why state management matters', duration: '20 min', level: 'advanced' }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourses(): Course[] {
    return COURSES;
  }

  getCourseById(id: string): Course | undefined {
    return COURSES.find(c => c.id === id);
  }

  getLesson(courseId: string, lessonId: string): { course: Course; lesson: Lesson } | undefined {
    const course = this.getCourseById(courseId);
    if (!course) {
      return undefined;
    }
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson) {
      return undefined;
    }
    return { course, lesson };
  }
}
