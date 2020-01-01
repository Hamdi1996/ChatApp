import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';



export const firebaseConfig = {
  apiKey: "AIzaSyCb7Kki7trhkuatigjImiY1TWD1ED0Y-9U",
  authDomain: "chatapp-d93f8.firebaseapp.com",
  databaseURL: "https://chatapp-d93f8.firebaseio.com",
  projectId: "chatapp-d93f8",
  storageBucket: "chatapp-d93f8.appspot.com",
  messagingSenderId: "723028609611",
  appId: "1:723028609611:web:1b4a067930e9ca731e5bce",
  measurementId: "G-W56PYM8G9T"
};




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
