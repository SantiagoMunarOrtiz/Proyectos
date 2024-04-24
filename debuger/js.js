function CrearTienda1(contenerdorID,min,cantidadTienda){
    //encontar el contenedor por su id
    let elementocontenedor = document.getElementById(contenerdorID);
    // loop for para crear tienda como se pidan
    for(let conteoTiendas = 1 ; conteoTiendas<=cantidadTienda; conteoTiendas++ ){
        // crear texto label para poder llamar la funcion 
        let textoEtiqueta = "Tienda"+conteoTiendas;
        // crear tienda con crear ' p' tienda
        let parrafoTienda = CrearTienda(textoEtiqueta,min)
        // crear el parrafo contenedor
        elementocontenedor.appendChild(parrafoTienda);
    }
}


function CrearTienda(textolabel,valorMin){
    //primero vamos a crear la etiqueta parrafo
    let elementoParrafo = document.createElement("p");

    // crear elemento label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textolabel + " "+ "== " ;

    //conectar con el input 

    elementoEtiqueta.setAttribute("for",textolabel);
    // crear el input 
    let elementoInput = document.createElement("input");
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textolabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);
    //agregar label y input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo completo
    return elementoParrafo;

    
}




function extraerNumero(elemento){
    let miTexto = elemento.value;
    let miNumero = Number(miTexto)

    return miNumero;
}

// Función para realizar cálculos basados en las ventas de las tiendas.
function calcular() {
    // Inicializar variables
    let posicionVentas = 0;
    let ventas = [];
    // Obtener el contenedor de las ventas por su ID
    let elementoVentas = document.getElementById("itemsTienda");
    
    // Iterar sobre cada elemento hijo del contenedor de ventas
    for (let item of elementoVentas.children) {
        // Extraer el valor de la venta de cada elemento hijo
        let valorVenta = extraerNumero(item.children[1]);
        // Almacenar el valor de la venta en el array de ventas
        ventas[posicionVentas] = valorVenta;
        // Incrementar la posición para el siguiente elemento
        posicionVentas = posicionVentas + 1;
    }

    // Calcular el total de ventas
    let totalVentas = sumarTotal(ventas);
    // Encontrar la venta mayor
    let ventaMayor = calcularMayor(ventas);
    // Encontrar la venta menor
    let ventaMenor = calcularMenor(ventas);

    // Construir el mensaje con los resultados obtenidos
    let mensaje = "Total de ventas: " + totalVentas + ". Venta Mayor: " + ventaMayor + ". Venta Menor: " + ventaMenor;

    // Actualizar el contenido del elemento con ID "parrafoSalida" con el mensaje
    document.getElementById("parrafoSalida").textContent = mensaje;
}


function sumarTotal(array){
    let total = 0
    for(let venta of array){
         total += array; //Aquí deberías sumar el elemento actual, no todo el array
    }
    return total;
}



function calcularMayor(array){
    let maximo = array[0];
    for (let venta of array){
        if (venta>maximo){
            maximo=venta;
        }
    }
    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];
    for (let venta of array){
        if (venta<minimo){
            minimo=venta;
        }
    }
    return minimo;
}


