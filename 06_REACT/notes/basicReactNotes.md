# What is React.js?

    React.js is a JavaScript library used to build user interfaces (UI).
    It is developed by Facebook and is widely used to create fast and interactive web apps.

    React is component-based, meaning your UI is broken into small, reusable parts called components.

# Why Use React.js?

    Fast and Efficient: React updates only the parts of the webpage that need to change (using the Virtual DOM).
    Reusable Components: Build small components and reuse them, saving time.
    Flexible: Works with other libraries or frameworks and can be used on websites and mobile apps.

# Core Concepts in React

# 1. Components
    A component is like a small piece of a webpage, e.g., a button, header, or footer.
    Two types:
    Functional Components: Written as functions.
    Class Components: Written as ES6 classes (less common now).

# Example of a Functional Component:

    function Greeting() {
        return <h1>Hello, World!</h1>;
    }

# 2. JSX (JavaScript XML)
    A special syntax in React that lets you write HTML inside JavaScript.
    Example:

    const element = <h1>Welcome to React!</h1>;

# 3. Props (Properties)
    Props are used to pass data from one component to another (like arguments to a function).
    Example:

        function Welcome(props) {
            return <h1>Hello, {props.name}!</h1>;
        }

        <Welcome name="Sudhir" />;
# 4. State

    State is used to store data in a component and can change over time (e.g., updating user input).
    Example:

        import React, { useState } from 'react';

        function Counter() {
            const [count, setCount] = useState(0);

            return (
                <div>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Increase</button>
                </div>
            );
        }

# 5. Events

    Handle user actions like button clicks, form submissions, etc.
    Example:

    function ClickButton() {
        function handleClick() {
            alert("Button clicked!");
        }

        return <button onClick={handleClick}>Click Me</button>;
    }

# React Fragments
    React Fragments are a way to group multiple elements without adding extra nodes to the DOM. Normally, when returning multiple elements in React, they need to be wrapped in a parent element like a <div>. However, this can sometimes lead to unnecessary HTML nesting, which React Fragments help to avoid.

    ##Why Use React Fragments?
        Avoids adding unnecessary <div> elements in the DOM.
        Improves performance by reducing extra nodes.
        Helps maintain clean and semantic HTML.
    
    When to Use Fragments?
        When returning multiple elements from a component.
        When wrapping elements inside a map() function.
        When avoiding extra <div> wrappers in the DOM.

    React Fragments are useful for keeping the DOM clean while still grouping multiple elements. Use them whenever you need to return multiple elements without introducing extra <div> wrappers.


# 1. Virtual DOM:-

    The Virtual DOM is a lightweight JavaScript representation of the actual DOM. Instead of directly manipulating the DOM, React uses the Virtual DOM for efficiency.

# How it works:

    When the state of an object changes, React creates a new Virtual DOM tree.
    It compares the new Virtual DOM tree with the previous one using a process called diffing.
    Only the parts of the actual DOM that need updating are updated, minimizing expensive DOM manipulations.

# Benefits:

    Faster updates by avoiding direct DOM manipulation.
    Makes React more performant and predictable.

# 2. Fiber

    React Fiber is a reimplementation of React's core algorithm introduced in React 16. It makes React faster and more responsive, particularly for complex applications.

# Key Goals of Fiber:

    Prioritization: It can prioritize tasks (e.g., animation updates over data fetching updates).
    Interruptibility: Allows React to pause, resume, or abort rendering work based on user interactions or device performance.
    Concurrency: Helps manage rendering work in chunks, so the app remains responsive during heavy updates.

# How Fiber works:

    Fiber breaks the rendering process into small units of work called "fibers."
    React can pause these units and resume them later, enabling smooth user experiences.

# 3. Reconciliation

    Reconciliation is the process of updating the actual DOM to match the Virtual DOM.

# How Reconciliation works:

    React compares the previous Virtual DOM with the current Virtual DOM using a diffing algorithm.
    React decides what changes (additions, deletions, updates) are needed.
    React updates only the necessary parts of the actual DOM (e.g., re-rendering specific elements instead of the whole tree).

# Optimizations in Reconciliation:

    Key Prop: React uses key props in lists to identify and track elements, improving efficiency.
    Batch Updates: React combines multiple state updates into a single update for performance.

# Relationship Between the Tree:

    # The Virtual DOM allows React to efficiently track changes.
    # Fiber ensures rendering is smooth and responsive, even for large applications.
    # Reconciliation applies those changes to the real DOM in the most efficient way.

# Example in Context

    Suppose you have a list of items, and one item's state changes:

    React updates the Virtual DOM.
    Fiber schedules the rendering work.
    Reconciliation ensures only that item's DOM node is updated.

