import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github/github.service';
import { LoadingService } from '../loading/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastMessageComponent } from '../toast-message/toast-message.component';

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
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private githubService: GithubService,
    private loadingService: LoadingService,
    private dialog: MatDialog,
    ) {
    route.queryParams.subscribe((params) => {
      this.username = params["username"];
    });
   }

  ngOnInit(): void {
    this.loadingService.showLoading();
    this.githubService.getUserRepository(this.username).subscribe(
      (res) => {
        console.log(res)
        this.githubUserRepositories = res;
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
      }
    );
  }



  clkRepository(repositoryName: string){
    console.log("clkRepository", repositoryName)
    let navigationExtras: NavigationExtras = {
			queryParams: { repositoryName: repositoryName, username: this.username},
		};
    this.router.navigate(['/details-repository'], navigationExtras);
  }

}
