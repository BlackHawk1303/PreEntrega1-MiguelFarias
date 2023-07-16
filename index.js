/*
  Chicos esto es lo que quiero agregar en mi proyecto con html y css
  una de sus pestañas tiene "3 proyecto" para comprar y/o pagar, así
  que esto vendria siendo la suma, aún no logro implementar la resta
  en esto 
*/
alert(
  "Ingrese número de proyecto que desea Adquirir, Si no lo desea ingresar 0"
);
let seleccionarProyecto = Number(
  prompt("1-Proyecto1 $30000 2-Proyecto2 $15000 3-Proyecto3 $22000")
);
//Declarar Variable
let seleccionarCantidad;
let total = 0;
const cantidad = (cant, valor) => {
  return cant * valor;
};

while (seleccionarProyecto != 0) {
  switch (seleccionarProyecto) {
    //Proyecto 1
    case 1:
      seleccionarCantidad = Number(
        prompt("Seleccionaste Proyecto 1, ¿Cuantos Deseas?")
      );
      total += cantidad(seleccionarCantidad, 30000);
      break;
    //Proyecto 1
    //Proyecto 2
    case 2:
      seleccionarCantidad = Number(
        prompt("Seleccionaste Proyecto 2, ¿Cuantos Deseas?")
      );
      total += cantidad(seleccionarCantidad, 15000);
      break;
    //Proyecto 2
    //Proyecto 3
    case 3:
      seleccionarCantidad = Number(
        prompt("Seleccionaste Proyecto 3, ¿Cuantos Deseas?")
      );
      total += cantidad(seleccionarCantidad, 22000);
      break;
      //Proyecto 3
      break;
    //No me lee la cantidad si no el numero, por ejemplo si pongo 1 me resta 1 no 30000
    //Restar
    case 4:
      seleccionarCantidad = Number(prompt("Seleccionaste Restar"));
      total -= seleccionarCantidad;
      break;
    default:
      break;
  }

  seleccionarProyecto = Number(
    prompt("1-Proyecto1 $30000 2-Proyecto2 $15000 3-Proyecto3 $22000 4-Restar")
  );
}

alert("El valor a pagar es:" + total);

//Evaluacion de envio de revista, merchandesing u otros.
const envio = () => {
  if (total >= 38000) {
    alert("El envio es gratuito");
  } else {
    total += 3500;
    alert("El valor del envio es de 3500, el total es: " + total);
  }
};
envio();

//Seleccionar método de pago
const metodoDePago = () => {
  let metodo = prompt("¿Pago en Efectivo o Tarjeta?");
  if (metodo == "Tarjeta") {
    total *= 0.85;
    console.log(total);
  } else if (metodo == "Efectivo") {
    total;
  }
};
