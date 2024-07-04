import { Directive, HostListener } from "@angular/core";

@Directive({
    selector : '[creditCardDir]'
})

export class CreditCardDirective{

    errormsg !: HTMLParagraphElement;

    @HostListener('input', ['$event'])
        CreditCard(eve : Event){
            let inputctrl = eve.target as HTMLInputElement;

            let creditval = inputctrl.value.replace(/\s+/g, '') as string

            if (creditval.length > 16) {
                creditval = creditval.substring(0, 16);
            }

            if (/[^\d]/.test(creditval)) {
                this.errormsg = document.createElement('p')
                this.errormsg.innerHTML = `Plz Enter Valid Number`;
                this.errormsg.className = 'alert alert-danger';
                inputctrl.parentNode?.append(this.errormsg);
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