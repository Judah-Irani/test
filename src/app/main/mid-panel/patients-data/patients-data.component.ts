import { Component, OnInit } from '@angular/core';
import {Patients} from '../../../../models/patients';
import {Global} from '../../../global';
import {ConfigComponent} from '../../../config/config.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-patients-data',
  templateUrl: './patients-data.component.html',
  styleUrls: ['./patients-data.component.scss']
})
export class PatientsDataComponent implements OnInit {
  error: any;
  patientsSearch: string;
  patients: Patients [] = [];

  constructor(    public globals: Global,
                  public config: ConfigComponent) { }

  ngOnInit(): void {
    this.config.getAllPatients(this.globals.allAppointments)
      .subscribe(
        (data: any) => {
          if (data.statusMessage === 'sucessfully fetched doc patient' && data.statuscode === 1) {
            this.patients = data.data.patient_list;
          }
        },
        error => this.error = error // error path
      );
  }

  search(): any {
    if (this.patientsSearch !== '') {
      this.patients = this.patients.filter(res => {
        return res.name.toLowerCase().match(this.patientsSearch.toLowerCase());
      });
    } else {
      this.ngOnInit();
    }
  }

  details(pat: Patients): any {
    console.log(pat);
  }
}
