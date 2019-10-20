import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

// Configure chai
chai.use(chaiHttp);


chai.should();
chai.should();
describe("pet", () => {
    describe("Post & put /", () => {
/**
 * testing by adding a pet to the list 
 * and edit it with new value
 */
    })
    it("should add a new pet ",(done)=>{
        let _response={
            message:"new pet added successfully"
        }
        let _requestBody={
            "name":"testPet",
            "type":"dog",
            "breed":"deshi",
            "ownerId":1,
            "age":2,
            "color":"black & white"
        }
        chai.request(app)
        .post('/pet')
        .set('content-type', 'application/json')
        .send(_requestBody)
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.eql(_response)
            done();
         });
    })
    //update a pet value
    it("should update a pet ",(done)=>{
        let _response={
            message:"pet information edited successfully"
        }
        let _requestBody={
            "name":"unitTest",
            "type":"dog",
            "breed":"deshi",
            "ownerId":1,
            "age":2,

            "color":"black & white"
        }
        let id=28;
        chai.request(app)
        .put(`/pet/${id}`)
        .set('content-type', 'application/json')
        .send(_requestBody)
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.eql(_response)
            done();
         });
    })
//invalid pet id 
    it("should give invalid id response  a pet ",(done)=>{
        let _response={
            message:"invalid pet id provided"
        }
        let _requestBody={
            "name":"unitTest",
            "type":"dog",
            "breed":"deshi",
            "ownerId":1,
            "age":2,

            "color":"black & white"
        }
        let id=12312;
        chai.request(app)
        .put(`/pet/${id}`)
        .set('content-type', 'application/json')
        .send(_requestBody)
        .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.eql(_response)
            done();
         });
    })

    it("should give error message on update pet for invalid data type ",(done)=>{
        let _response={
            message:"Not valid data"
        }
        let _requestBody={
            "name":"unitTest",
            "type":"dog",
       
            "color":"black & white"
        }
        let id=28;
        chai.request(app)
        .put(`/pet/${id}`)
        .set('content-type', 'application/json')
        .send(_requestBody)
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
         });
    })
})