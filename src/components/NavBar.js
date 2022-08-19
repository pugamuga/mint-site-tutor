import React from "react";
import { Button, Box } from "@chakra-ui/react";

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
      <div
        id="main-nav"
        className="flex bg-[rgba(255,255,255,0.2)] h-[60px] text-white shadow-2xl"
      >
        <div
          id="left-side"
          className="flex justify-start ml-4 p-4 items-center"
        >
          <div className="mx-2 drop-shadow-[3px_3px_0px_black] ">Facebook</div>
          <div className="mx-2 drop-shadow-[3px_3px_0px_black]">Twitter</div>
          <div className="mx-2 drop-shadow-[3px_3px_0px_black]">Email</div>
        </div>
        <div
          id="right-side"
          className="w-full flex justify-end mr-4 p-4 items-center"
        >
          <div className="mx-2 drop-shadow-[3px_3px_0px_black]">Mint</div>
          <div className="mx-2 drop-shadow-[3px_3px_0px_black]">About</div>
          <div className="mx-2 drop-shadow-[3px_3px_0px_black]">Team</div>
          <div id="connect-button" className="ml-8">
            {!isConnected ? (
              <Button
                onClick={connectAccount}
                className="bg-rose-500 drop-shadow-[3px_3px_0px_black] rounded-sm text-[10px] p-2 hover:bg-opacity-50 border-2 border-rose-700 text-white"
              >
                Connect
              </Button>
            ) : (
              <p className="text-green-600 text-sm drop-shadow-[3px_3px_0px_black]">Connected</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


