import React from "react";
import { Button, Box } from "@chakra-ui/react";

const PlusMinusBox = ({
  decrease,
  mintAmount,
  increase,
  errorAmount,
  handleMint,
}) => {
  return (
    <div>
      <div id="bool" >
        <div className=" absolute left-[41%] bottom-[75%]  text-[12px] text-rose-600">
          <p>{errorAmount}</p>
        </div>
        <button
          onClick={decrease}
          className="bg-green-400 text-white rounded-sm h-[50px] w-[40px] border-4 border-green-500"
        >
          -
        </button>
        <input
          type="text"
          readOnly
          value={mintAmount}
          className="bg-[rgba(255,255,255,0.4)] text-center w-[40px] h-[40px] text-1xl text-white"
        />
        <button
          onClick={increase}
          className="bg-green-400 text-white rounded-sm h-[50px] w-[40px] border-4  border-green-500"
        >
          +
        </button>
        <div className="">
          <div className="flex  justify-center mt-6">
            <button
              onClick={handleMint}
              className="bg-green-400 border-green-500 border-4 text-white text-[8px]  rounded-sm h-[50px] w-[100px]"
            >
              Mint now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlusMinusBox;
