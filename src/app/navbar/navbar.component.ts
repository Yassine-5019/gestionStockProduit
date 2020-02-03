import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';
import { AppService } from '../app.service';

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

  constructor(private router:Router, private appService:AppService) {}

  ngOnInit() {
  }

  afficherSideBar(){
    this.showSideBarInput=!this.showSideBarInput;
    this.showSideBarChange.emit(this.showSideBarInput);
  }

  logOut(){
    this.appService.logOut(()=>{
      this.router.navigateByUrl('/login')
    })
  }
}
