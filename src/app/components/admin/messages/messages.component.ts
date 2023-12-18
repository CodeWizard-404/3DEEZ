import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { Comment } from '../../../classes/comments';
import { ContactInfo } from '../../../classes/contact-info';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  comments: Comment[] = [];
  messages: ContactInfo[] = [];
  contactMessages: (Comment | ContactInfo)[] = [];

  constructor(private dataService: ContactService ,private userService: UserService) {}

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

  deleteComment(comment: Comment): void {
    const confirmDelete = confirm(`Are you sure you want to delete this comment ${comment.id}?`);
    if (confirmDelete) {
      this.dataService.deleteComment(comment.id).subscribe(() => {
        this.loadContactMessages();
      });
    }
  }

  deleteMessage(message: ContactInfo): void {
    const confirmDelete = confirm(`Are you sure you want to delete this message from ${message.name}?`);
    if (confirmDelete) {
      this.dataService.deleteMessage(message.id).subscribe(() => {
        this.loadContactMessages();
      });
    }
  }

  getUserById(userId: number): any {
    return this.userService.getUserById(userId);
  }

}
