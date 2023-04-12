import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github/github.service';
import { LoadingService } from '../loading/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastMessageComponent } from '../toast-message/toast-message.component';

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
    private githubService: GithubService,
    private loadingService: LoadingService,
    private dialog: MatDialog,
    ) {
    route.queryParams.subscribe((params) => {
      this.repositoryName = params["repositoryName"];
      this.username = params["username"];
    });
  }

  ngOnInit(): void {
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
      }
      )
  }

  clkCommit(url: string){
    console.log(url)
    window.open(url, '_blank');
  }

}
