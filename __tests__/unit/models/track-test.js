const {
    expect
} = require('chai');


const Track = require('../../../models/track');

describe('track', () => {
    //Test 1: Milliseconds isn’t numeric
    describe('milliseconds', () => {
        it('should not pass validation if milliseconds is not numeric', async () => {

            try {
                let track = new Track({
                    milliseconds: 'NaN'
                });
                await track.validate();
            } catch (error) {
                expect(error.errors[0].message).to.equal('Milliseconds must be numeric');
            }
        });
    });

    //Test 2: Milliseconds is numeric
    describe('milliseconds', () => {
        it('should pass validation if milliseconds is numeric', async () => {

            try {
                let track = new Track({
                    milliseconds: 9001
                });
                await track.validate();
            } catch (error) {
                expect(error.errors[0].message).to.equal('Milliseconds must be numeric');
            }
        });
    });


});