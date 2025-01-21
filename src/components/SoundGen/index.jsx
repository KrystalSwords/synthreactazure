import { useKeyPress } from "../../hooks/useKeyPress";
import { useEffect } from "react";
import { useSynth } from "../../hooks/useSynth";

//COMPONENT that displays nothing but produces the actual sounds
export default function SoundGen({ options, notesarray, octave }) {
  const keyboardarray = "zsxdcvgbhnjmq2w3er5t6y7u".split("");
  const { keyPressed, keyReleased, activeKeys } = useKeyPress();
  const synth = useSynth(options);

  useEffect(() => {
    let note = keyboardToNote(
      keyboardarray.find((note) => note === (keyPressed || keyReleased)),
      octave
    );

    if (!note) {
      return;
    }

    //if note does not contain an octave number,  add current octave
    if (!note.match(/\d/)) {
      note = note + octave;
    }

    try {
      if (!activeKeys.length) {
        synth.triggerRelease();
        return;
      }

      if (keyPressed) {
        synth.triggerAttack(note);
        console.log(note);
        return;
      }

      // if (keyReleased) {
      //   console.log("released", note);
      //   synth.triggerRelease();
      //   return;
      // }
    } catch (e) {
      console.log(e);
    }
  }, [keyPressed, keyReleased, notesarray, synth, activeKeys]);
}

function keyboardToNote(input, octave) {
  const keyboardarray = "zsxdcvgbhnjmq2w3er5t6y7u".split("");
  const notesarray = [
    "C0",
    "C#0",
    "D0",
    "D#0",
    "E0",
    "F0",
    "F#0",
    "G0",
    "G#0",
    "A0",
    "A#0",
    "B0",
    "C1",
    "C#1",
    "D1",
    "D#1",
    "E1",
    "F1",
    "F#1",
    "G1",
    "G#1",
    "A1",
    "A#1",
    "B1",
  ];
  if (input) {
    let basenote = notesarray[keyboardarray.findIndex((key) => key == input)];
    let baseoctave = Number(basenote[basenote.length - 1]);
    baseoctave = baseoctave + octave;
    return basenote.slice(0, -1) + baseoctave;
  } else {
    return null;
  }
}

function noteToKeyboard(input) {
  const keyboardarray = [
    "a",
    "w",
    "s",
    "e",
    "d",
    "f",
    "t",
    "g",
    "y",
    "h",
    "u",
    "j",
  ];
  const notesarray = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  return keyboardarray[notesarray.findIndex(input)];
}
