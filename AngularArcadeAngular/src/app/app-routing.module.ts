import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArcadeComponent } from './arcade/arcade.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'arcade', component: ArcadeComponent},
  { path: 'tictactoe', component: TictactoeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: ArcadeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
