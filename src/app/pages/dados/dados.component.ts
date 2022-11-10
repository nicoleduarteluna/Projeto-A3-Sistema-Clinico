import { DadosService } from './dados.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  menuItemSelected: string = '';
  nomeCompleto: string;
  dataNascimento: string;
  cpf: string;
  rg: string;
  email: string;
  telefone: string;

  constructor(private router: Router, private dadosService: DadosService) {
    const nav = this.router.getCurrentNavigation().extras.state;
    this.menuItemSelected = nav.menu;
  }

  ngOnInit() {
    this.dadosService.getDadosBenef().subscribe((dadosBenef: any) => {
      this.nomeCompleto = dadosBenef.nome;
      this.dataNascimento = dadosBenef.dataNascimento;
      this.cpf = dadosBenef.cpf;
      this.rg = dadosBenef.rg;
      this.email = dadosBenef.email;
      this.telefone = dadosBenef.telefone;
    });
  }

}
