import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientsDataComponent} from './patients-data/patients-data.component';
import {EditDetailsComponent} from './edit-details/edit-details.component';


const routes: Routes = [
  { path: '', component: PatientsDataComponent,
  children: [ { path: 'editDetails/:id', component: EditDetailsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MidPanelRoutingModule { }
