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

  submitContactInfo(contactInfo: ContactInfo): Observable<any> {
    return this.http.post<ContactInfo>(`${this.contactUrl}/contact-info`, contactInfo);
  }

  getContactMessages(): Observable<ContactInfo[]> {
    return this.http.get<ContactInfo[]>(`${this.contactUrl}/contact-messages`);
  }

  deleteComment(commentId: number): Observable<any> {
    return this.http.delete(`${this.contactUrl}/comments/${commentId}`);
  }

  deleteMessage(messageId: number): Observable<any> {
    return this.http.delete(`${this.contactUrl}/messages/${messageId}`);
  }
}
