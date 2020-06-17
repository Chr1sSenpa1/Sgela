// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { InstructorService } from '../../services/instructor.service';
import { CourseService } from '../../services/course.service';
// Import Models
import { Instructor } from '../../domain/sgela_db/instructor';
import { Course } from '../../domain/sgela_db/course';

// START - USED SERVICES
/**
* InstructorService.create
*	@description CRUD ACTION create
*
* InstructorService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* InstructorService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* CourseService.list
*	@description CRUD ACTION list
*
* CourseService.findBy_instructor
*	@description CRUD ACTION findBy_instructor
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Instructor
 */
@Component({
    selector: 'app-instructor-edit',
    templateUrl: 'instructor-edit.component.html',
    styleUrls: ['instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {
    item: Instructor;
    list_courses: Course[];
    externalCourse__instructor: Course[];
    model: Instructor;
    formValid: Boolean;

    constructor(
    private instructorService: InstructorService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Instructor();
        this.externalCourse__instructor = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.instructorService.get(id).subscribe(item => this.item = item);
                this.courseService.findBy_instructor(id).subscribe(list => this.externalCourse__instructor = list);
            }
            // Get relations
            this.courseService.list().subscribe(list => this.list_courses = list);
        });
    }

    /**
     * Check if an Course is in  _courses
     *
     * @param {string} id Id of Course to search
     * @returns {boolean} True if it is found
     */
    containCourse(id: string): boolean {
        if (!this.item._courses) return false;
        return this.item._courses.indexOf(id) !== -1;
    }

    /**
     * Add Course from Instructor
     *
     * @param {string} id Id of Course to add in this.item._courses array
     */
    addCourse(id: string) {
        if (!this.item._courses)
            this.item._courses = [];
        this.item._courses.push(id);
    }

    /**
     * Remove an Course from a Instructor
     *
     * @param {number} index Index of Course in this.item._courses array
     */
    removeCourse(index: number) {
        this.item._courses.splice(index, 1);
    }

    /**
     * Save Instructor
     *
     * @param {boolean} formValid Form validity check
     * @param Instructor item Instructor to save
     */
    save(formValid: boolean, item: Instructor): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.instructorService.update(item).subscribe(data => this.goBack());
            } else {
                this.instructorService.create(item).subscribe(data => this.goBack());
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



