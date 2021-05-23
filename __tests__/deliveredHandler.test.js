'use strict';

const myEvent = require("../events.js");

const deliveredFunction = require("../Vendor/vendor.js").handleDelivered;
const payload = require("../Vendor/vendor.js").payload;


describe("TEST EVENT HANDLERS", () => {


    let consoleTest;

    beforeEach(() => {
        consoleTest = jest.spyOn(console, "log").mockImplementation()
    });


    afterEach(() => {
        consoleTest.mockRestore();
    });


    it("TEST HANDLE DELIVERED", async() => {

        setTimeout(() => {

            myEvent.on('delivered', deliveredFunction);
            myEvent.emit('delivered', payload);

        }, 6000);


        setTimeout(() => {

            expect(consoleTest).toHaveBeenCalled();

        }, 7000);

    });



});