// Require the packages
const Iota = require('@iota/core');
const Converter = require('@iota/converter');

// Create a new instance of the IOTA object
// Use the `provider` field to specify which node to connect to
const iota = Iota.composeAPI({
    provider: 'http://192.168.1.73:15265'
});

const address = 'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDD';

const seed = 'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

const message = Converter.asciiToTrytes('Hello World!');
const transfers = [
    {
        value: 0,
        address: address,
        message: message
    }
];

iota.prepareTransfers(seed, transfers)
    .then(trytes => {
        return iota.sendTrytes(trytes, 3/*depth*/, 9/*MWM*/)
    })
    .then(bundle => {
        var JSONBundle = JSON.stringify(bundle,null,1);
        console.log(`Bundle: ${JSONBundle}`)
    })
    .catch(error => {
        // Catch any errors
        console.log(error);
    });