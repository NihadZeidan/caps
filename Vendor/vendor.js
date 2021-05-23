require("dotenv").config();
const myEvent = require("../events.js");
require("../Driver/driver.js");

const faker = require("faker")
const storeName = process.env.storeName





setInterval(() => {

    // let orderId = Math.ceil(Math.random() * 10000);

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

    myEvent.on("delivered", handleDelivered);

    function handleDelivered() {
        console.log("Thank You !");
    };

    module.exports = {
        handleDelivered,
        payload: customerOrder
    }



    myEvent.emit("pickup", customerOrder);

}, 5000);