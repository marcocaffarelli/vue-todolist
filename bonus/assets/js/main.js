// Istruzioni:
// L'utente vuole poter modificare una task giá inserita
// ma vuole anche poter indicare che la task é stata completata
// inoltre se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
// ah non é finita, dice che quando cancella una task, non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
// si, l'utente é un ropi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"

let app = new Vue({
    el: "#app", 
    data:{
        //Array di stdenti di default
       studenti: [
          {text:"Mario Rossi"},
          {text:"Luca Verdi"},
          {text:"Elena Bianchi"}
       ],
       bocciati:[
          {text:"Fabio Verdi"},
          {text:"Roberta Rossi"},
          {text:"Marco Bianchi"}
       ],
       promossi:[
          {text:"Azzurra Bianchi"},
          {text:"Manuel Verdi"},
          {text:"Asia Rossi"},
    ],
       //valore iniziale dello studente che verrà creato nel input text
       studente: "",
    },
 
    methods:{
        inserisci(){
            //console.log("button clicked");
            // se l'elemento ha una lunghezza minore di 4 caratteri non verrà inserito nell'array
            //(this.studente.length < 4) ? null : this.studenti.unshift({text:this.studente});
            if(this.studente.length < 4){
            }else {
                //se'elemento ha più di 3 caratteri verrà inserito nell'array
                this.studenti.unshift({text:this.studente});
            }
        },
        elimina(studente,index){
            //Cliccando nell'icona lo studente verra spostato nell'array bocciati dall'array studenti
            this.bocciati.unshift(studente) && this.studenti.splice(index, 1)
        },
        rimuovi(studente,index){
            //Cliccando nell'icona lo studente verra spostato nell'array studenti dall'array promossi
            this.studenti.unshift(studente) && this.promossi.splice(index, 1)
        },
        promuovi(studente,index){
            //Cliccando nell'icona lo studente verra spostato nell'array promossi dall'array studenti
            this.promossi.unshift(studente) && this.studenti.splice(index, 1)
        },
        ripeti(studente, index){
            //Cliccando nell'icona lo studente verra spostato nell'array studenti dall'array bocciati
            this.studenti.unshift(studente) && this.bocciati.splice(index, 1)
        },
        cestina(studente){
            this.bocciati.splice(studente)
        }
    }
    
});