const find_index_from_which_sum_of_left_and_right_is_equal = (row_array) => {
    let index_value = [];
    let total_sum;
    let div_total_sum;
    let res_index;
    index_value = row_array.split(" ");
    for (let i = 0; i < index_value.length; i++) {
        if (i === 0) {
            total_sum = parseInt(index_value[i]);
        } else {
            total_sum = total_sum + parseInt(index_value[i]);
        }
    }
    console.log("****************Printing the result set******************************");
    console.log("Total sum of the row array elements:", total_sum);
    div_total_sum = total_sum / 2;
    console.log("Division of the total sum:", div_total_sum);
    for (let i = 0; i < index_value.length; i++) {
        if (i === 0) {
            total_sum = parseInt(index_value[i]);
            //res_index = null; of index is not found
        } else {
            total_sum = total_sum + parseInt(index_value[i]);
            if (total_sum > div_total_sum) {
                console.log("Index value:", parseInt(index_value[i]));
                res_index = parseInt(i);
                break;
            }
        }
    }
    return res_index;
};

module.exports = {
    find_index_from_which_sum_of_left_and_right_is_equal,
};