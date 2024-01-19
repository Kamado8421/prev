import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inscricao-plano',
  templateUrl: './inscricao-plano.component.html',
  styleUrl: './inscricao-plano.component.css'
})
export class InscricaoPlanoComponent {
  @Input() image!: string;
  constructor(){
    this.image = './assets/img/back-plano-inscricao.png';
  }
}
