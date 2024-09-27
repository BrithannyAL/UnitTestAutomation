import { Biblioteca } from './biblioteca';
import { Libro } from './libro';
import { Prestamo } from './prestamo';
import { Socio } from './socio';

//Bloque describe para agrupar pruebas
describe('Biblioteca', () => {

    //Inicializar el componente y crear una instancia para cada prueba
    let biblioteca: Biblioteca;
    let libro: Libro;
    let libro2: Libro;
    let socio: Socio;
    let socio2: Socio;
    let prestamo: Prestamo;
    let prestamo2: Prestamo;
    let prestamo3: Prestamo;
    beforeEach(() => {
        biblioteca = new Biblioteca();
        libro = new Libro();
        libro2 = new Libro();
        socio = new Socio();
        socio2 = new Socio();
        prestamo = new Prestamo()
        prestamo2 = new Prestamo()
        prestamo3 = new Prestamo()
    });

    it('should create an instance', () => {
        expect(new Biblioteca()).toBeTruthy();
    });


    //Nombre: Encontrar un libro
    //Objetivo: Verificar que el método buscarPosicionLibro() de la clase biblioteca 
    //retorne la posición correcta del libro en la colección al buscar por su código identificador.
    //Datos: Codigo de Libro -> 10
    //Resultado esperado: La posicion del libro -> 1
    it('Buscar un libro que esté en la lista y devolver la posición en la que se encuentra.', () => {

        
    
        libro.setCodigo(0);
        libro2.setCodigo(10);
        
        biblioteca.setLibro(libro)
        biblioteca.setLibro(libro2)

        expect(biblioteca.buscarPosicionLibro(10)).toBe(1)
    });


    //Nombre: No encontrar un libro
    //Objetivo: Verificar que el método buscarPosicionLibro() de la clase biblioteca retorne -1 
    //cuando se busca un libro con un código identificador que no está presente en la colección de libros.
    //Datos: Codigo de Libro -> 20
    //Resultado esperado: -1 ya que el libro no se encuentra en la lista.
    it('Buscar un libro que no esté en la lista y devolver -1.', () => {

        libro.setCodigo(0);
        libro2.setCodigo(10);
        
        biblioteca.setLibro(libro)
        biblioteca.setLibro(libro2)

        expect(biblioteca.buscarPosicionLibro(20)).toBe(-1)
    });

    //Nombre: Encontrar prestamos asociados a un socio.
    //Objetivo: Verificar que el método cantidadPrestamosDeUnSocio() 
    //de la clase biblioteca retorne correctamente el número de préstamos asociados a un socio, identificado por su cédula.
    //Datos: Cedula de socio -> 111
    //Resultado esperado: Prestamos asociados -> 3
    it('Obtener la cantidad de prestamos vinculados que tiene un socio.', () => {

        socio.setCedula(111);

        prestamo.setSocio(socio);
        prestamo2.setSocio(socio);
        prestamo3.setSocio(socio);
        
        biblioteca.setPrestamo(prestamo);
        biblioteca.setPrestamo(prestamo2);
        biblioteca.setPrestamo(prestamo3);

        expect(biblioteca.cantidadPrestamosDeUnSocio(111)).toBe(3)
    });

    //Nombre: No encontrar prestamos asociados a un socio.
    //Objetivo: Verificar que el método cantidadPrestamosDeUnSocio() 
    //de la clase biblioteca retorne 0 cuando se consulta por un socio, identificado por su cédula, que no tiene prestamos asociados.
    //Datos: Cedula de socio -> 222
    //Resultado esperado: Prestamos asociados -> 0
    it('Obtener como cantidad 0 de prestamos de un socio si no tiene prestamos asociados.', () => {

        socio2.setCedula(222);

        prestamo.setSocio(socio);
        prestamo2.setSocio(socio);
        prestamo3.setSocio(socio);
        
        biblioteca.setPrestamo(prestamo);
        biblioteca.setPrestamo(prestamo2);
        biblioteca.setPrestamo(prestamo3);

        expect(biblioteca.cantidadPrestamosDeUnSocio(222)).toBe(0)
    });
});




