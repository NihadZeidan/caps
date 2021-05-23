'use strict';

const { pick } = require("underscore");
const myEvent = require("./events.js");



function pickUpState() {
    const driver = require("./Vendor/vendor.js");
    let state = {
        Event: "Package Ready to PickUp",
        Time: Date(),
        Payload: driver.payload
    }
    console.log(state);
}


function deliveredState() {
    const driver = require("./Vendor/vendor.js");
    let state = {
        Event: "Package Delivered",
        Time: Date(),
        Payload: driver.payload
    }
    console.log(state)
}


function inTransitState() {
    const driver = require("./Vendor/vendor.js");
    let state = {
        Event: "Package In-Transit",
        Time: Date(),
        Payload: driver.payload
    }
    console.log(state);
}


myEvent.on('pickup', pickUpState);
myEvent.on("in-transit", inTransitState)
myEvent.on('delivered', deliveredState);


require('./Driver/driver.js');
require('./Vendor/vendor.js');