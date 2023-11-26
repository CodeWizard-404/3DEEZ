import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  updateUsers(users: User[]): Observable<void> {
    return this.http.put<void>(this.usersUrl, users);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/current-user`);
  }

  updateUserPassword(userId: number, newPassword: string): Observable<void> {
    return this.http.put<void>(`${this.usersUrl}/${userId}/update-password`, { newPassword });
  }
}
