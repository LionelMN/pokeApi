import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavbarComponent, SpinnerComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    SpinnerComponent
  ]
})
export class ComponentsModule { }
