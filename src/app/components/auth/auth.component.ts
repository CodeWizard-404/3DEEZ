// auth.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  passwordChangeForm: FormGroup;
  mode: 'login' | 'signup' = 'login';

  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // Add more form controls if needed for signup
      confirmPassword: [''],
      name: [''],
      lastName: [''],
      phone: [''],
      address: [''],
      city: [''],
      postalCode: ['']
    }, { validators: this.passwordMatchValidator });

    this.passwordChangeForm = this.fb.group({
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    // Remove the redundant form initialization
  }

  onSubmit(): void {
    if (this.isSignUp()) {
      this.authService.register(this.authForm.value).subscribe(() => {
        // Successful registration
      });
    } else {
      const { email, password } = this.authForm.value;
      this.authService.login(email, password).subscribe((loggedIn) => {
        if (loggedIn) {
          const userRole = this.authService.getCurrentUser()?.role;
          if (userRole === 'admin') {
            this.router.navigate(['/admin']); 
          } else if (userRole === 'client') {
            this.router.navigate(['/client']); 
          }
        } else {
          alert('Invalid email or password. Please try again.'); 
        }
      });
    }
  }

  onChangePassword(): void {
    const newPassword = this.passwordChangeForm.get('newPassword').value;
    this.authService.changePassword(newPassword).subscribe(
      () => {
        alert('Password changed successfully.'); // Display success message
        // Additional handling if needed
      },
      (error) => {
        console.error('Error changing password:', error);
        alert('Failed to change password. Please try again.'); // Display error message
        // Additional error handling if needed
      }
    );
  }

  isSignUp(): boolean {
    return this.mode === 'signup';
  }

  toggleMode(): void {
    this.mode = this.isSignUp() ? 'login' : 'signup';
  }

  private passwordMatchValidator(group: FormGroup): any {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
