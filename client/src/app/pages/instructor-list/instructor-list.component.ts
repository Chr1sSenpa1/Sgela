import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { InstructorService } from '../../services/instructor.service';
// Import Models
import { Instructor } from '../../domain/sgela_db/instructor';

// START - USED SERVICES
/**
* InstructorService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* InstructorService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Instructor
 * @class InstructorListComponent
 */
@Component({
    selector: 'app-instructor-list',
    templateUrl: './instructor-list.component.html',
    styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
    list: Instructor[];
    search: any = {};
    idSelected: string;
    constructor(
        private instructorService: InstructorService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.instructorService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Instructor to remove
     *
     * @param {string} id Id of the Instructor to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Instructor
     */
    deleteItem() {
        this.instructorService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
