// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import { InstructorService } from '../../services/instructor.service';
// Import Models
import { Course } from '../../domain/sgela_db/course';
import { Instructor } from '../../domain/sgela_db/instructor';
import { Student } from '../../domain/sgela_db/student';

// START - USED SERVICES
/**
* CourseService.create
*	@description CRUD ACTION create
*
* CourseService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* CourseService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* StudentService.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key Id of model to search for
*
* InstructorService.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key Id of model to search for
*
* InstructorService.list
*	@description CRUD ACTION list
*
* StudentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Course
 */
@Component({
    selector: 'app-course-edit',
    templateUrl: 'course-edit.component.html',
    styleUrls: ['course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
    item: Course;
    list_instructor: Instructor[];
    list_student: Student[];
    externalInstructor__courses: Instructor[];
    externalStudent__courses: Student[];
    model: Course;
    formValid: Boolean;

    constructor(
    private courseService: CourseService,
    private studentService: StudentService,
    private instructorService: InstructorService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Course();
        this.externalInstructor__courses = [];
        this.externalStudent__courses = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.courseService.get(id).subscribe(item => this.item = item);
                this.instructorService.findBy_courses(id).subscribe(list => this.externalInstructor__courses = list);
                this.studentService.findBy_courses(id).subscribe(list => this.externalStudent__courses = list);
            }
            // Get relations
            this.instructorService.list().subscribe(list => this.list_instructor = list);
            this.studentService.list().subscribe(list => this.list_student = list);
        });
    }


    /**
     * Save Course
     *
     * @param {boolean} formValid Form validity check
     * @param Course item Course to save
     */
    save(formValid: boolean, item: Course): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.courseService.update(item).subscribe(data => this.goBack());
            } else {
                this.courseService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



