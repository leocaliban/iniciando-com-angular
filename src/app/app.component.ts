import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Leonardo';
  idade = 26;

  alterarNome(event: any){
    this.nome = event.target.value;
  }
}

