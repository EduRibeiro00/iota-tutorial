const Iota = require('@iota/core')

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
})

const securityLevel = 2

const seed = 'VTJDPIKXHIPXVKYRGQSGYZXN9MYYADVBNWEHXMMOUHYZZDYXDDJQDRZYVMMNRAGLCJ9MFPIFCVJAPSMDU'

iota.getNewAddress(seed, { index: 0, securityLevel: securityLevel, total: 1 })
    .then(address => {
        console.log('Your address is: ' + address)
    })
    .catch(err => {
        console.log(err)
    })