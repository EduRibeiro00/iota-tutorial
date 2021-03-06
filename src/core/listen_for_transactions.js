const zmq = require('zeromq');
const sock = zmq.socket('sub');

sock.connect('tcp://zmq.devnet.iota.org:5556');

// Check for a command-line argument
if (!process.argv[2]) {
    // Prompt user to add an address to the command line
    console.log('Listening for all transactions')
    console.log('---------------------')
    console.log('If you want to listen for transactions that are sent to a particular address,');
    console.log('pass the address to the `node` command as a command-line argument.');
    console.log('For example: node 6-zmq-listen.js AN...ADDRESS')

    // Subscribe to all transactions that the IOTA node receives
    sock.subscribe('tx');
} else {
    console.log('Listening for transactions sent to this address: ' + process.argv[2])
    console.log(
        'Remember to send a transaction to this address, and be patient: It can take 30 seconds for the transaction to appear.')
    // Subscribe to the address thats passed in via the CLI
    sock.subscribe(process.argv[2])
}

sock.on('message', msg => {
    // Split the data into an array
    const data = msg.toString().split(' ');
    switch (
        // Use index 0 to match the name of the topic
        data[0]
    ) {
        // Display all transactions as the IOTA node receives them
        case 'tx': 
            console.log(`I'm a transaction!`, data)
            break
        // Display only transactions that were sent to a given address
        case process.argv[2]: 
            console.log(`I'm the transaction you are looking for!`, data);
            break
    }
});