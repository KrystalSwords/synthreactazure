import { MonoSynth } from "tone";

export const synth = new MonoSynth({
  volume: -8,
  oscillator: {
    type: "sawtooth",
    frequency: 150,
  },
  envelope: {
    attack: 1,
    decay: 0,
    sustain: 1,
    release: 0,
    releaseCurve: "linear",
  },
}).toDestination();

// export const synth = () => {
//   console.log("constructing synth");
//   return new MonoSynth({
//     volume: -8,
//     oscillator: {
//       type: "sawtooth",
//       frequency: 150,
//     },
//     envelope: {
//       attack: 0,
//       decay: 0,
//       sustain: 1,
//       release: 0,
//       releaseCurve: "linear",
//     },
//   }).toDestination();
// };
