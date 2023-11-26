// auth..ts
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
  }

  onSubmit(): void {
    if (this.isSignUp()) {
      this.authService.register(this.authForm.value).subscribe(() => {
      });
    } else {
      const { email, password } = this.authForm.value;
      this.authService.login(email, password).subscribe((loggedIn) => {
        if (loggedIn) {
          this.authService.currentUser$.subscribe((user) => {
            if (user) {
              const userRole = user.role;
              this.navigateToRole(userRole);
            }
          });
        } else {
          alert('Invalid email or password. Please try again.');
        }
      });
    }
  }

  private navigateToRole(role: string): void {
    if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else if (role === 'client') {
      this.router.navigate(['/client']);
    }
  }

  onChangePassword(): void {
    const newPasswordControl = this.passwordChangeForm?.get('newPassword');
  
    if (newPasswordControl) {
      const newPassword = newPasswordControl.value;
      
      this.authService.changePassword(newPassword).subscribe(
        () => {
          alert('Password changed successfully.'); 
        },
        (error) => {
          console.error('Error changing password:', error);
          alert('Failed to change password. Please try again.'); 
        }
      );
    }
  }

  isSignUp(): boolean {
    return this.mode === 'signup';
  }

  toggleMode(): void {
    this.mode = this.isSignUp() ? 'login' : 'signup';
  }

  private passwordMatchValidator(group: FormGroup): any {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');
  
    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;
  
      return password === confirmPassword ? null : { mismatch: true };
    } else {
      return null;
    }
  }
  

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
