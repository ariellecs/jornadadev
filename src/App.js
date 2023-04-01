import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={11}
          messages={22}
          shares={33}
          name="ari"
          description="video exemplo"
          music="Música"
          url="public/video01.mp4"
        />
        <Video
          likes={4}
          messages={5}
          shares={6}
          name="morango"
          description="com chocolate"
          music="É delicioso!"
          url="public/video01.mp4"
        />
      </div>
    </div>
  );
}

export default App;
