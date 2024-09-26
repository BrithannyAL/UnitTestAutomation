import { Libro } from './libro';
import { Autor } from './autor';

describe('Libro', () => {

  let libro: Libro;
  beforeEach(() => {
    libro = new Libro();
  });

  it('should create an instance', () => {
    expect(new Libro()).toBeTruthy();
  });

  /*Nombre: Obtener un autor de un libro 
  Objetivo: Verificar que el metodo funciona correctamente
  Datos: {{ID de Autor -> 1, Nombre Autor -> Autor1, Apellido Autor -> Apellido1}, 
  {ID de Autor -> 2, Nombre Autor -> Autor2, Apellido Autor -> Apellido2}, 
  {ID de Autor -> 3, Nombre Autor -> Autor2, Apellido Autor -> Apellido2}}
  Resultado esperado: {ID de Autor -> 1, Nombre Autor -> Autor1, Apellido Autor -> Apellido1}, 
  {ID de Autor -> 2, Nombre Autor -> Autor2, Apellido Autor -> Apellido2}, 
  {ID de Autor -> 3, Nombre Autor -> Autor2, Apellido Autor -> Apellido2}*/
  it('Retornar un autor del libro por medio del identificador', () => {
    [
      { id: 1, nombre: 'Autor1', apellidos: 'Apellido1' },
      { id: 2, nombre: 'Autor2', apellidos: 'Apellido2' },
      { id: 3, nombre: 'Autor3', apellidos: 'Apellido3' },
    ].forEach(({ id, nombre, apellidos }) => {
      const autor = new Autor();
      autor.setIdentificador(id);
      autor.setNombre(nombre);
      autor.setApellidos(apellidos);

      libro.setAutor(autor);

      expect(libro.getAutor(id)).toBe(autor);
    });
  });
});
