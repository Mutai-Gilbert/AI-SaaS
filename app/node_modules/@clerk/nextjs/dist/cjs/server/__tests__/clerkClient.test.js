"use strict";
var import_clerkClient = require("../clerkClient");
global.fetch = jest.fn(() => Promise.resolve(new Response(null)));
describe.skip("clerkClient", () => {
  it("should pass version package to userAgent", async () => {
    await import_clerkClient.clerkClient.users.getUser("user_test");
    expect(global.fetch).toBeCalled();
    expect(global.fetch.mock.calls[0][1].headers).toMatchObject({
      Authorization: "Bearer TEST_API_KEY",
      "Content-Type": "application/json",
      "User-Agent": "@clerk/nextjs@0.0.0-test"
    });
  });
});
//# sourceMappingURL=clerkClient.test.js.map