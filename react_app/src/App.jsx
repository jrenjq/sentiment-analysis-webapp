import axios from "axios";
import React from 'react';
import { useState } from 'react';
import { FLASK_URI } from "./constants";

import './App.css';

function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState({});
  const [hasResults, setHasResults] = useState(false);

  const submit = async e => {
    e.preventDefault();
    const textJson = {
        text: text,
    };
    try {
        const {data} = await axios.post(
            `${FLASK_URI}/api/vader/`, 
            textJson, 
            { 
                headers: { 'Content-Type': 'application/json' } 
            },
        );
        console.log(data);
        setResults(data)
        setHasResults(true);
    } catch (err) {
        console.log(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="text-5xl font-bold mb-12">
          vader vibes
        </p>
        <textarea 
          id="message" 
          rows="4"
          value={ text }
          onChange={
            (e) => {
              setText(e.target.value); 
              // console.log(text); // for debug.
            }
          }
          className="w-1/2 text-xl block p-2.5
            text-sm text-gray-900 bg-gray-50 rounded-lg 
            border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Enter your text ...">
        </textarea>
        {
          hasResults ? 
          <>
            <div className="w-1/2 flex flex-row justify-between mt-12">
              <h1> <span className="text-7xl">😄</span> <span className="text-5xl">{(results.positive * 100).toFixed(2)}<span className="text-5xl text-gray-500"> %</span> </span> </h1>
              <h1> <span className="text-7xl">😐</span> <span className="text-5xl">{(results.neutral  * 100).toFixed(2)}<span className="text-5xl text-gray-500"> %</span> </span> </h1>
              <h1> <span className="text-7xl">😒</span> <span className="text-5xl">{(results.negative * 100).toFixed(2)}<span className="text-5xl text-gray-500"> %</span> </span> </h1>
            </div>
            <div className="w-1/2 mt-8">
              <h1> <span className="text-7xl">⚖️</span> <span className="text-5xl">{((results.compound + 1) * 50).toFixed(2)} <span className="text-5xl text-gray-500"> %</span></span> </h1>
            </div>
            <small className="w-1/2 mt-12 text-gray-500">😄: positive, 😐: neutral, 😒: negative, ⚖️: aggregated score</small>
          </> :
          <></>
        }
        <button 
          onClick={ submit }
          className="p-0.5 mt-12 mb-2 me-2
          relative inline-flex items-center justify-center 
          overflow-hidden text-2xl font-medium text-gray-900 
          rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 
          group-hover:from-green-400 group-hover:to-blue-600 
          hover:text-white dark:text-white focus:ring-4 
          focus:outline-none focus:ring-green-200 
          dark:focus:ring-green-800">
          <span 
            className="relative px-5 py-2.5 pb-4 
            transition-all ease-in duration-75 
            bg-white dark:bg-gray-900 rounded-md 
            group-hover:bg-opacity-0">
            what's the sentiment
          </span>
        </button>
        <small className="text-xs text-gray-500">made for fun by jrenjq</small>
      </header>
    </div>
  );
}

export default App;
