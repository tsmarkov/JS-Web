import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class SharedModule { }
