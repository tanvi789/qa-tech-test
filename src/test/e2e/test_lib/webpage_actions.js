const {expect, assert} = require('chai');

const submit_results_with_name_and_dialog_verification = async (fIndex, sIndex, tIndex, name) => {
    const submit_first_challenge = await $('[data-test-id= "submit-1"]');
    const submit_second_challenge = await $('[data-test-id= "submit-2"]');
    const submit_third_challenge = await $('[data-test-id= "submit-3"]');
    const enter_name = await $('[data-test-id= "submit-4"]');
    const submit_button = await $('#challenge > div > div > div:nth-child(8) > div > div:nth-child(7) > button > div > div > span');
    await submit_first_challenge.setValue(fIndex);
    await submit_second_challenge.setValue(fIndex);
    await submit_third_challenge.setValue(tIndex);
    await enter_name.setValue(name);
    await submit_button.waitForExist();
    await submit_button.click();
    const Window =  await browser.getWindowHandle();
    await browser.switchToWindow(Window);
    const dialog_element = await $('.dialog');
    expect(await dialog_element.getText()).contains('Congratulations');
};

const click_on_rendering = async () => {
    const render_button = await $('#home > div > div > button > div > div > span');
    await render_button.click();
};

const handle_scroll_bar = async () => {
    const submit_button = await $('#challenge > div > div > div:nth-child(8) > div > div:nth-child(7) > button > div > div > span');
    await submit_button.scrollIntoView();
    /**
     * Assertion to make sure submit button is displayed.
     * */
    assert.isTrue(await submit_button.isDisplayed());
};


module.exports = {
    submit_results_with_name_and_dialog_verification,
    click_on_rendering,
    handle_scroll_bar
};