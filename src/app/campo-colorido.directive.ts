import { element } from 'protractor';
import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input() cor = 'green';
  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') aoGanharFoco() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') aoPerderFoco() {
    this.corDeFundo = 'transparent';
  }
}
