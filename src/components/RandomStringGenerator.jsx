import { useState, useCallback, useEffect } from "react";

const RandomStringGenerator = () => {
  const [length, setLength] = useState(8);
  const [randomString, setRandomString] = useState("");

  const generateRandomString = useCallback(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * characters.length
      );
      result += characters[randomIndex];
    }

    setRandomString(result);
  }, [length]);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  return (
    <div className="container">
      <h1>Random String Generator</h1>

      <label>
        String Length:
        <input
          type="number"
          min="1"
          max="50"
          value={length}
          onChange={(e) =>
            setLength(Number(e.target.value))
          }
        />
      </label>

      <div className="result-box">
        {randomString}
      </div>

      <button onClick={generateRandomString}>
        Generate String
      </button>
    </div>
  );
};

export default RandomStringGenerator;