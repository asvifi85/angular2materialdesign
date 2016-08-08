import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_BUTTON_DIRECTIVES,MD_SIDENAV_DIRECTIVES,MdToolbar]
})
export class AppComponent {
  title = 'SCOM Dashboard';
}
