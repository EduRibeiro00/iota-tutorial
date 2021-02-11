const Iota = require('@iota/core');

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
})

const depth = 3
const minimumWeightMagnitude = 9

const seed = 'VTJDPIKXHIPXVKYRGQSGYZXN9MYYADVBNWEHXMMOUHYZZDYXDDJQDRZYVMMNRAGLCJ9MFPIFCVJAPSMDU'

const receivingAddress = "ZLGVEQ9JUZZWCZXLWVNTHBDX9G9KZTJP9VEERIIFHY9SIQKYBVAHIMLHXPQVE9IXFDDXNHQINXJDRPFDXNYVAPLZAW"

const main = async () => {
    const transfers = [
        {
          value: 1,
          address: receivingAddress
        }
    ]
    
    const trytes = await iota.prepareTransfers(seed, transfers)
    
    const response = await iota.sendTrytes(trytes, depth, minimumWeightMagnitude)
    
    console.log('Bundle sent')
    response.map(tx => console.log(tx))
}

main()