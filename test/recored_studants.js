let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp)


describe('/can  create  recored_studants', () => {
  it('it should create  new  recored_studants ', (done) => {
    chai.request(server)
      .post('/api/recored-studants')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get all  recored_studants  data', () => {
  it('it should GET all the recored_studants', (done) => {
    chai.request(server)
      .get('/api/recored-studants')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can get recored_studants by id', () => {
  it('it should GET all the recored_studants', (done) => {
    chai.request(server)
      .get('/api/recored-studants/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});
describe('/can  update recored_studants', () => {
  it('it should update recored_studants with the id ', (done) => {
    chai.request(server)
      .put('/api/recored-studants/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  get   recored_studants with paginate', () => {
  it('it should get  recored_studants with paginate ', (done) => {
    chai.request(server)
      .post('/api/recored-studants/paginate')
      .send({limit: 20,page:1})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});

describe('/can  delete  recored_studants', () => {
  it('it should delete    recored_studants ', (done) => {
    chai.request(server)
      .delete('/api/recored-studants/1')
      .send({name: "name"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(true); done();
      });
  });
});


