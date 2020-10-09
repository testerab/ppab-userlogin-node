const { exportAllDeclaration } = require("@babel/types");
const { italic } = require("chalk");
const credentials = require("./credentials.js");

it('returns true for a valid password', () =>
  expect(credentials.isValidCredentials("bob","123")).toBe(true)
)

it('returns false for an invalid password', () =>
  expect(credentials.isValidCredentials("invalid","invalid")).toBe(false)
)