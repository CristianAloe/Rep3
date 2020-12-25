import { UserService } from './services/user.service'; //17.6) e così l’editor dovrà in modo automatico importare UserService da ./users/user.service
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],//17.5)Ma questa dipendenza non sa da dove iniettarla e quindi dobbiamo andare su app.module.ts  e dobbiamo metterlo sulla voce “providers” per dirgli da dove deve essere iniettato il servizio.
  bootstrap: [AppComponent]
})
export class AppModule { }
