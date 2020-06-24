import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]'  // attribute selector
})
export class ColorizerDirective {

  // step 1: find the element in which the appColorizer directive is used
  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { // dependency injection
    console.log('Inside Colorizer\'s Constructor');
    console.log(this.elRef.nativeElement);
  
    // step 2: change the color of the element
    const divEl = this.elRef.nativeElement;
    // javascripts's way to change color
    // divEl.style.backgroundColor = 'red';
    // divEl.style.color = 'yellow';

    // angular's way of changing color
    this.renderer.setStyle(divEl, 'background-color', 'red');
    this.renderer.setStyle(divEl, 'color', 'yellow');
    this.renderer.setStyle(divEl, 'height', '200px');

  }

}
