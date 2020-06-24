import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Create Form tag equivalent in TS file
  contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // Step 1.. continues...
    this.contactForm = new FormGroup({
      // Step 2: create form element quivalent in ts using FormControl
      first_name: new FormControl('', Validators.required),     // Step 5: Work with validators 
      last_name: new FormControl('', Validators.required),   // Refer HTML for step 6
      email: new FormControl('', [Validators.required, Validators.email] )
    });
  }

}
