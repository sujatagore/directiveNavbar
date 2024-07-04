import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector : '[highLight]'
})

export class HighlightDirective implements OnInit{

    @Input() highLight !: string

    @HostBinding('style.backgroundColor') bgColor : string = 'pink'

    constructor(
        private eleref : ElementRef,
        private render : Renderer2
    ){
        this.render.addClass(this.eleref.nativeElement, 'm-3')
    }
    ngOnInit(): void {
        this.render.setStyle(this.eleref.nativeElement, 'backgroundColor', this.highLight)
        this.render.addClass(this.eleref.nativeElement, 'p-4')
    }

    @HostListener('mouseover')
        onMouseHover(){
            this.bgColor = this.highLight
        }

    @HostListener('mouseout')
        onMouseOut(){
            this.bgColor = 'pink'
        }

}