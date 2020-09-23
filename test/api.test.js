"use stricts";

// Libraries
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;

// Init Http
chai.use(chaiHttp);
const URL = "http://localhost:8085/api/v1";

describe("GET ROOT:", () => {
  it("should get status server", (done) => {
    chai
      .request(URL)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
