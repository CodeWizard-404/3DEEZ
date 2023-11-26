// auth.service.ts
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../classes/user';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  private userlogsUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

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
          users.push(user);

          return this.http.put<void>(this.userlogsUrl, users).pipe(
            map(() => {
              this.currentUserSubject.next(user);
            })
          );
        } else {
          console.log('Email is already taken');
          return of(undefined); 
        }
      })
    );
  }



  changePassword(newPassword: string): Observable<void> {
    const currentUser = this.getCurrentUser();

    if (currentUser) {
      // Assume there's a method in UserService to update the user's password
      return this.userService.updateUserPassword(currentUser.id, newPassword).pipe(
        tap(() => {
          alert('Password changed successfully.'); // Display success message
          // Additional handling if needed
        }),
        catchError((error) => {
          console.error('Error changing password:', error);
          alert('Failed to change password. Please try again.'); // Display error message
          // Additional error handling if needed
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
    throw new Error('Method not implemented.');
  }
}
