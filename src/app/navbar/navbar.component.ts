import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   @Input()
  showSideBarInput:boolean;

  @Output()
  showSideBarChange:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
  }

  afficherSideBar(){
    this.showSideBarInput=!this.showSideBarInput;
    this.showSideBarChange.emit(this.showSideBarInput);
  }
}
