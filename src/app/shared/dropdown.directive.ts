import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class Dropdown{

    @HostBinding('class.open') open = false;

    @HostListener('click') onClick(){
        this.open  = !this.open;
    } 
}