var fetch = require('node-fetch')

const test = async () => {
  const fetchData = async () => {
    return new Promise((resolve, reject) => {
      fetch('http://blg-admin.beta6.staging.imrfresh.com/console/ccs/login/login').then((data)=>{
        resolve(data)
      })
    })
  }

  const [err, data] = await fetchData()
                            .then(data => [null, data] )
                            .catch(err => [err, null])
  console.log('err', err)
  console.log('data', data)
  // err null
  // data fetch data is me
}
test();

