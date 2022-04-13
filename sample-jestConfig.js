
// Change this file name to jest.config.cjs
// Edit mongodburl & token secret
module.exports = {
  verbose: true,
  setupFiles: ["dotenv/config",'./jestSetup.js'],
  preset: "@shelf/jest-mongodb",
  testTimeout: 20000,
  "globals": {
    "TokenSecret": "asecretsecretfortesting",
    "MongoDbUrl": "<mongodb uri connection link>"
  }
};
