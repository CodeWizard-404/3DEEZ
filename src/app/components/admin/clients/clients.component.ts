import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../classes/user';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  clients: User[] = []; 

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.loadClients();
  }
  loadClients(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.clients = data.filter(user => user.role === 'client');
    });
  }

  viewClientDetails(client: User): void {
  }

  deleteClient(client: User): void {
  }

}
