import React, { useState } from 'react';
import './Ask.css';
import List from  '../List/List'

const Ask = () => {
  const [inputValue, setInputValue] = useState('');
  const [questionList, setQuestionList] = useState([]);



  function containsHttp(url) {
      const httpRegex = /http(s)?:\/\//;
      return httpRegex.test(url);
  }
  async function processCount(sql,previousQuestions) {
    // const materials=await fetch('http://localhost:8090/api/material-delivery/find-material-by-materialid',{
      console.log(previousQuestions)

    const process = await fetch(
      "http://34.125.249.167:8888/api/ai/openai-api",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sql,
          previousQuestions
        }),
      }
    );

    return process.json();
  }


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Input Value: ${inputValue}`);

    processCount(inputValue.toString(),questionList.map(q=>q.question)).then((data) => {
      console.log(data);
      
  
      setQuestionList([
        { question: inputValue.toString(), answer: JSON.stringify(data.result) },
        ...questionList
        
      ]);
  
      if(containsHttp(data.result[0][Object.keys(data.result[0])[0]])){
        window.open(data.result[0][Object.keys(data.result[0])[0]], '_blank', 'noopener,noreferrer');
      }
    });


  };


  
  
  
  



  return (
    <> 
   { questionList.map(q=>(<List data={q} />)) }
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Message ChatGPT"
        className="input-field"
      />
      <button type="submit" className="submit-button">
        <i className="fas fa-arrow-up"></i>
      </button>
    </form>
    </>
  );
};



export default Ask;
