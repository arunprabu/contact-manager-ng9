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
  isLoggedIn = true;

  // two way binding related
  courseName = 'Angular';

  myAge = 16;

  // custom event binding related
  dataFromChild;

  // directives related
  skillsList: string[] = [ 'html', 'css', 'js', 'ng'];

  constructor() { }

  ngOnInit(): void {
  }

  isAuth(){
    return this.isLoggedIn;
  }

  // event bindin related
  onBtnClickHandler( e ){
    console.log(e);
    alert('clicked');
  }

  // step 5: custom event binding related handler
  onProfileLoadedHandler(e){
    console.log(e);
    this.dataFromChild = e;
  }
}
