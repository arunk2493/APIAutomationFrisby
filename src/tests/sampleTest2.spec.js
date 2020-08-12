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
    it("should provide HTTP specific assertions - POST", async () => {
        var response = await frisby.post("https://reqres.in/api/users",{
            name: "morpheus",
            job: "leader"
        });
        await expect(response.status).toEqual(201);
        console.log(response.body);
        await expect(response.json.name).toEqual("morpheus");
    });
})
