import { Directive, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnChanges {

  @Input() appHighlight!: string;  // Define an input property

  constructor(private ef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Initial highlight, if any
    this.setHighlight(this.appHighlight);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appHighlight']) {
      this.setHighlight(changes['appHighlight'].currentValue);
    }
  }

  private setHighlight(color: string): void {
    this.renderer.setStyle(this.ef.nativeElement, 'background', color || 'red');
  }

}
