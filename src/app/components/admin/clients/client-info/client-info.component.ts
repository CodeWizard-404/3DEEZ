import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../classes/user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  clientId!: number;
  client: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.clientId = +params.get('id')!;
      this.loadClientDetails();
    });
  }

  loadClientDetails(): void {
    this.userService.getUserById(this.clientId).subscribe(client => {
      this.client = client;
    });
  }
}
