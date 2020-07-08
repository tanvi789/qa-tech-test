const mocha = require('mocha');
const describe = mocha.describe;
const {expect, assert} = require('chai');
const getIndex = require('../test_lib/find_row_array_index');
const Browser = require('../test_lib/base_page');
Navigation = require('../test_lib/webpage_actions');

describe('hooks', function () {
    before(function () {
        console.log('Before');
    });

    after(function () {
        console.log('After');
    });
});

describe("Scroll challenge", async () => {
    it('should display submit button', async () => {
        await Browser.load();
        /**
         * Render the Challenge
         * */
        await Navigation.click_on_rendering();
        /**
         * Handle Scroll
         * */
        await Navigation.handle_scroll_bar();
    });
});
describe("The Challenge to find out the index", async () => {
    it('should be able submit array indexes ', async () => {
        await Browser.load();
        await Navigation.click_on_rendering();
        const row1 = await $('#challenge > div > div > div:nth-child(7) > div > div:nth-child(2) > table > tbody > tr:nth-child(1)');
        const row2 = await $('#challenge > div > div > div:nth-child(7) > div > div:nth-child(2) > table > tbody > tr:nth-child(2)');
        const row3 = await $('#challenge > div > div > div:nth-child(7) > div > div:nth-child(2) > table > tbody > tr:nth-child(3)');
        const row1_data = await row1.getText();
        const row2_data = await row2.getText();
        const row3_data = await row3.getText();
        let first_index_input = getIndex.find_index_from_which_sum_of_left_and_right_is_equal(row1_data);
        console.log("Index:", first_index_input);
        let second_index_input = getIndex.find_index_from_which_sum_of_left_and_right_is_equal(row2_data);
        console.log("Index:", second_index_input);
        let third_index_input = getIndex.find_index_from_which_sum_of_left_and_right_is_equal(row3_data);
        console.log("Index:", third_index_input);
        /**
         * Submit the index values & Dialog message verification
         * */
        await Navigation.submit_results_with_name_and_dialog_verification(first_index_input,
            second_index_input,
            third_index_input,
            'Tanvi Nanda');
    });
});
