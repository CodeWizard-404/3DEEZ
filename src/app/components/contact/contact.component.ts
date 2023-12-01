import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactInfo } from '../../classes/contact-info';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  contactMessages: ContactInfo[] = [];

  constructor(private fb: FormBuilder, private contactService: ContactService,private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchContactMessages();
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contactInfo = this.contactForm.value;
      this.contactService.submitContactInfo(contactInfo).subscribe(() => {
        console.log('Contact info submitted successfully');
        this.snackBar.open('Message recived, we will get back at you ASAP!', 'OK', {
          duration: 3000,
        });
        this.contactForm.reset();
        this.fetchContactMessages();
      });
    }
  }

  private fetchContactMessages() {
    this.contactService.getContactMessages().subscribe((messages) => {
      this.contactMessages = messages;
    });
  }
}
