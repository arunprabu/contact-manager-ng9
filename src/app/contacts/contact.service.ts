import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'https://reqres.in/api/users';

  constructor( private http: HttpClient) { }

  createContact( contactData ): Promise<any> {  // 1. get the data from component
    console.log(contactData);
    const addContactPromise = new Promise( (resolve, reject) => {

      this.http.post(this.REST_API_URL, contactData)
        .toPromise()
        .then( (res: any) => {
          console.log('Inside then');
          console.log(res);
          resolve(res);
        })
        .catch( (err: any) => {
          console.log('Inside catch');
          console.log(err);
          reject(err);
        })
        .finally( () => {
          console.log('Finally it is over');
        });
    });

    return addContactPromise as Promise<any>;
  }

  getContacts(): Observable<any> {  // 1. get the req from comp ts
    console.log('inside getContacts');

    // 2. send the req to the rest api
    // 2.1 identify the rest api end point and method - GET
    // 2.2 use HttpClient to hit the rest api endpoint
    return this.http.get(this.REST_API_URL)
      .pipe( map((res: any) => {   // 3. get the resp from REST API
        console.log(res); // filter, flip, sort, re-arrange 
        return res.data; // 4. send the resp back to the component
      }));
  }

  getContactById(id): any {
    const CONTACT_DETAILS_REST_API_URL = this.REST_API_URL + '/' + id;
    return this.http.get(CONTACT_DETAILS_REST_API_URL)
      .pipe( map((res: any) => {
        console.log(res);
        return res.data;
      }));
  }

  updateContact( contactData ): any { // getting the formdata
    console.log(contactData);
    const CONTACT_DETAILS_UPDATE_REST_API_URL = this.REST_API_URL + '/' + contactData.id;
    return this.http.put(CONTACT_DETAILS_UPDATE_REST_API_URL, contactData)
      .pipe( map((res: any) => {
        console.log(res);
        return res;
      }));
  }

}
