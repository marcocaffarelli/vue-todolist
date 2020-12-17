// Istruzioni:
// Create una todo list usando VueJS.
// Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
// Se non sapere che fare, di seguito trovate uno screenshot.
// Funzionalitá:
// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks
// Cliccando sulla "X" l'utente puó cancellare una task
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
let app = new Vue({
    el: "#app", 
    data:{
        //Array di stdenti di default
       studenti: [
          {text:"Mario Rossi"},
          {text:"Luca Verdi"},
          {text:"Elena Bianchi"}
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
                this.studenti.unshift({text:this.studente}), this.studente = "";
            }
        },
        elimina(index){
            //Cliccando nell'icona lo studente verra eliminato dall'array
            this.studenti.splice(index, 1)
        }
    }
    
});