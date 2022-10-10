import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertContactComponent } from './components/insert-contact/insert-contact.component';

const routes: Routes = [
  {
    path : 'page',
    component:InsertContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
