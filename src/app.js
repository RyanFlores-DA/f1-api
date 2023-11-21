const { F122UDP } = require("f1-22-udp");
const WebSocket = require("ws");
const http = require('http');

const f122 = new F122UDP()
f122.start();

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    console.log('Cliente conectado ao servidor WebSocket.');

    f122.on("carTelemetry", data => {
        if (Array.isArray(data.m_carTelemetryData) && data.m_carTelemetryData.length > 0) {
            const velocidadeDoPrimeiroCarro = data.m_carTelemetryData[0].m_speed;
            console.log(velocidadeDoPrimeiroCarro);

            ws.send(JSON.stringify({ telemetry: velocidadeDoPrimeiroCarro }));
        } else {
            console.log("Dados de telemetria do carro indisponíveis ou vazios.");
        }
    });
});

server.listen(2002, () => {
    console.log('Servidor WebSocket está ouvindo na porta 2002.');
});





