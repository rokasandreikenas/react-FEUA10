import { useState } from "react";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(500);

  const amounts = [10, 20, 50, 100];

  const getBalanceTextColor = () => {
    if (balance > 0) return "green";
    if (balance < 0) return "orange";
    return "grey";
  };

  return (
    <>
      <h2>Mano bankas</h2>
      <h3>
        Balansas <span style={{ color: getBalanceTextColor() }}>{balance}</span>
      </h3>
      <div className="container">
        <div className="withdraw">
          <p>Išsiimti</p>
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setBalance(balance - amount)}
              className="withdraw-button"
            >
              {amount}
            </button>
          ))}
          {balance > 0 && (
            <button onClick={() => setBalance(0)} className="withdraw-button">
              Viską ({balance})
            </button>
          )}
        </div>
        <div className="deposit">
          <p>Įsinešti</p>
          {amounts.map((amount) => (
            <button key={amount} onClick={() => setBalance(balance + amount)}>
              {amount}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
