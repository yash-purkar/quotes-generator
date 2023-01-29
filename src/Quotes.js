import React, { useEffect, useState } from 'react';

export const Quotes = () => {
  const [quotesData, setQuotesData] = useState([]);


  const getQuotesData = async () => {
    try {
      let datas = await fetch("https://type.fit/api/quotes");
      let response = await datas.json();
      setQuotesData(response);
    }
    catch (err) {
      console.log(err)
    }
  }


  console.log(quotesData)
  useEffect(() => {
    getQuotesData();
  }, [])

  return (
    <>
      <h1>Quotes</h1>
    </>
  )
}

// Quotes Api - https://type.fit/api/quotes