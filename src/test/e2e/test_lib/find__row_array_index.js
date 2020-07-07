const find_index_from_which_sum_of_left_and_right_is_equal = (row_array) => {
    let index_value = [];
    let total_sum;
    let aggregated;
    let div_total_sum;
    let res_index = null;
    let left_value = 0;
    let right_value = 0;
    index_value = row_array.split(" ");
    for (let i = 0; i < index_value.length; i++) {
        if (i === 0) {
            total_sum = parseInt(index_value[i]);
        } else {
            total_sum = total_sum + parseInt(index_value[i]);
        }
    }
    aggregated = total_sum;
    console.log("****************Printing the result set******************************");
    console.log("Total sum of the row array elements:", total_sum);
    div_total_sum = total_sum / 2;
    console.log("Division of the total sum:", div_total_sum);
    for (let i = 0; i < index_value.length; i++) {
        if (i === 0) {
            total_sum = parseInt(index_value[i]);
        } else {
            total_sum = total_sum + parseInt(index_value[i]);
            if (total_sum > div_total_sum) {
                console.log("Index value:", parseInt(index_value[i]));
                left_value = total_sum - parseInt(index_value[i]);
                right_value = aggregated - total_sum;
                console.log("Left side total value:", left_value);
                console.log("Right side total value:", right_value);
                if (left_value != right_value) {
                    res_index = null;
                    break;
                } else {
                    res_index = parseInt(i);
                    break;
                }
            }
        }
    }
    /**
     * In case of res_index not getting any value from the above logic,
     * the default null value will be returned.
     * */
    return res_index;
};

module.exports = {
    find_index_from_which_sum_of_left_and_right_is_equal,
};