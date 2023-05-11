import Kartya from "./Kartya.js";


class Jatekter{
    #kepeklista = []
    #kivalasztottkepeklista = []
    constructor(kepeklista){
        this.#kepeklista = kepeklista;
        let main = $("main");
        for (let index = 0; index < kepeklista.length; index++) {
            let kartya = new Kartya(kepeklista[index], main);
        }

        $(window).on("felfordit", (event)=>{
            this.#kivalasztottkepeklista.push(event.detail/* .kép elérése */)
        })

        if (this.#kivalasztottkepeklista.length == 2) {
            
        }
    }

    
} 


export default Jatekter