const tasaMensual = 0.05; 

function ingresoDatosPrestamo() {
    let montoSolicitado;
    
    while (true) {
        montoSolicitado = parseInt(prompt('Ingrese el monto solicitado'));
        if (!isNaN(montoSolicitado)) {
            console.log('El monto solicitado es ' + montoSolicitado + ' pesos.');
            break;
        } else {
            console.warn('El valor ingresado: ' + montoSolicitado + ' ' + 'no es un número');
        }
    }

    let plazoDelPrestamoMeses;

    while (true) {
        plazoDelPrestamoMeses = parseInt(prompt('Ingrese el plazo en meses'));
        if (!isNaN(plazoDelPrestamoMeses)) {
            console.log('El plazo del prestamo son ' + plazoDelPrestamoMeses + ' meses.');
            break;
        } else {
            console.warn('El valor ingresado no es un número');
        }
    }

    for (let i = 0; i <=1; i++) {
        let cuotaMensual = (montoSolicitado / plazoDelPrestamoMeses) 
        console.log ('El valor de su cuota mensual es' + ' ' + 'de' + ' ' + (cuotaMensual + (cuotaMensual * tasaMensual)) + ' ' + 'pesos')
        break;
    }
}

ingresoDatosPrestamo();




