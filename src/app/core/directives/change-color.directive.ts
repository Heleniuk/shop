import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appChangeColor]'
})
export class ChangeColorDirective {

    @Input('appChangeColor')
    color: string;
    previousColor: string = 'pink';

    constructor(
        private el: ElementRef,
        private renderer: Renderer2) {
    }

    @HostListener('click') onClick() {
        this.changeColor(this.color || 'pink');
    }

    private changeColor(color: string) {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
        this.toggleColor(color);
    }

    private toggleColor(currentColor: string): void {
        this.color = this.previousColor;
        this.previousColor = currentColor;
    }
}