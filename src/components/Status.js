import "../style/status.css";

export default function Status({wpm , accuracy}) {
  return (
    <div className="status-container">
      {wpm == null || accuracy == null ? (
        <div className="basic-info">
          <p>Press enter or click here to start</p>
          <p>Backspace is disabled, be careful!</p>
        </div>
      ) : (
        <div className="status">
          <div className="status-div">
            <p><span className="status-numbers">{wpm}</span> WPM</p>
            <p><span className="status-numbers">{accuracy}%</span> Accuracy</p>
          </div>
          <p>Press 'ENTER' to restart again.</p>
        </div>
      )}
    </div>
  );
}
