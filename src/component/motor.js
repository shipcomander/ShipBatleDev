//Объект включающий в себя логику для игрока и бота. Так же имеется статистика попаданий.

let motor = {
    stata: 0,
    getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min;
    },
    chose(life, event) {

        let index = [].indexOf;
        let arr = [];
        let shootingStar = document.querySelector(".shootingStar");
        let myFlit = document.querySelector(".myFlit");
        let finish = document.querySelector("#finish");
        let name  = document.querySelectorAll(".name");
        let guard  = document.querySelector(".guard");
        let exodus = document.querySelector("#exodus");
        let i = document.querySelector("#i");
        let randomr = myFlit.children[parseInt(this.getRandomArbitrary(0, 99))] 

//Проверка причины инициализации функции (Игрок или бот).
        switch(life) {
        case true:
        if(event.target.className === "shipblock" ) {
        event.target.className = "explosion"
        this.stata = this.stata + 1;
        }
        else if (event.target.className === "void") {
        event.target.className = "miss";
        name[0].classList.remove("youtourn");
        name[1].classList.add("youtourn");
        guard.style.zIndex = 100;
        setTimeout( ()=> this.chose(false), 1100);
        } 
    
        for (let n = 0; n < shootingStar.children.length; n++) {
            arr.push(shootingStar.children[n].className)
        }
    
        if(index.call(arr, "shipblock") < 0) {
          exodus.innerHTML = "ВЫ ПОБЕДИЛИ!"
          i.innerHTML = this.stata
          finish.className = "vise"
        }
        break;
        case false:
        if( randomr.className === "shipblock" ) {
            randomr.className = "explosion"
            setTimeout( ()=> this.chose(false), 1100);
        }
        else if ( randomr.className === "void" ) {
            console.log(1)
            randomr.className = "miss"
            name[0].classList.add("youtourn");
            name[1].classList.remove("youtourn");
            guard.style.zIndex = -100
        }
        else if ( randomr.className === "explosion" || "miss" ) {
            this.chose(false)
            return
        }
          
        for (let n = 0; n < myFlit.children.length; n++) {
            arr.push(myFlit.children[n].className)
        }
    
        if(index.call(arr, "shipblock") < 0) {
          exodus.innerHTML = "Поражение."
          i.innerHTML = this.stata
          finish.className = "vise"
        }
        break;
        default:
        return
        }
    }
}

export default motor;

