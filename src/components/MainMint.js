import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import mankiNFT from "../MankiNFT.json";

const mankiNFTcontractAddress = "0xA9112489920960678DA6a075026ECAb6D9446200";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const [errorAmount, setErrorAmount] = useState(null);

  const isConnected = Boolean(accounts[0])

  const handleMint = () => {
    if (window.ethereum){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            mankiNFTcontractAddress,
            mankiNFT.abi,
            signer
        )
        try {
            const response = await contract.mint(BigNumber.from(mintAmount))
            console.log('response', response)
        } catch (error) {
            console.log("error", error)
        }
    }
  }

  const increase = () => {
    if (mintAmount < 3) {
      setErrorAmount(null);
      setMintAmount(mintAmount + 1);
    } else {
      setErrorAmount("Error: 3 it's max");
    }
  };

  const decrease = () => {
    if (mintAmount > 1) {
      setErrorAmount(null);
      setMintAmount(mintAmount - 1);
    } else {
      setErrorAmount("Error: 1 it's min");
    }
  };

  return (
    <div>
      <div
        id="amountOfmintNFT"
        className="flex justify-center items-center h-[300px]"
      >
        <button
          onClick={decrease}
          className="bg-slate-500 text-white rounded-xl h-[50px] w-[40px]"
        >
          -
        </button>
        <input
          type="text"
          readOnly
          value={mintAmount}
          className="bg-slate-300 text-center w-[40px]"
        />
        <button
          onClick={increase}
          className="bg-slate-500 text-white rounded-xl h-[50px] w-[40px]"
        >
          +
        </button>
        <div className=" absolute mt-20 text-red-600 text-xs">
          <p>{errorAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default MainMint;
