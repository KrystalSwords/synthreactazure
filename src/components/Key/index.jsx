import "./styles.css";
import { useKeyPress } from "../../hooks/useKeyPress";

export default function Key({ char, showControls }) {
  const accidentals = "sdghj23567";
  const { activeKeys } = useKeyPress();
  let keystyle;
  if (accidentals.includes(char)) {
    keystyle = activeKeys.includes(char) ? "keyaccidpressed" : "keyaccid";
  } else {
    keystyle = activeKeys.includes(char) ? "keynatpressed" : "keynat";
  }
  return (
    <div className={keystyle} data-char={char}>
      {showControls && <span>{char}</span>}
    </div>
  );
}
