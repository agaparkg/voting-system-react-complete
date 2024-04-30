import "./App.css";

function App() {
  const drinkingAge = 20;

  // let text;

  // if (drinkingAge >= 21) {
  //   text = "Buy Drink";
  // } else {
  //   text = "Not allowed";
  // }

  // if/else
  // switch
  // ternary
  // &&

  return (
    <div className="container">
      {/* <h1>{text}</h1> */}
      <h1>{drinkingAge >= 21 && "Ok you can drink."}</h1>

      {/* Ternary */}
      {/* <h1>{drinkingAge >= 21 ? "Buy Drink" : "Not allowed!"}</h1> */}
    </div>
  );
}

export default App;
