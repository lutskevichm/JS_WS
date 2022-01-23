const chai = require('chai'),
    chaiHttp = require('chai-http');
chai.use(chaiHttp);
const env = require('../endpoint/test');
const fs = require('fs');

describe('Delete Customer email', () => {

    it('Verifying Customer email was deleted', function (done) {
        chai.request(env.uri)
            .delete('/ipb-app/services/customercore-rs/v1/customers/510000/emails/409802012')
            .end(function (err, res) {
                should.equal(err, null);
                res.should.have.status(204);
                done();
            });
    });
});