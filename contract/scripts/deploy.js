// deploy.js
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const SimpleRegistry = await hre.ethers.getContractFactory("SimpleRegistry");
  const simpleRegistry = await SimpleRegistry.deploy("Mark-David", 20);

  console.log("SimpleRegistry has been deployed to:", simpleRegistry.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
