import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './share/material.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRepositoryComponent } from './components/user-repository/user-repository.component';
import { DetailsRepositoryComponent } from './components/details-repository/details-repository.component';
import { LoadingComponent } from './components/loading/loading.component';
<<<<<<< HEAD
=======
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
>>>>>>> 01374d7 (update test)
// import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    UserRepositoryComponent,
    DetailsRepositoryComponent,
    LoadingComponent,
<<<<<<< HEAD
=======
    ToastMessageComponent,
>>>>>>> 01374d7 (update test)
    // SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
