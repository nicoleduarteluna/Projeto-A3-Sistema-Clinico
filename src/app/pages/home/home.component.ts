import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  PoMenuItem,
  PoSelectOption,
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  menuItemSelected: string = 'Home';
  usuarioLogado: any;
  labelConteudo: string = 'Conteúdo';
  filtro: string = 'nome';

  filtroOptions: Array<PoSelectOption> = [
    { label: 'Código do Paciente', value: 'id' },
    { label: 'Nome do Paciente', value: 'nome' },
    { label: 'Data de Nascimento', value: 'dataNascimento' },
    { label: 'CPF do Paciente', value: 'cpf' },
    { label: 'Nome do Exame', value: 'nomeExame' },
    { label: 'Data do Exame', value: 'dataExecucao' },
  ];

  conteudoFiltro: string = '';

  columnsExame: PoTableColumn[] = [
    { label: 'Status', property: 'statusLaudo' },
    { label: 'Exame', property: 'nomeExame', width: '18%' },
    { label: 'Dt. Exame', property: 'dataExecucao' },
    { label: 'Cód. Paciente', property: 'id' },
    { label: 'Nome', property: 'nome', width: '15%' },
    { label: 'Dt. Nascimento', property: 'dataNascimento' },
    { label: 'CPF Paciente', property: 'cpf' },
  ];

  exames: any[] = [];
  beneficiarios: any[] = [];

  // actions: PoTableAction[] = [
  //   {
  //     label: 'Abrir'
  //   },
  // ];

  rowSelected: any;

  constructor(private router: Router, private homeService: HomeService) {
    const nav = this.router.getCurrentNavigation().extras.state;
    this.usuarioLogado = nav.usuarioLogado;
  }

  ngOnInit(): void {
    this.getExames(false);
  }

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  getExames(filtrar) {
    this.homeService.getExames().subscribe((dados: any) => {
      dados.forEach((beneficiario) => {
        beneficiario.exames.forEach((exame) => {
          exame = {
            ...exame,
            nome: beneficiario.nome,
            dataNascimento: beneficiario.dataNascimento,
            cpf: beneficiario.cpf,
            id: beneficiario.id,
          };
          if (!filtrar) {
            this.exames.push(exame);
          } else {
            console.log('teste', exame[`${this.filtro}`]);
            console.log('exameeeee', exame);
            if (exame[`${this.filtro}`] == this.conteudoFiltro) {
              this.exames.push(exame);
            }
          }
        });
      });
    });
  }

  changeFilter(filtro) {
    console.log('filtro', filtro);
    this.filtro = filtro;
  }

  filtrarItens(conteudo) {
    this.exames = [];
    console.log('conteudo:', conteudo);
    this.getExames(true);
  }

  teste(row) {
    console.log('row', row);
    this.rowSelected = {
      id: row.id,
      nome: row.nome,
      dataNascimento: row.dataNascimento,
      cpf: row.cpf,
      nomeExame: row.nomeExame,
      dataExecucao: row.dataExecucao,
      statusLaudo: row.statusLaudo,
    };
    console.log('this.rowSelected', this.rowSelected);
  }

  realizarLaudo() {
    this.router.navigate(['/realizar-laudo'], { state: { exame: this.rowSelected }});
  }
}
