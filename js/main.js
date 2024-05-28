let correctas = 0;
let incorrectas = 0;
let adivinanza;
let numero;



function usuario (){
    adivinanza = Number(prompt(`Por favor adivina el número que es correcto`))
    if(adivinanza == numero){
        correctas++
        alert(`Has ganado, eres demasiado inteligente, tienes que seguir así!!! 
El numero a adivinar era ${numero}`)
    }else if (adivinanza < numero){
        incorrectas++
        alert(`Casi aciertas, tienes que utilizar un número mayor para poder encontrar el número a adivinar
Correctas: ${correctas}
Incorrectas: ${incorrectas}`)
    } else {
        incorrectas++
        alert(`Tienes que utilizar un número menor
         ,así que por favor sigue intentando para ver cual es el número a adivinar
Correctas: ${correctas}
Incorrectas: ${incorrectas}`)
    }
    }

function aleatorio (){
    numero = Math.floor(Math.random()*10)
    alert(`Ya tengo el número, ahora preparate para adivinar el número que he escogido para ti:
Correctas: ${correctas}
Incorrectas: ${incorrectas}`)
}

let nombre = prompt(`Por favor introduce el nombre de la persona que se encuentra ingresando a esta pagina web para poder saber con quien estamos jugando`);
alert(`Bienvenido ${nombre}, espero que encuentres esta pagina demasiado divertida para ti`)
aleatorio()
while(correctas < 1){
    usuario()
}
