import { Biblioteca } from './biblioteca';
import { Libro } from './libro';
import { Prestamo } from './prestamo';
import { Socio } from './socio';

//Bloque describe para agrupar pruebas
describe('Biblioteca', () => {

    //Inicializar el componente y crear una instancia para cada prueba
    let biblioteca: Biblioteca;
    beforeEach(() => {
        biblioteca = new Biblioteca();
    });

    it('should create an instance', () => {
        expect(new Biblioteca()).toBeTruthy();
    });


    //Nombre: Encontrar un libro
    //Objetivo: Verificar que el metodo funciona correctamente
    //Datos: Codigo de Libro -> 10
    //Resultado esperado: La posicion del libro -> 1
    it('Encontrar un libro', () => {

        
        const libro = new Libro();
        libro.setCodigo(0);

        const libro2 = new Libro();
        libro2.setCodigo(10);
        
        biblioteca.setLibro(libro)
        biblioteca.setLibro(libro2)

        expect(biblioteca.buscarPosicionLibro(10)).toBe(1)
    });


    //Nombre: No encontrar un libro
    //Objetivo: Verificar que el metodo funciona correctamente
    //Datos: Codigo de Libro -> 20
    //Resultado esperado: La posicion del libro -> -1
    it('No encontrar un libro', () => {

        const libro = new Libro();
        libro.setCodigo(0);

        const libro2 = new Libro();
        libro2.setCodigo(10);
        
        biblioteca.setLibro(libro)
        biblioteca.setLibro(libro2)

        expect(biblioteca.buscarPosicionLibro(20)).toBe(-1)
    });

    //Nombre: Encontrar prestamos asociados a un socio.
    //Objetivo: Verificar que el metodo funciona correctamente
    //Datos: Cedula de socio -> 111
    //Resultado esperado: Prestamos asociados -> 3
    it('Tiene prestamos', () => {

        const socio = new Socio();
        socio.setCedula(111);

        const prestamo = new Prestamo()
        const prestamo2 = new Prestamo()
        const prestamo3 = new Prestamo()

        prestamo.setSocio(socio);
        prestamo2.setSocio(socio);
        prestamo3.setSocio(socio);
        
        biblioteca.setPrestamo(prestamo);
        biblioteca.setPrestamo(prestamo2);
        biblioteca.setPrestamo(prestamo3);

        expect(biblioteca.cantidadPrestamosDeUnSocio(111)).toBe(3)
    });

    //Nombre: No encontrar prestamos asociados a un socio.
    //Objetivo: Verificar que el metodo funciona correctamente
    //Datos: Cedula de socio -> 222
    //Resultado esperado: Prestamos asociados -> 0
    it('No tiene prestamos', () => {

        const socio = new Socio();
        const socio2 = new Socio();
        socio2.setCedula(222);

        const prestamo = new Prestamo()
        const prestamo2 = new Prestamo()
        const prestamo3 = new Prestamo()

        prestamo.setSocio(socio);
        prestamo2.setSocio(socio);
        prestamo3.setSocio(socio);
        
        biblioteca.setPrestamo(prestamo);
        biblioteca.setPrestamo(prestamo2);
        biblioteca.setPrestamo(prestamo3);

        expect(biblioteca.cantidadPrestamosDeUnSocio(222)).toBe(0)
    });
});




