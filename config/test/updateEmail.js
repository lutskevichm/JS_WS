const chai = require('chai'),
    chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const env = require('../endpoint/test');
const fs = require('fs');

describe('Update Customer email', () => {

    it('Verifying Customer email was updated', (done) => {
        let address = {
            "contactMethod": "EMAIL",
            "contactType": "PERS",
            "preferredInd": true,
            "doNotSolicitInd": true,
            "comment": "TEST",
            "communicationPreferences": [
                "OTHER_PROD_INFO"
            ],
            "extensionFields": {},
            "emailId": "777bbb@mail.com",
            "consentStatus": "REQUESTED",
            "consentDate": "2021-04-15"
        };

        chai.request(env.uri)
            .put('/ipb-app/services/customercore-rs/v1/customers/510000/emails/409802006')
            .send(address)
            .end((err, res) => {
                console.log(err);
                should.equal(err, null);
                res.should.have.status(200);
                res.body.contactType.should.equal('WORK');
                done();
            });
    });

});