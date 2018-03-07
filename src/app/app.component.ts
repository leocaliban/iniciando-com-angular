import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoId = 39;
  nome = '';
  adicionado = false;
  funcionarios = [];

  adicionar(){
    console.log(`Adicionando ${this.nome}`);

    this.adicionado = true;
    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }
}

