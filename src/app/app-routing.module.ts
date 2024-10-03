import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentregComponent } from './studentreg/studentreg.component';

const routes: Routes = [
  { path: '', component: StudentregComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
