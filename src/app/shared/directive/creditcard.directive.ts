import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector : '[creditCardDir]'
})

export class CreditCardDirective implements OnInit{
   
    constructor(
        private eleref : ElementRef,
        private render : Renderer2
    ){}

    errormsg !: HTMLParagraphElement;

    ngOnInit(): void {
        this.errormsg = document.createElement('p')
        this.errormsg.innerHTML = "Plz Enter Valid Number";
        this.errormsg.className = 'alert alert-danger';
        this.render.parentNode(this.eleref.nativeElement).append(this.errormsg);

        this.errormsg.style.display = 'none'
    }

    @HostListener('input', ['$event'])
        CreditCard(eve : Event){
            let inputctrl = eve.target as HTMLInputElement;

            let creditval = inputctrl.value.replace(/\s+/g, '') as string

            if (creditval.length > 16) {
                creditval = creditval.substring(0, 16);
            }

            if (/[^\d]/.test(creditval)) {
                 this.errormsg.style.display = 'block'
                // this.errorMsg = document.createElement('p');
                // this.errorMsg.innerHTML = "Plz Enter Valid Credit Card Number";
                // this.errorMsg.className = 'alert alert-danger';
                // inputCtrl.parentNode?.append(this.errorMsg)
            }else{
                 this.errormsg.style.display = 'none'
            }

            creditval = this.CreditCardValue(creditval);

            inputctrl.value = creditval;
        }

        CreditCardValue(creditval : string){
            let Cardvalue = [];

            for (let i = 0; i < creditval.length; i += 4) {
                Cardvalue.push(creditval.slice(i, i + 4))
            }
            return Cardvalue.join(' ')
        }

}