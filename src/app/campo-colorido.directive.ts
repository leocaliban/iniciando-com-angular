import { element } from 'protractor';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private rederer: Renderer2
  ) {
    this.rederer.setStyle(this.elementRef.nativeElement,
    'background-color', 'yellow');
  }
  /** CRIA DIRETIVA ng g d campo-colorido --spec=false */

}
