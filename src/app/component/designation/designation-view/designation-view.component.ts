import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from '../shared/designation.model';
import { DesignationService } from '../shared/designation.service';
@Component({
  selector: 'app-designation-view',
  templateUrl: './designation-view.component.html',
  styleUrls: ['./designation-view.component.css']
})
export class DesignationViewComponent implements OnInit {
  id: string;
  designations: Designation;
  constructor(private route: ActivatedRoute, private designationService: DesignationService, private router: Router) { }

  ngOnInit(): void {

    this.designations = new Designation();
    this.id = this.route.snapshot.params['id'];

<<<<<<< HEAD
    this.designationService.getDesignationDetails(this.id)
=======
    this.designationService.getDetails(this.id)
>>>>>>> 0b374fea9a8bcce8e53828033ad8204effe8be1d
    .subscribe(data => {
      this.designations = data;
    }, error => console.log(error));
  }
<<<<<<< HEAD
  designationDetails(id: string){
    this.router.navigate(['designation/designation-view', id])
   }
   list(){
    this.router.navigate(['/designation']);
=======
  departmentDetails(id: string){
    this.router.navigate(['department/department-view', id])
   }
   list(){
    this.router.navigate(['/department']);
>>>>>>> 0b374fea9a8bcce8e53828033ad8204effe8be1d
   }
  }