import { Injectable } from '@angular/core';

export interface IContact {
  firstName: string;
  lastName: string;
  mobile: string;
  photo: string;
  popular: boolean;
  whatsapp:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: IContact[] = [
    { firstName: 'Yash', lastName: 'Thakare', mobile: '9869785683', photo: '', whatsapp:true, popular: true },
    { firstName: 'Mayank', lastName: 'Bucha', mobile: '8679089796', photo: '',whatsapp:true, popular: false },
    { firstName: 'Navanit', lastName: 'Srisan', mobile: '7584903456', photo: '',whatsapp:false, popular: true },
    { firstName: 'Rohit', lastName: 'Sharma', mobile: '9985948409', photo: '',whatsapp:true, popular: false }
  ];

  getContacts(): IContact[] {
    return this.contacts;
  }

  getPopularContacts(): IContact[] {
    return this.contacts.filter((contact: IContact) => {
      return (contact.popular === true);
    });
  }

  addContactInfo(data){
    this.contacts.push(data)
    alert(JSON.stringify(data))
  }

}
