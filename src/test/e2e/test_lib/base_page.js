const {expect} = require('chai');

const load = () => {
    browser.url(browser.options.baseUrl);
};

const pause = (milliseconds) => {
    browser.pause(milliseconds);
};

const maximize = () => {
    browser.maximizeWindow();
};


module.exports = {
    load,
    pause,
    maximize
};