const frisby = require('frisby');
const {
    Joi
} = frisby;

it('should return a 404 when deleting a playlist that does not exist', () => {
   return frisby
   .del('http://localhost:8000/api/playlists/-1') 
   .expect('status', 404);
});

it('should return a 204 when deleting a playlist that does exist', () => {
    return frisby
    .del('http://localhost:8000/api/playlists/6') 
    .expect('status', 204);
 });