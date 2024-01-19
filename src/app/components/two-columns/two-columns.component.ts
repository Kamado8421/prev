import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-columns',
  templateUrl: './two-columns.component.html',
  styleUrl: './two-columns.component.css'
})
export class TwoColumnsComponent {
  title = 'prev-pax';
  @Input() image!: string;
  @Input() titulo!: string;
  @Input() texto!: string;
  constructor() {
    this.image="../assets/img/prevpax-logo.png"
    this.titulo="PREV PAX"
    this.texto="Nossos Planos de Saúde Empresariais personalizados não apenas proporcionam cuidados excepcionais à saúde de seus funcionários, mas também representam uma oportunidade de redução de custos substanciais para sua empresa. Ao adotar nossos planos, sua empresa não incorre em despesas adicionais, e, ao contrário, conquista a fidelização de seus colaboradores, fortalecendo a satisfação da equipe e atraindo os melhores talentos. Investir no bem-estar de seus funcionários"
  }
}
