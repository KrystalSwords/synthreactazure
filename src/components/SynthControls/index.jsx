import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";
import { ButtonGroup } from "primereact/buttongroup";
import WaveSelector from "../WaveSelector";
import ASDROptions from "../ASDROptions";
import "./styles.css";

//COMPONENT that contains the controls for the synth
export default function SynthControls({
  handleWaveChange,
  handleASDRChange,
  octaveUp,
  octaveDown,
  showControls,
  setShowControls,
}) {
  return (
    <div className="controls">
      <div className="pitchButtons">
        <div className="titletext">Krystal Synth</div>
        <div className="cswitch">
          <ToggleButton
            onLabel="Controls"
            offLabel="Controls"
            checked={showControls}
            onClick={() => setShowControls(!showControls)}
          />
        </div>

        <ButtonGroup>
          <Button label="Octave Down" onClick={octaveDown} />
          <Button label="Octave Up" onClick={octaveUp} />
        </ButtonGroup>
      </div>
      <div className="oscOptions">
        <ASDROptions handleASDRChange={handleASDRChange} />
        <WaveSelector handleWaveChange={handleWaveChange} />
      </div>
    </div>
  );
}
