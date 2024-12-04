import { Component, OnInit } from '@angular/core';
import {FormArray , FormGroup , Validators , FormControl , FormBuilder} from '@angular/forms'
import {UserserviceService} from '../app/services/userservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-4-dec';

  myform:FormGroup;

  constructor(private _user:UserserviceService) {}

  ngOnInit(): void {
    this.myform = new FormGroup({
       name: new FormControl('',Validators.required),
       email:new FormControl('',Validators.required),
       number:new FormControl('',Validators.required),
       package:new FormControl('',Validators.required),
       courses:new FormControl('',Validators.required),
    })
  }
  

  onSubmit(){
    if(this.myform.valid){
      console.log(this.myform.value);
      this._user.addEmployee(this.myform.value).subscribe({
        next:(val:any)=>{
          alert('user added successfully');
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
    }else{
      console.log('validation is required');
    }
  }


}
