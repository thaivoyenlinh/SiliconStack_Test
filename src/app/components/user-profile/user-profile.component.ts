import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github/github.service';
<<<<<<< HEAD
=======
import { LoadingService } from '../loading/loading.service';
>>>>>>> 01374d7 (update test)

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
<<<<<<< HEAD
    private route: ActivatedRoute,) {
=======
    private route: ActivatedRoute,
    private loadingService: LoadingService) {
>>>>>>> 01374d7 (update test)
      route.queryParams.subscribe((params) => {
        this.username = params["username"];
      });
    }

  ngOnInit(): void {
<<<<<<< HEAD
    // this.githubService.getUser(this.username).subscribe(
    //   (res) => {
    //     this.githubUserProfile = res;
    //     // this.showUserProfile = true;
    //   },
    //   (error) => {
    //     alert("Not Found")
    //     // this.showUserProfile = false;
    //   }
    // )
=======
>>>>>>> 01374d7 (update test)
  }

  clkOnCard(){
    let navigationExtras: NavigationExtras = {
			queryParams: { username: this.githubUserProfile.name },
		};
    this.router.navigate(['/user-repositories'], navigationExtras);
<<<<<<< HEAD
    
=======
>>>>>>> 01374d7 (update test)
  }

}
