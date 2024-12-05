import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { ShowdataComponent } from './showdata/showdata.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import {AboutComponent} from './about/about.component'
@NgModule({
  declarations: [
    AppComponent,
    ShowdataComponent,
    EditComponentComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
