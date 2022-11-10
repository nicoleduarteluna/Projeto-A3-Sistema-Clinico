import { DadosComponent } from './pages/dados/dados.component';
import { ExamesComponent } from './pages/exames/exames.component';
import { LoginComponent } from './login/login.component';
import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './core/auth/auth.guard';
import { ConfigurarComponent } from './pages/configurar/configurar.component';
import { RealizarLaudoComponent } from './pages/realizar-laudo/realizar-laudo.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'configurar', component: ConfigurarComponent, canActivate:[AuthGuard] },
  { path: 'exames', component: ExamesComponent, canActivate:[AuthGuard] },
  { path: 'dados', component: DadosComponent, canActivate:[AuthGuard] },
  { path: 'realizar-laudo', component: RealizarLaudoComponent, canActivate:[AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
