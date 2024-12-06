import { Component, OnInit } from '@angular/core';
import {FormArray , FormGroup , Validators , FormControl , FormBuilder} from '@angular/forms'
import {UserserviceService} from '../services/userservice.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myform:FormGroup;

  constructor(private _user:UserserviceService) {}

  ngOnInit(): void {
    this.myform = new FormGroup({
       name: new FormControl('',Validators.required),
       email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
       number:new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10}$')])),
       package:new FormControl('',Validators.required),
       courses:new FormControl('',Validators.required),
    })
  }
  

  onSubmit(){
    if(this.myform.valid){
      console.log(this.myform.value);
      this._user.addUser(this.myform.value).subscribe(res=>{
        alert('data added successfully');
        console.log(res);
      })
    }else{
      console.log('validation is required');
    }
  }
}


   // next:(val:any)=>{
        //   alert('user added successfully');
        // },
        // error:(err:any)=>{
        //   console.log(err);
        // }
