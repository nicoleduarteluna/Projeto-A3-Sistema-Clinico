import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizar-laudo',
  templateUrl: './realizar-laudo.component.html',
  styleUrls: ['./realizar-laudo.component.css']
})
export class RealizarLaudoComponent implements OnInit {

  menu = 'Realizar Laudo';
  codigoPaciente: string = '';
  nomePaciente: string = '';
  dataNascimento: string = '';
  cpf: string = '';
  nomeExame: string = '';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation().extras.state;
    console.log('nav', nav)
    this.codigoPaciente = nav.exame.id;
    this.nomePaciente   = nav.exame.nome;
    this.dataNascimento = nav.exame.dataNascimento;
    this.cpf            = nav.exame.cpf;
    this.nomeExame      = nav.exame.nomeExame;

    // this.menuItemSelected = nav.menu;
   }

  ngOnInit(): void {
  }

}
