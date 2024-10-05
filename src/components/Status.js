import "../style/status.css";

let wpm = true;

export default function Status() {
  return (
    <div className="status-container">
      {!wpm ? (
        <div className="basic-info">
          <p>Press enter or click here to start</p>
          <p>Backspace is disabled, be careful!</p>
        </div>
      ) : (
        <div className="status">
          <div className="status-div">
            <span>45 WPM</span>
            <span>80% Accuracy</span>
          </div>
          <p>Press 'ENTER' to restart again.</p>
        </div>
      )}
    </div>
  );
}
