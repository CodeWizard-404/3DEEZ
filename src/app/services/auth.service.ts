import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../classes/user';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  private userlogsUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient,private userService: UserService,private snackBar: MatSnackBar,private router: Router,
    ) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.userlogsUrl).pipe(
      map((users: User[]) => {
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
          this.currentUserSubject.next(user);
          return true;
        } else {
          return false; 
        }
      }),
      catchError(() => of(false)) 
    );
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  register(user: User): Observable<void> {
    return this.http.get<User[]>(this.userlogsUrl).pipe(
      switchMap((users: User[]) => {
        const isEmailTaken = users.some(u => u.email === user.email);
  
        if (!isEmailTaken) {
          user.role = 'client';
          const maxId = users.reduce((max, u) => (u.id > max ? u.id : max), 0);
            user.id = maxId + 1;
  
          return this.http.post<void>(this.userlogsUrl, user).pipe(
            map(() => {
              this.currentUserSubject.next(user);
            })
          );
        } else {
          this.snackBar.open('Email is already taken');
          return of(undefined);
        }
      })
    );
  }



  changePassword(newPassword: string): Observable<void> {
    const currentUser = this.getCurrentUser();

    if (currentUser) {
      currentUser.password = newPassword;

      return this.userService.updateUser(currentUser).pipe(
        tap(() => {
          this.snackBar.open('Password changed successfully.', 'OK', {
            duration: 3000,
          });
        }),
        catchError((error) => {
          console.error('Error changing password:', error);
          this.snackBar.open('Failed to change password. Please try again.', 'OK', {
            duration: 3000,
          });
          return of(undefined);
        })
      );
    } else {
      console.error('No user found to change password.');
      return of(undefined);
    }
  }
  

  isAdmin(): boolean {
    return this.currentUserSubject.value?.role === 'admin' || false;
  }

  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }
}
