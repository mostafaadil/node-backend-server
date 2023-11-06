let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp)


describe('/can  create  recordes', () => {
  it('it should create  new  recordes ', (done) => {
    chai.request(server)
      .post('/api/recordes')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get all  recordes  data', () => {
  it('it should GET all the recordes', (done) => {
    chai.request(server)
      .get('/api/recordes')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get recordes by id', () => {
  it('it should GET all the recordes', (done) => {
    chai.request(server)
      .get('/api/recordes/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can  update recordes', () => {
  it('it should update recordes with the id ', (done) => {
    chai.request(server)
      .put('/api/recordes/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  get   recordes with paginate', () => {
  it('it should get  recordes with paginate ', (done) => {
    chai.request(server)
      .post('/api/recordes/paginate')
      .send({limit: 20,page:1})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  delete  recordes', () => {
  it('it should delete    recordes ', (done) => {
    chai.request(server)
      .delete('/api/recordes/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});


