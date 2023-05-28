import { useEffect } from 'react'
import { useState } from 'react'
const RandomQuotes = () => {
   const url = "https://inspo-quotes-api.herokuapp.com/quotes/random";

   const [quote, setQuote] = useState({
      text: "",
      author: "",
   })
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      fetchQuote();
   }, [])

   const fetchQuote = async () => {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      const randomQuote = jsonResponse.quote;
      setQuote(randomQuote);
      setIsLoading(false)
   }

   return (
      <div>
         {isLoading && <h1>Loading...</h1>}
         {!isLoading && <div>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
            <button onClick={fetchQuote}>New Quote</button>
         </div>}
      </div>
   );
}

export default RandomQuotes; 