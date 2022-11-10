import { DadosModule } from './pages/dados/dados.module';
import { ExamesModule } from './pages/exames/exames.module';
import { ConfigurarModule } from './pages/configurar/configurar.modules';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule, PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './pages/home/home.module';
import { MenuModule } from './core/auth/menu/menu.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './core/auth/auth.guard';
import { NgModule } from '@angular/core';
import { RpsConfigModule } from './pages/configurar/rps/rps.module';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
import { HttpClientModule } from '@angular/common/http';
import { RealizarLaudoComponent } from './pages/realizar-laudo/realizar-laudo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RealizarLaudoComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule,
    LoginModule,
    HomeModule,
    PoPageDynamicSearchModule,
    ConfigurarModule,
    MenuModule,
    RpsConfigModule,
    PoCodeEditorModule,
    HttpClientModule,
    ExamesModule,
    DadosModule

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
