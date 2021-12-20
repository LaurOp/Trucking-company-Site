
window.onload = function(){
    setTimeout(curcubeu,4000);

    var but = document.querySelectorAll(".lalogin")
    var buton = document.querySelector("#butontrimite")

    but[0].addEventListener('click',myFunc)
    but[1].addEventListener('click',myFunc)
    but[2].addEventListener('click',myFunc)

    function curcubeu(){
        setInterval(myFunc(),16000);
    }

    function myFunc(){
        var c1=Math.floor(Math.random()*255)
        var c2=Math.floor(Math.random()*255)
        var c3=Math.floor(Math.random()*255)

        but[0].style.borderColor = `rgb(${parseInt(c1)},${parseInt(c2)},${parseInt(c3)})`;
        but[1].style.borderColor = `rgb(${parseInt(c1)},${parseInt(c2)},${parseInt(c3)})`;
        but[2].style.borderColor = `rgb(${parseInt(c1)},${parseInt(c2)},${parseInt(c3)})`;
        buton.style.borderColor = 'black';
        buton.style.background = `rgb(${parseInt(c1)},${parseInt(c2)},${parseInt(c3)})`;
    }


}

const regexuri= {
    username: /^[a-z\d]{1,20}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{1,10})$/,
    password: /^[\w-_]{1,20}$/
}

const valideaza = (aux,regex) => {
    if(aux.value === "")
        aux.className = 'invalid'
    else
        regex.test(aux.value) ? aux.className = 'valid' : aux.className = 'invalid';
}

let buto = document.querySelectorAll('input');
buto.forEach(item => item.addEventListener('keyup',
    e => {
    valideaza(e.target, regexuri[e.target.attributes.name.value])
    }
))