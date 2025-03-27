import { useState, useEffect } from "react";
import dictionary from "./../../dictionary.json";

function WordOfTheDay() {
  let [wordOfDay, setWordOfDay] = useState("");
  let [wordMeaning, setWordMeaning] = useState("");

  const dictionaryKeys = Object.keys(dictionary);
  let indexOfDay;

  useEffect(() => {
    newWordOfDay();
    const interval = setInterval(newWordOfDay, 60000);
    return () => clearInterval(interval);
  }, []);

  function newWordOfDay() {
    console.log("FIRE");
    indexOfDay = Math.floor(Math.random() * dictionaryKeys.length);
    const selectedWord = dictionaryKeys[indexOfDay];
    setWordOfDay(selectedWord);
    setWordMeaning(dictionary[selectedWord]);
    //EVANGELIST
  }

  return (
    <>
      <section className="word-of-the-day">
        <div className="word-of-day-heading">
          <h2>WordOfTheDay</h2>
        </div>
        <h2>{wordOfDay}</h2>
        <h3>{wordMeaning}</h3>
      </section>
    </>
  );
}

export default WordOfTheDay;
