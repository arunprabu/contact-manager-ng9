import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;
  duplicateContactData: any;
  isUpdated: boolean;

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
    this.isUpdated = false;
  }

  updateContactHandler(formData){
    console.log(formData); // use this to further validate the form
    
    this.contactService.updateContact(this.duplicateContactData)
      .subscribe( (res: any) => {
        console.log(res);

        if (res && res.id){
          this.isUpdated = true;
          setTimeout( () => {
            $('#editContactModal').modal('hide');
            this.contactData = res;
          }, 3000);
        }
      });
  }

}
