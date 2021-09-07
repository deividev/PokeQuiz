import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './ui-kit/icons/icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListOrderComponent } from './components/list-order/list-order.component';



@NgModule({
  declarations: [
    IconsComponent,
    ListOrderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconsComponent,
    ListOrderComponent
  ],
})
export class SharedModule { }
