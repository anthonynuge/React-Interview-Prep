import { useState } from "react";

function AcronymGenerator() {
  const [phrase, setPhrase] = useState("");
  const [acronym, setAcronym] = useState("");

  function toAcronym(text) {
    // Implement acronym logic here
    return text
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word[0].toUpperCase())
      .join("");
  }

  const handleGenerate = () => setAcronym(toAcronym(phrase));

  return (
    <div>
      <h1>Acronym Generator</h1>
      <p>
        An acronym is formed by taking the first letter of each word in a phrase
        and converting them to uppercase.
      </p>

      <div>
        <input
          type="text"
          placeholder="Enter a phrase..."
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate</button>
        <p>Result : {acronym}</p>
      </div>
    </div>
  );
}
export default AcronymGenerator;
