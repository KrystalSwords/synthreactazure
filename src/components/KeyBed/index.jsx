import Key from "../Key";

export default function KeyBed({ keyboardarray, showControls }) {
  console.log(showControls);
  return (
    <>
      <span className="octave1">
        {keyboardarray.map((char) => (
          <Key char={char} showControls={showControls} />
        ))}
      </span>
    </>
  );
}
