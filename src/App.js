import logo from "./logo.svg";
import "./App.css";
import video from "./10 Second .mp4";
import img from "./téléchargement.png";
import "./style.css";
function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Your name here</h1>

      <br />

      <img src={logo} width="200" height="200" />

      <img src={img} />
      <video width="200" height="200" controls>
        <source src={video} type="video/mp4" />{" "}
      </video>
    </div>
  );
}

export default App;
