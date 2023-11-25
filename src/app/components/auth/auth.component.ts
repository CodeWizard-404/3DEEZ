// auth.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  passwordChangeForm: FormGroup;
  mode: 'login' | 'signup' = 'login';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authForm = this.fb.group({
      //auth form controls 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    //passwordChangeForm
    this.passwordChangeForm = this.fb.group({
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: [''],
      name: [''],
      lastName: [''],
      phone: [''],
      address: [''],
      country: [''],
      postalCode: ['']
    }, { validators: this.passwordMatchValidator });

    this.passwordChangeForm = this.fb.group({
      newPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.isSignUp()) {
      this.authService.register(this.authForm.value).subscribe(() => {
        // Handle successful registration if needed
      });
    } else {
      const { email, password } = this.authForm.value;
      this.authService.login(email, password).subscribe((loggedIn) => {
        if (loggedIn) {
          // Handle successful login if needed
        } else {
          // Handle login failure if needed
        }
      });
    }
  }

  onChangePassword(): void {
    //const newPassword = this.passwordChangeForm.get('newPassword').value;
    //this.authService.changePassword(newPassword).subscribe(() => {
      // Handle successful password change if needed
    //});
  }

  isSignUp(): boolean {
    return this.mode === 'signup';
  }

  toggleMode(): void {
    this.mode = this.isSignUp() ? 'login' : 'signup';
  }

  private passwordMatchValidator(group: FormGroup): any {
    //const password = group.get('password').value;
    //const confirmPassword = group.get('confirmPassword').value;

    //return password === confirmPassword ? null : { mismatch: true };
  }
  isAuthenticated(): any {
    throw new Error('Method not implemented.');
    }
}
