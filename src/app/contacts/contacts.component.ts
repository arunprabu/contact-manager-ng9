import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  contactList: any[];

  constructor( private contactService: ContactService ) {
    console.log('Inside Constructor');
  }

  // life cycle hook -- will be called automatically after constructor
  ngOnInit(): void {
    // this is the ideal place for any service calls
    console.log('Inside ngOnInit');

    // 1. send the call to the service
    // 1.1 connect to the service -using dep inj - refer constructor
    // 1.2. hit the service's method
    this.contactService.getContacts()
      .subscribe( (res: any) => {
        console.log(res);
        this.contactList = res;
      });
    // 2. get the res from the service
  }

}
