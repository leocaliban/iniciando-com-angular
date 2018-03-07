import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leonardo';
  idade = 26;

  calcularNascimento(){
    return 2018 - this.idade;
  }
}

