var loc = document.getElementsByClassName("banner")[0];
var patrat = document.createElement('img');
patrat.src = "img/deloop.png"
patrat.style.width = "17vw"
patrat.style.position = "absolute";
patrat.style.bottom = '0';
patrat.style.right = '0';

let directie = "stanga";
let conditie = 0;

document.addEventListener('keydown',scrie)
function scrie(event) {
    var imag = document.getElementById("deloop")
    imag.style.animationPlayState = "paused"
    imag.style.visibility = "hidden";
    var tasta = event.code
    if (tasta === 'Enter') {
        document.getElementById("deloop").style.animationPlayState = "running";
        imag.style.visibility = "visible";
        if(conditie === 1){
            patrat.style.visibility = "hidden";
            }
    }
    else{
        if(conditie === 0){
        loc.append(patrat);
        conditie = 1;}
        else{
            patrat.style.visibility = "visible";
        }

        switch(tasta){
            case "KeyW":{
                patrat.style.bottom = `${parseInt(patrat.style.bottom)+20}px`
                break
            }
            case "KeyS":{
                patrat.style.bottom = `${parseInt(patrat.style.bottom)-20}px`
                break
            }
            case "KeyA":{console.log(directie)
                if(directie === "dreapta"){

                    patrat.style.transform = "rotateY(0deg)"
                    directie = "stanga"
                }
                patrat.style.right = `${parseInt(patrat.style.right)+25}px`
                break
            }
            case "KeyD":{
                if(directie === "stanga"){
                    patrat.style.transform = "rotateY(180deg)"
                    directie = "dreapta"
                }
                patrat.style.right = `${parseInt(patrat.style.right)-25}px`
                break
            }
        }

    }
}

