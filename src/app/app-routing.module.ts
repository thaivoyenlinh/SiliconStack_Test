import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsRepositoryComponent } from './components/details-repository/details-repository.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRepositoryComponent } from './components/user-repository/user-repository.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  // { path: 'search', component: SearchComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'user-repositories', component: UserRepositoryComponent },
  { path: 'details-repository', component: DetailsRepositoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
