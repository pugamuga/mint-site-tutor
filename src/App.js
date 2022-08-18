import { useState } from "react";
import MainMint from "./components/MainMint";
import NavBar from "./components/NavBar";
import paralaxGif from "../src/assets/background/parallax-bg.gif";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className=" font-extrabold h-screen bg-[url('../src/assets/background/parallax-bg.gif')] bg-cover">
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}

export default App;
