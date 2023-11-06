let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp)


describe('/can  create  cities', () => {
  it('it should create  new  cities ', (done) => {
    chai.request(server)
      .post('/api/cities')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get all  cities  data', () => {
  it('it should GET all the cities', (done) => {
    chai.request(server)
      .get('/api/cities')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get cities by id', () => {
  it('it should GET all the cities', (done) => {
    chai.request(server)
      .get('/api/cities/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can  update cities', () => {
  it('it should update cities with the id ', (done) => {
    chai.request(server)
      .put('/api/cities/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  get   cities with paginate', () => {
  it('it should get  cities with paginate ', (done) => {
    chai.request(server)
      .post('/api/cities/paginate')
      .send({limit: 20,page:1})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  delete  cities', () => {
  it('it should delete    cities ', (done) => {
    chai.request(server)
      .delete('/api/cities/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});