# DOM (Document Object Model)

    The DOM (Document Object Model) is a programming interface that represents the structure of an HTML or XML document as a tree of objects. It allows developers to interact with, modify, or update the content, structure, and style of a webpage dynamically using JavaScript.

# Key Points:

    The DOM represents each HTML element (like <div>, <p>, etc.) as a node in a tree structure.
    The browser creates this DOM tree when it parses the HTML of a webpage.

    Using JavaScript, you can:
    Add, remove, or modify elements in the DOM.
    Change the attributes or styles of elements dynamically.
    Listen for and respond to user interactions (events).

# Example of a DOM Tree:

For this HTML:

    <!DOCTYPE html>
    <html>
        <body>
            <h1>Hello, World!</h1>
            <p>This is the DOM.</p>
        </body>
    </html>
The DOM tree looks like:

Document
 └── html
      └── body
           ├── h1
           │    └── "Hello, World!"
           └── p
                └── "This is the DOM."

# Actual DOM

    The Actual DOM refers to the real DOM tree created by the browser when it parses the HTML. This is the structure that the browser uses to render the webpage on the screen.

# Characteristics:

    Direct Manipulation: When you update the Actual DOM (e.g., using document.getElementById() or innerHTML), the browser recalculates the styles, layout, and renders the changes. This process is expensive for performance because:

    The entire DOM tree might need to be recalculated.
    Layout and rendering take time, especially for large, complex pages.
    Slow for Frequent Updates: Directly updating the Actual DOM repeatedly (e.g., in animations or live data updates) can lead to performance bottlenecks.


# Example in Context

    Let’s say you have a list of 1,000 items, and you want to update the text of one item:

# Using the Actual DOM directly:

    The browser has to search through the DOM tree, find the item, and re-render the whole tree.
    This can be slow and inefficient for large or frequent updates.

# Using the Virtual DOM:

    React creates a lightweight copy of the DOM (Virtual DOM).
    It compares the old Virtual DOM with the new one to find the difference (diffing).
    Only the changed item is updated in the Actual DOM, improving performance.



# React.js Kya Hai?

    React.js ek JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai.
    Isko Facebook ne develop kiya hai aur ye fast aur interactive web apps banane ke kaam aati hai.

# React ka Concept:

    Ye Component-based hota hai, matlab chhoti-chhoti parts (components) me UI divide hoti hai jo baar-baar reuse ho sakti hai.

# React.js Kyu Use Kare?

    ✔ Fast aur Efficient: React Virtual DOM ka use karta hai jo sirf wahi part update karta hai jo change hua hai.
    ✔ Reusable Components: Ek baar component banao, use baar-baar use karo = Time save hoga!
    ✔ Flexible: Dusre frameworks aur libraries ke sath bhi kaam karta hai, chahe website ho ya mobile app.

# React ke Core Concepts

# 1. Components (React ka Building Block)
    Ek component chhoti si webpage ka ek part hota hai, jaise button, header, footer, form, etc.
    Do types hote hai:
    🔹 Functional Component (Modern approach, function-based)
    🔹 Class Component (Old approach, ab kam use hota hai)

📌 Example of Functional Component:

function Greeting() {
    return <h1>Hello, World!</h1>;
}
# 2. JSX (JavaScript XML)
    React me HTML direct JavaScript ke andar likh sakte hai – isko JSX bolte hai.
    Normal JS me document.createElement() karna padta tha, par JSX simple hai.
        📌 Example:
        const element = <h1>Welcome to React!</h1>;
        3. Props (Properties)
        Props ka use data pass karne ke liye hota hai ek component se dusre component me.Function arguments jaisa kaam karta hai.
        📌 Example:
        function Welcome(props) {
            return <h1>Hello, {props.name}!</h1>;
        }

        // Component ka use
        <Welcome name="Sudhir" />;

# 4. State (Component ka Apna Data)
    State ek variable jaisa hota hai jo component ke andar change ho sakta hai.
    UseState() hook ka use hota hai State manage karne ke liye.
        📌 Example:
        import React, { useState } from 'react';

        function Counter() {
            const [count, setCount] = useState(0);

            return (
                <div>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Increase</button>
                </div>
            );
        }
# 5. Events Handling
React me button clicks, form submit, input change handle karne ke liye event handlers use hote hai.
        📌 Example:
        function ClickButton() {
            function handleClick() {
                alert("Button clicked!");
            }

            return <button onClick={handleClick}>Click Me</button>;
        }


# React ke Advanced Concepts

