import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer]',
})
export class RendererDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    // renderer.setAttribute(el.nativeElement, 'class', 'div2');
    // renderer.addClass(el.nativeElement, 'div2');
    renderer.setStyle(el.nativeElement, 'background-color', 'green');
  }
}
