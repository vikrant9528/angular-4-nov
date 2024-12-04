import { Component, OnInit } from '@angular/core';
import {UserserviceService } from '../services/userservice.service'

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {
  data:any[] = [];

  constructor(private _user:UserserviceService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this._user.getuser().subscribe(res=>{
      this.data = res;
    })
  }

  deleteItem(id:number){
    this._user.deleteUser(id).subscribe(res=>{
      alert('employee deleted');
      console.log(res);
      this.getdata();
    })
  }

}