# React Fragments
        Multiple elements ko wrap karne ke liye extra <div> add karna zaroori nahi, Fragments (<> </>) ka use kar sakte hai.
        Performance better hoti hai.
        📌 Example:
        <>
            <h1>Title</h1>
            <p>Description</p>
        </>
# 1. Virtual DOM:
    Virtual DOM ek lightweight copy hota hai Actual DOM ka.
    React sirf wahi changes karta hai jo zaroori hote hai, pura page reload nahi hota.
    🛠 Kaise kaam karta hai?
    1️⃣ State change hone par React naya Virtual DOM banata hai
    2️⃣ Old aur New Virtual DOM compare hota hai (diffing process)
    3️⃣ Sirf wahi changes apply hote hai jo zaroori hai (Efficient Updates)

# ✔ Benefits:

    Fast rendering
    Performance boost

# 2. React Fiber (React 16 se aaya upgrade)
    React Fiber React ke core rendering system ka new version hai jo app ko aur responsive aur fast banata hai.

⚡ Fiber ke Key Goals:
        ✔ Prioritization: Jo update zaroori hai wo pehle execute hoga (e.g., animation > data update)
        ✔ Concurrency: Kaam ko chhoti-chhoti parts me tod kar fast execute karta hai
        ✔ Smooth UI Experience

# 3. Reconciliation (React ka Update Process)
    Reconciliation ka matlab hai React ka way jo decide karta hai ki kaunsa part update karna hai aur kaunsa nahi.

🛠 Kaise kaam karta hai?
    1️⃣ Virtual DOM me changes detect hota hai
    2️⃣ React sirf changed part ko update karta hai (not whole page)
    3️⃣ Performance improve hoti hai

✔ Optimizations:

    Key Prop: List items ko efficiently track karne ke liye
    Batch Updates: Multiple updates ko ek sath optimize karta hai

    📌 Example:
        Agar 1000 items ka list hai aur sirf ek item update hota hai, to React sirf wahi update karega na ki poora list.



# 1. useState Hook
    👉 Yeh state ko manage karne ke liye hota hai. Jab bhi tumhe kisi variable ka value change karna ho aur React ko batana ho ki UI update karna hai, tab useState use hota hai.

    🔹 Use-case:

        Button click pe counter badhane ke liye
        Input box me user ka data store karne ke liye
        Dark mode toggle karne ke liye
    🔹 Example:

        import React, { useState } from "react";

        function Counter() {
            const [count, setCount] = useState(0);

            return (
                <div>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Increase</button>
                </div>
            );
        }

# 2. useEffect Hook
    👉 Jab bhi component render ho ya state/props change ho, aur hume kuch side-effect perform karna ho (jaise API call ya event listener add karna), tab useEffect use hota hai.

    🔹 Use-case:

        API se data fetch karne ke liye
        Window resize ya scroll event listen karne ke liye
        Component mount/unmount hone par clean-up karne ke liye
    🔹 Example:

        import React, { useState, useEffect } from "react";

        function FetchData() {
            const [data, setData] = useState([]);

            useEffect(() => {
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then((response) => response.json())
                    .then((json) => setData(json));

                // Cleanup function (optional)
                return () => console.log("Component unmounted");
            }, []); // Empty array means run only on mount

            return (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            );
        }
# 3. useContext Hook
    👉 Prop drilling ka problem solve karta hai. Agar kisi child component ko parent ke props directly bhejne ho bina multiple layers cross kiye, tab useContext kaam aata hai.

    🔹 Use-case:

        Theme switching (dark/light mode)
        User authentication data share karne ke liye
        Language settings store karne ke liye
    🔹 Example:

        import React, { useContext, createContext } from "react";

        const ThemeContext = createContext("light");

        function ChildComponent() {
            const theme = useContext(ThemeContext);
            return <p>Current Theme: {theme}</p>;
        }

        function App() {
            return (
                <ThemeContext.Provider value="dark">
                    <ChildComponent />
                </ThemeContext.Provider>
            );
        }
# 4. useRef Hook
    👉 Yeh kisi DOM element ko reference dene ke liye use hota hai bina re-render trigger kiye.

    🔹 Use-case:

        Input field me auto-focus karna
        Previous state ya value store karna
        DOM elements ko directly manipulate karna
    🔹 Example:

        import React, { useRef, useEffect } from "react";

        function InputFocus() {
            const inputRef = useRef(null);

            useEffect(() => {
                inputRef.current.focus(); // Input box auto-focus karega
            }, []);

            return <input ref={inputRef} type="text" placeholder="Auto Focus Here" />;
        }
