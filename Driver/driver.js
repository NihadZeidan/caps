'use strict';

const myEvent = require("../events.js");

require("../Vendor/vendor.js");

myEvent.on('pickup', onPickupHandler);

function onPickupHandler(payload) {
    setTimeout(() => {
        console.log(`DRIVER: picked up OrderNumber :${payload.orderId}`)

        myEvent.emit('in-transit', payload);

        setTimeout(() => {
            console.log("delivered");
            myEvent.emit('delivered', payload);
        }, 3000);

    }, 1000);
}

module.exports = onPickupHandler