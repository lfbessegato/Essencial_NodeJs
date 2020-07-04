const CarroDB = require('./model/CarroDB2');

async function teste() {
    
    // promisse
    let carros = await CarroDB.getCarros()
    console.log(JSON.stringify(carros))
}
teste();