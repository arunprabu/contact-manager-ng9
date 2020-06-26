import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';
import { ColorizerDirective } from './shared/directives/colorizer.directive';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    ContactsComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    AddContactComponent,
    ContactDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // to fix ngModel
    ReactiveFormsModule,  // to work with reactive forms
    HttpClientModule,  // to work with HttpClient
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Step 3: AppModule should be bootstrapped with AppComponent
})
export class AppModule { }
