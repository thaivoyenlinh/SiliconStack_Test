import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { type } from 'os';
import { map, tap } from 'rxjs/operators';
import { GithubService } from 'src/app/services/github/github.service';
=======
import { GithubService } from 'src/app/services/github/github.service';
import { LoadingService } from '../loading/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastMessageComponent } from '../toast-message/toast-message.component';
>>>>>>> 01374d7 (update test)

@Component({
  selector: 'app-details-repository',
  templateUrl: './details-repository.component.html',
  styleUrls: ['./details-repository.component.scss']
})
export class DetailsRepositoryComponent implements OnInit {
  username: string;
  repositoryName: string;
  latestCommit: any;
  commitId: any;
  constructor(private route: ActivatedRoute,
<<<<<<< HEAD
    private githubService: GithubService) {
=======
    private githubService: GithubService,
    private loadingService: LoadingService,
    private dialog: MatDialog,
    ) {
>>>>>>> 01374d7 (update test)
    route.queryParams.subscribe((params) => {
      this.repositoryName = params["repositoryName"];
      this.username = params["username"];
    });
  }

  ngOnInit(): void {
<<<<<<< HEAD
    this.githubService.getLatestCommit(this.repositoryName, this.username).pipe(
    ).subscribe(
      (res) => {
        console.log(res)
        this.latestCommit = Object.values(res).slice(0,10);
=======
    this.loadingService.showLoading();
    this.githubService.getLatestCommit(this.repositoryName, this.username).pipe(
    ).subscribe(
      (res) => {
        this.latestCommit = Object.values(res).slice(0,10);
        this.loadingService.hideLoading()
      },
      (error) => {
        this.loadingService.hideLoading()
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

  clkCommit(url: string){
    console.log(url)
    window.open(url, '_blank');
<<<<<<< HEAD
    // this.showUserRepository = false;
    // console.log("clkRepository", repositoryName)
    // let navigationExtras: NavigationExtras = {
		// 	queryParams: { repositoryName: repositoryName, username: this.username},
		// };
    // this.router.navigate(['/details-repository'], navigationExtras);
=======
>>>>>>> 01374d7 (update test)
  }

}
