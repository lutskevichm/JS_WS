const chai = require('chai'),
    chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
const sendRequest = require('../lib/sendRequest');
const getCustomer = require('../data/getCustomer');
const env = require('../endpoint/test');
const fs = require('fs');

describe('Get Customer by entityNumber', () => {

    getCustomer.map((data) => {
        let response;
        let number = parseInt(data.uri.split('/')[6]);

        before(async () => {
            data.uri = env.uri + data.uri;
            response = await sendRequest(data);
        });

        it('Verifying Status Code is 200', async () => {
            const res = await chai.request(data.uri).get('');
            expect(res).to.have.status(200);
        });

        it('Verifying Content-type header ', async () => {
            const res = await chai.request(data.uri).get('');
            expect(res.header).to.have.property('content-type');
            expect(res.header['content-type']).to.equal('application/json;charset=UTF-8');
        });

        it('Verifying Customer Number ' + number, () => {
            expect(response.customerNumber).to.eql('510000');
        });

        it('Verifying Customer First Name with number ' + number, () => {
            expect(response.individualDetails.firstName).to.eql('Jannie');
        });
    })

});