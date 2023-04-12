import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github/github.service';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() githubUserProfile: any
  showRepositories: boolean;
  githubUserRepositories: any;
  username: string;
  // githubUserProfile: any;
  constructor(private githubService: GithubService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingService: LoadingService) {
      route.queryParams.subscribe((params) => {
        this.username = params["username"];
      });
    }

  ngOnInit(): void {
  }

  clkOnCard(){
    let navigationExtras: NavigationExtras = {
			queryParams: { username: this.githubUserProfile.name },
		};
    this.router.navigate(['/user-repositories'], navigationExtras);
  }

}
