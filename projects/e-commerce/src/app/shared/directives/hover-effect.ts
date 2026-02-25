import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]',
  standalone: true,
})
export class HoverEffectDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-8px)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 12px 24px rgba(0,0,0,0.15)');
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '10');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 4px 6px rgba(0,0,0,0.05)');
    this.renderer.removeStyle(this.el.nativeElement, 'z-index');
  }
}
