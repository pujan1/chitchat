import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective implements OnInit {

  constructor(private elref: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
  	this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'rgba(0, 0, 0, 0.2)');
  }

}
