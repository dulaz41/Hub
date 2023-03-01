import { useState } from "react";
import { ContractFactory, ethers } from "ethers";
import nft from "./utils/MinHub.json";

function deploy() {
const [isConnected, setIsConnected] = useState();
  const [nftAddress, setNftAddress] = useState();
  const [nftName, setNftName] = useState();
  const [nftSymbol, setNftSymbol] = useState();
  const [initBaseURL, setInitBaseURL] = useState();
  const [initNotRevealedUri, setInitNotRevealedUri] = useState();
  const [contract, setContract] = useState();

  const connectWallet = async () => {
    if (klaytn) {
      const accounts = klaytn.enable()
      console.log({ account: accounts[0] });
      setIsConnected(true);
    } else {
      window.alert("Wallet not found!");
    }
  };

  const createNft = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const factory = new ContractFactory(nft.abi, nft.bytecode, signer);

    // If your contract requires constructor args, you can specify them here
    const contract_new = await factory.deploy(
        nftName,
      nftSymbol,
      initBaseURL,
      initNotRevealedUri
    );
    setContract(contract_new);
    setNftAddress(contract_new.address);
  };
  connectWallet()
  createNft()
  return;
}
/*
const caver = new Caver(klaytn)

const myContract = new caver.klay.Contract(contractABI)

myContract.deploy({
    data: '0x12345...',
    arguments: [123, 'My String']
  })
  .send({
    from: klaytn.selectedAddress,
    gas: 1500000,
    value: 0,
  }, function(error, transactionHash) { ... })
  .on('error', function(error) { ... })
  .on('transactionHash', function(transactionHash) { ... })
  .on('receipt', function(receipt) {
    console.log(receipt.contractAddress) // contains the new contract address
   })
  .then(function(newContractInstance) {
    console.log(newContractInstance.options.address) // instance with the new contract address
  });



  const myContract1 = new caver.klay.Contract(contractABI, contractAddress)
  
  myContract.methods.transfer(
    to, caver.utils.toPeb(amount, 'KLAY')
  ).send({from: klaytn.selectedAddress},
    function(error, transactionHash) {
      ...
    });

*/

