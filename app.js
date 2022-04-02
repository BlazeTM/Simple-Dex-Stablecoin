window.addEventListener('DOMContentLoaded', () => {
  const onboarding = new MetaMaskOnboarding();
  const onboardButton = document.getElementById('connectWallet');
  let accounts;

  const updateButton = async () => {
    if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
      onboardButton.innerText = 'Install MetaMask!';
      onboardButton.onclick = () => {
        onboardButton.innerText = 'Connecting';
        onboardButton.disabled = true;
        onboarding.startOnboarding();
      };
    } else if (accounts && accounts.length > 0) {
      onboardButton.innerText = `✔ ${accounts[0]}`;
      onboardButton.disabled = true;
      onboarding.stopOnboarding();
      checkOwner(accounts[0]);
    } else {
      onboardButton.onclick = async () => {
        await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        .then(function(accounts) {
          onboardButton.innerText = `✔ ${accounts[0]}`;
          onboardButton.disabled = true;
          checkOwner(accounts[0]);
        });
      };
    }
  };

  updateButton();
  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    window.ethereum.on('accountsChanged', (newAccounts) => {
      accounts = newAccounts;
      updateButton();
    });
  }
});
<script src="app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@metamask/onboarding@1.0.1/dist/metamask-onboarding.bundle.js"></script>