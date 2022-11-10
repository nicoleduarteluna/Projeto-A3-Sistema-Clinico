import { ExamesService } from './exames.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

  menuItemSelected: string = '';

  columnsExame: PoTableColumn[] = [
    { label: 'Exame', property: 'nomeExame' },
    { label: 'Realizado em', property: 'dataExecucao' },
  ];

  exames: any[] = [];
  // exames: any[] = [
  //  { nomeExame: 'US APARELHO URINÁRIO', dataExecucao: '28/09/2022' },
  //  { nomeExame: 'MAMOGRAFIA', dataExecucao: '28/09/2022' },
  //  { nomeExame: 'MEMBROS INFERIORES', dataExecucao: '05/04/2022' }
  // ];

  actions: PoTableAction[] = [
    {
      label: 'Abrir'
    },

  ];

  constructor(private router: Router, private exameService: ExamesService) {
     const nav = this.router.getCurrentNavigation().extras.state;
     this.menuItemSelected = nav.menu;

   }

  ngOnInit() {
   this.preencherExames();
  }

  preencherExames() {
    this.exameService.getExame().subscribe((beneficiarioLogado: any) => {
      beneficiarioLogado.exames.forEach((exame) => {
        this.exames.push(exame);
      });
    });
  }

}
