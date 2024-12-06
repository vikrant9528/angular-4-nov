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


  editform:FormGroup;
  itemId:any;
  data:any[] = [];
  formData:any[] = [];


  constructor(private _user:UserserviceService,private _route:ActivatedRoute) {
    this._route.queryParams.subscribe((data: any)=>{
      console.log(data);
      this.itemId = data.id;
      this.getdata(this.itemId);
    })
  }

  ngOnInit(): void {
    this.editform = new FormGroup({
      name: new FormControl('',Validators.required),
      email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
      number:new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10}$')])),
      package:new FormControl('',Validators.required),
      courses:new FormControl('',Validators.required),
    })
   
    console.log(this.itemId);
    
  }
//   getdata(){
//   this._user.getuser().subscribe(res=>{
//     this.data=res[this.itemId];
//     console.log(this.data,'data array');
//     // this.myform.setValue = this.data[this.itemId]
//     this.setFormField();
//   })
// }

getdata(id:any){
  this._user.getuser().subscribe(res => {
    this.data = res.find(user => user.id === id);
    console.log(res,'response data');
    console.log(this.data,'data to be edited');
    // this.data=res[id];
    // console.log(this.data, 'data array');
    if (this.data) {
      this.setFormField();
    } else {
      console.log('No data found for this itemId');
    }
  })
}
setFormField(){
  if(this.data){
    this.editform.patchValue(this.data)
  }else{
    console.log('we cant find data');
  }
}
  onSubmit(){
    if(this.editform.valid){
      console.log(this.editform.value,'edit form value');
      this.formData.push(this.editform.value);
      this.setEditData(this.itemId,this.formData);
    }else{
      console.log('form in not valid');
    }
  }
  setEditData(id:number,data:any){
      console.log(id,'id of the edit element');
      console.log(data,'data which is to be edited');
    this._user.editUser(id,data).subscribe(res=>{
      console.log(id);
      console.log(res);
      alert('data change successfully');
    })
  }

}
