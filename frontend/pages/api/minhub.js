const projectStruct = "(string name , string symbol ,uint price, address contractAddress, address owner, string uri)"
const abi = [
    "function addProject(string memory _name, string memory _symbol, uint256 _price, address _contractAddress, string memory _uri )  public",
    `function viewProjects() public view returns(${projectStruct}[] memory)`,
    "function noOfProjects() public view returns(uint)",
]

const contractAddr = "0x7921978341d809848B779Bb5fE7cd7b40512b1E2";

const getContract = async() => {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum); // A connection to the Ethereum network
        var signer = await provider.getSigner(); // Holds your private key and can sign things
        const Contract = new ethers.Contract(
            contractAddr,
          abi,
          signer
         );
        return Contract;
      } else {
        alert("No wallet detected");
      }
}

const addProject = async() => {
    const minHubContract = await getContract();
    var tx = await minHubContract.addProject("Polkadot", "PQT", 10000, contractAddr, "https://www.google.com");
    await tx.wait();
    window.alert("Your project has been created!!!");
}

const viewProjects = async() => {
    const minHubContract = await getContract();
    var projects = await minHubContract.viewProjects();
    for (let i = 0; i < projects.length; i++) {
        console.log(projects[i]);
    }

}


const noOfProjects = async() => {
    const minHubContract = await getContract();
    count = await minHubContract.noOfProjects();
    console.log(count);
    return count;
}