//Declaracion de onjetos y variables
var turno = 1;
var queTurno;
var arregloGato = new Array(9);
var celdas = document.getElementsByClassName("gato");

//Declaracion de funciones
function ganaJugador(letra) {
    if (
        (arregloGato[0] == letra && arregloGato[1] == letra && arregloGato[2] == letra) ||
        (arregloGato[3] == letra && arregloGato[4] == letra && arregloGato[5] == letra) ||
        (arregloGato[6] == letra && arregloGato[7] == letra && arregloGato[8] == letra) ||
        (arregloGato[0] == letra && arregloGato[3] == letra && arregloGato[6] == letra) ||
        (arregloGato[1] == letra && arregloGato[4] == letra && arregloGato[7] == letra) ||
        (arregloGato[2] == letra && arregloGato[5] == letra && arregloGato[8] == letra) ||
        (arregloGato[0] == letra && arregloGato[4] == letra && arregloGato[8] == letra) ||
        (arregloGato[2] == letra && arregloGato[4] == letra && arregloGato[6] == letra)) {
        alert("Jugador " + letra + " GANA");
        window.location.reload();
    }
}

function gato(evento) {
    var celda = evento.target;
    var idCelda = evento.target.id;
    var posicionAMarcar = idCelda[1] - 1;
    queTurno = turno % 2;
    if (queTurno != 0) {
        celda.innerHTML = "X";
        celda.style.background = "#7FFF00";
        arregloGato[posicionAMarcar] = "X";
        ganaJugador("X");
    } else if (queTurno == 0) {
        celda.innerHTML = "O";
        celda.style.background = "#FF8C00";
        arregloGato[posicionAMarcar] = "O";
        ganaJugador("O");
    }
    console.log(turno, queTurno, arregloGato);
    if (turno == 9) {
        alert("Empate");
        window.location.reload();
    } else {
        turno++
    }
}

function cargarDocumento() {
    var n = 0;
    while (n < celdas.length) {
        celdas[n].addEventListener("click", gato);
        n++;
    }
}

//Asignacion de eventos
window.addEventListener("load", cargarDocumento);