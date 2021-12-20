
var slides=document.querySelector('.slider-items').children;
var nextS=document.querySelector(".right-slide");
var prevS=document.querySelector(".left-slide");
var totalS=slides.length;
var index=0;

nextS.onclick=function () {
    next("next")
}
prevS.onclick=function () {
    next("prev")
}

function next(direction){

    if(direction === "next"){
        index++
        if(index===totalS)
            index=0
    }
    else{
        if(index===0)
            index=totalS-1
        else
            index--
    }

    for(i=0;i < slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");

}





var btstergere=document.getElementsByClassName('sterge')

for(var i=0;i<btstergere.length;i++){
    var buton = btstergere[i];
    buton.addEventListener('click',removeOb)
}

function removeOb(event){
    var clicked = event.target;
    console.log(clicked)
    clicked.parentElement.parentElement.remove();
    updateTotal();
}

function updateTotal(){
    var iteme = document.getElementsByClassName('inCos')[0];
    var randuri = iteme.getElementsByClassName('rand');
    var total = 0;
    for(var i=0;i<randuri.length;i++){
        var rand = randuri[i];
        var pretElement = rand.getElementsByClassName('pret')[0];
        var cantitateElement = rand.getElementsByClassName('inputCantitate')[0];
        var pret = parseFloat(pretElement.innerText.replace('$',''));
        var cantitate = cantitateElement.value;
        total+=(pret*cantitate);
    }

    total = Math.round(total*10)/10
    document.getElementsByClassName('totalPret')[0].innerText='$' + total;
}

var cantitateInput = document.getElementsByClassName('inputCantitate');
for(var i = 0;i<cantitateInput.length;i++){
    var input = cantitateInput[i];
    input.addEventListener('change',fctCantitate)

}

function fctCantitate (event){
    var inp = event.target;
    if(isNaN(inp.value) || inp.value <= 0){
        inp.value = 1;
    }
    updateTotal();
}

var ad = document.getElementsByClassName('text-cumpar');
var adauga = ad[0];
var pretul = 0;
var nume = "";
adauga.addEventListener('click',function (){
    var informatii = slides[index].children;
    pretul = informatii[0].getAttribute('alt')
    pretul = pretul.replace('$','');
    pretul = parseFloat(pretul)

    nume = informatii[1].innerHTML;

    adaugaInCos(nume,pretul);
    updateTotal();
})

function adaugaInCos(nume,pretul){
    var randaux = document.createElement('div');
    randaux.classList.add('rand');
    var numeInCos = document.getElementsByClassName('inCos')[0].getElementsByClassName('cart-item-title')
    for(var i = 0;i<numeInCos.length;i++){
        if(numeInCos[i].innerText === nume) {
            alert('Deja in cos !')
            return
        }
    }
    randaux.innerHTML = `<div class="nume coloana">
                        <span class="cart-item-title">${nume}</span>
                    </div>
                    <span class="pret coloana">${pretul}</span>
                    <div class="pret coloana">
                        <input class="inputCantitate" type="number" value="1">
                        <button class="btn sterge" type="button">STERGE</button>
                    </div>
                    `;
    var randuriDeja = document.getElementsByClassName('inCos')[0];
    randuriDeja.append(randaux)
    randaux.getElementsByClassName('sterge')[0].addEventListener('click', removeOb)
    randaux.getElementsByClassName('inputCantitate')[0].addEventListener('change',fctCantitate)
}

document.getElementsByClassName('cumpara')[0].addEventListener('click',curata);
function curata(){
    alert('Serviciile au fost achizitionate!')
    var iteme = document.getElementsByClassName('inCos')[0];
    while(iteme.hasChildNodes()){
        iteme.removeChild(iteme.firstChild);
    }
    updateTotal();
}