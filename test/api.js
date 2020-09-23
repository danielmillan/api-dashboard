"use stricts";
// SET ENV
process.env.NODE_ENV = "test";
// Libraries
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;
const server = require("../app");
// Configure Chai
chai.use(chaiHttp);
// Vars
const rootPath = "/api/v1";
const user = {
  identification: 901023,
  name: "User",
  last_name: "Test",
  position_id: 1,
};

describe("SERVER API TEST:", () => {
  describe("GET /", () => {
    it("should get root path", (done) => {
      chai
        .request(server)
        .get(rootPath)
        .end((err, res) => {
          if (err) console.error(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("GET 404", () => {
    it("should return 404", (done) => {
      chai
        .request(server)
        .get(`${rootPath}/main`)
        .end((err, res) => {
          if (err) console.error(err);
          expect(res).to.have.status(404);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("GET /users", () => {
    it("should return users", (done) => {
      chai
        .request(server)
        .get(`${rootPath}/users`)
        .end((err, res) => {
          if (err) console.error(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("POST /users", () => {
    it("should create a user", (done) => {
      chai
        .request(server)
        .post(`${rootPath}/users`)
        .send(user)
        .end((err, res) => {
          if (err) console.error(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("PUT /users", () => {
    it("should update info to user", (done) => {
      chai
        .request(server)
        .put(`${rootPath}/users/${user.identification}`)
        .send(user)
        .end((err, res) => {
          if (err) console.error(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("DELETE /users", () => {
    it("should drop a user", (done) => {
      chai
        .request(server)
        .delete(`${rootPath}/users/${user.identification}`)
        .end((err, res) => {
          if (err) console.error(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });
});
