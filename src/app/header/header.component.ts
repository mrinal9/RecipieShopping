import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navigationEmmiter = new EventEmitter<string>();

  onSelect(tabName : string)
  {      
      this.navigationEmmiter.emit(tabName);
  }
 
  constructor() { }

  ngOnInit() {
  }

}
