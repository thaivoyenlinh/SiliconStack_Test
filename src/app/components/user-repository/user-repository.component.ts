import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github/github.service';
<<<<<<< HEAD
=======
import { LoadingService } from '../loading/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastMessageComponent } from '../toast-message/toast-message.component';
>>>>>>> 01374d7 (update test)

@Component({
  selector: 'app-user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.scss']
})
export class UserRepositoryComponent implements OnInit {

  // @Input() userRepositories: any;
  username: string;
  showUserRepository: boolean;
  githubUserRepositories: any;
<<<<<<< HEAD
  constructor(private router: Router, private route: ActivatedRoute,
    private githubService: GithubService) {
=======
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private githubService: GithubService,
    private loadingService: LoadingService,
    private dialog: MatDialog,
    ) {
>>>>>>> 01374d7 (update test)
    route.queryParams.subscribe((params) => {
      this.username = params["username"];
    });
   }

  ngOnInit(): void {
<<<<<<< HEAD
=======
    this.loadingService.showLoading();
>>>>>>> 01374d7 (update test)
    this.githubService.getUserRepository(this.username).subscribe(
      (res) => {
        console.log(res)
        this.githubUserRepositories = res;
<<<<<<< HEAD
        // this.showRepositories = true;
      },
      (error) => {
        alert("Not Found")
        // this.showRepositories = false;
=======
        this.loadingService.hideLoading();
      },
      (error) => {
        this.loadingService.hideLoading();
        alert("Not Found")
        const dialogRef = this.dialog.open(ToastMessageComponent, {
          width: '500px',
          height: 'auto',
          data: {
            title: 'ERROE',
            content: 'Repositories Not Found',
            okFunc: () => {
              dialogRef.close();
            },
          },
        });
>>>>>>> 01374d7 (update test)
      }
    );
  }



  clkRepository(repositoryName: string){
<<<<<<< HEAD
    // this.showUserRepository = false;
=======
>>>>>>> 01374d7 (update test)
    console.log("clkRepository", repositoryName)
    let navigationExtras: NavigationExtras = {
			queryParams: { repositoryName: repositoryName, username: this.username},
		};
    this.router.navigate(['/details-repository'], navigationExtras);
  }

}
