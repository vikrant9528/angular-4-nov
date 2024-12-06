import { Component, OnInit } from '@angular/core';
import {UserserviceService } from '../services/userservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {
  data:any[] = [];

  constructor(private _user:UserserviceService,private route:Router) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this._user.getuser().subscribe(res=>{
      this.data = res;
      console.log(this.data,'data in edit component')
    })
  }
  edit(id:number){
    this.route.navigate(['/edit'], {
      queryParams: {
        id: id
      },
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
