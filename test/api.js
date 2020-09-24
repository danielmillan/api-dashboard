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
const vehicle = {
  identification: "BYS966",
  brand: "mazda",
  model: "6 sedan",
  year: "2020",
  color: "red",
  bodywork: 1,
  fuel_type: 1,
};

describe("SERVER API TEST:", () => {
  describe("GET /", () => {
    it("should get root path", (done) => {
      chai
        .request(server)
        .get(rootPath)
        .end((err, res) => {
          if (err) done(err);
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
          if (err) done(err);
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
          if (err) done(err);
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
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("POST ERROR /users ", () => {
    it("should error when create a user", (done) => {
      chai
        .request(server)
        .post(`${rootPath}/users`)
        .send(user)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(409);
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
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("PUT ERROR /users", () => {
    it("should error when update user", (done) => {
      chai
        .request(server)
        .put(`${rootPath}/users/anonymous`)
        .send(user)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(500);
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
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("DELETE ERROR /users", () => {
    it("should error when drop a user", (done) => {
      chai
        .request(server)
        .delete(`${rootPath}/users/anonymous`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(500);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("GET /vehicles", () => {
    it("should return vehicles", (done) => {
      chai
        .request(server)
        .get(`${rootPath}/vehicles`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("POST /vehicles", () => {
    it("should create a vehicle", (done) => {
      chai
        .request(server)
        .post(`${rootPath}/vehicles`)
        .send(vehicle)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("POST ERROR /vehicles ", () => {
    it("should error when create a vehicle", (done) => {
      chai
        .request(server)
        .post(`${rootPath}/vehicles`)
        .send(vehicle)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(409);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("PUT /vehicles", () => {
    it("should update info to vehicle", (done) => {
      chai
        .request(server)
        .put(`${rootPath}/vehicles/${vehicle.identification}`)
        .send(vehicle)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("PUT ERROR /vehicles", () => {
    it("should error when update vehicle", (done) => {
      chai
        .request(server)
        .put(`${rootPath}/vehicles/anonymous`)
        .send(vehicle)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(500);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("DELETE /vehicles", () => {
    it("should drop a vehicle", (done) => {
      chai
        .request(server)
        .delete(`${rootPath}/vehicles/${vehicle.identification}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  describe("DELETE ERROR /vehicles", () => {
    it("should error when drop a vehicle", (done) => {
      chai
        .request(server)
        .delete(`${rootPath}/vehicles/anonymous`)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(500);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });
});
