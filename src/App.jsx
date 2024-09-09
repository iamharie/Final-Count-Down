import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChalleng.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={3} />
        <TimerChallenge title="Hard" targetTime={9} />
        <TimerChallenge title="Pros Only" targetTime={12} />
      </div>
    </>
  );
}

export default App;
