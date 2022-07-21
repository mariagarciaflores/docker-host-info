const { app, server } = require("./index");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

describe("Host Server Endpoints", () => {
  it("GET /server-info should return host server information", async () => {
    const res = await requestWithSupertest.get("/server-info");

    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("hostName");
  });
});
