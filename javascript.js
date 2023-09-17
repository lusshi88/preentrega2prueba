// Esto sera una página que vende gaseosas 


function bienvenidaCliente (){
    alert (`Les damos la bienvenida a nuestra tienda de gaseosas`)
}

bienvenidaCliente ();

function Gaseosas(gaseosa1id,gaseosa2id,gaseosa3id,gaseosa4id){
    this.gaseosa1 = gaseosa1id;
    this.gaseosa2 = gaseosa2id;
    this.gaseosa3 = gaseosa3id;
    this.gaseosa4 = gaseosa4id;
}
// con la función que cree arriba, empiezo a hacer varios objetos, solo voy cambiando el atributo

const gaseosasCola = new Gaseosas ("Cocacola", "Pepsi", "Manaos", "La bichy");
console.log(gaseosasCola);

const gaseosasNaranja = new Gaseosas ("Fanta", "Manaos", "Crush");
console.log(gaseosasNaranja);

const gaseosasPomelo = new Gaseosas ("Crush", "Schweppes", "Manaos", "Secco");
console.log(gaseosasPomelo);

// hago arrays para especificar que marca quiere el usuario (le especifico el gusto entre parentesis,asi cuando van al carrito, y hay por ejemplo 2 marcas iguales, se puedan diferenciar los gustos :D)
const arrayGaseosasCola = ["Cocacola(cola)","Pepsi(cola)","Manaos(cola)","La bichy(cola)"]
const arrayGaseosasNaranja = ["Fanta(naranja)","Manaos(naranja)","Crush(naranja)"]
const arrayGaseosasPomelo = ["Crush(pomelo)","Schweppes(pomelo)","Manaos(pomelo)","Secco(pomelo)"]

// creo este array para guardar todo lo que pidio el cliente
const carrito = []

function menu() {
    let salirMenu = false
    do{
        let opcionIngresada = parseInt( prompt (`Porfavor ingrese la opción deseada, acorde al gusto que desea comprar
    1 - Gaseosas de cola
    2 - Gaseosas de naranja
    3 - Gaseosas de pomelo
    0-  Salir del menu`))
switch (opcionIngresada) {
    case 1:
        Gaseosas();
        console.log(gaseosasCola);
        arrayCola();
        break

        case 2:
            Gaseosas();
            console.log(gaseosasNaranja);
            arrayNaranja();
            break

            case 3:
                Gaseosas();
                console.log(gaseosasPomelo);
                arrayPomelo();
                break
            case 0:
                console.log(`Gracias por utilizar nuestra tienda de gaseosas, vuelva prontos`);

                console.log( `Usted a comprado estas gaseosas: ${carrito}` );
                salirMenu = true;
                break

                default:
                    alert (`opción invalida`);


                    
    } 
}while (!salirMenu)
}  
menu()
  
function arrayCola(){
    let opcionIngresada2 =  parseInt( prompt (`Porfavor ingrese que marca de gaseosa gusto "Cola", desea comprar:
    1 - Coca cola 
    2 - Pepsi 
    3 - Manaos 
    4 - La bichy  `))
switch (opcionIngresada2) {
case 1: 
    console.log(arrayGaseosasCola[0]);
    carrito.push(arrayGaseosasCola[0]);
    break
case 2:
    console.log(arrayGaseosasCola[1]);
    carrito.push(arrayGaseosasCola[1]);
    break
case 3:
    console.log(arrayGaseosasCola[2]);
    carrito.push(arrayGaseosasCola[2]);
    break
case 4:
    console.log(arrayGaseosasCola[3]);
    carrito.push(arrayGaseosasCola[3]);
    break
default:
    alert ("opción invalida")}
}
   
function arrayNaranja(){
    let opcionIngresada3 =  parseInt( prompt (`Porfavor ingrese que marca de gaseosa gusto "Naranja", desea comprar:
    1 - Fanta
    2 - Manaos
    3 - Crush`))
switch (opcionIngresada3) {
case 1: 
    console.log(arrayGaseosasNaranja[0]);
    carrito.push(arrayGaseosasNaranja[0]);
    break
case 2:
    console.log(arrayGaseosasNaranja[1]);
    carrito.push(arrayGaseosasNaranja[1]);
    break
case 3:
    console.log(arrayGaseosasNaranja[2]);
    carrito.push(arrayGaseosasNaranja[2]);
    break
default:
    alert ("opción invalida")}
}

function arrayPomelo(){
    let opcionIngresada3 =  parseInt( prompt (`Porfavor ingrese que marca de gaseosa gusto "Pomelo", desea comprar:
    1 - Crush
    2 - Schweppes
    3 - Manaos
    4 - Secco`))
switch (opcionIngresada3) {
case 1: 
console.log(arrayGaseosasPomelo[0]);
carrito.push(arrayGaseosasPomelo[0]);
break
case 2:
    console.log(arrayGaseosasPomelo[1]);
    carrito.push(arrayGaseosasPomelo[1]);
    break
case 3:
    console.log(arrayGaseosasPomelo[2]);
    carrito.push(arrayGaseosasPomelo[2]);
    break
case 4:
    console.log(arrayGaseosasPomelo[3]);
    carrito.push(arrayGaseosasPomelo[3]);
    break
default:
    alert ("opción invalida")}
}