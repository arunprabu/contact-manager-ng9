import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'https://reqres.in/api/users';

  constructor( private http: HttpClient) { }

  createContact( contactData ){  // 1. get the data from component
    console.log(contactData);

    // 2. send the data to REST API
      // 2.1 identify the REST API URL   - https://reqres.in/api/users -- using http method -- POST
      // 2.2 send the data to the REST API URL using HttpClient
    return this.http.post(this.REST_API_URL, contactData)
      .pipe( map((res: any) => {   // 3. get the resp from REST API
        console.log(res);
        return res; // 4. send the resp back to the component
      }));
  }

  getContacts(){  // 1. get the req from comp ts
    console.log('inside getContacts');

    // 2. send the req to the rest api 
    // 2.1 identify the rest api end point and method - GET
    // 2.2 use HttpClient to hit the rest api endpoint
    return this.http.get(this.REST_API_URL)
      .pipe( map((res: any) => {   // 3. get the resp from REST API
        console.log(res);
        return res.data; // 4. send the resp back to the component
      }));
  }

  getContactById(id) { 
    const CONTACT_DETAILS_REST_API_URL = this.REST_API_URL + '/' + id;
    return this.http.get(CONTACT_DETAILS_REST_API_URL)
      .pipe( map((res: any) => {
        console.log(res);
        return res.data;
      }));
  }

}
