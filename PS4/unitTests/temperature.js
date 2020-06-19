const app = require('../app');
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http'); // Has a dependency on mocha
const {expect} = chai;
const {describe} = mocha;


chai.use(chaiHttp);

describe('WX API', () => {
    it('should return 200 success code', function (done) {
       chai.request(app)
           .get('/ps4')
           .end((er, response) => {
                expect(response).to.have.status(200);
                //expect(response.body.message).to.not.to.include('fred');
                done();
        })
    });

    it('should not return a client error', function (done) {
        chai.request(app)
            .get('/ps4')
            .end( (er, response) => {
                expect(response.clientError).to.be.equal(false);
                done()
            })
    })
})

