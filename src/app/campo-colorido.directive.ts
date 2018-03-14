import { element } from 'protractor';
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private rederer: Renderer2
  ) {}
  /** CRIA DIRETIVA ng g d campo-colorido --spec=false */

  @HostListener('focus') aoGanharFoco() {
    this.rederer.setStyle(this.elementRef.nativeElement,
      'background-color', 'yellow');
  }

  @HostListener('blur') aoPerderFoco() {
    this.rederer.setStyle(this.elementRef.nativeElement,
      'background-color', 'transparent');
  }
}
