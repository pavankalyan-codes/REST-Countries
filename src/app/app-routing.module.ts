import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'country/:id',
    component: CountryDetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
