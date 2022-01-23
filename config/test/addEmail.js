const chai = require('chai'),
    chaiHttp = require('chai-http');
chai.use(chaiHttp);
const env = require('../endpoint/test');
const fs = require('fs');

describe('Add Customer email', () => {

    it('Verifying Customer email was created', (done) => {
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
            "emailId": "999bbb@mail.com",
            "consentStatus": "REQUESTED",
            "consentDate": "2021-04-15"
        };

        chai.request(env.uri)
            .post('/ipb-app/services/customercore-rs/v1/customers/510000/emails')
            .send(address)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

});