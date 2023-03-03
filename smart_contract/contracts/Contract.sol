// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MinHubs {
    struct Project {
        string name;
        string symbol;
        uint price;
        address contractAddress;
        address owner;
        string uri;
    }

    mapping (address => Project) public projects;


    function addProject(
        string _name, 
        string _symbol,
        uint _price,
        address _contractAddress,
        string _uri ) public {

            Project memory newProject;
            newProject.name = _name;
            newProject.symbol = _symbol;
            newProject.price = _price;
            newProject.contractAddress = _contractAddress;
            newProject.owner = msg.sender;
            newProject.uri = _uri;

            projects[msg.sender] = newProject;

        }
    
    function viewProjects() public view returns(Project[] memory) {
        return projects[msg.sender]

    }
}


