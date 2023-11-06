let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp)


describe('/can  create  states', () => {
  it('it should create  new  states ', (done) => {
    chai.request(server)
      .post('/api/states')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get all  states  data', () => {
  it('it should GET all the states', (done) => {
    chai.request(server)
      .get('/api/states')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get states by id', () => {
  it('it should GET all the states', (done) => {
    chai.request(server)
      .get('/api/states/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can  update states', () => {
  it('it should update states with the id ', (done) => {
    chai.request(server)
      .put('/api/states/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  get   states with paginate', () => {
  it('it should get  states with paginate ', (done) => {
    chai.request(server)
      .post('/api/states/paginate')
      .send({limit: 20,page:1})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  delete  states', () => {
  it('it should delete    states ', (done) => {
    chai.request(server)
      .delete('/api/states/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});


