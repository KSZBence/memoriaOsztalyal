class Kartya{
    #adat
    #divElem
    #imgElem
    constructor(adat, szuloElem){
        this.#adat = adat

        let htmlkartya = `<div><img src="./kepek/hatter.jpg" alt=""></div>`
        szuloElem.append(htmlkartya);

        this.#divElem = szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img");

        this.#divElem.on("click", ()=>{
            this.setKep(this)
            this.felfordit()
        })
    }

    getAdat() {
        return this.#adat;
    }

    setKep(kep){
        this.#imgElem.attr("src", kep)
    }


    felfordit(){
        const EV = new CustomEvent("felfordit", {detail: this.#adat});
        window.dispatchEvent(EV);
    }
}
export default Kartya