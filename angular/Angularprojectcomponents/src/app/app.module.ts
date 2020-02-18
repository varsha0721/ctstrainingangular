import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';
import { ParentchildbindingComponent } from './parentchildbinding/parentchildbinding.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipesComponent } from './custompipes/custompipes.component';
import {TitlePipe} from './title.pipe'
import { from } from 'rxjs';
import { ClipipePipe } from './clipipe.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TwowaydatabindingComponent,
    ParentchildbindingComponent,
    PipesComponent,
    CustompipesComponent,
    TitlePipe,
    ClipipePipe,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TwowaydatabindingComponent]
})
export class AppModule { }
