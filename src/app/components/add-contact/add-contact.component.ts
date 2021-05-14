import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  title: String = 'Model Driven Form';

  userData: any = [];
  _socialMedia: String[] = [
    'Facebook',
    'Twitter',
    'Instagram',
    'Google+'
  ];

  userForm: FormGroup;
  submitted: boolean = false;
  username: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobilePattern = '[789][0-9]{9}';

  mobileLength = 0;

  formErrors = {
    'firstName': '',
    'lastName': '',
    'mobile': '',
    'popular':''
  };

  form_validation_messages = {
    'firstName': {
      'required': 'First name is required',
      'minlength': 'First name must be at least 3 characters long',
    },
    'mobile': {
      'required': 'Phone is required',
      'pattern': 'Enter a valid phone number',
      'minlength': 'Phone must be at least 10 characters long',
      'maxlength': 'Phone cannot be more than 10 characters long',
    },
    'popular': {
      'required': 'popular experience is required'
    },
    'whatsapp': {
      'required': 'whatsapp experience is required'
    }
  }

  constructor(public dialogRef: MatDialogRef<AddContactComponent>, private _formBuilder: FormBuilder, private _contactService: ContactsService) { }

  ngOnInit() {

    this.userForm = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [''],
      mobile: ['', [Validators.required]],
      whatsapp: [''],
      popular: ['']
    });

    this.userForm.get('mobile').valueChanges.subscribe(
      value => {
        this.mobileLength = value.length;
      }
    )

    this.userForm.valueChanges.subscribe(
      data => this.logValidationErrors(this.userForm)
    );

  }

  logValidationErrors(group: FormGroup = this.userForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
        const messages = this.form_validation_messages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }

      if (abstractControl instanceof FormArray) {
        for (const control of abstractControl.controls) {
          if (control instanceof FormGroup) {
            this.logValidationErrors(control);
          }
        }
      }
    });
  }


  onContactPrefernceChange(selectedValue: string) {
    const phoneFormControl = this.userForm.get('mobile');
    const emailFormControl = this.userForm.get('email');
    if (selectedValue === 'mobile') {
      phoneFormControl.enable();
      phoneFormControl.setValidators([Validators.required, Validators.pattern(this.mobilePattern), Validators.maxLength(10), Validators.minLength(10)]);
      emailFormControl.clearValidators();
      emailFormControl.reset();
      emailFormControl.disable();
    } else {
      emailFormControl.enable();
      emailFormControl.setValidators([Validators.required, Validators.email, Validators.pattern(this.emailPattern)]);
      phoneFormControl.clearValidators();
      phoneFormControl.reset();
      phoneFormControl.disable();
    }

    phoneFormControl.updateValueAndValidity();
    emailFormControl.updateValueAndValidity();
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    this.userData.push(this.userForm.value);
    this._contactService.addContactInfo(this.userData[0])

  }

  resetForm() {
    this.userForm.reset();
  }



}
