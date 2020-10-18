const lang = require("./lang");

module.exports = class Halloween {
  constructor(options) {
    this.options = options;
  }

  say() {
    const language = this.options.language;
    console.log(lang[language]);
  }
};
