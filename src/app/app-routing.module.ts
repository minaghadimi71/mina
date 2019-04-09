import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MemberComponent} from './user/member/member.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path: 'users', component: UserComponent},
  {path: 'member/:id', component: MemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
