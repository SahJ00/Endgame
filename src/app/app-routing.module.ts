import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveComponent } from './components/live/live.component';
import { DeadComponent } from './components/dead/dead.component';

const routes: Routes = [
  {path: '', component:LiveComponent},
  {path: 'dead', component:DeadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
