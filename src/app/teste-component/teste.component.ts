import { Component } from "@angular/core";

@Component({
    selector: 'teste',
    template:`
        <h2>
            Testando {{status}}
        </h2>
    `
})
export class TesteComponent{
    status = 'FUNCIONANDO'
}

/**
 * Criar componente no terminal
 * ng generate component 'nome do componente'
 * 
 * Comando abreviado
 * ng g c 'nome do componente'
 * 
 * Ignorar geração de arquivos
 * --spec=false
 */