import SoundGen from "../SoundGen";
import SynthDisplay from "../SynthDisplay";
import "./styles.css";

export default function SynthContainer({
  options,
  keyboardarray,
  currentOctave,
  handleASDRChange,
  handleWaveChange,
  octaveUp,
  octaveDown,
  showControls,
  setShowControls,
}) {
  return (
    <div className="maindisplay">
      <SoundGen
        options={options}
        notesarray={keyboardarray}
        octave={currentOctave}
      />
      <SynthDisplay
        keyboardarray={keyboardarray}
        currentOctave={currentOctave}
        handleWaveChange={handleWaveChange}
        handleASDRChange={handleASDRChange}
        octaveUp={octaveUp}
        octaveDown={octaveDown}
        showControls={showControls}
        setShowControls={setShowControls}
      />
    </div>
  );
}
