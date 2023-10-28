import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepComponent } from './add-dep/add-dep.component';
import { ListDepComponent } from './list-dep/list-dep.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'add', component: AddDepComponent },
  { path: 'list', component: ListDepComponent },
  { path: 'login', component: LoginComponent },
  {path:'',redirectTo:'/login',pathMatch:'full'},//si le path 'login' est demandé
  { path: '**', component: NotFoundComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
