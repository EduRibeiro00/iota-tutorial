const Iota = require('@iota/core')

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
})

const address = 'NBZLOBCWG9BAQTODDKNF9LYYTBOUWSQSGCWFQVZZR9QXCOAIBRYDTZOEGBGMZKJYZOPPGRGFFWTXUKUKW'

iota.getBalances([address])
  .then(({ balances }) => {
    console.log(balances)
  })
  .catch(err => {
    console.error(err)
  });

