import { useState, useEffect } from "react";
import { MonoSynth, Synth } from "tone";

//HOOK that reloads the synth when the options (type, asdr) change
//adapted from: https://github.com/trvswgnr/tonejs-synth/tree/main
export const useSynth = (options) => {
  const [synth, setSynth] = useState(null);
  useEffect(() => {
    if (!options) {
      return;
    }
    const synth = new MonoSynth(options).toDestination();

    setSynth(synth);
    console.log(options);
    console.log(synth);

    return () => {
      if (synth) {
        synth.triggerRelease();
        setSynth(null);
      }
    };
  }, [options]);

  return synth;
};
