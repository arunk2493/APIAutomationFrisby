const frisby = require('frisby');

describe("Frisby", function() {
    it('should be user id 7', function () {
        return frisby.get('https://reqres.in/api/users?page=2')
            .then(function (res) {
                expect(res.json.data[0].id).toBe(7);
            });
    });
    it('should be user 1', function () {
        return frisby.get('https://reqres.in/api/users?page=2')
            .then(function (res) {
                expect(res.status).toBe(200);
            });
    });
})
