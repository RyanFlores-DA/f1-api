const { F122UDP } = require("f1-22-udp");
const WebSocket = require("ws");
const http = require('http');

const f122 = new F122UDP()
f122.start();


function converterMilissegundos(milissegundos) {
    // Calcula o total de segundos
    var totalSegundos = Math.floor(milissegundos / 1000);

    // Calcula o total de minutos
    var minutos = Math.floor(totalSegundos / 60);
    // Calcula os segundos restantes
    var segundos = totalSegundos % 60;

    // Calcula o total de horas
    var horas = Math.floor(minutos / 60);
    // Calcula os minutos restantes
    minutos = minutos % 60;

    return {
        horas: horas,
        minutos: minutos,
        segundos: segundos
    };
}

// f122.on("sessionHistory", data => {
//     console.log(data);
// });
// f122.on("carTelemetry", data => {
//     console.log(data);
// });
// f122.on("sessionHistory", data => {
//     console.log(data); //m_tyreActualCompound m_tyreStintsHistoryData
// });
f122.on("lapData", data => {
    console.log(data.m_lapData[0].m_currentLapTimeInMS); //lastLapTime currentLapTime safetyCarDelta
});
// f122.on("carSetups", data => {
//     console.log(data);
// });