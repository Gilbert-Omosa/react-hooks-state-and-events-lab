import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // Create a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode when the Dark Mode button is clicked
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
