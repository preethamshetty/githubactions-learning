function greeting(name) {
  const displayName = name.trim();
  if (!displayName) {
    throw new Error("Name must not be empty");
  }

  return `Hello, ${displayName}!`;
}

module.exports = { greeting };