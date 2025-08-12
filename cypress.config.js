
// comment
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



module.exports = {
    projectId: "fueifs",
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        logToFile(message) {
          fs.appendFileSync('logs.txt', message + '\n');
          return null;
        },
      });
    },
  },
};


