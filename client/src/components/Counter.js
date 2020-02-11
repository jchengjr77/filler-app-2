import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [sentences, setSentences] = useState([]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const newSentence = currCount => {
    setSentences([...sentences, currCount]);
    setCount(0);
  };

  const showSentences = () => {
    console.log("Current sentence: " + count);
    console.log("History: " + sentences);
  };

  return (
    <div>
      <h1 className="mainCounter">{count}</h1>
      <h4>Number of times filler words are used</h4>
      <div style={{ flex: 1, flexDirection: "row" }}>
        <AwesomeButton type="secondary" onPress={decrementCount} size="medium">
          -
        </AwesomeButton>
        <AwesomeButton type="secondary" onPress={incrementCount} size="medium">
          +
        </AwesomeButton>
      </div>
      <div style={{ flex: 1, margin: 20 }}>
        <AwesomeButton
          type="primary"
          onPress={() => newSentence(count)}
          size="large"
        >
          New Sentence
        </AwesomeButton>
      </div>
      <div style={{ flex: 1, margin: 20 }}>
        <AwesomeButton
          type="secondary"
          onPress={() => showSentences(count)}
          size="large"
        >
          Show Sentences
        </AwesomeButton>
      </div>
    </div>
  );
}

export default Counter;
