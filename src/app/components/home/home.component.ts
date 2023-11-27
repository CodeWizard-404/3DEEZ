import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  username = 'CodeWizard-404';
  userData: any;
  reposData: any;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.githubService.fetchGitHubUserData(this.username)
      .subscribe(([userData, reposData]) => {
        this.userData = userData;
        this.reposData = reposData;
      }, error => {
        console.error('Error:', error);
      });
  }
}
