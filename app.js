const showAccount = document.querySelector('.showAccount');

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts;
  showAccount.innerHTML = account;
}

function getAdress() {
  const result = ethereum.isConnected();
  const address = eth_accounts();
  console.log(result);
  console.log(address);
}