const puppeteer = require("puppeteer");
const BASE_URL = "https://beautifier.io/";
const pretty = {
  browser: null,
  page: null,

  initialize: async () => {
    pretty.browser = await puppeteer.launch({
      headless: true,
    });

    pretty.page = await pretty.browser.newPage();
  },

  start: async (code) => {
    await pretty.page.goto(BASE_URL, { waitUntil: "networkidle2" });

    await pretty.page.waitForSelector(".CodeMirror");

    await pretty.page.click("div.CodeMirror-scroll");

    await pretty.page.type("div.CodeMirror-lines", code);

    await pretty.page.click("button.submit");

    const formattedCode = await pretty.page.$eval(
      "div.CodeMirror-scroll",
      (el) => el.innerText
    );

    return formattedCode;
  },
};

module.exports = pretty;
