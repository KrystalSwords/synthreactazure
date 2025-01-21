import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";

//COMPONENT that contains the selector for the waveform type
export default function WaveSelector({ handleWaveChange }) {
  const waveChoices = ["sine", "square", "sawtooth", "triangle"];
  const [waveValue, setWaveValue] = useState(waveChoices[0]);
  return (
    <div>
      <SelectButton
        value={waveValue}
        onChange={(e) => {
          setWaveValue(e.value);
          handleWaveChange(e.value);
        }}
        options={waveChoices}
        size="small"
      />
    </div>
  );
}
