import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';


const routes: Routes = [
  { path: '', component: MainComponent,
    children: [ { path: 'patients', loadChildren: () => import ('./mid-panel/mid-panel.module').then(m => m.MidPanelModule) } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
