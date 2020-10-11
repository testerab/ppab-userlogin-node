const Hash = require("./hash.js");

it('returns a string hashed with SHA256', () =>
  expect(Hash.HashPassword("123")).toBe(
    "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3")
)