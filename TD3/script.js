var niveau = document.getElementsByName("niveau");
var interval;
var button = document.querySelector(".button");
var button1 = document.querySelector(".button1");
var jeu =true;
button1.addEventListener("click", (e)=>{
    var citrouille = document.querySelectorAll(".pumpkin");
    var count = document.querySelector("#score");
    count.innerHTML =  0;
    var game_over = document.querySelector(".game");
    citrouille.forEach(e => {
        document.body.removeChild(e);
    });
    document.body.removeChild(game_over);
});
//Clique du bouton lancer
button.addEventListener("click", (r)=>{
    niveau.forEach(element => {
        if (element.checked == true) {
             intervale(parseInt(element.value))
        }
    });
});

function intervale(k) {
    interval = setInterval(createCitrouille, k);
}
// console.log(document.body.clientHeight -300);
function genererPosition() {
    //document.body.clientHeigth j'ai eu des pb car la valeur etait troo basse
   var top = Math.floor(Math.random() * 450)+"px";
    var left = Math.floor(Math.random() * (document.body.clientWidth -300))+"px";
    return [top, left];
}

function createCitrouille() {
    if (document.querySelectorAll(".pumpkin").length==5) {
        clearInterval(interval);
        var game_over = document.createElement("div");
        game_over.className = "game over";
        game_over.innerHTML = "GAME OVER";
        document.body.appendChild(game_over);
        jeu = false;
        
    } 
        else{
        var pumpkin = document.createElement("div");
        pumpkin.className = "pumpkin";
        var position = genererPosition();
        pumpkin.setAttribute("style","left:"+position[1]+";top:"+position[0]+";");
        var leftPumpkin = document.createElement("div");
        leftPumpkin.className = "left-pumpkin";
        var rightPumpkin = document.createElement("div");
        rightPumpkin.className = "right-pumpkin";
        var middlePumpkin = document.createElement("div");
        middlePumpkin.className = "middle-pumpkin";
        var mouth = document.createElement("div");
        mouth.className = "mouth";
        var lip = document.createElement("div");
        lip.className = "lip";
        var tooth1 = document.createElement("div");
        tooth1.className = "tooth t1";
        var tooth2 = document.createElement("div");
        tooth2.className = "tooth t2";
        var tooth3 = document.createElement("div");
        tooth3.className = "tooth t3";
        var eye1 = document.createElement("div");
        eye1.className = "eye e1";
        var eye2 = document.createElement("div");
        eye2.className = "eye e2";
        var nose = document.createElement("div");
        nose.className = "nose";
        var stem = document.createElement("div");
        stem.className = "stem";  
        pumpkin.appendChild(leftPumpkin);
        pumpkin.appendChild(rightPumpkin);
        pumpkin.appendChild(middlePumpkin);
        pumpkin.appendChild(mouth);
        pumpkin.appendChild(lip);
        pumpkin.appendChild(tooth1);
        pumpkin.appendChild(tooth2);
        pumpkin.appendChild(tooth3);
        pumpkin.appendChild(eye1);
        pumpkin.appendChild(eye2);
        pumpkin.appendChild(nose);
        pumpkin.appendChild(stem);
        document.body.appendChild(pumpkin);
        pumpkin.addEventListener("click", function () { explosion(this)});
        }
}

function explosion(pumpkin) {
    if (jeu) {
        var count = document.querySelector("#score");
        count.innerHTML =  1 + parseInt(count.innerHTML);
        document.body.removeChild(pumpkin);
    }
}
