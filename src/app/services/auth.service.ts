// auth.service.ts
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../classes/user';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    throw new Error('Method not implemented.');
  }
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private userService: UserService) {}

  login(email: string, password: string): Observable<boolean> {
    return this.userService.getAllUsers().pipe(
      map((users: User[]) => {
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
          this.currentUserSubject.next(user);
          return true;
        } else {
          return false; // Return false when the user is not found
        }
      }),
      catchError(() => of(false)) // Handle observable error
    );
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  register(user: User): Observable<void> {
    return this.userService.getAllUsers().pipe(
      switchMap((users: User[]) => {
        // Check if the email is already registered
        const isEmailTaken = users.some(u => u.email === user.email);
  
        if (!isEmailTaken) {
          // Assign a default role for simplicity (you might have a better way to handle roles)
          user.role = 'client';
  
          // Add the new user to the array
          users.push(user);
  
          // Update the JSON file (for simplicity, you might use a backend server in a real application)
          return this.userService.updateUsers(users).pipe(
            map(() => {
              // Set the current user after successful registration
              this.currentUserSubject.next(user);
            })
          );
        } else {
          console.log('Email is already taken');
          // Handle the case when the email is already registered
          return of(undefined); // Return undefined to match Observable<void>
        }
      })
    );
  }
  

  // Add a method for social login (Google, GitHub, Facebook) if needed

  isAdmin(): boolean {
    return this.currentUserSubject.value?.role === 'admin' || false;
  }
}
