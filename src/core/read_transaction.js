const Iota = require('@iota/core')
const Extract = require('@iota/extract-json')

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
})

const tailTransactionHash = 'ZFICKFQXASUESAWLSFFIWHVOAJCSJHJNXMRC9AJSIOTNGNKEWOFLECHPULLJSNRCNJPYNZEC9VGOSV999'

iota.getBundle(tailTransactionHash)
    .then(bundle => {
        console.log(JSON.parse(Extract.extractJson(bundle)))
    })
    .catch(err => {
        console.error(err)
    })