let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp)


describe('/can  create  unvarsecites', () => {
  it('it should create  new  unvarsecites ', (done) => {
    chai.request(server)
      .post('/api/unvarsecites')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get all  unvarsecites  data', () => {
  it('it should GET all the unvarsecites', (done) => {
    chai.request(server)
      .get('/api/unvarsecites')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get unvarsecites by id', () => {
  it('it should GET all the unvarsecites', (done) => {
    chai.request(server)
      .get('/api/unvarsecites/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can  update unvarsecites', () => {
  it('it should update unvarsecites with the id ', (done) => {
    chai.request(server)
      .put('/api/unvarsecites/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  get   unvarsecites with paginate', () => {
  it('it should get  unvarsecites with paginate ', (done) => {
    chai.request(server)
      .post('/api/unvarsecites/paginate')
      .send({limit: 20,page:1})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  delete  unvarsecites', () => {
  it('it should delete    unvarsecites ', (done) => {
    chai.request(server)
      .delete('/api/unvarsecites/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});


