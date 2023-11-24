module.exports = class CarroService {
    constructor() {
    }

    convertMilesToHour(milissegundos) {
        var totalSegundos = Math.floor(milissegundos / 1000);

        var minutos = Math.floor(totalSegundos / 60);
        var segundos = totalSegundos % 60;
        var mSegundos = milissegundos % 1000;
        minutos = minutos % 60;

        return {
            minutos: minutos,
            segundos: segundos,
            milissegundos: mSegundos
        };
    }

    gearRegress(gear){
        if (gear == '-1') {
            // console.log(gear.toString());
            return 'R'; 
        } else if (gear == '0') {
            // console.log(gear.toString());
            return 'N'; 
        } else {
            // console.log(gear.toString());
            return gear.toString();
        }
    }
}