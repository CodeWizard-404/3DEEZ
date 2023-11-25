import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() isAdmin: boolean = false;
  searchTerm: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  search(): void {
    this.router.navigate(['/products'], { queryParams: { q: this.searchTerm } });
  }
}
