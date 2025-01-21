import { Knob } from "primereact/knob";
import { useState } from "react";
import "./styles.css";

//COMPONENT that contains the options for synth envelope
export default function ASDROptions({ handleASDRChange }) {
  let [attackValue, setAttackValue] = useState(1),
    [decayValue, setDecayValue] = useState(0),
    [sustainValue, setSustainValue] = useState(1),
    [releaseValue, setReleaseValue] = useState(0.4);
  return (
    <div className="controlset">
      <div className="control">
        <p>Attack</p>
        <Knob
          value={attackValue}
          onChange={(e) => {
            setAttackValue(e.value);
            handleASDRChange(e.value, "attack");
          }}
          min={0}
          max={3}
          step={0.1}
          size={70}
          valueTemplate={""}
        />
      </div>
      <div className="control">
        <p>Decay</p>
        <Knob
          value={decayValue}
          onChange={(e) => {
            setDecayValue(e.value);
            handleASDRChange(e.value, "decay");
          }}
          min={0}
          max={10}
          step={1}
          size={70}
          valueTemplate={""}
        />
      </div>
      <div className="control">
        <p>Sustain</p>
        <Knob
          value={sustainValue}
          onChange={(e) => {
            setSustainValue(e.value);
            handleASDRChange(e.value, "sustain");
          }}
          min={0}
          max={1}
          step={0.1}
          size={70}
          valueTemplate={""}
        />
      </div>
      <div className="control">
        <p>Release</p>
        <Knob
          value={releaseValue}
          onChange={(e) => {
            setReleaseValue(e.value);
            handleASDRChange(e.value, "release");
          }}
          min={0}
          max={5}
          step={0.1}
          size={70}
          valueTemplate={""}
        />
      </div>
    </div>
  );
}
