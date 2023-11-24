const CarroService = require("../service/CarroService");

module.exports = class Carro {
    // constructor(lapTime) {
        //     this.lapTime = lapTime;
        // }
    constructor(){
        this.carro = new CarroService();
    }

    setGear(gear){
        this.gear = this.carro.gearRegress(gear);
    }

    getGear(){
        return this.gear;
    }

    setLapTime(lapTime){
        this.lapTime = this.carro.convertMilesToHour(lapTime);
    }

    getLapTime(){
        return  this.lapTime;
    }
}
