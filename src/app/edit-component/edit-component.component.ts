import { Component, OnInit } from '@angular/core';
import {FormArray , FormGroup , Validators , FormControl , FormBuilder} from '@angular/forms'
import {UserserviceService} from '../services/userservice.service'
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {


  myform:FormGroup;
  itemId:any;
  data:any[] = [];


  constructor(private _user:UserserviceService,private _route:ActivatedRoute) {}

  ngOnInit(): void {
    this.myform = new FormGroup({
       name: new FormControl('',Validators.required),
       email:new FormControl('',Validators.required),
       number:new FormControl('',Validators.required),
       package:new FormControl('',Validators.required),
       courses:new FormControl('',Validators.required),
    })
    this.itemId = this._route.snapshot.paramMap.get('id');
    console.log(this.itemId);
    this.getdata();
  }


  getdata(){
  this._user.getuser().subscribe(res=>{
    this.data=res[this.itemId];
    console.log(this.data,'data array');
    // this.myform.setValue = this.data[this.itemId]
    this.setFormField();
  })
}

setFormField(){
  if(this.data){
    this.myform.patchValue(this.data)
  }else{
    console.log('we cant find data');
  }
}


  onSubmit(){
    if(this.myform.valid){
      console.log(this.myform.value);
        this._user.editUser(this.itemId,this.myform.value).subscribe(res=>{
          console.log(res);
        })
    }else{
      console.log('validation is required');
    }
  }

}
