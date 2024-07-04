import { Directive, ElementRef, HostListener } from "@angular/core";


@Directive({
    selector : '[tolowerCaseDir]'
})

export class ToLowerCaseDirective {
    constructor(
        private eleref : ElementRef
    ){}

    @HostListener('keyup', ['$event'])
        onKeyUp(eve : Event){
            let inputctrl = eve.target as HTMLInputElement;

            let val = inputctrl.value as string

            inputctrl.value = val.toLowerCase();
        }
}