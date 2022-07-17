
//Calcular el monto total de tu compra
function CalcularMonto (precioRopa, cantidadRopa, descuentoPorcentaje, precioEnvio) {
    let descuentoTotal = (precioRopa * descuentoPorcentaje) /100;
    let precioDescuento = (precioRopa - descuentoTotal);
    return (precioDescuento + cantidadRopa) + precioEnvio;
}

//el costo del envio es aproximadamente lo que se cobraria en el conurbano bonaerense
let envio = 1100  
let ropa = parseFloat(prompt('Ingrese el precio de la ropa que desea comprar'));
let cantidad = parseInt(prompt('Ingrese la cantidad de ropa que va a comprar'));
let descuento =parseInt(prompt('ingrese el porcentaje de su descuento'));

let montoFinal = CalcularMonto(ropa, cantidad, descuento, envio); 
alert ('El monto total de tu compra es $' + montoFinal);
