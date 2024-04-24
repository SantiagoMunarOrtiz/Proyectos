// Suponiendo que tienes una instancia de CatalogoSvc llamada catalogoSvc
const catalogoSvc = new CatalogoSvc();

// Supongamos que tienes un objeto filtro de tipo CancionDTO
const filtro = {
    // Aquí puedes definir las propiedades del filtro según sea necesario
};

// Llamada al método para obtener canciones filtradas
const cancionesFiltradas = catalogoSvc.getCancionesFiltradas(filtro);

// Si deseas hacer algo con las canciones filtradas, puedes hacerlo aquí
console.log(cancionesFiltradas);
