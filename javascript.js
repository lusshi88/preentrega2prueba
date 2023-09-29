// Esto sera una página que vende gaseosas

// function bienvenidaCliente() {
//   alert(`Les damos la bienvenida a nuestra tienda de gaseosas`);
// }

// bienvenidaCliente();

 href="./pages/gaseosascola.html"

function Marcasgaseosas(gaseosa1id, gaseosa2id, gaseosa3id, gaseosa4id) {
  this.gaseosa1 = gaseosa1id;
  this.gaseosa2 = gaseosa2id;
  this.gaseosa3 = gaseosa3id;
  this.gaseosa4 = gaseosa4id;
}
// con la función que cree arriba, empiezo a hacer varios objetos, solo voy cambiando el atributo

const gaseosasCola = new Marcasgaseosas("Cocacola", "Pepsi", "Manaos", "La bichy");
console.log(gaseosasCola);

const gaseosasNaranja = new Marcasgaseosas("Fanta", "Manaos", "Crush");
console.log(gaseosasNaranja);

const gaseosasPomelo = new Marcasgaseosas("Crush", "Schweppes", "Manaos", "Secco");
console.log(gaseosasPomelo);

// hago arrays para especificar que marca quiere el usuario (le especifico el gusto entre parentesis,asi cuando van al carrito, y hay por ejemplo 2 marcas iguales, se puedan diferenciar los gustos :D)
const arrayGaseosasCola = [
  "Cocacola(cola)",
  "Pepsi(cola)",
  "Manaos(cola)",
  "La bichy(cola)",
];
const arrayGaseosasNaranja = [
  "Fanta(naranja)",
  "Manaos(naranja)",
  "Crush(naranja)",
];
const arrayGaseosasPomelo = [
  "Crush(pomelo)",
  "Schweppes(pomelo)",
  "Manaos(pomelo)",
  "Secco(pomelo)",
];


// Funciones exclusivas para los gustos de gaseosas del DOM!
class GaseosasdeCola {
constructor (id, nombre, precio, litros,imagen) {
      
     this.id = id;
     this.nombre = nombre;
     this.precio = precio;
     this.litros = litros;
     this.imagen = imagen;
  
}
}
//Instanciación de objetos: 
const cola1 = new GaseosasdeCola(1,"Coca cola - Sabor original", 898, "2,5L","00180538.jpg" )
const cola2 = new GaseosasdeCola(2,"Pepsi", 694, "3L","00207054.jpg")

// capturo por medio del DOM
let colas = document.getElementById("gaseosasCola2");
let naranjas = document.getElementById("gaseosasCola2");
let pomelo = document.getElementById("gaseosasCola2");
let paginaCola=document.getElementById("gaseosasCola3");

// Aaca imprimi las cosas que se ven en el index.html con el DOM

let carCola = document.createElement("div"); 
carCola.className = "col-12 col-md-6 col-lg-4 my-2"
 carCola.innerHTML = ` <div id="1" class="card" style="width: 18rem;">
                    <img class="card-img-top img-fluid" style="height: 200px;"src="imagenes/ley-de-7NWNSWWLGJBKBA3QTB7QT4KAS4.webp" alt="Gaseosas de cola">
                    <div class="card-body">
                        <h4 class="card-title"></h4>
                        <a  href="./pages/gaseosascola.html" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Ver marcas de gusto Cola</a>
                     </div>
     </div> `

colas.append(carCola)


let carNaranja = document.createElement("div"); 
carNaranja.className = "col-12 col-md-6 col-lg-4 my-2"
 carNaranja.innerHTML = ` <div id="1" class="card" style="width: 18rem;">
                    <img class="card-img-top img-fluid" style="height: 200px;"src="imagenes/crush-nja1-a94ddde97a18c41d8516004366860968-1024-1024.jpeg" alt="Gaseosas de cola">
                    <div class="card-body">
                        <h4 class="card-title"></h4>   
                        <a  href="./pages/gaseosascola.html" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Ver marcas de gusto Naranja</a>
                     </div>
     </div> `

naranjas.append(carNaranja)


let carPomelo = document.createElement("div"); 
carPomelo.className = "col-12 col-md-6 col-lg-4 my-2"
 carPomelo.innerHTML = ` <div id="1" class="card" style="width: 18rem;">
                    <img class="card-img-top img-fluid" style="height: 200px;"src="imagenes/D_NQ_NP_639394-MLA69983179596_062023-O.webp" alt="Gaseosas de cola">
                    <div class="card-body">
                        <h4 class="card-title"></h4> 
                        <a  href="./pages/gaseosascola.html" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Ver marcas de gusto Pomelo</a>
                     </div>
     </div> `

pomelo.append(carPomelo)


// Aca imprimo lo que se ve en gaseosascola.html con el DOM
function mostrarGustosCola(array){
  //for of: para recorrer un array posición a posición
  for(let GaseosasdeCola of array){
let mostrargaseosascolaDiv = document.createElement("div")
    mostrargaseosascolaDiv.innerHTML = ` <div id="${GaseosasdeCola.id}" class="card" style="width: 18rem;">
    <img class="card-img-top img-fluid" style="height: 200px;"src="imagenes/D_NQ_NP_639394-MLA69983179596_062023-O.webp" alt="Gaseosas de cola">
    <div class="card-body">
        <h4 class="card-title"></h4> 
        <a  href="./pages/gaseosascola.html" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Ver marcas de gusto Pomelo</a>
     </div>
</div> `
paginaCola.append(mostrargaseosascolaDiv)

  }
}


