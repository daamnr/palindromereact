import { useState } from "react";

export default function App() {
  const [input, setInput] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setIsPalindrome(null); // Reset result when input changes
  };

  const checkPalindrome = (str) => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reverseStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reverseStr;
  };

  const handleCheck = () => {
    setIsPalindrome(checkPalindrome(input));
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global ">
            <a href="#">
              <span className="sr-only">palindrome checker</span>
              <h1 className="text-black font-bold text-sm ml-5">palindrome.</h1>
            </a>
        </nav>
      </header>
      <div className="mx-auto py-10 sm:py-10 lg:py-10">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Try the Palindrome Checker
          </h1>
          <span className="px-4 text-sm text-gray-600 font-light mt-2 lg:text-xl sm:px-16 xl:px-48">
            Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence thats spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
          </span>
          <input
            type="text"
            className="text-md mt-5 mb-5 w-2/4 border-solid border border-slate-100 flex-auto rounded-md px-3 py-2 text-black  sm:text-sm sm:leading-6 font-light"
            placeholder="Enter your text"
            onChange={handleInputChange}
            value={input}
          />
          <button
            type="button"
            className="flex-none rounded-md bg-slate-950 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
            onClick={handleCheck}
          >
            Check Palindrome
          </button>
          {isPalindrome !== null && (
            <p className={`mt-4 ${isPalindrome ? 'text-green-600' : 'text-red-600'}`}>
              {isPalindrome ? `${input} is a palindrome!` : `${input} is not a palindrome!`}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
