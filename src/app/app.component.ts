import { Component , ViewEncapsulation} from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon/icon';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  viewProviders: [MdIconRegistry],
  directives: [MD_BUTTON_DIRECTIVES,MD_CARD_DIRECTIVES,MD_SIDENAV_DIRECTIVES,MdToolbar,MdIcon],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'SCOM Dashboard';
   constructor(mdIconRegistry: MdIconRegistry) {
    mdIconRegistry
        .addSvgIcon('thumb-up', 'assets/thumbup-icon.svg')
        .addSvgIconSetInNamespace('core', 'assets/core-icon-set.svg')
        .registerFontClassAlias('fontawesome', 'fa');
  }
}
