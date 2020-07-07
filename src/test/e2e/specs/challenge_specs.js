const mocha = require('mocha');
const describe = mocha.describe;
const getIndex = require('../test_lib/find__row_array_index');
const Browser = require('../test_lib/base_page');
WElements = require('../test_lib/webpage_elements');

describe("Scroll challenge", () => {
    it.skip('should display submit button', () => {
        Browser.load();
        /**
         * Render the Challenge
         * */
        $("#home > div > div > button > div > div > span").click();
        /**
         * Handle Scroll
         * */
        const submit_button = $('#challenge > div > div > div:nth-child(8) > div > div:nth-child(7) > button > div > div > span');
        submit_button.scrollIntoView();
        /**
         * Assertion to make sure submit button is displayed.
         * */
        assert.equal(true, submit_button.isDisplayedInViewport())
    });
});
describe("The Challenge to find out the index", () => {
    it('should be able submit array indexes ', () => {
        Browser.load();
        $("#home > div > div > button > div > div > span").click();
        const row1_data = $('#challenge > div > div > div:nth-child(7) > div > div:nth-child(2) > table > tbody > tr:nth-child(1)').getText();
        const row2_data = $('#challenge > div > div > div:nth-child(7) > div > div:nth-child(2) > table > tbody > tr:nth-child(2)').getText();
        const row3_data = $('#challenge > div > div > div:nth-child(7) > div > div:nth-child(2) > table > tbody > tr:nth-child(3)').getText();
        let first_index_input = getIndex.find_index_from_which_sum_of_left_and_right_is_equal(row1_data);
        console.log("Index:", first_index_input);
        let second_index_input = getIndex.find_index_from_which_sum_of_left_and_right_is_equal(row2_data);
        console.log("Index:", second_index_input);
        let third_index_input = getIndex.find_index_from_which_sum_of_left_and_right_is_equal(row3_data);
        console.log("Index:", third_index_input);
        /**
         * Submit the index values
         * */
        // WElements.submit_first_challenge.setValue(first_index_input);
        // WElements.submit_second_challenge.setValue(second_index_input);
        // WElements.submit_third_challenge.setValue(third_index_input);
        // WElements.enter_name.setValue('Tanvi Nanda');
        // WElements.submit_button.click();
        const submit_first_challenge = $('[data-test-id= "submit-1"]');
        const submit_second_challenge = $('[data-test-id= "submit-2"]');
        const submit_third_challenge = $('[data-test-id= "submit-3"]');
        const enter_name = $('[data-test-id= "submit-4"]');
        const submit_button = $('#challenge > div > div > div:nth-child(8) > div > div:nth-child(7) > button > div > div > span');
        submit_first_challenge.setValue(first_index_input);
        submit_second_challenge.setValue(second_index_input);
        submit_third_challenge.setValue(third_index_input);
        enter_name.setValue('Tanvi Nanda');
        submit_button.click();
    });
});
