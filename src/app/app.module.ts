import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { LogoutComponent } from './logout/logout.component';

import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './request/request.component';
import { EditComponent } from './profile/edit/edit.component';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    {
      authMethod: 'https://accounts.google.com',
      clientId:
        '800958282004-547qs5mtl73h8j5uqe6pl89e1i0v3qrc.apps.googleusercontent.com',
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
    },
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    }
  ],
  siteName: 'Arabeety',
  // TODO: update TOS and Privacy
  // tosUrl: '<your-tos-link>',
  // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    RequestComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCK_sAwBaNCCN3VoX73y0ocaI0ezIgxeio',
      region: 'EG'
    })
  ],
  providers: [],
  entryComponents: [RequestComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
