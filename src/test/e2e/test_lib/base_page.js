const {expect} = require('chai');

const load = () => {
    browser.url('http://localhost:3000/');
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
    maximize,
};