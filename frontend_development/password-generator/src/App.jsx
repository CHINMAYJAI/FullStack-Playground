import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // useState hook
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  // password generator function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let char = "@#$&%!~";
    let number = "0123456789";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += number;
    if (charAllowed) str += char;
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // copy clipboard function
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 26);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);


  return (
    <>
      <div className="main-screen bg-black w-screen min-h-screen text-white flex flex-col items-center pt-28 px-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-white underline text-center py-4 px-6 bg-gray-700 shadow-md rounded-xl w-full max-w-xl">
          Password Generator
        </h1>

        {/* Main Container */}
        <div className="main-container mt-10 w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg px-6 py-8 flex flex-col items-center space-y-6">

          {/* Password and Copy */}
          <div className="flex w-full max-w-xl">
            <input
              type="text"
              value={password}
              readOnly
              className="flex-grow outline-none py-2 px-4 bg-white text-pink-500 font-medium rounded-l-full"
              ref={passwordRef}
            />
            <button className="outline-none bg-blue-700 text-white px-4 py-2 shrink-0 rounded-r-full cursor-pointer hover:bg-blue-500" onClick={copyToClipboard}>
              Copy
            </button>
          </div>

          {/* Slider and Options */}
          <div className="w-full max-w-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            {/* Slider */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label htmlFor="length" className="whitespace-nowrap">Length ({length})</label>
              <input type="range" id="length" className="w-full sm:w-48 accent-blue-500 cursor-pointer"
                min={6} max={100}
                onChange={(e) => { setLength(e.target.value) }}
              />
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
              <label className="flex items-center gap-1">
                <input type="checkbox" className='cursor-pointer' defaultChecked={numberAllowed} onChange={() => {
                  setNumberAllowed((prev) => { return !prev })
                }}
                />
                Numbers
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" className='cursor-pointer' defaultChecked={charAllowed} onChange={() => {
                  setCharAllowed((prev) => !prev)
                }} />
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App