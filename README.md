# CommunityCode-Web-NightWatchJSStarterProject
Nightwatch.js is an integrated framework for performing automated end-to-end testing on web applications and websites, across all major browsers.\
It is written in Node.js and uses the W3C WebDriver API to interact with various browsers.

## Setting Up the Project
To set up the project:
1. Clone the project by running the following:
   ```
   git clone https://github.com/ExperitestOfficial/CommunityCode-Web-NightWatchJSStarterProject.git
   cd CommunityCode-Web-NightWatchJSStarterProject
   ```   
2. Set up authentication by updating the following parameters in [credentials.json](credentials.json):
    * cloudUrl - Url for the cloud the test would run in. For example, https://company.experitest.com/
    * accessKey -  Personal authentication. See [Obtaining Access Key](https://docs.digital.ai/bundle/TE/page/obtaining_access_key.html) to learn how to obtain an access key.

3. Make sure that npm and npx installed.

## Install NightWatch
Open your terminal and run:
```
npm init -y
```
```
npm install nightwatch
```

## Desired Capabilities
In this example we run a test on chrome.\
See [The supported browsers](https://www.selenium.dev/documentation/webdriver/browsers/) to run the test on another browser.

Continuous Cloud Testing expands Selenium's capabilities and allows better control over your test.

See [Capabilities In Selenium Tests](https://docs.digital.ai/bundle/TE/page/capabilities_in_selenium_tests.html) to learn how to customize the desired capabilities for your tests.

## Running Tests

To run the tests in this project, run the following on the command line:
```
npx nightwatch nightWatchTest.js
```

## Parallel testing in Nightwatch
When 'test_workers' in nightwatch.conf.js is enabled the test runner will launch a configurable number of child processes and then distribute the loaded tests over to be ran in parallel.\
For parallel execution run the below command:
```
npx nightwatch nightWatchTest.js nightWatchTest2.js 
``` 

## Documentation
To find out more about Continuous Cloud Testing usage, features, and best practices, visit our online [documentation](https://docs.digital.ai/bundle/TE/page/test_execution_home.html).

## Support
If you encounter an issue that is not covered here or in our online documentation, contact us at [support@digital.ai](mailto:support@digital.ai).
