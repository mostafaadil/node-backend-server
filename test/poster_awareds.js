let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp)


describe('/can  create  poster_awareds', () => {
  it('it should create  new  poster_awareds ', (done) => {
    chai.request(server)
      .post('/api/poster-awareds')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get all  poster_awareds  data', () => {
  it('it should GET all the poster_awareds', (done) => {
    chai.request(server)
      .get('/api/poster-awareds')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get poster_awareds by id', () => {
  it('it should GET all the poster_awareds', (done) => {
    chai.request(server)
      .get('/api/poster-awareds/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can  update poster_awareds', () => {
  it('it should update poster_awareds with the id ', (done) => {
    chai.request(server)
      .put('/api/poster-awareds/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  get   poster_awareds with paginate', () => {
  it('it should get  poster_awareds with paginate ', (done) => {
    chai.request(server)
      .post('/api/poster-awareds/paginate')
      .send({limit: 20,page:1})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  delete  poster_awareds', () => {
  it('it should delete    poster_awareds ', (done) => {
    chai.request(server)
      .delete('/api/poster-awareds/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});


