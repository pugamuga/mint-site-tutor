// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MankiNFT is ERC721, Ownable {

    uint256 public mintPrice;
    uint256 public totalSypply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

constructor() payable ERC721("MankiNFT", "MNK") {
    mintPrice = 0.02 ether;
    totalSypply = 0;
    maxSupply = 1000;
    maxPerWallet = 3;
    //set withdraw address for withdrawWallet
}

function setPublicMintEnabledOrDisabled() external onlyOwner{
    isPublicMintEnabled = !isPublicMintEnabled;
}

function setTokenUri (string calldata baseTokenUri_) external onlyOwner{
    baseTokenUri = baseTokenUri_;
}

function tokenURI(uint256 tokenId_) public view override returns (string memory){
    require(_exists(tokenId_), "token not exists!");
    return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
}

function withdraw() external onlyOwner{
    (bool success, ) = withdrawWallet.call{ value: address(this).balance }('');
    require(success, "withdraw failed");
}

function mint (uint256 quantity_) public payable{
    require(isPublicMintEnabled, 'mint not starting yet');
    require(msg.value == quantity_*mintPrice, "u don't have enough money");
    require(totalSypply + quantity_ <=maxSupply, "sold out");
    require(walletMints[msg.sender] + quantity_ <= maxPerWallet, "max per wallet");

    for(uint256 i = 0; i < quantity_; i++){
        uint256 newTokenId = totalSypply + 1;
        totalSypply++;
        _safeMint(msg.sender, newTokenId);
    }
}

}