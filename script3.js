var chei = document.getElementsByClassName('scrieNume')
var valori = document.getElementsByClassName('scrieRev')
var buton = document.getElementById('butonRev')
var scrie = document.getElementsByClassName('outputRev')[0]

buton.onclick = function(){
    var cheie = chei[0].value
    var valoare = valori[0].value

    if(cheie && valoare){
        localStorage.setItem(cheie,valoare)
        location.reload()
    }
}

for(let i = 0; i <localStorage.length; i++)
{
    var k = localStorage.key(i);
    var v = localStorage.getItem(k);

    scrie.innerHTML += `${k}: ${v}<br>`
}

document.addEventListener('keydown',sendRev)
function sendRev(event){
    if(event.key === 'Enter')
        buton.click();
}