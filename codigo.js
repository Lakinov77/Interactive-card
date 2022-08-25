var number = document.getElementById("number")
const name = document.getElementById("name");
var nombre = document.getElementById("nombre");
const card_num = document.getElementById("card_num");
const MM = document.getElementById("MM");
const YY = document.getElementById("YY");
const cvc = document.getElementById("cvc");
const m_in = document.getElementById("m_in");
const y_in = document.getElementById("y_in");
const cvc2 = document.getElementById("cvc2");
const final = document.getElementById("final");

number.addEventListener("input", e =>{
    var value = e.target.value;

    if(value.length == 4 || value.length == 9 || value.length == 14){
        e.target.value = e.target.value + " "
    }else{
        e.target.value = e.target.value

    }
    card_num.textContent = e.target.value

})

function onlynumber(f){
    key = f.keyCode || f.which;
    teclado = String.fromCharCode(key);
    numeros="0123456789";
    if(numeros.indexOf(teclado) ==-1){
        return false
    }
}

name.addEventListener("input", a =>{
    a.target.value.toUpperCase()
    nombre.textContent = a.target.value
})
cvc2.addEventListener("input", b =>{
    cvc.textContent = b.target.value
})
m_in.addEventListener("input", c=>{
    MM.textContent = c.target.value
})
y_in.addEventListener("input",d=>{
    YY.textContent = d.target.value
})
//Botones para cambiar el display
var Confirm = document.getElementById("Confirm");
var Continue = document.getElementById("Continue");

Confirm.onclick = () =>{
    final.style.display="flex";
}
Continue.onclick = () =>{
    final.style.display="none";
}
