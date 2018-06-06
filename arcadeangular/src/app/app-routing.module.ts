import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArcadeComponent } from './arcade/arcade.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'arcade', component: ArcadeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', component: ArcadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
