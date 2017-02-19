import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule} from "@angular/flex-layout";
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import { SettingsComponent } from './settings/settings.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCXTokQss2Olkr7XyGgabAAJJa2abHNBwQ",
  authDomain: "my-coach-76547.firebaseapp.com",
  databaseURL: "https://my-coach-76547.firebaseio.com",
  storageBucket: "my-coach-76547.appspot.com",
  messagingSenderId: "69659162981"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientComponent,
    SettingsComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
