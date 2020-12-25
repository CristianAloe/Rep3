import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';//23.1 possiamo fare possiamo creare una cartella che si chiami Services è spostiamo questo file user.service.ts
//23.2 Veidiamo che c’è stato che il riferimento dell’import è cambiato in user.component.ts




@Component({
  selector: 'tr[app-user]', 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit { //19.1 è stato creato questo compoennte dalla riga di comando e vediamo che ha già l'ngOnint() //19.2 possiamo testarlo andando ad inserirlo su app.component.html
@Input('user-data') user: User  //20.2) Per poter utilizzare la variabile user nel componente app-user è necessario dichiararlo qui.  Ma in più dobbiamo dire che è una variabile di tipo input. ovvero che è printa a ricevere dati, mettendo il decoratore @Input() a cui all'interno posso mettere anche un alias chiamato "user-data". 20.4)dentro il decoratore possiamo mettre anche l'alias user-data (che deve essere presente anche in users.component.html)
@Output('onDeleteUser') onDeleteUser = new EventEmitter(); ////22.6 Come possiamo delegare al padre questo compito al padre, ovvero avvisando il padre con un evento creatp da noi usando l’event emitter(usato da Angular),
@Output() onSelectUser = new EventEmitter();
constructor(private userService: UserService) { } //22.1 Dobbiamo cancellare gli utenti cancellandoli dall’array . Però vogliamo farlo direttamente con il componente user. Però devo iniettare a questo componente user  il servizio service. Quindi metto la dipendenza nel costruttore in questo modo

  ngOnInit() {
  }
  deleteUser(){ //21.4) metto questo evento deleteUser() in user.component.ts
   
    this.onDeleteUser.emit(this.user);
    //this.userService.deleteUser(this.user); //22.5Dobbiamo ancora collegare il metodo, ovvero abbiamo messo il metodo nel serivice ma non lo stiamo usando qui in user.component.ts  (mettendo nel costruttore private Userservice). Quindi mettiamo il metodo deleteUser()

  }
  updateUser(){
     this.onSelectUser.emit(this.user)
  }
}





