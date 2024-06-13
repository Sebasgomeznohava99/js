//Piedra, papel y tijera
let ganadas = 0;
let perdidas = 0;
let empates = 0;
let eleccionJugador = 0;
let eleccionPc = 0;
let jugador = prompt('Hola!!! \nPor favor danos tu nombre para saber con que persona es con la qué estaremos jugando el día de hoy')
saludar(jugador);
jugar();





function eleccionDelPc(jugadaPC){
    let mensajePC= ' ';
    if (jugadaPC == 1){
        mensajePC = 'El PC ha elegido piedra ✊'
    } else if (jugadaPC == 2){
        mensajePC = 'El PC ha elegido papel ✋'
    } else {
        mensajePC = 'El PC ha elegido tijera ✌️'
    }
    return mensajePC;
}

function eleccionDelJugador(jugada) {
    let mensajeJugador = ' ';

    do {
        if (jugada < 1 || jugada > 3 || isNaN(jugada)) {
            alert('Por favor ingresa un valor válido (1, 2 o 3)');
            jugada = Number(prompt('Elije con números entre las siguientes opciones: \n 1. Piedra ✊ \n 2. Papel ✋ \n 3. Tijera ✌️'));
        } else if (jugada == 1) {
            mensajeJugador = 'Has elegido piedra ✊';
        } else if (jugada == 2) {
            mensajeJugador = 'Has elegido papel ✋';
        } else {
            mensajeJugador = 'Has elegido tijera ✌️';
        }
    } while (jugada < 1 || jugada > 3 || isNaN(jugada));

    return mensajeJugador;
}


function combate(eleccionUsuario, pc){
    let resultadoCombate;
    if (eleccionUsuario == 1 && pc == 3){
        resultadoCombate = 'Felicidades, has ganado'
    } else if (eleccionUsuario == 2 && pc == 1){
        resultadoCombate = 'Felicidades, has ganado'
    } else if (eleccionUsuario == 3 && pc == 2){
        resultadoCombate = 'Felicidades, has ganado'
    } else if ( eleccionUsuario == pc){
        resultadoCombate = 'Has empatado, vamos a darle una vez más!!!'
    } else {
        resultadoCombate = 'Has perdido, tienes que hacerlo mejor en la próxima para ganarle a la dificultad del PC'
    }
    return resultadoCombate
}

function saludar(){
    alert(`Hola ${jugador}, espero estes demasiado bien el día de hoy, 
¿te sientes listo para unas partidas de piedra ✊, papel ✋ o tijera ✌️?`)
} 

function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function jugar(){
    let continuar;
    while (ganadas < 3 && perdidas < 3){
        eleccionPc = aleatorio(1, 3);
        eleccionJugador = Number(prompt('Elije con números entre las siguientes opciones: \n 1. Piedra ✊ \n 2. Papel ✋ \n 3. Tiijera ✌️'));
        alert(eleccionDelPc(eleccionPc));
        alert(eleccionDelJugador(eleccionJugador));
        combate(eleccionJugador, eleccionPc);
        alert(resultadoCombate);
        if (resultadoCombate == 'Felicidades, has ganado'){
            ganadas++
        } else if (resultadoCombate == 'Has empatado, vamos a darle una vez más!!!'){
            empates++
        } else {
            perdidas++
        }
        alert(`Empates: ${empates}
Ganadas: ${ganadas}
Perdidas: ${perdidas}
A seguir jugando!!!`)
            if (ganadas == 3){
                alert(`Felicidades, has ganado 3 partidas`)
            } else if(perdidas == 3){
                alert(`Lo lamento, debes volver a comenzar, has perdido 3`)
            }
            if (ganadas == 3 || perdidas == 3){
                continuar = confirm(`¿Quieres seguir jugando?`);
                if(!continuar){
                    alert('Muchas gracias por haber jugado');
                    break;
                }
            }
    }
    
}