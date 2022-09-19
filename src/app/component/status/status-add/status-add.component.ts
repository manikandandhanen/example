import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from '../shared/status.model';
import { StatusService } from '../shared/status.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-status-add',
  templateUrl: './status-add.component.html',
  styleUrls: ['./status-add.component.css']
})
export class StatusAddComponent implements OnInit {
  form!: FormGroup;
  myForm: Status = new Status();

  constructor(private statusService: StatusService,
    private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      statusCode: this.formBuilder.control ('', Validators.required),
      status: this.formBuilder.control ('', Validators.required),
    }, {updateOn: 'change' });
  }
  submitForm(){
    if(this.form.get('statusCode').value ==''){
  
      return true;   
    }
    else
    {
      this.myForm.createdOn = this.myForm.modifiedOn = new Date();
      this.statusService.addStatus(this.myForm)
      .subscribe({
        next: (data) =>{
          this.router.navigate(['/status']);
        },
      });
      console.log(this.form.value)
      return true;
    }
    }
  back(){
    this.router.navigate(['/status']);
   }
}

