import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IContact, ContactsService } from '../../services/contacts.service';
@Component({
  selector: 'app-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.css']
})
export class SpeedDialComponent implements OnInit {

  contacts: IContact[];

  constructor(
    private contactsService: ContactsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getPopularContacts();
  }
  dailContact(contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

}
