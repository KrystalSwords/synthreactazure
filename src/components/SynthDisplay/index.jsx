import SynthControls from "../SynthControls";
import KeyBed from "../KeyBed";
import "./styles.css";

//COMPONENT that houses the synth and its controls
export default function SynthDisplay({
  keyboardarray,
  currentOctave,
  handleWaveChange,
  handleASDRChange,
  octaveUp,
  octaveDown,
  showControls,
  setShowControls,
}) {
  return (
    <div className="synthdisplay">
      <SynthControls
        handleWaveChange={handleWaveChange}
        handleASDRChange={handleASDRChange}
        octaveUp={octaveUp}
        octaveDown={octaveDown}
        showControls={showControls}
        setShowControls={setShowControls}
      />
      <KeyBed
        keyboardarray={keyboardarray}
        octave={currentOctave}
        showControls={showControls}
      />
    </div>
  );
}
