import { Directive, ElementRef, Input  } from '@angular/core';


@Directive({
    selector: '[changeColor]'
})


export class ChangeColorDirective {

    constructor(private elem: ElementRef) {}

    @Input() set changeColor (color: string) {
        console.info(color);
        this.elem.nativeElement.style.color = color;
    }

}