import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommitsView} from './components/commits.view';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'commits/yanxch',
    pathMatch: 'full'
  },
  {
    path: 'commits/:username',
    component: CommitsView
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
