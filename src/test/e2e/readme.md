# E2E Tests

## Overview
I have implemented the scroll and array challenge as part of this test code submission.

## Technical Implementation
This framework implementation is based on Mocha + WebDriverIO as the primary test automation tool. 

The following folders are specially important in the project. 
* Specs - Holds feature files, to drive the acceptance test scenarios required for this exercise.
* test_lib - All helper functions like page objects, assertion, user test data
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

## Console Log
`****************Printing the result set******************************
 Total sum of the row array elements: 364
 Division of the total sum: 182
 Index value: 40
 [0-0] left value 162
 Right value 162
 Index: 5
`

## Reports
`Specs based`
 