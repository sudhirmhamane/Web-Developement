import { useCallback, useEffect, useRef, useState } from "react"; // Importing hooks from React for state management and lifecycle methods

function App() {
  const [length, setLength] = useState(8); // State to store the password length, initialized to 8
  const [number, setNumber] = useState(false); // State to toggle inclusion of numbers in the password
  const [char, setChar] = useState(false); // State to toggle inclusion of special characters in the password
  const [password, setPassword] = useState(""); // State to store the generated password

  const passwordRef = useRef(null); // useRef hook to reference the password input element for copying password to clipboard

  const passwordGenerator = useCallback(() => {
    // useCallback hook to memoize the passwordGenerator function
    let pass = ""; // Initialize the password as an empty string
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Base string containing letters
    if (number) str += "0123456789"; // If 'number' state is true, add numbers to the string
    if (char) str += "!@#$%^&*()_+-={}[];:<>,.?/"; // If 'char' state is true, add special characters to the string

    for (let i = 0; i <= length; i++) {
      // Loop to generate the password of the specified length
      let strChar = Math.floor(Math.random() * str.length + 1); // Randomly select an index from the string
      pass += str.charAt(strChar); // Append the selected character to the password
    }
    setPassword(pass); // Set the generated password to the state
  }, [length, number, char, setPassword]); // Dependencies for useCallback to re-run when any of these values change

  const copyPasswordToClipboard = useCallback(() => {
    // useCallback hook to memoize the copyPasswordToClipboard function
    passwordRef.current?.select(); // Select the text in the password input
    window.navigator.clipboard.writeText(password); // Write the password to the clipboard
  }, [password]); // Dependency to re-run the function when the password changes

  useEffect(() => {
    // useEffect hook to generate a new password whenever the length, number, or char state changes
    passwordGenerator(); // Call the passwordGenerator function to generate the password
  }, [length, number, passwordGenerator, char]); // Dependencies for useEffect to re-run when any of these values change

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-yellow-700 bg-black">
        <h1 className="text-white text-center my-4 text-3xl">
          Password Generator {/* Heading for the password generator */}
        </h1>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password} // Set the password as the value of the input field
            className="outline-none w-full py-1 px-3"
            placeholder="password generator" // Placeholder text for the input field
            readOnly // Make the input read-only
            ref={passwordRef} // Attach the input element to the ref for copying functionality
          />
          <button
            onClick={copyPasswordToClipboard} // Attach the function to copy the password to clipboard
            className="outline-none bg-blue-600 text-black px-3 py-1 shrink-0"
          >
            copy {/* Button to copy the password */}
          </button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6} // Minimum length for the password
              max={100} // Maximum length for the password
              value={length} // Set the value of the range input to the current length state
              className=" cursor-pointer text-black"
              onChange={(e) => {
                setLength(e.target.value); // Update the length state when the range input is changed
              }}
            />
            <label>Length:{length}</label>{" "}
            {/* Display the current length value */}
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number} // Set the checkbox to be checked based on the 'number' state
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev); // Toggle the 'number' state when the checkbox is clicked
              }}
            />
            <label htmlFor="numberInput">Numbers</label>{" "}
            {/* Label for the "Numbers" checkbox */}
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char} // Set the checkbox to be checked based on the 'char' state
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev); // Toggle the 'char' state when the checkbox is clicked
              }}
            />
            <label htmlFor="characterInput">Characters</label>{" "}
            {/* Label for the "Characters" checkbox */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App; // Export the App component as the default export of the file
