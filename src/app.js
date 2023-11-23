const { F122UDP } = require("f1-22-udp");
const WebSocket = require("ws");
const http = require('http');
const Carro = require('../model/Carro.js');

const f122 = new F122UDP()
f122.start();

const server = http.createServer();
const wss = new WebSocket.Server({ server });

const carro = new Carro();

f122.on("lapData", data => {
    // data.m_lapData[0].m_currentLapTimeInMS
    carro.setLapTime(data.m_lapData[0].m_currentLapTimeInMS);
});

wss.on('connection', ws => {
    console.log('Cliente conectado ao servidor WebSocket.');
    
    f122.on("carTelemetry", data => {
        if (Array.isArray(data.m_carTelemetryData) && data.m_carTelemetryData.length > 0) {
            const speedCar = data.m_carTelemetryData[0].m_speed;
            const gearCar = data.m_carTelemetryData[0].m_gear;
            const rpmCar = data.m_carTelemetryData[0].m_engineRPM;
            // console.log(carro.getLapTime());
            console.log({
                speed: speedCar,
                gear: gearCar,
                rpm: rpmCar,
                lapTime: carro.getLapTime()
            });

            ws.send(JSON.stringify({ 
                speed: speedCar,
                gear: gearCar,
                rpm: rpmCar,
                lapTime: carro.getLapTime()
            }));
        } else {
            console.log("Dados de telemetria do carro indisponíveis ou vazios.");
        }
    });
});

server.listen(2002, () => {
    console.log('Servidor WebSocket está ouvindo na porta 2002.');
});





