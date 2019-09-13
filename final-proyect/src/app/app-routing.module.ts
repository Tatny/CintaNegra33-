import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {RegistrarseComponent} from './pages/registrarse/registrarse.component';
import { HomeComponent } from './pages/home/home.component';
import {PerfilComponent} from './pages/perfil/perfil.component';


const routes: Routes =[
  {path: 'register' , component: RegistrarseComponent},
  {path: "home", component: HomeComponent},
  {path: "perfil", component: PerfilComponent},
  {path:"", component: HomeComponent}
]



@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
