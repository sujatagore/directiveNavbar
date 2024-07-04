import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector : '[navbarDir]'
})

export class NavbarDirective implements OnInit{

    constructor(
        private eleref : ElementRef,
        private render : Renderer2
    ){ }

    ngOnInit(): void {}

    isOpen : boolean = false;

    @HostListener('click')
        toggleopen(){
            const div : HTMLElement = this.eleref.nativeElement.nextSibling;

            this.isOpen = !this.isOpen;

            if (this.isOpen) {
                this.render.addClass(div, "show")
            } else {
                this.render.removeClass(div, "show")
            }
        }

}