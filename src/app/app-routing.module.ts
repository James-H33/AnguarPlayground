import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'lazy',
    loadComponent: () => import('./lazy-container/lazy-container.component').then(m => m.LazyContainerComponent)
  },

  {
    path: 'date',
    loadComponent: () => import('./date-container/date-container.component').then(m => m.DateContainerComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
