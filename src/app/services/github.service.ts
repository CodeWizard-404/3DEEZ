import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  fetchGitHubUserData(username: string): Observable<any> {
    const userUrl = `https://api.github.com/users/CodeWizard-404`;
    const reposUrl = `https://api.github.com/users/CodeWizard-404/repos`;

    const userPromise = this.http.get(userUrl);
    const reposPromise = this.http.get(reposUrl);

    return forkJoin([userPromise, reposPromise]);
  }
}
