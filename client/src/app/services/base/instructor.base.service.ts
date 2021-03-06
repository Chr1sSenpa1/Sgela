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
 *  FOR CUSTOMIZE instructorBaseService PLEASE EDIT ../instructor.service.ts
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
import { Instructor } from '../../domain/sgela_db/instructor';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Instructor.service.ts
 */

/*
 * SCHEMA DB Instructor
 *
	{
		Name: {
			type: 'String',
			required : true
		},
		Surname: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_courses: [{
			type: Schema.ObjectId,
			ref : "Instructor"
		}],
		_instructor: {
			type: Schema.ObjectId,
			ref : "Course"
		},
	}
 *
 */
@Injectable()
export class InstructorBaseService {

    contextUrl: string = environment.endpoint + '/instructor';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * InstructorService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Instructor): Observable<Instructor> {
        return this.http
            .post<Instructor>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * InstructorService.delete
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
    * InstructorService.findBy_courses
    *   @description CRUD ACTION findBy_courses
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_courses(id: string): Observable<Instructor[]> {
        return this.http
            .get<Instructor[]>(this.contextUrl + '/findBy_courses/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * InstructorService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Instructor> {
        return this.http
            .get<Instructor>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * InstructorService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Instructor[]> {
        return this.http
            .get<Instructor[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * InstructorService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Instructor): Observable<Instructor> {
        return this.http
            .post<Instructor>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
