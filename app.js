
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento()
{
    //let numeroDeUsuario = document.querySelector('input');
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    //console.log(numeroDeUsuario);

    if (numeroDeUsuario == numeroSecreto)
    {
        asignarTextoElemento('p',`Acertaste el número, con ${intentos} ${(intentos == 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }
    else
    {
        if(numeroDeUsuario > numeroSecreto)
        {
            asignarTextoElemento('p',"El número es menor ");
        }
        else if (numeroDeUsuario < numeroSecreto)
        {
            asignarTextoElemento('p',"El número es mayor ");
        }
        intentos ++;
    }
    limpiarCaja();
    //console.log("tipo de dato de numeroDeUsuario: " + typeof(numeroDeUsuario));
    //console.log("tipo de dato de numeroSecreto: " + typeof(numeroSecreto));
    //console.log("La verificación es: " + (numeroDeUsuario == numeroSecreto));
    return;
}


function limpiarCaja()
{
    //let valorCaja = document.querySelector("#valorUsuario");
    //valorCaja.value = '';

    document.querySelector("#valorUsuario").value = '';
}

function condicionesIniciales()
{
    asignarTextoElemento('h1','Juego del número secreto actualizado');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    //console.log("Número secreto: " + numeroSecreto);
    intentos = 1;
}


function reiniciarJuego()
{
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar número aleatorio
    //Inicializar el número de intentos
    //Desabilitar boton "Nuevo Juego"
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}



function generarNumeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    //console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p','Ya se sortearon todos los números posíbles');
    }
    else
    {
        if (listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
    
}
condicionesIniciales();

asignarTextoElemento('h1','Juego del número secreto actualizado');
asignarTextoElemento('p','Indica un número del 1 al 10');
