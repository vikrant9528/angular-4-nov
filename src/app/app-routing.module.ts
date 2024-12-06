import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowdataComponent } from './showdata/showdata.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  { path: 'showdata', component: ShowdataComponent },
  { path:'edit',component:EditComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
}
