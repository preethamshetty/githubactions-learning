const { test } = require("node:test");
const assert = require("node:assert/strict");
const { greeting } = require("../src/greeting.js");

test("greets a name", () => {
  assert.equal(greeting("GitHub Actions"), "Hello, GitHub Actions!");
});

test("trims whitespace around a name", () => {
  assert.equal(greeting("  Actions  "), "Hello, Actions!");
});

test("rejects an empty name", () => {
  assert.throws(() => greeting("   "), /Name must not be empty/);
});