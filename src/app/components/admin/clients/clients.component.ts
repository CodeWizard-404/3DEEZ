import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../classes/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
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
    this.router.navigate(['admin/client/', client.id]); 
  }

  deleteClient(client: User): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${client.name} ${client.lastName} ?`);
    if (confirmDelete) {
      this.userService.deleteUser(client.id).subscribe(() => {
        this.loadClients();
        alert(`Client ${client.name} ${client.lastName} deleted successfully.`);
      });
    }
  }
}
