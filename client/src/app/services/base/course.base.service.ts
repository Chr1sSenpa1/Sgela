/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE courseBaseService PLEASE EDIT ../course.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Course } from '../../domain/sgela_db/course';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Course.service.ts
 */

/*
 * SCHEMA DB Course
 *
	{
		Name: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_courses: [{
			type: Schema.ObjectId,
			ref : "Instructor"
		}],
		_courses: [{
			type: Schema.ObjectId,
			ref : "Student"
		}],
		_instructor: {
			type: Schema.ObjectId,
			ref : "Course"
		},
		_student: {
			type: Schema.ObjectId,
			ref : "Course"
		},
	}
 *
 */
@Injectable()
export class CourseBaseService {

    contextUrl: string = environment.endpoint + '/course';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * CourseService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Course): Observable<Course> {
        return this.http
            .post<Course>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * CourseService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * CourseService.findBy_instructor
    *   @description CRUD ACTION findBy_instructor
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_instructor(id: string): Observable<Course[]> {
        return this.http
            .get<Course[]>(this.contextUrl + '/findBy_instructor/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * CourseService.findBy_student
    *   @description CRUD ACTION findBy_student
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_student(id: string): Observable<Course[]> {
        return this.http
            .get<Course[]>(this.contextUrl + '/findBy_student/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * CourseService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Course> {
        return this.http
            .get<Course>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * CourseService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Course[]> {
        return this.http
            .get<Course[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * CourseService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Course): Observable<Course> {
        return this.http
            .post<Course>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
