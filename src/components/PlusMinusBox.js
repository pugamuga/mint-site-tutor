import React from "react";

const PlusMinusBox = ({
  decrease,
  mintAmount,
  increase,
  errorAmount,
  handleMint,
}) => {
  return (
    <div>
      <div id="bool">
        <button
          onClick={decrease}
          className="bg-slate-500 text-white rounded-xl h-[50px] w-[40px] border-4 border-green-500"
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
          className="bg-slate-500 text-white rounded-xl h-[50px] w-[40px] border-4  border-green-500"
        >
          +
        </button>
        <div className="relative">
          <div className="ml-2">
            <div className="absolute text-[10px] -mt-8 p-3 text-rose-600">
              <p>{errorAmount}</p>
            </div>
          </div>
          <div className="flex  justify-center mt-6">
            <button
              onClick={handleMint}
              className="bg-green-400 border-green-500 border-4 text-white rounded-xl h-[50px] w-[100px]"
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
