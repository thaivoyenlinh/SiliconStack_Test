import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github/github.service';
<<<<<<< HEAD
=======
import { LoadingService } from '../loading/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastMessageComponent } from '../toast-message/toast-message.component';
>>>>>>> 01374d7 (update test)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public githubUsernameQuery: "";
  githubUsername: string;
  githubUserProfile: any;
  showUserProfile: boolean;
  errorMessage: string;

  constructor(private githubService: GithubService,
<<<<<<< HEAD
    private router: Router) { }
=======
    private router: Router,
    private loadingService: LoadingService,
    private dialog: MatDialog,) { }
>>>>>>> 01374d7 (update test)

  ngOnInit(): void {
  }

  submit(){
    this.githubUsername = this.githubUsernameQuery.split(' ').join("");
<<<<<<< HEAD
    // let navigationExtras: NavigationExtras = {
		// 	queryParams: { username: this.githubUsername },
		// };
    // this.router.navigate(['/user-profile'], navigationExtras);

=======
    this.loadingService.showLoading();
>>>>>>> 01374d7 (update test)
    this.githubService.getUser(this.githubUsername).subscribe(
      (res) => {
        this.githubUserProfile = res;
        this.showUserProfile = true;
<<<<<<< HEAD
      },
      (error) => {
        alert("Not Found")
        this.showUserProfile = false;
=======
        this.loadingService.hideLoading();
      },
      (error) => {
        this.loadingService.hideLoading();
        const dialogRef = this.dialog.open(ToastMessageComponent, {
          width: '500px',
          height: 'auto',
          data: {
            title: 'ERROE',
            content: 'User Not Found',
            okFunc: () => {
              dialogRef.close();
            },
          },
        });
>>>>>>> 01374d7 (update test)
      }
    )
  }

}
