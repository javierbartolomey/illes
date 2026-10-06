// les dues variables son diferents

let nom = "Ana";
let Nom = "Carlos";


//les constants son variables que no
//canvien el seu valor

const G = 9.81;
const PI = 3.14;

noM = "Pepe"






//definimos la función
function saluda() {
    let valor = document.getElementById("campNom").value;
    document.getElementById("resultat").innerHTML = "Hola, " + valor;
}


function comprovalLogin() {
    let usuari = document.getElementById("usuari").value;
    let password = document.getElementById("password").value;

    /* if (usuari == "admin" && password == "1234") {
        alert("sessio iniciada")
    } else {
        alert("Usuari o contrassenya incorrecta")
    } */
    if (usuari != "admin") {
        alert("usuari incorrecte")
    }
    if (password != "1234") {
        alert("contrassenya incorrecte")
}
}







function calcular_precio() {
    const precio = document.getElementById("precio").value;
    const radioresSI = document.getElementById("residenteSI").checked;
    const radioresNO = document.getElementById("residenteNO").checked;

    const radiorfnG = document.getElementById("fnG").checked;
    const radiorfnGE = document.getElementById("fnGE").checked;
    const radiorfnGNO = document.getElementById("fnGNO").checked;

    let preciofinal =precio
    

    if (radiorfnGNO + radioresSI == true) {
        preciofinal = precio *0.75;
    }
    else if (radiorfnGE + radioresSI == true) { 
        preciofinal = precio * 0.60;
    }
    else if (radiorfnG + radioresSI == true) {
        preciofinal = precio * 0.80;
    }
    else if (radiorfnGNO + radioresNO == true) {
        preciofinal = precio * 1;
    }
    else if (radiorfnGE + radioresNO== true) { 
        preciofinal = precio * 0.85;
    }
    else if (radiorfnG + radioresNO == true) {
        preciofinal = precio * 0.95;
    }
    else {
        alert("Tienes que marcar una casilla");
    }
    alert(preciofinal);
}