module.exports = class CarroService {
    constructor() {

    }

    convertMilesToHour(milissegundos) {
        var totalSegundos = Math.floor(milissegundos / 1000);

        var minutos = Math.floor(totalSegundos / 60);
        var segundos = totalSegundos % 60;
        var horas = Math.floor(minutos / 60);
        
        minutos = minutos % 60;

        return {
            horas: horas,
            minutos: minutos,
            segundos: segundos
        };
    }
}