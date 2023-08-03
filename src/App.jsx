import React from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import { thanachot } from "./assets/thanachotData";

export const thanachotDataContext = React.createContext();

function App() {
  return (
    <div className="p-0 m-0 text-gray-800">
      <thanachotDataContext.Provider value={thanachot}>
        <Header />
        <Body />
        <Footer />
      </thanachotDataContext.Provider>
    </div>
  );
}

export default App;
