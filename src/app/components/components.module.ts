import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [NavbarComponent, SpinnerComponent, SearchbarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    SpinnerComponent
  ]
})
export class ComponentsModule { }
