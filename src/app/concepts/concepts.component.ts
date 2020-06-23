import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      .redText{
        color: red;
      }
    `
  ]
})
export class ConceptsComponent implements OnInit {
  // ts
  // String interpolation related
  appName = 'Contact Manager App!';

  // property binding related
  clientName = 'Citibank';
  isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

  isAuth(){
    return this.isLoggedIn;
  }

}
