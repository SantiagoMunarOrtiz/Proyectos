let Datosjson;
fetch('Banco.json')
.then(res => res.json)
.then(salida =>{
    let Datosjson = salida

    let Datos = document.getElementById("text")
    Datos.textContent = Datosjson.Nombre
    
})
.catch(error => function(){
    alert(error)
})
