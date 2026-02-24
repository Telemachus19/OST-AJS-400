import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]',
  standalone: true,
})
export class HoverEffectDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'box-shadow 0.3s ease-in-out');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 10px 20px rgba(0,0,0,0.2)');
    const img = this.el.nativeElement.querySelector('img');
    if (img) {
      this.renderer.setStyle(img, 'transform', 'scale(1.1)');
      this.renderer.setStyle(img, 'transition', 'transform 0.3s ease-in-out');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
    const img = this.el.nativeElement.querySelector('img');
    if (img) {
      this.renderer.setStyle(img, 'transform', 'scale(1)');
    }
  }
}
