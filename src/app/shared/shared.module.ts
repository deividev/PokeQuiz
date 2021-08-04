import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './ui-kit/icons/icons.component';
import { AppModule } from '../app.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    IconsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconsComponent],
})
export class SharedModule { }
