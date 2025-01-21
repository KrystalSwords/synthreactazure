import "./styles.css";
import { useState } from "react";
import SynthContainer from "./components/SynthContainer";

export default function App() {
  const defaultOptions = {
    volume: -8,
    oscillator: {
      type: "sine",
      frequency: 150,
    },
    envelope: {
      attack: 1,
      decay: 0,
      sustain: 1,
      release: 0.4,
      releaseCurve: "linear",
    },
  };
  const keyboardarray = "zsxdcvgbhnjmq2w3er5t6y7u".split("");
  const [currentOctave, setCurrentOctave] = useState(4);
  const [options, setOptions] = useState(defaultOptions);
  const [showControls, setShowControls] = useState(true);

  const handleASDRChange = (e, adsrselect) => {
    //    const newOptions = // merge current options with envelope[adsrselect]
    setOptions({
      ...options,
      envelope: { ...options.envelope, [adsrselect]: e },
    });
    console.log(options);
  };

  const handleWaveChange = (e) => {
    //    const newOptions = // merge current options with envelope[adsrselect]
    setOptions({
      ...options,
      oscillator: { ...options.oscillator, type: e },
    });
    console.log(options);
  };

  function octaveUp() {
    setCurrentOctave(currentOctave + 1);
  }

  function octaveDown() {
    setCurrentOctave(currentOctave - 1);
  }

  return (
    <div className="background">
      <SynthContainer
        options={options}
        keyboardarray={keyboardarray}
        currentOctave={currentOctave}
        handleASDRChange={handleASDRChange}
        handleWaveChange={handleWaveChange}
        octaveUp={octaveUp}
        octaveDown={octaveDown}
        showControls={showControls}
        setShowControls={setShowControls}
      />
    </div>
  );
}
