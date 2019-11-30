import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
showHide:boolean=false;

 onShowSidebarChange(show){
    this.showHide=show;
    console.log("showHide is : " + this.showHide);
 }
}
