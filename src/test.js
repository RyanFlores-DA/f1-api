const { F122UDP } = require("f1-22-udp");
const WebSocket = require("ws");
const http = require('http');

const f122 = new F122UDP()
f122.start();

f122.on("sessionHistory", data => {
    console.log(data);
});
f122.on("sessionHistory", data => {
    console.log(data); //m_tyreActualCompound m_tyreStintsHistoryData
});
// f122.on("lapData", data => {
//     console.log(data); //lastLapTime currentLapTime safetyCarDelta
// });
// f122.on("carSetups", data => {
//     console.log(data);
// });