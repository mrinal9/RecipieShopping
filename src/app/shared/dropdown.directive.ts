import { Directive, HostBinding, HostListener, ElementRef } from "../../../node_modules/@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class Dropdown{

    @HostBinding('class.open') open = false;

    @HostListener('click') onClick(){
        this.open  = !this.open;
    } 
}