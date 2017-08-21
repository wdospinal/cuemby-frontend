import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { routing } from './app.routing';
import { customHttpProvider } from './helpers/custom-http';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { DialogsService } from './dialogs.service';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'app/guards/auth.guard';
import { UserService } from 'app/user.service';
import { AuthenticationService } from 'app/authentication.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDn0-Y7XUdc5p9lO-q8Ki0K0UPRiJO0hh8',
  authDomain: 'letflix-67e8f.firebaseapp.com',
  databaseURL: 'https://letflix-67e8f.firebaseio.com',
  showId: 'letflix-67e8f',
  storageBucket: 'letflix-67e8f.appspot.com',
  messagingSenderId: '223381635725'
};

@NgModule({
  exports: [
    ShowDetailComponent,
  ],
  entryComponents: [
    ShowDetailComponent,
],
  providers: [
    DialogsService,
    customHttpProvider,
    AuthGuard,
    AuthenticationService,
    UserService
  ],
  declarations: [
    AppComponent,
    ShowComponent,
    ShowDetailComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    routing,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
