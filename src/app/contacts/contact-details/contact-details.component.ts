import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;
  duplicateContactData: any;

  constructor( private contactService: ContactService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // read url param in angular
    const contactId = this.activatedRoute.snapshot.paramMap.get('id');

    this.contactService.getContactById(contactId)
      .subscribe( (res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

  openEditModalHandler(){
    // changing data immutably
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  updateContactHandler(formData){
    console.log(formData); // use this to further validate the form
    console.log(this.duplicateContactData );

  }

}
