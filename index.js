const pretty = require("./beautifier");

const functions = {
  formatCode: async function (code) {
    await pretty.initialize();

    const formattedCode = await pretty.start(code);
    // console.log(formattedCode);
    return formattedCode;
  },
};

module.exports = functions;
