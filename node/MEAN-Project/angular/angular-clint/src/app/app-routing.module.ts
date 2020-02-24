import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './components/delete/delete.component';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';
import { CreateComponent } from './components/create/create.component';


const routes: Routes = [
  { path: '', component: ListComponent},
  { path:'create', component: CreateComponent},
  { path:'delete', component: DeleteComponent },
  { path:'edit', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
