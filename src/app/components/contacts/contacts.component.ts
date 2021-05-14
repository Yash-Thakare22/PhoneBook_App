import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddContactComponent } from '../../components/add-contact/add-contact.component';
import { IContact, ContactsService } from '../../services/contacts.service';
import { EditContactComponent } from '../edit-contact/edit-contact.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: IContact[];

  constructor(
    private contactsService: ContactsService,
    public dialog: MatDialog  ) {}

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }

  add() {
    const dialogRef = this.dialog.open(AddContactComponent);
    dialogRef.afterClosed().subscribe((contact: IContact) => {
      if (contact) {
        this.contacts.push(contact);
      }
    });
  }

  delete(contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }
  edit(contact) {
    const dialogRef = this.dialog.open(EditContactComponent);
    dialogRef.afterClosed().subscribe((contact: IContact) => {
      if (contact) {
        this.contacts.push(contact);
      }
    });
    console.log(contact);
  }

}
