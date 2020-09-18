"use stricts";

const { use } = require("chai");
// Libraries
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;

// Init Http
chai.use(chaiHttp);
const URL = "http://localhost:8085/api/v1";

// Object
const user = {
  identification: 981023,
  name: "Daniel",
  last_name: "Millan",
  position_id: 1,
};

describe("Insert a User:", () => {
  it("should insert a user", (done) => {
    chai
      .request(URL)
      .post("/users")
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("Insert a User:with error", () => {
  it("should receive an error", (done) => {
    chai
      .request(URL)
      .post("/users")
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(500);
        done();
      });
  });
});

describe("Get all Users:", () => {
  it("should get all users", (done) => {
    chai
      .request(URL)
      .get("/users")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("Update a User:", () => {
  user["name"] = "Daniel F";
  it("should update a user", (done) => {
    chai
      .request(URL)
      .put(`/users/${user.identification}`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("Delete the User:", () => {
  it("should delete a user", (done) => {
    chai
      .request(URL)
      .del(`/users/${user.identification}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
