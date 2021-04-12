import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {AddSongComponent} from './add-song/add-song.component';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: PlaylistComponent},
  {path: 'addsong', component: AddSongComponent},
  {path: ':id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
