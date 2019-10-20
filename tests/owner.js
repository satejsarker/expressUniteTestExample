// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
// Configure chai
chai.use(chaiHttp);

chai.should();
describe("owner & pet", () => {
    describe("GET /", () => {
        // Test to get all owner record
        it("should get all owner record", (done) => {
             chai.request(app)
                 .get('/owner')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });      
           // Test to get single pet record
        it("should get a owner & relevant pet record", (done) => {
             const id = 1;
             chai.request(app)
                 .get(`/owner/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

      
         });
         it("should get error message from the server for invalid ID",(done)=>{
            let _response={
                "message": "invalid owner id"
            }
            chai.request(app)
            .get('/owner/asasas')
            .end((err,res)=>{
                res.should.have.status(404);
                res.body.should.be.a("object")
                res.body.should.be.eql(_response)
                done()
            })
        });
   
});