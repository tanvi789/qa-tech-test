# E2E Tests

## Overview
I have implemented the scroll and array challenge as part of this test code submission.
* Scenario 1 - handles scroll bar.
* Scenario 2 - finds out index and submit the answers and verify the dialog message.

## Observations
* Second scenario is in fail test due the answers mismatch. I believe its a bug as I have verified submitted indexes/answers.
* Array implementation logic is explained as:
    1. Sum all the elements of the Array 
    2. Division of the total sum by 2 
    3. Iterate through the array to make sure the cumulative sum of array elements is not greater than division by 2 value (as mentioned in step 2).
    4. If the value is greater, then that's the value and the index related is the index required to submit as an answer.
    5. If the sum of all left elements (considering the index as mentioned in step 4) and sum of all right elements are not equal, then the index is returned as null.    

## Technical Implementation
This framework implementation is based on Mocha + WebDriverIO as the primary test automation tool. 

The following folders are specially important in the project. 
* Specs - Holds feature files, to drive the acceptance test scenarios required for this exercise.
* test_lib - All helper functions like base page, web page actions, assertion.
* wdio.config - All the required configurations to execute the tests.
* Reports - Specs based

## Pre-requisite
Node 12.13.0

## Tools/Libraries
* Mocha - To write the scenario.
* WebDriverIO - To drive the frontend operations.
* Browser - Chrome
* Chai - To verify the expectations in terms of assertions.

## How to install
install
 `npm i`

## How to execute tests
execute
 `sh runTests.sh`  

## Console Log Results for 3 given arrays.

**************** Scenario 2 - Printing the result set ******************************
 
 Total sum of the row array elements: 462
 
 Division of the total sum: 231
 
 Index value: 10
 
 Left side total value: 226
 
 Right side total value: 226
 
 Index: 4
 
 **************** Scenario 2 - Printing the result set ******************************
 
 Total sum of the row array elements: 524
 
 Division of the total sum: 262
 
 Index value: 92
 
 Left side total value: 216
 
 Right side total value: 216
 
 Index: 3
 
 **************** Scenario 2 - Printing the result set ******************************
 
 Total sum of the row array elements: 364
 
 Division of the total sum: 182
 
 Index value: 40
 
 Left side total value: 162
 
 Right side total value: 162
 
 Index: 5


## Reports
`Specs based`
 
## Further Implementations
* Before & After hooks
* Docker based CI execution.
