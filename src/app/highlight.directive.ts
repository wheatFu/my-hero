import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') heightColor: string;
  constructor(
    private el: ElementRef
  ) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.heightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
