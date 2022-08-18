import React from "react";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  const connectAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  };

  return (
    <div>
      <div id="main-nav" className="flex bg-slate-200 h-[60px] ">
        <div
          id="left-side"
          className="flex justify-start ml-4 p-4 items-center"
        >
          <div className="mx-2">Facebook</div>
          <div className="mx-2">Twitter</div>
          <div className="mx-2">Email</div>
        </div>
        <div
          id="right-side"
          className="w-full flex justify-end mr-4 p-4 items-center"
        >
          <div className="mx-2">Mint</div>
          <div className="mx-2">About</div>
          <div className="mx-2">Team</div>
          <div id="connect-button" className="ml-8">
            {!isConnected ? (
              <button className="bg-rose-300 rounded-lg text-sm p-1 hover:bg-opacity-50 border-2 border-rose-400">
                Connect
              </button>
            ) : (
              <p className="text-green-600 text-sm">Connected</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
