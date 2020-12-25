import { UserService } from '../services/user.service';
import { Template } from '@angular/compiler/src/render3/r3_ast';

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { User } from '../classes/user';

@Component({  //14.5)per mettere questo è necessario l'import del component
    selector: 'app-users', //14.6)richiamo questo componente  in app-component.html
    templateUrl: './users.component.html', //14.7) aggiungo il file users.component.html
    styleUrls: ['./users.component.css']  //14.8) Aggiungo il file users.component.css
    
})

export class UsersComponent implements OnInit{  //14.2) Per Creare il componente manualmente, creo la classe UsersComponent,  14.3)e dichiaro  questa classe in app.module.ts, 14.4)di conseguenza richiamo il @Component,
    title = 'Users'; //15.1 Valore in input che deve essere inserito users.component.html con la forma {{title}}
    users: User[] = [];//15.2)Adesso proviamo ad inserire un array di dati che faremo ciclare in users.component.html
   @Output() updateUser = new EventEmitter<User>();
   
    constructor(private service: UserService){ //17.4 Dipendency Injection: Angular va ad instanziare automaticamente la classe UserService dal costruttore di users.component.ts
            
        }

    ngOnInit(){ // 18.1) Vogliamo fare una chimata al service una volta che il componente è stato inizializzato. 
        this.users = this.service.getUsers();
    }

    onDeleteUser(user: User){ //22.8)Quindi ora andiamo a mettere l’evento in onDeleteUser nella classe Users, Quindi veniamo qui e creiamo questo metodo onDeleteUser che riceve un utente e andiamo subito  a provare a mettere un alert e vediamo se funziona (mettendo dentro  last name)
    //alert(user.lastname)
      this.service.deleteUser(user) ////22.9 Quindi a questo punto noi passiamo chiamare servizio perché il servizio ce l'abbiamo già qui si chiama Service quindi Punto Service Delete user e ripassiamo user 
    }

    onSelectUser(user: User){
        const userCopy = Object.assign({}, user);
        this.updateUser.emit(userCopy)
    }
}
