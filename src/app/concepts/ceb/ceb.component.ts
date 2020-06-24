import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: create an object for EventEmitter class
  @Output() profileLoaded = new EventEmitter(); // Step 2: @Output() Makes this a custom event
  personName = 'John';

  constructor() { }

  ngOnInit(): void {
  }

  onLoadProfile(){
    // Step 3: trigger the event
    this.profileLoaded.emit(this.personName);
    // refer: concepts.comp.html -- for step 4
  }
}
