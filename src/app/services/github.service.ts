import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private accessToken = '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'; 

  constructor(private http: HttpClient) {}

  fetchGitHubUserData(username: string): Observable<any> {
    const userUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos`;

    const userPromise = this.http.get(userUrl, { headers: this.getHeaders() });
    const reposPromise = this.http.get(reposUrl, { headers: this.getHeaders() });

    return forkJoin([userPromise, reposPromise]);
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });
  }
}
