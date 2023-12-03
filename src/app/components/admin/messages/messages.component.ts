import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { Comment } from '../../../classes/comments'; // Corrected import
import { ContactInfo } from '../../../classes/contact-info';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
deleteComment(_t16: Comment) {
throw new Error('Method not implemented.');
}
  comments: Comment[] = []; // Corrected type
  messages: ContactInfo[] = []; // Corrected type
  contactMessages: (Comment | ContactInfo)[] = [];

  constructor(private dataService: ContactService) {}

  ngOnInit(): void {
    this.loadContactMessages();
  }

  loadContactMessages(): void {
    this.dataService.getComments().subscribe(comments => {
      this.comments = comments;
      this.contactMessages = [...this.comments, ...this.messages];
    });

    this.dataService.getMessages().subscribe(messages => {
      this.messages = messages;
      this.contactMessages = [...this.comments, ...this.messages];
    });
  }

  // Replace this with your actual logic to get user by ID
  getUserById(userId: number): any {
    // Sample implementation, replace with actual logic
    return { id: userId, name: 'Sample User', email: 'sample@email.com' };
  }

  deleteMessage(message: Comment | ContactInfo): void {
    // Add logic to delete the message
  }
}
