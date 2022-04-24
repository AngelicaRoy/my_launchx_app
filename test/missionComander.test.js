const MissionComander = require('./../app/missionComander');
//Agregando prueba 1
describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
      const result = 1 + 2 
      expect(result).toBe(3);
    });
})
//Agregando prueba 2  
describe("Unit Tests for Mission Comander Class", () => {
    test('1) Create a mission commander objet', () => {
        const myMissionComander = new MissionComander("Woopa")
        expect(myMissionComander.name).toBe("Woopa");
    });
})                
