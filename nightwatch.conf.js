const fs = require('fs');
const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));

module.exports = {

    test_workers : true,

    // ====================
    // Runner Configuration
    // ====================
    selenium : {
        start_process : false,
        selenium_host : credentials.cloudUrl,
        server_path:'/wd/hub',
        selenium_port : 443
    },

    test_settings : {
        default : {
            // ====================
            // Runner Configuration
            // ====================
            selenium_port : 443,
            selenium_host : credentials.cloudUrl,
            use_ssl : true,
            // ============
            // Capabilities
            // ============
            capabilities: {
                browserName:'chrome', //Change this to run your test on different browsers
                'digitalai:options': {
                    testName: 'NightWatchJS test',
                    accessKey: credentials.accessKey,
                },
            }
        }
    }
};



