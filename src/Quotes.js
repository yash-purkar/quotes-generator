import React, { useEffect, useState } from 'react';

export const Quotes = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");


  const getRandomQuote = () => {
    let randomNumber = Math.floor(Math.random() * 1643);
    setText(quotesData[randomNumber].text);
    setAuthor(quotesData[randomNumber].author);
  }


  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((jsonData) => setQuotesData(jsonData));

    // getRandomQuote();
  }, [])

  return (
    <>
      <h1>Quotes</h1>
      <h3>{text}</h3>
      <h4>{author}</h4>
      <button onClick={getRandomQuote}>Click</button>
    </>
  )
}

// Quotes Api - https://type.fit/api/quotes