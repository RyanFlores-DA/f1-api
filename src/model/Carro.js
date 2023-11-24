const CarroService = require("../service/CarroService");

module.exports = class Carro {
    // constructor(lapTime) {
    //     this.lapTime = lapTime;
    // }
    constructor(){

    }

    setLapTime(lapTime){
        this.lapTime = lapTime;
    }

    getLapTime(){
        const carro = new CarroService();
        carro.convertMilesToHour();
        return  carro.convertMilesToHour(this.lapTime);
    }
}
