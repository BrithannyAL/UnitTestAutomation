import { Biblioteca } from './biblioteca';

//Bloque describe para agrupar pruebas
describe('Biblioteca', () => {
    it('should create an instance', () => {
        expect(new Biblioteca()).toBeTruthy();
    });
});

//Inicializar el componente y crear una instancia para cada prueba
let biblioteca: Biblioteca;
beforeEach(() => {
    biblioteca = new Biblioteca();
});


