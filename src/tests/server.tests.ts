import { buildTestServer } from "./testServer";

const server = buildTestServer();

test("Server health check route", async () => {
  const result = await server.inject({
    method: "GET",
    url: "/api",
  });

  expect(result.statusCode).toBe(200);
  expect(result.json()).toEqual({ status: "ok", running: true });
});
