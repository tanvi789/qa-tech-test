# Tests

## Overview
I have implemented all the Acceptance Criteria's.

## Technical Implementation
This framework implementation is async based, uses Cucumber + WebDriverIO as the primary test automation tool. 

The following folders are specially important in the project. 
* Features - Holds feature files, to drive the acceptance test scenarios required for this exercise.
* Steps - All step definition files, to drive the required operations on the frontend
* utility - All helper functions like page objects, assertion, user test data
* wdio.config - All the required configurations to execute the tests.
* Reports - Specs based.go

I hope implementation is self explanatory!
* Page objects implementation allows easy extension of the tests. 
* All the functions are parameterized so that it can be reused.

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

## Reports
`Specs based`
 
## Further Improvements/ Refactoring
* Reporting Capabilities like Allure

## Found Bugs/ Improvements