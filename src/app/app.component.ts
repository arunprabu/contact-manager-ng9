import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // exposed in a selector -- an element selector -- mandatory
  templateUrl: './app.component.html',  // html -- mandatory -- should be only one template
  styleUrls: ['./app.component.css']  // css -- optional -- can be multiple as well
})
export class AppComponent {
  // ts
  title = 'contact-manager-ng9';
}
