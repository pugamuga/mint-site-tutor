
const hre = require("hardhat");

async function main() {



  const MankiNFT = await hre.ethers.getContractFactory("MankiNFT");
  const mankiNFT = await MankiNFT.deploy();

  await mankiNFT.deployed();

  
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
