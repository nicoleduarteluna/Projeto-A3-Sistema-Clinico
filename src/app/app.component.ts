import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';
import { Component, ViewChild } from '@angular/core';
import { AuthGuard } from './core/auth/auth.guard';
import { PoMenuItem, PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostraMenu: boolean = false;
  menuItemSelected: string;
  usuarioLogado: any;

  menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      action: this.updateMenu.bind(this),
      icon: 'po-icon po-icon-home',
      shortLabel: 'Home',
      link: '/home'
    },
    {
      label: 'Meus Exames',
      action: this.updateMenu.bind(this),
      icon: 'po-icon po-icon-exam',
      shortLabel: 'Exames',
      link: '/exames'
    },
    {
      label: 'Meus Dados',
      action: this.updateMenu.bind(this),
      icon: 'po-icon po-icon-archive',
      shortLabel: 'Dados',
      link: '/dados'
    },
    {
      label: 'Contato',
      action: this.updateMenu.bind(this),
      icon: 'po-icon po-icon-telephone',
      shortLabel: 'Contato',
      link: '/contato'
    },
    {
      label: 'Sair',
      action: this.openModalExit.bind(this),
      icon: 'po-icon po-icon-exit',
      shortLabel: 'Sair',
      link: '/sair'
    },
  ];

  @ViewChild('modalExit') modalExit: PoModalComponent;

  primaryAction: PoModalAction = {
    action: () => {
      this.redirectLogin();
      this.modalExit.close();
      this.mostraMenu = false;
    },
    label: 'Confirmar'
  };

  constructor( private authService: AuthService,
    private authGuard: AuthGuard,
    private router: Router ) { }

  ngOnInit(){
    this.authGuard.mostraMenuEmit.subscribe(mostra => {
      this.mostraMenu = mostra
    });

    this.authService.usuarioLogadoEmitter.subscribe(usuario => {
      console.log('this.usuarisdsdsdso', usuario)
      this.usuarioLogado = usuario;
      if(this.usuarioLogado.type == 'medico') {
        this.menus = [
          {
            label: 'Home',
            action: this.updateMenu.bind(this),
            icon: 'po-icon po-icon-home',
            shortLabel: 'Home',
            link: '/home'
          },
          {
            label: 'Sair',
            action: this.openModalExit.bind(this),
            icon: 'po-icon po-icon-exit',
            shortLabel: 'Sair',
            link: '/sair'
          },
        ];
      }
    });

  }

  updateMenu(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
    console.log(this);
    console.log('Menu ativo.');
    this.router.navigate([menu.link], { state: { menu: this.menuItemSelected } })
  }

  openModalExit() {
    this.modalExit.open();
  }

  redirectLogin() {
    this.router.navigate(['/']);
  }

}
