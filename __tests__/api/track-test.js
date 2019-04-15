const frisby = require('frisby');

const {
    Joi
} = frisby;

it('should return a status of 200 when track is found', () => {
    return frisby.get('http://localhost:8000/api/tracks/5').expect('status', 200);
});

it('should return a status of 404 when track is not found', () => {
    return frisby.get('http://localhost:8000/api/tracks/-1').expect('status', 404);
});

it('should return the track name and its playlist', () => {
    return frisby.get('http://localhost:8000/api/tracks/5')
        .expect('json', 'name', 'Princess of the Dawn')
        .expect('jsonTypes', 'playlists.*', {
            id: Joi.number().required(),
            name: Joi.string().required()
        });
});

//Test 1: Track Does Not Exist
it('should return a status of 404 when track is not found', () => {
    return frisby
    .patch('http://localhost:8000/api/tracks/-1')
    .expect('status', 404);
});

//Test 2: Updating a Track Successfully
it('should return a 200 status code if track updated successfully', () => {
    return frisby
    .patch('http://localhost:8000/api/tracks/1', {
        name: 'ITP 405',
        albumId: 4,
        mediaTypeId: 2,
        genreId: 2,
        composer: 'David Tang',
        milliseconds: 40500,
        bytes: 123456,
        unitPrice: 2.99

    })
    .expect('status', 200)
    .expect('json', 'name', 'ITP 405')
    .expect('json', 'composer', 'David Tang')
});

//Test 3: Validation Errors
it('should return a 422 status code if validation fails', () =>{
    return frisby
    .patch('http://localhost:8000/api/tracks/1', {
      name: "",
      milliseconds: "a",
      unitPrice: "b"
    })
    .expect('status', 422)
});