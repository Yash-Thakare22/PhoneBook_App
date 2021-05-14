import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SpeedDialComponent } from './components/speed-dial/speed-dial.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddContactComponent,
    ContactsComponent,
    SpeedDialComponent,
    EditContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [  ],
  bootstrap: [AppComponent],
  entryComponents: [AddContactComponent]
})
export class AppModule {}
