// After deploying the contract, paste its address between the quotes below.
const CONTRACT_ADDRESS = "0x0f3FA768E05E688929E9EA59BA91DB76Ac18aE07";

const ABI = [
  "function setMessage(string _message)",
  "function getMessage() view returns (string)"
];

let provider;
let signer;
let contract;

const connectButton = document.getElementById("connectButton");
const saveButton = document.getElementById("saveButton");
const readButton = document.getElementById("readButton");
const walletStatus = document.getElementById("walletStatus");
const statusText = document.getElementById("status");
const messageInput = document.getElementById("messageInput");
const messageOutput = document.getElementById("messageOutput");

connectButton.onclick = async () => {
  try {
    if (!window.ethereum) throw new Error("MetaMask is not installed.");
    if (CONTRACT_ADDRESS.includes("PASTE_")) {
      throw new Error("Deploy the contract and paste its address into app.js first.");
    }
    await window.ethereum.request({ method: "eth_requestAccounts" });
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();

    const network = await provider.getNetwork();
    if (network.chainId !== 11155111n) {
      throw new Error("Please switch MetaMask to the Sepolia test network.");
    }

    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    walletStatus.textContent = "Connected: " + await signer.getAddress();
    saveButton.disabled = false;
    readButton.disabled = false;
    statusText.textContent = "Wallet connected successfully.";
  } catch (error) {
    statusText.textContent = error.message || "Could not connect wallet.";
  }
};

saveButton.onclick = async () => {
  try {
    const message = messageInput.value.trim();
    if (!message) throw new Error("Please enter a message.");
    statusText.textContent = "Please confirm the transaction in MetaMask...";
    const tx = await contract.setMessage(message);
    statusText.textContent = "Transaction sent. Waiting for confirmation...";
    await tx.wait();
    statusText.textContent = "Message saved successfully on Sepolia!";
    messageOutput.textContent = await contract.getMessage();
  } catch (error) {
    statusText.textContent = error.shortMessage || error.message || "Transaction failed.";
  }
};

readButton.onclick = async () => {
  try {
    statusText.textContent = "Reading from blockchain...";
    messageOutput.textContent = await contract.getMessage();
    statusText.textContent = "Message loaded successfully.";
  } catch (error) {
    statusText.textContent = error.shortMessage || error.message || "Could not read message.";
  }
};

if (window.ethereum) {
  window.ethereum.on("accountsChanged", () => location.reload());
  window.ethereum.on("chainChanged", () => location.reload());
}
