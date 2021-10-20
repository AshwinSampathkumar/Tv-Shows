import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvengersComponent } from './pages/avengers/avengers.component';
import { DetailsComponent } from './pages/details/details.component';
import { AuthGuard } from './auth.guard'

const routes: Routes = [
  { path: '', redirectTo: 'tv-shows/avengers', pathMatch: 'full' },
  {
    path: 'tv-shows',
    children: [
      { path: 'avengers', component: AvengersComponent },
      { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard] },
    ],
  },
  {path: '**',  redirectTo: 'tv-shows/avengers'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
