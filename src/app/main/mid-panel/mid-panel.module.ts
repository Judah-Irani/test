import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MidPanelRoutingModule } from './mid-panel-routing.module';
import {EditDetailsComponent} from './edit-details/edit-details.component';
import {PatientsDataComponent} from './patients-data/patients-data.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    PatientsDataComponent
  ],
  exports: [
    PatientsDataComponent
  ],
  providers: [
    PatientsDataComponent
  ],
  imports: [
    CommonModule,
    MidPanelRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatInputModule,
  ]
})
export class MidPanelModule { }
