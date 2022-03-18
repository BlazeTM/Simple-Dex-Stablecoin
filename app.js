const showAccount = document.querySelector('.showAccount');

 async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const result = ethereum.isConnected();
  if(result == true) {
  const account = accounts;
  showAccount.innerHTML = account;
  };
}

async function test() {
  try {
    const _accounts = await ethereum.request({
      method: 'eth_accounts',
    })
    showAccount.innerHTML = _accounts[0] || 'Not able to get accounts'
  } catch (err) {
    console.error(err)
    showAccount.innerHTML = `Error: ${err.message}`
  }
}