const analizarEleccion = (opcionCola, array) => {
  let eleccion = array.find((prod, index) => {
    if (opcionCola === index + 1){
      
      return prod
    }
   })  
  return eleccion
};

// creo este array para guardar todo lo que pidio el cliente
const carrito = [];

function menu() {
  let salirMenu = false;
  do {
    let opcionIngresada = parseInt(
      prompt(`Porfavor ingrese la opción deseada, acorde al gusto que desea comprar
    1 - Gaseosas de cola
    2 - Gaseosas de naranja
    3 - Gaseosas de pomelo
    0-  Salir del menu`)
    );
    switch (opcionIngresada) {
      case 1:
        console.log(gaseosasCola);
        let opcionCola = parseInt(
          prompt(`Porfavor ingrese que marca de gaseosa gusto "Cola", desea comprar:
              1 - Coca cola 
              2 - Pepsi 
              3 - Manaos 
              4 - La bichy  `)
        );
        alert(analizarEleccion(opcionCola, arrayGaseosasCola));
        carrito.push()
        break;

      case 2:
        console.log(gaseosasNaranja);
        let opcionNaranja = parseInt(
          prompt(`Porfavor ingrese que marca de gaseosa gusto "Naranja", desea comprar:
              1 - Fanta 
              2 - Manaos
              3 - Crush `)
        );
        alert(analizarEleccion(opcionNaranja, arrayGaseosasNaranja));
        break;

      case 3:
        console.log(gaseosasPomelo);
        let opcionPomelo = parseInt(
          prompt(`Porfavor ingrese que marca de gaseosa gusto "Pomelo", desea comprar:
              1 - Crush 
              2 - Schweppes
              3 - Manaos 
              4 - Secco `)
        );
        alert(analizarEleccion(opcionPomelo, arrayGaseosasPomelo));
        break;
      case 0:
        console.log(
          `Gracias por utilizar nuestra tienda de gaseosas, vuelva prontos`
        );

        console.log(`Usted a comprado estas gaseosas: ${carrito}`);
        salirMenu = true;
        break;

      default:
        alert(`opción invalida`);
    }
  } while (!salirMenu);
}
// menu();

// function arrayCola() {
//   let opcionIngresada2 = parseInt(
//     prompt(`Porfavor ingrese que marca de gaseosa gusto "Cola", desea comprar:
//     1 - Coca cola
//     2 - Pepsi
//     3 - Manaos
//     4 - La bichy  `)
//   );
//   switch (opcionIngresada2) {
//     case 1:
//       console.log(arrayGaseosasCola[0]);
//       carrito.push(arrayGaseosasCola[0]);
//       break;
//     case 2:
//       console.log(arrayGaseosasCola[1]);
//       carrito.push(arrayGaseosasCola[1]);
//       break;
//     case 3:
//       console.log(arrayGaseosasCola[2]);
//       carrito.push(arrayGaseosasCola[2]);
//       break;
//     case 4:
//       console.log(arrayGaseosasCola[3]);
//       carrito.push(arrayGaseosasCola[3]);
//       break;
//     default:
//       alert("opción invalida");
//   }
// }

// function arrayNaranja() {
//   let opcionIngresada3 = parseInt(
//     prompt(`Porfavor ingrese que marca de gaseosa gusto "Naranja", desea comprar:
//     1 - Fanta
//     2 - Manaos
//     3 - Crush`)
//   );
//   switch (opcionIngresada3) {
//     case 1:
//       console.log(arrayGaseosasNaranja[0]);
//       carrito.push(arrayGaseosasNaranja[0]);
//       break;
//     case 2:
//       console.log(arrayGaseosasNaranja[1]);
//       carrito.push(arrayGaseosasNaranja[1]);
//       break;
//     case 3:
//       console.log(arrayGaseosasNaranja[2]);
//       carrito.push(arrayGaseosasNaranja[2]);
//       break;
//     default:
//       alert("opción invalida");
//   }
// }

// function arrayPomelo() {
//   let opcionIngresada3 = parseInt(
//     prompt(`Porfavor ingrese que marca de gaseosa gusto "Pomelo", desea comprar:
//     1 - Crush
//     2 - Schweppes
//     3 - Manaos
//     4 - Secco`)
//   );
//   switch (opcionIngresada3) {
//     case 1:
//       console.log(arrayGaseosasPomelo[0]);
//       carrito.push(arrayGaseosasPomelo[0]);
//       break;
//     case 2:
//       console.log(arrayGaseosasPomelo[1]);
//       carrito.push(arrayGaseosasPomelo[1]);
//       break;
//     case 3:
//       console.log(arrayGaseosasPomelo[2]);
//       carrito.push(arrayGaseosasPomelo[2]);
//       break;
//     case 4:
//       console.log(arrayGaseosasPomelo[3]);
//       carrito.push(arrayGaseosasPomelo[3]);
//       break;
//     default:
//       alert("opción invalida");
//   }
// }
