import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Array<Course> = [];
  average: number = 11;

  constructor(private courseService: CourseService) { }

  getCourses() {
    console.log("iniciando")
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  getAverageCredits () {
    let sum = 0;
    console.log("iniciando")

    for (let index = 0; index < this.courses.length; index++) {
       sum += this.courses[index].credits;
       console.log(sum)
    }

    return sum/this.courses.length;
  }

  ngOnInit() {
    this.getCourses();
  }

}
