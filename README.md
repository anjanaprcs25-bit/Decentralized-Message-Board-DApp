# Decentralized Message Board DApp

A beginner-friendly decentralized application that lets a user connect MetaMask, save a message to the Ethereum Sepolia test network, and read the stored message.

## Features
- Connect MetaMask wallet
- Save a message through a Solidity smart contract
- Read the stored message from the blockchain
- Simple HTML, CSS and JavaScript frontend using ethers.js

## Technology
Solidity, Remix IDE, Ethereum Sepolia, MetaMask, HTML, CSS, JavaScript, ethers.js.

## Smart contract deployment
1. Open https://remix.ethereum.org/.
2. Create `MessageBoard.sol` and paste the code from `contracts/MessageBoard.sol`.
3. Open the Solidity Compiler tab, select compiler version `0.8.20` or a compatible `0.8.x` version, and click **Compile MessageBoard.sol**.
4. Open **Deploy & Run Transactions**.
5. Set Environment to **Injected Provider - MetaMask** and approve the connection.
6. Make sure MetaMask is on **Sepolia**.
7. Select `MessageBoard` and click **Deploy**. Confirm the transaction in MetaMask.
8. Copy the deployed contract address from Remix.

## Run the frontend
1. Open `app.js`.
2. Replace `PASTE_YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE` with your deployed contract address.
3. Open the project folder in VS Code.
4. Run `index.html` using the VS Code Live Server extension (or another local static web server).
5. Connect MetaMask, select Sepolia, enter a message and click **Save Message**.
6. Confirm the transaction. Click **Read Message** to retrieve the stored message.

## Network and contract address
- Network: Ethereum Sepolia testnet
- Contract address: Add your deployed contract address here.

## Screenshot
After successfully connecting the wallet and saving a message, take at least one screenshot of the working frontend and add it to this repository. For example, save it as `screenshots/dapp-working.png` and add it here:

`![Working DApp](screenshots/dapp-working.png)`

## Important
You need Sepolia test ETH to deploy the contract and submit a message. Test ETH has no real monetary value. Never share your MetaMask recovery phrase or private key.
