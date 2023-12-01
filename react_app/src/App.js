import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-5xl font-bold mb-12">
          vader vibes
        </p>
        <textarea 
          id="message" 
          rows="4" 
          className="w-1/2 text-xl block p-2.5 mb-12
            text-sm text-gray-900 bg-gray-50 rounded-lg 
            border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Enter your text ...">
        </textarea>
        <button className="relative inline-flex items-center justify-center 
          p-0.5 mb-2 me-2
          overflow-hidden text-2xl font-medium text-gray-900 
          rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 
          group-hover:from-green-400 group-hover:to-blue-600 
          hover:text-white dark:text-white focus:ring-4 
          focus:outline-none focus:ring-green-200 
          dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 pb-4 
            transition-all ease-in duration-75 
            bg-white dark:bg-gray-900 rounded-md 
            group-hover:bg-opacity-0">
            what's the sentiment
          </span>
        </button>
      </header>
    </div>
  );
}

export default App;
