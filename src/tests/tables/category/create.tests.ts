import { buildTestServer } from "../../testServer";

const server = buildTestServer();

test("Category/create: create single", async () => {
  const newCategory = {
    Category: "dog",
    Registration: "CFA",
  };

  const result = await server.inject({
    method: "POST",
    url: "/api/categories",
    payload: newCategory,
  });

  expect(result.statusCode).toBe(201);
  expect(result.json()).toEqual({
    Id: 1,
    ...newCategory,
  });
});
