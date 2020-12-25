export interface UserInterface { //23.2 Facciamo un interface gli diamo il nome e la chiamiamo user. Quindi abbiamo potuto farlo dalla riga di comando 
                        //23.3 Riempiamo l'interface con le sue proprietà
    id: number;                    
    name: string;      //23.5 possiamo definire anche i tipi esplicitamente in modo che il tipo che venga assegnato sia quello giusto.
    lastname: string;
    email: string;
    fiscalcode: string;
    province: string;
    phone: string;
    age: number;
}
