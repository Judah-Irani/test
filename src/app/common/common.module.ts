import { NgModule } from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {PageErrorComponent} from './page-error/page-error.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, PageErrorComponent],
  imports: [
  ]
})
export class CommonModule { }
