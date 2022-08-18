import { useState } from "react";
import MainMint from "./components/MainMint";
import NavBar from "./components/NavBar";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="text-slate-700 font-mono">
      <NavBar accounts={accounts} setAccounts={setAccounts}/>
      <MainMint accounts={accounts} setAccounts={setAccounts}/>
    </div>
  );
}

export default App;
