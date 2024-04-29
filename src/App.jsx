import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="box">
        <img src="../public/images/barcelona.png" alt="" />
        <h3>FC Barcelona</h3>
        <button id="vote1">Vote</button>
        <div className="count">
          Vote count: <span id="result1">0</span>
        </div>
      </div>
      <div className="box">
        <img src="../public/images/juventus.png" alt="" />
        <h3>Juventus FC</h3>
        <button id="vote2">Vote</button>
        <div className="count">
          Vote count: <span id="result2">0</span>
        </div>
      </div>
      <div className="box">
        <img src="../public/images/manchester.png" alt="" />
        <h3>Manchester United FC</h3>
        <button id="vote3">Vote</button>
        <div className="count">
          Vote count: <span id="result3">0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
