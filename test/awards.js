let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp)


describe('/can  create  awards', () => {
  it('it should create  new  awards ', (done) => {
    chai.request(server)
      .post('/api/awards')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get all  awards  data', () => {
  it('it should GET all the awards', (done) => {
    chai.request(server)
      .get('/api/awards')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get awards by id', () => {
  it('it should GET all the awards', (done) => {
    chai.request(server)
      .get('/api/awards/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can  update awards', () => {
  it('it should update awards with the id ', (done) => {
    chai.request(server)
      .put('/api/awards/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  get   awards with paginate', () => {
  it('it should get  awards with paginate ', (done) => {
    chai.request(server)
      .post('/api/awards/paginate')
      .send({limit: 20,page:1})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  delete  awards', () => {
  it('it should delete    awards ', (done) => {
    chai.request(server)
      .delete('/api/awards/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});


