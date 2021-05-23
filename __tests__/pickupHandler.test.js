'use strict';

const onPickupHandler = require("../Driver/driver.js");
const myEvent = require("../events.js");

const vendor = require("../Vendor/vendor.js")


describe("TEST EVENT HANDLERS", () => {


    let consoleTest;

    beforeEach(() => {
        consoleTest = jest.spyOn(console, "log").mockImplementation()
    });


    afterEach(() => {
        consoleTest.mockRestore();
    });


    it("TEST HANDLE PICKUP", () => {;

        myEvent.on('pickup', onPickupHandler);

        myEvent.emit('pickup', vendor.payload);



        setTimeout(() => {
            expect(consoleTest).toHaveBeenCalled();
        }, 6000)
    });



});