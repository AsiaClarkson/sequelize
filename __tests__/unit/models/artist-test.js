const {
    expect
} = require('chai');


const Artist = require('../../../models/artist');

describe('name', () => {
    it('should be at least 3 characters', async () => {

        try {
            let artist = new Artist({
                name: 'a'
            });
            await artist.validate();
        } catch (error) {
            expect(error.errors[0].message).to.equal('Name must be between 2 and 10 characters');
        }
    });

    it('should be less than 10 characters', async () => {

        try {
            let artist = new Artist({
                name: 'abcdefghijkl'
            });
            await artist.validate();
        } catch (error) {
            expect(error.errors[0].message).to.equal('Name must be between 2 and 10 characters');
        }
    });

    it('should contain only letters', async () => {

        try {
            let artist = new Artist({
                name: '123'
            });
            await artist.validate();
        } catch (error) {
            expect(error.errors[0].message).to.equal('Name must only contain letters');
        }
    });
});