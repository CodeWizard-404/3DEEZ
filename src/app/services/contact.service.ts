import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactInfo } from '../classes/contact-info';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  getContactMessages() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'path_to_your_api'; // Update this with the actual API endpoint

  constructor(private http: HttpClient) {}

  submitContactInfo(contactInfo: ContactInfo): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/contact-info`, contactInfo);
  }
}
