const Web3Modal = window.Web3Modal.default;
const providerOptions = {
  /* See Provider Options Section */
  //walletlink: {
    /*package: WalletLink, // Required
    options: {
      appName: "DHC", // Required
      infuraId: "acac9625aa514dfebaa00c8735600dff", // Required unless you provide a JSON RPC url; see `rpc` below
      rpc: "", // Optional if `infuraId` is provided; otherwise it's required
      chainId: 1, // Optional. It defaults to 1 if not provided
      appLogoUrl: null, // Optional. Application logo image URL. favicon is used if unspecified
      darkMode: false // Optional. Use dark theme, defaults to false
    }
  },*/
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "acac9625aa514dfebaa00c8735600dff" // required
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

async function onConnect() {

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }
}