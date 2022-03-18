const showAccount = document.querySelector('.showAccount');

 async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const result = ethereum.isConnected();
  if(result == true) {
  const account = accounts;
  showAccount.innerText = account;
  };
}

