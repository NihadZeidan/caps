require("dotenv").config();
const myEvent = require("../events.js");

const faker = require("faker")
const storeName = process.env.storeName

require("../Driver/driver.js");


myEvent.on("delivered", handleDelivered);

function handleDelivered() {
    console.log("Thank You !");
};


setInterval(() => {


    let addresses = ["Jarash", "Amman", "Az-Zarqa", "Aqaba", "Irbid", "Al-salt", "Al-Karak"];

    let randomAddress = () => {
        return addresses[Math.ceil(Math.random() * 6)];
    }

    let customerOrder = {
        storeName: storeName,
        orderId: faker.datatype.number(10000),
        customerName: faker.name.findName(),
        address: randomAddress()
    }

    module.exports = {
        handleDelivered,
        payload: customerOrder
    }


    myEvent.emit("pickup", customerOrder);


}, 5000);