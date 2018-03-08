import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {

  @Input() funcionario: any;

  getEstilosCartao(){
    return{
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen' 
    };
  }
}
