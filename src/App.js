import logo from "./logo.svg";
import "./App.css";
import { data } from "./MOCK_DATA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="work" style={{ height: "100%", width: "100%" }}>
          {data?.map((data) => {
            return <div>{data.product_name}</div>;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
