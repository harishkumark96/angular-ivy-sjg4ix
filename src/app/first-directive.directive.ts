import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFirstDirective]',
})
export class FirstDirectiveDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    el.nativeElement.addEventListener('click', () => {
      console.log('clicked');
      // el.nativeElement.style.color = 'green';
      const h1 = renderer.createElement('h1');
      const textNode = renderer.createText('water');
      renderer.appendChild(h1, textNode);
      renderer.appendChild(el.nativeElement, h1);
      el.nativeElement.className = 'toggle-style';
    });
  }
}
