import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../classes/comments'; 
import { ContactInfo } from '../classes/contact-info';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getMessages(): Observable<ContactInfo[]> {
    return this.http.get<ContactInfo[]>(`${this.contactUrl}/messages`);
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.contactUrl}/comments`);
  }

  getContactMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.contactUrl}/contact-messages`);
  }

  submitContactInfo(contactInfo: ContactInfo): Observable<void> {
    return this.http.post<void>(`${this.contactUrl}/contact-info`, contactInfo);
  }
}
