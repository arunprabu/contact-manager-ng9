import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Create Form tag equivalent in TS file
  contactForm: FormGroup;
  isSaved: boolean;

  constructor( private contactService: ContactService) { }

  ngOnInit(): void {
    // Step 1.. continues...
    this.contactForm = new FormGroup({
      // Step 2: create form element quivalent in ts using FormControl
      first_name: new FormControl('arun', Validators.required),     // Step 5: Work with validators 
      last_name: new FormControl('vj', Validators.required),   // Refer HTML for step 6
      email: new FormControl('a@b.com', [Validators.required, Validators.email] )
    });
  }

  addContactHandler(){
    console.log('submitted');
    console.log(this.contactForm.value);

    // 1. send the above data to service
      // 1.1 connect to the service -- using dep inj -- refer constructor
      // 1.2 send the data to the service's method
    this.contactService.createContact(this.contactForm.value)
      .subscribe( (res: any) => {     // 2. receive the resp from service
        console.log(res);

        if (res && res.id) {
          this.isSaved = true;
        }
      });
  }



}
