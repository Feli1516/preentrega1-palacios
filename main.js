let milanesa = 2000;
let pizza = 1700;
let hamburguesa = 1900;
let fideos = 1600;

let entrada = prompt("para comenzar a agregar al carrito presione enter, en caso contrario escriba ESC");
let total = 0;
while(entrada != "ESC"){
    let comida = parseInt(prompt("escriba el numero segun lo que quiera comprar :\nmilanesa = 1, pizza = 2, hamburguesa = 3, fideos = 4"));
    if(comida == 1){
        let cant = parseInt(prompt("Ingrese la cantidad a comprar"));
        total = total + (cant * milanesa);
    }else if(comida == 2){
        let cant = parseInt(prompt("Ingrese la cantidad a comprar"));
        total = total + (cant * pizza);
    }else if(comida == 3){
        let cant = parseInt(prompt("Ingrese la cantidad a comprar"));
        total = total + (cant * hamburguesa);
    }else if(comida == 4){
        let cant = parseInt(prompt("Ingrese la cantidad a comprar"));
        total = total + (cant * fideos);
    }else{
        alert("Numero incorrecto");
    }
    alert(`Hasta ahora el total a pagar es : ${total}`);
    entrada = prompt("para continuar agregando al carrito presione enter, en caso contrario escriba ESC");
};

function calculadora(total, edad){
    switch (edad){
        case "mayor":
            return total - (total / 10);
            break;
        
        case "menor":
            return total -((total * 20) / 100);
            break;
        default:
            return "edad no encontrada";
            break;
    }
}

alert(`Total a pagar : ${total}`);

alert("te ofrecemos un descuento segun tu edad");

let edad = prompt("descuento del 20% si tu edad es menor a 18 años, escriba menor\nddescuento del 10% si tu edadd es mayor a 18 años, escriba mayor");

let descuento = calculadora(total, edad);

alert(`Total a pagar : ${descuento}`);