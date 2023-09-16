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

// hago arrays para especificar que marca quiere el usuario
const arrayGaseosasCola = ["Cocacola","Pepsi","Manaos","La bichy"]
const arrayGaseosasNaranja = ["Fanta","Manaos","Crush"]
const arrayGaseosasPomelo = ["Crush","Schweppes","Manaos","Secco"]



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
                salirMenu = true;
                break

                default:
                    alert (`opción invalida`);


                    
    } 
}while (!salirMenu)
}  
menu()
  
function arrayCola(){
    let opcionIngresada2 =  parseInt( prompt (`Porfavor ingrese que marca de gaseosa Cola, desea comprar:
    1 - Coca cola
    2 - Pepsi
    3 - Manaos
    4 - La bichy`))
switch (opcionIngresada2) {
case 1: 
    console.log(arrayGaseosasCola[0]);
    break
case 2:
    console.log(arrayGaseosasCola[1]);
    break
case 3:
    console.log(arrayGaseosasCola[2]);
    break
case 4:
    console.log(arrayGaseosasCola[3]);
    break
default:
    alert ("opción invalida")}
}
   
function arrayNaranja(){
    let opcionIngresada3 =  parseInt( prompt (`Porfavor ingrese que marca de gaseosa Cola, desea comprar:
    1 - Fanta
    2 - Manaos
    3 - Crush`))
switch (opcionIngresada3) {
case 1: 
    console.log(arrayGaseosasNaranja[0]);
    break
case 2:
    console.log(arrayGaseosasNaranja[1]);
    break
case 3:
    console.log(arrayGaseosasNaranja[2]);
    break
default:
    alert ("opción invalida")}
}

function arrayPomelo(){
    let opcionIngresada3 =  parseInt( prompt (`Porfavor ingrese que marca de gaseosa Cola, desea comprar:
    1 - Crush
    2 - Schweppes
    3 - Manaos
    4 - Secco`))
switch (opcionIngresada3) {
case 1: 
console.log(arrayGaseosasPomelo[0]);
break
case 2:
    console.log(arrayGaseosasPomelo[1]);
    break
case 3:
    console.log(arrayGaseosasPomelo[2]);
    break
case 4:
    console.log(arrayGaseosasPomelo[3]);
    break
default:
    alert ("opción invalida")}
}